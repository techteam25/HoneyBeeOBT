// pages/api/upload.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import { Request, Response } from 'express';

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: Request,
  res: Response<any>
) {
  upload.array('files')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (req.files && Array.isArray(req.files)) { // Add a type check for req.files
      const filePaths = req.files.map((file: Express.Multer.File) => {
        return `/uploads/${file.filename}`;
      });
      res.status(200).json({ success: true, filePaths });
    }
  });
}