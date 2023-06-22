import { NextApiRequest, NextApiResponse } from "next";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { priceId } = req.body;

  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
          },
          
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      console.error(err); // log the error to the server console
      res.status(500).json({ error: err.message }); // send the error message to the client
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default handler;
