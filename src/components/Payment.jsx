import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51MVSceAilZl4FGoMDgpQt1nUAR3RYMIgDyJmpn2tpnjSlt3vQcKsEzMS7Bil1IyfvcdHEEFMwBgAFA4qiQJiZIpa00ShZDsJSf";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://goated.herokuapp.com/checkout/pay",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/sucess");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <>
      {stripeToken ? (
        <span> Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="GOATED"
          image="https://www.linkpicture.com/q/Meu-projeto-1.jpg"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button>Pay Now!</button>
        </StripeCheckout>
      )}
    </>
  );
};

export default Payment;
