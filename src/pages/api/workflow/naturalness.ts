// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    record1: {
      name: "Example of video",
      description: "This is a video",
      audio: "/assets/testAudio/test1.mp3",
      key: "story1",
    },
    record2: {
      name: "Example of video",
      description: "This is a video",
      audio: "/assets/testAudio/test2.mp3",
      key: "story2",
    },
  });
}
