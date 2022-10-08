import { INewArticle } from '../interfaces';
import { NewArticle } from '../models';
import { db } from '.';

export const getNewArticles = async (): Promise<INewArticle[]> => {
  await db.connect();

  const articles = await NewArticle.find()
    .select('title image text createdAt -_id')
    .lean();

  await db.disconnect();

  return JSON.parse(JSON.stringify(articles));
};
