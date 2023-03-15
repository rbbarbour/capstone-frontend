/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import CheckoutCart from "../components/checkoutCart";

function Checkout() {
  // get app context
  const {isAuthenticated} = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;
  
  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51MeVQhC9l9f9oWqzoBmcJs0SXU7GA7yaFUvNRALXmEkaZXuX1AdGTCKyYse09cUG7GlSisyE07KHdKO7NnkbZpxR00PuyfzGvT"
  );

  return (
    <>
    <Row>
      <h1 style={{ margin: 20 }}>Checkout</h1>
    </Row>
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 4, order: 1 }}>
        <CheckoutCart isAuthenticated={isAuthenticated} />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
    </>
  );
  // }
}
export default Checkout;
