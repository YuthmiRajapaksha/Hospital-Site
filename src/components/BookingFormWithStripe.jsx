// // // src/components/BookingFormWithStripe.js

// // import React, { useState } from "react";
// // import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// // import axios from "axios";

// // const BookingFormWithStripe = () => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");
// //     setSuccess("");

// //     if (!stripe || !elements) return;

// //     try {
// //       // Step 1: Create PaymentIntent
// //       const res = await axios.post("http://localhost:5000/api/create-payment-intent", {
// //         amount: 5000, // $50.00 in cents
// //       });

// //       const clientSecret = res.data.clientSecret;

// //       // Step 2: Confirm the payment
// //       const result = await stripe.confirmCardPayment(clientSecret, {
// //         payment_method: {
// //           card: elements.getElement(CardElement),
// //         },
// //       });

// //       if (result.error) {
// //         setError(result.error.message);
// //       } else {
// //         if (result.paymentIntent.status === "succeeded") {
// //           setSuccess("Payment successful! Booking confirmed.");
// //         }
// //       }
// //     } catch (err) {
// //       setError("Payment failed. Please try again.");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <CardElement />
// //       <button type="submit" disabled={!stripe || loading}>
// //         {loading ? "Processing..." : "Book Appointment"}
// //       </button>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //       {success && <p style={{ color: "green" }}>{success}</p>}
// //     </form>
// //   );
// // };

// // export default BookingFormWithStripe;

// // src/components/BookingFormWithStripe.js
// import React, { useState } from "react";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import axios from "axios";

// const BookingFormWithStripe = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     if (!stripe || !elements) return;

//     try {
//       const res = await axios.post("http://localhost:3000/api/create-payment-intent", {
//         amount: 5000,
//       });

//       const clientSecret = res.data.clientSecret;

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (result.error) {
//         setError(result.error.message);
//       } else if (result.paymentIntent.status === "succeeded") {
//         setSuccess("✅ Payment successful! Booking confirmed.");
//       }
//     } catch (err) {
//       setError("❌ Payment failed. Try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe || loading}>
//         {loading ? "Processing..." : "Pay $50"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {success && <p style={{ color: "green" }}>{success}</p>}
//     </form>
//   );
// };

// export default BookingFormWithStripe;

// import React, { useState } from "react";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import axios from "axios";

// const BookingFormWithStripe = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     if (!stripe || !elements) {
//       setError("Stripe has not loaded yet.");
//       setLoading(false);
//       return;
//     }

//     try {
//       // Create payment intent on backend
//       const { data } = await axios.post("http://localhost:3000/api/create-payment-intent", {
//         amount: 5000, // $50 in cents
//       });

//       const clientSecret = data.clientSecret;

//       // Confirm payment on Stripe frontend
//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (result.error) {
//         setError(result.error.message);
//       } else if (result.paymentIntent.status === "succeeded") {
//         setSuccess("Payment successful! Booking confirmed.");
//       }
//     } catch (err) {
//       setError("Payment failed. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
//       <CardElement options={{ hidePostalCode: true }} />
//       <button type="submit" disabled={!stripe || loading} style={{ marginTop: 20 }}>
//         {loading ? "Processing..." : "Book Appointment"}
//       </button>
//       {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
//       {success && <p style={{ color: "green", marginTop: 10 }}>{success}</p>}
//     </form>
//   );
// };

// export default BookingFormWithStripe;
