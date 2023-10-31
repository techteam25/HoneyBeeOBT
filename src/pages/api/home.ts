// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json({ 
      record1: {
        name: "Story Name Here", 
        description: "Example description", 
        image: "/honeybee_logo.png", 
        key: "story1", 
        progress: true, 
        completed: false
      }, record2: {
        name: "Story Name 2", 
        description: "Here is example Description 2", 
        image: "/honeybee_logo.png", 
        key: "story2", 
        progress: false, 
        completed: true
      }
    })
}