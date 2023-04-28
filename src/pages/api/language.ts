// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json({ 
        language1: {
            title: "English", 
            name: "English", 
            description: "English Description", 
            key: "language1"}, 
        language2: {
            title: "Spanish", 
            name: "Spanish", 
            description: "Example description", 
            key: "language2"}, 
        language3: {
            title: "French", 
            name: "French", 
            description: "French Description", 
            key: "language3"}, 
        language4: {
            title:"Bahasa Indonesia", 
            name: "Bahasa Indonesia", 
            description: "Bahasa Indonesia Description", 
            key: "language4"}, 
        language5: {
            title: "Portuguese", 
            name: "Portuguese", 
            description: "Portuguese Description", 
            key: "language5"}, 
        language6: {
            title: "KiSwahili", 
            name: "KiSwahili", 
            description: "KiSwahili Description", 
            key: "language6"}, 
        language7: {
            title:"Tok Pisin", 
            name:"Tok Pisin", 
            description: "Tok Pisin Description", 
            key:"language7"}
    })
}