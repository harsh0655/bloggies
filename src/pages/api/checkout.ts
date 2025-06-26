import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== "POST") return res.status(405).end("Method Not Allowed");

  try{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 700, // $7
            product_data: {
              name: "Pro Meme Pack",
              description: "Unlocks premium meme generation features",
            },
          },
          quantity: 1,
        },
      ],
      success_url:`${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({id: session.id});
  } 
  catch {
    res.status(500).json({ error: "Stripe checkout/payment failed" });
  }  
}
