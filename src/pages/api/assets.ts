// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import rateLimit from 'express-rate-limit'
import slowDown from 'express-slow-down'

const getIP = (request: any) =>
  request.ip ||
  request.headers['x-forwarded-for'] ||
  request.headers['x-real-ip'] ||
  request.connection.remoteAddress

const limit = 10
const windowMs = 60 * 1_000
const delayAfter = Math.round(limit / 2)
const applyMiddleware = (middleware: any) => (request: any, response: any) =>
  new Promise((resolve, reject) => {
    middleware(request, response, (result: unknown) =>
      result instanceof Error ? reject(result) : resolve(result)
    )
  })
const delayMs = 500

export const getRateLimitMiddlewares = ({
  limit = 10,
  windowMs = 60 * 1000,
  delayAfter = Math.round(10 / 2),
  delayMs = 500,
} = {}) => [
  slowDown({ keyGenerator: getIP, windowMs, delayAfter, delayMs }),
  rateLimit({ keyGenerator: getIP, windowMs, max: limit }),
]

const middlewares = getRateLimitMiddlewares({ limit: 50 }).map(applyMiddleware)

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): any; new(): any; }; json: { (arg0: any): void; new(): any; }; }; }) {
  try {
    await Promise.all(
      middlewares.map(middleware => middleware(req, res))
    )
  } catch {
    return res.status(429).send('Too Many Requests')
  }
  const jsonDirectory = path.join(process.cwd(), 'public/assets/demo/project');
  const fileContents = await fs.readFile(jsonDirectory + '/story.json', "utf-8");
  res.status(200).json(JSON.parse(fileContents))
}
