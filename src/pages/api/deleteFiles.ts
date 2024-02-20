// pages/api/deleteFiles.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filePaths } = req.body;
  
  try {
    filePaths.forEach((filePath: string) => {
      fs.unlinkSync(path.join(process.cwd(), 'public', filePath));
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting files:', error);
    res.status(500).json({ error: 'Failed to delete files' });
  }
}