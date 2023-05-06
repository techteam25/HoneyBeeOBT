// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json({ 
      record1: {
        name: "Example of video", 
        description: "Example description", 
        image: "/jesusWalking.jpg", 
        video: "/examplevideo1.mp4", 
        key: "story1"}, 
    })
}