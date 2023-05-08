// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json({ 
      record1: {
        name: "Example of video",
        description: "This is an example of a video",
        image: "https://picsum.photos/200/300",
        data: "lorem ipsumn",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        key: "story1"}, 
    })
}