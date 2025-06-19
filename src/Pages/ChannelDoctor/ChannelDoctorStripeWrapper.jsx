// src/Pages/ChannelDoctor/ChannelDoctorStripeWrapper.js

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChannelDoctor from "./ChannelDoctor";

// Replace with your real Stripe publishable key
const stripePromise = loadStripe("pk_test_YourPublicKeyHere");

const ChannelDoctorStripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <ChannelDoctor />
    </Elements>
  );
};

export default ChannelDoctorStripeWrapper;



