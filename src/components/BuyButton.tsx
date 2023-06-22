import { Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, NumberInput, NumberInputField } from "@chakra-ui/react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string, {
  apiVersion: '2022-11-15',
});
const BuyButton: React.FC<{ priceId: string }> = ({ priceId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = useState(1);

  const handleBuy = async () => {
    try {
      const stripe = await stripePromise;

      const response = await axios.post('/api/create-checkout-session', { priceId, quantity });

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

  return (
    <>
      <Button onClick={onOpen}>Buy Now</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter quantity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NumberInput min={1} value={quantity} onChange={(valueString) => setQuantity(parseInt(valueString))}>
              <NumberInputField />
            </NumberInput>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleBuy}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BuyButton;
