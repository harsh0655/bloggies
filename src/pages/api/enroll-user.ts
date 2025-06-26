import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== "POST"){
    return res.status(405).json({message: "method not allowed"});
  }

  const {userId} = req.body;

  // if not valid userid or no userid//
  if(!userId){
    return res.status(400).json({message: "missing userId"});
  }

  // console.log(`enrolled user: ${userId}`);

  return res.status(200).json({message: `user ${userId} has finally enrolled.`});
}
