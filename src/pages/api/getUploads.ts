import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const folderPath = path.join(process.cwd(), 'public', 'uploads');
    const files = await fs.promises.readdir(folderPath);
    res.status(200).json(files);
  } catch (error) {
    console.error('Error reading folder:', error);
    res.status(500).json({ error: 'Failed to fetch folder contents' });
  }
}