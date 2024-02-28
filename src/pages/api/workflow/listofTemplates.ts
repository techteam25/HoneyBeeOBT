import type { NextApiRequest, NextApiResponse } from "next";
import jonah12 from "../../../../public/assets/templates/Jonah1-2/text.json"
import jonah34 from "../../../../public/assets/templates/Jonah3-4/text.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        console.log(req.body);
        if(req.body.selected === "Jonah1-2"){
            console.log("made it here");
            res.status(200).json(jonah12);
        } else if(req.body.selected === "Jonah3-4"){ 
            res.status(200).json(jonah34);
        }
    }    
}