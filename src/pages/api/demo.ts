// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json({ record1: {name: "Jesus Walking", description: "Example description", image: "/jesusWalking.jpg", link: "https://techteam.org/tech-team-advantage-solutions/software-solutions/", key: "story1"}, record2: {name: "Discovering Empty Tomb", description: "Here is example Description 2", image: "/emptyTomb.jpg", link: "https://techteam.org/tech-team-advantage-solutions/software-solutions/", key: "story2"}, record3: {name: "Empty Tomb", description: "Here is more info", image: "/tomb2.jpg", link: "https://techteam.org/tech-team-advantage-solutions/software-solutions/", key: "story3"}})
}