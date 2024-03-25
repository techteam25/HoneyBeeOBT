// pages/api/convert.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

try {
    const form = formidable({uploadDir: '/assets/uploads', keepExtensions: true});
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ success: false, error: 'Error uploading file' });
        }

        const imagePath = "/assets/uploads/bananaz.jpg"; // Add nullish coalescing operator to handle undefined
        const duration = parseInt(Array.isArray(fields.duration) ? fields.duration[0] : fields.duration || '0'); // Fix the problem by checking if fields.duration is an array and accessing the first element if it exists, or providing a default value if it is undefined

        // Perform conversion or other operations here...

        res.status(200).json({ success: true, imagePath, duration });
    });
} catch (error: any) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
}
}