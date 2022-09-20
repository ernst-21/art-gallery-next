import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { User } from '../../../models';
import bcrypt from 'bcryptjs';
import { validations } from '../../../utils';
import { getToken } from 'next-auth/jwt';
import isEmpty from 'lodash/isEmpty';

type Data =
  | {
      message: string;
    }
  | {
      user: { name: string; email: string };
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return editUser(req, res);
    default:
      res.status(400).json({ message: 'Bad Request' });
  }
}

const editUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    email = '',
    password = '',
    name = '',
  } = req.body as {
    email: string;
    password: string;
    name: string;
  };

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isMatch = req.headers.referer?.indexOf('/auth/profile') !== -1;

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid request url' });
  }

  if (!token || !token.user || isEmpty(token.user)) {
    return res.status(400).json({
      message: 'You need to login to update profile',
    });
  }
  //@ts-ignore
  const emailFromSession = token.user.email;

  if (password && password.length < 6) {
    return res
      .status(400)
      .json({ message: 'Password must have at least 6 characters' });
  }

  if (name && name.length < 2) {
    return res
      .status(400)
      .json({ message: 'Name must have at least 2 characters' });
  }

  if (!validations.isValidEmail(email)) {
    return res.status(400).json({ message: 'Email is not valid' });
  }

  await db.connect();
  const user = await User.findOne({ email: emailFromSession });

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  try {
    user.name = name || user.name;
    user.email = email || user.email;
    user.updatedAt = Date.now().toString();
    user.password =
      password.length > 0 ? bcrypt.hashSync(password) : user.password;
    await user.save({ validateBeforeSave: true });
    await db.disconnect();
    return res.status(200).json({
      user: {
        email,
        name,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Check server logs' });
  }
};
