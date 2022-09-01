import type { NextApiRequest, NextApiResponse } from 'next';
import { IArtwork } from '../../../interfaces';

type Data = { message: string } | IArtwork[];

export default async function getArtworksByFilter(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return res.status(200).json({ message: 'Served from SSR' });
    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}
