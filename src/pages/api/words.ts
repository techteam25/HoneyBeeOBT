// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json({ 
        word1: {
            title: "aaron", 
            name: "Aaron", 
            description: "Aaron Description", 
            key: "word1"}, 
        word2: {
            title: "abel", 
            name: "Abel",
            description: "Abel Description",
            key: "word2"},
        word3: {
            title: "adam",
            name: "Adam",
            description: "Adam Description",
            key: "word3"},
        word4: {
            title: "abimelech",
            name: "Abimelech",
            description: "Abimelech Description",
            key: "word4"},
        word5: {
            title: "abraham",
            name: "Abraham",
            description: "Abraham Description",
            key: "word5"}
        })
}