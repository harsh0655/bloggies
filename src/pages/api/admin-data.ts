import type{NextApiRequest} from "next";
import type{NextApiResponse} from "next";


let mockUserData: Record<string,{credits: number; raffleEntries: number}> 
= {
  user123:{credits: 3, raffleEntries:2 },
  test456:{credits: 5, raffleEntries:1 },
};

export default function handler(req: NextApiRequest, res: NextApiResponse){
  const users = Object.entries(mockUserData).map(([userId, data]) =>(
    {
userId,
    credits: data.credits,
    raffleEntries: data.raffleEntries,
  }
));

  res.status(200).json({users});
}



// //for storing real data => credits and raffleEntries //
// import type { NextApiRequest, NextApiResponse } from "next";
// import { creditsStore, raffleStore } from "../lib/store";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const userIds = new Set([
//     ...Object.keys(creditsStore),
//     ...Object.keys(raffleStore),
//   ]);

//   const users = Array.from(userIds).map((userId) => ({
//     userId,
//     credits: creditsStore[userId] || 0,
//     raffleEntries: raffleStore[userId] || 0,
//   }));

//   res.status(200).json({ users });
// }
