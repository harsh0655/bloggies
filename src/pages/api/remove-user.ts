import type {NextApiRequest, NextApiResponse } from "next";
import {creditsStore} from "../lib/store";

export default function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== "POST"){
    return res.status(405).json({message: " sorry! method not Allowed" });
  }

  const {userId} = req.body; // take the userid//

if(!userId){ // if not valid or no then this//
    return res.status(400).json({message: "missing userId" });
  }

  // if credits are there then deduct //
  if(creditsStore[userId] !== undefined){
    creditsStore[userId] = Math.max(0, creditsStore[userId] - 5);
  }

  // console.log(`user ${userId} opted out successfully!  total Credits after the  deduction are:- ${creditsStore[userId] || 0}`);

  return res.status(200).json(
    {
    message: `user ${userId} removed and 5 credits deducted.`,
    remainingCredits: creditsStore[userId] || 0,
  });
}
