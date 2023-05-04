// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import { ipRateLimit } from '@/components/middleware/ipRateLimit';

export default async function handler(
  req: NextApiRequest & Request,
  res: NextApiResponse,
) {
  const jsonDirectory = path.join(process.cwd(), 'public/assets/demo/project');
  const fileContents = await fs.readFile(jsonDirectory + '/story.json', "utf-8");
  /* Commented out for rate limiter
  const res = await ipRateLimit(req)
  if (res.status !== 200) return res
    res.headers.set('content-type', 'application/json')
    return new Response(JSON.parse((fileContents)))
  */  
  res.status(200).json(JSON.parse(fileContents))
}