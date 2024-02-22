// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import exegeticalHelps from '../../../public/exegeticalHelps.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    var temp = []
    for (let i = 0; i < exegeticalHelps.length; i++) {
        if (req.query.passage?.includes(exegeticalHelps[i].term)){
            temp.push(exegeticalHelps[i])
        
        }
    }
    res.status(200).json(temp)
}