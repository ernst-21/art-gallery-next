import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedDatabase } from '../../database';
import { Artist, Artwork, User, Testimonial } from '../../models';

type Data = {
	message: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (process.env.NODE_ENV === 'production') {
		return res.status(401).json({ message: 'Access to this API is restricted' });
	}

	await db.connect();
	await User.deleteMany();
	await User.insertMany(seedDatabase.initialData.users);

	await Artwork.deleteMany();
	await Artwork.insertMany(seedDatabase.initialData.artworks);

	await Artist.deleteMany();
	await Artist.insertMany(seedDatabase.initialData.artists);

	await Testimonial.deleteMany();
	await Testimonial.insertMany(seedDatabase.initialData.testimonials);

	await db.disconnect();

	res.status(200).json({ message: 'Successful process' });
}
