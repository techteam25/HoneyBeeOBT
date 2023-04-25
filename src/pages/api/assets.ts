// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const jsonDirectory = path.join(process.cwd(), 'public/assets/demo/project');
    const fileContents = await fs.readFile(jsonDirectory + '/story.json', "utf-8");
    res.status(200).json(JSON.parse(fileContents))
}