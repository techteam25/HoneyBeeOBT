// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json({ 
        record1: {
            name: "Learn", 
            description: "Example description 1", 
            link: "/workflow/learn", 
            key: "workflow1"}, 
        record2: {
            name: "Translate and Revise", 
            description: "Example description 2",  
            link: "/workflow/translate", 
            key: "workflow2"}, 
        record3: {
            name: "Naturalness Checks", 
            description: "Example description 3",  
            link: "/workflow/naturalness", 
            key: "worklow3"},
        record4: {
            name: "Accuracy Check",
            description: "Example description 4",
            link: "/workflow/accuracy",
            key: "workflow4"},
        record5: {
            name: "Voice Studio",
            description: "Example description 5",
            link: "/workflow/voice",
            key: "workflow5"},
        record6: {
            name: "Finalize",
            description: "Example description 6",
            link: "/workflow/finalize",
            key: "workflow6"},
        record7:{
            name: "Review",
            description: "Example description 7",
            link: "/workflow/review",
            key: "workflow7"},
    })
}