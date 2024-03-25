// pages/api/upload.ts

import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

const upload = multer({ dest: './public/uploads/' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: Request,
  res: Response
) {
  upload.array('files')(req, res, (err: any) => { 
    if (err) {
      res.status(500).json({ error: 'Error uploading files' });
      return;
    }

    try {
      const folderName = uuidv4();
      const uploadDir = `./public/uploads/${folderName}`;

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      for (const file of req.files as Express.Multer.File[]) {
        const tempPath = file.path;
        const fileName = file.originalname;
        fs.renameSync(tempPath, `${uploadDir}/${fileName}`);
      }

      res.status(200).json({ success: true, folderName });
    } catch (error) {
      res.status(500).json({ error: 'Error uploading files' });
    }
  });
}