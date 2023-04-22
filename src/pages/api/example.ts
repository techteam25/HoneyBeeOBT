// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json({ record1: {name: "Story Name Here", description: "Example description", image: "/logo192.png", key: "story1"}, record2: {name: "Story Name 2", description: "Here is example Description 2", image: "/logo192.png", key: "story2"}, record3: {name: "Jesus Rising", description: "Here is more info", image: "/tomb2.jpg", key: "story3"}})
}