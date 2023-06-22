import { Button } from "@chakra-ui/react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string, {
    apiVersion: '2022-11-15',
  });

const BuyButton: React.FC<{ priceId: string }> = ({ priceId }) => {
  const handleBuy = async () => {
    try {
      const stripe = await stripePromise;

      const response = await axios.post('/api/create-checkout-session', { priceId });

      const result = await stripe?.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (result?.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return <Button onClick={handleBuy}>Buy Now</Button>;
};

export default BuyButton;
