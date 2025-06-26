import type { NextApiRequest, NextApiResponse } from "next";
import { creditsStore } from "../../lib/store";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== "POST"){
    return res.status(405).json({ message: "not allowed"});
  }

  const {userId,credits} = req.body;

  if(!userId || credits === undefined){
    return res.status(400).json({message: "Missing userId or credits"});
  }

  creditsStore[userId] = (creditsStore[userId]|| 0) + credits;

  // console.log(`award of ${credits} credits to ${userId}`);

  return res.status(200).json(
    {
    message: `award of ${credits} credits to ${userId}`,
    currentCredits: creditsStore[userId],
  }
);
}
