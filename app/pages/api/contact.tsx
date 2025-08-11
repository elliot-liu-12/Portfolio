import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "POST" || req.body == null)
    {
        res.status(400).json({message: "Invalid request type"});
    }
    else
    {
        


        res.status(200).json({message: "Contact form successfully sent!"})
    }
}