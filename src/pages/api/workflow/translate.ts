// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    section1: {
      name: "Matthew 3:1-3a",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      data: "lorem ipsum",
      passage:
        "In those days John the Baptist came, preaching in the wilderness of Judea 2 and saying, “Repent, for the kingdom of heaven has come near.” 3 This is he who was spoken of through the prophet Isaiah:",
      key: "story1",
    },
    section2: {
      name: "Matthew 3:3b-5",
      video: "https://www.youtube.com/watch?v=0rIvB3LZiKA",
      data: "lorem ipsum",
      passage: `“A voice of one calling in the wilderness, ‘Prepare the way for the Lord, make straight paths for him.’” John’s clothes were made of camel’s hair, and he had a leather belt around his waist. His food was locusts and wild honey. 5 People went out to him from Jerusalem and all Judea and the whole region of the Jordan.`,
      key: "story2",
    },
  });
}
