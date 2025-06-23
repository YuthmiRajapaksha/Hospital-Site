// // // // src/components/BookingFormWithStripe.js

// // // import React, { useState } from "react";
// // // import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// // // import axios from "axios";

// // // const BookingFormWithStripe = () => {
// // //   const stripe = useStripe();
// // //   const elements = useElements();
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const [success, setSuccess] = useState("");

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError("");
// // //     setSuccess("");

// // //     if (!stripe || !elements) return;

// // //     try {
// // //       // Step 1: Create PaymentIntent
// // //       const res = await axios.post("http://localhost:5000/api/create-payment-intent", {
// // //         amount: 5000, // $50.00 in cents
// // //       });

// // //       const clientSecret = res.data.clientSecret;

// // //       // Step 2: Confirm the payment
// // //       const result = await stripe.confirmCardPayment(clientSecret, {
// // //         payment_method: {
// // //           card: elements.getElement(CardElement),
// // //         },
// // //       });

// // //       if (result.error) {
// // //         setError(result.error.message);
// // //       } else {
// // //         if (result.paymentIntent.status === "succeeded") {
// // //           setSuccess("Payment successful! Booking confirmed.");
// // //         }
// // //       }
// // //     } catch (err) {
// // //       setError("Payment failed. Please try again.");
// // //     }

// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <CardElement />
// // //       <button type="submit" disabled={!stripe || loading}>
// // //         {loading ? "Processing..." : "Book Appointment"}
// // //       </button>
// // //       {error && <p style={{ color: "red" }}>{error}</p>}
// // //       {success && <p style={{ color: "green" }}>{success}</p>}
// // //     </form>
// // //   );
// // // };

// // // export default BookingFormWithStripe;

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
// //       const res = await axios.post("http://localhost:3000/api/create-payment-intent", {
// //         amount: 5000,
// //       });

// //       const clientSecret = res.data.clientSecret;

// //       const result = await stripe.confirmCardPayment(clientSecret, {
// //         payment_method: {
// //           card: elements.getElement(CardElement),
// //         },
// //       });

// //       if (result.error) {
// //         setError(result.error.message);
// //       } else if (result.paymentIntent.status === "succeeded") {
// //         setSuccess("✅ Payment successful! Booking confirmed.");
// //       }
// //     } catch (err) {
// //       setError("❌ Payment failed. Try again.");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <CardElement />
// //       <button type="submit" disabled={!stripe || loading}>
// //         {loading ? "Processing..." : "Pay $50"}
// //       </button>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //       {success && <p style={{ color: "green" }}>{success}</p>}
// //     </form>
// //   );
// // };

// // export default BookingFormWithStripe;

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

// //     if (!stripe || !elements) {
// //       setError("Stripe has not loaded yet.");
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       // Create payment intent on backend
// //       const { data } = await axios.post("http://localhost:3000/api/create-payment-intent", {
// //         amount: 5000, // $50 in cents
// //       });

// //       const clientSecret = data.clientSecret;

// //       // Confirm payment on Stripe frontend
// //       const result = await stripe.confirmCardPayment(clientSecret, {
// //         payment_method: {
// //           card: elements.getElement(CardElement),
// //         },
// //       });

// //       if (result.error) {
// //         setError(result.error.message);
// //       } else if (result.paymentIntent.status === "succeeded") {
// //         setSuccess("Payment successful! Booking confirmed.");
// //       }
// //     } catch (err) {
// //       setError("Payment failed. Please try again.");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
// //       <CardElement options={{ hidePostalCode: true }} />
// //       <button type="submit" disabled={!stripe || loading} style={{ marginTop: 20 }}>
// //         {loading ? "Processing..." : "Book Appointment"}
// //       </button>
// //       {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
// //       {success && <p style={{ color: "green", marginTop: 10 }}>{success}</p>}
// //     </form>
// //   );
// // };

// // export default BookingFormWithStripe;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Typography, Box, Button, TextField, Paper } from "@mui/material";
// import Swal from "sweetalert2";
// import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";

// const ChannelPage = () => {
//   const { doctorId } = useParams();
//   const [appointment, setAppointment] = useState(null);
//   const [bookingNumber, setBookingNumber] = useState("");
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

//   useEffect(() => {
//     const fetchAppointment = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/api/appointments/doctor/${doctorId}`);
//         if (res.data.length > 0) {
//           setAppointment(res.data[0]);
//           setBookingNumber("BOOK" + Date.now());
//         }
//       } catch (err) {
//         setAppointment(null);
//       }
//     };
//     fetchAppointment();
//   }, [doctorId]);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleToken = async (token) => {
//     try {
//       await axios.post("http://localhost:3000/api/stripe/checkout", {
//         token,
//         appointmentId: appointment.id,
//         ...formData,
//         bookingNumber,
//       });

//       Swal.fire("Success!", "Appointment booked successfully", "success");
//     } catch (err) {
//       Swal.fire("Error", "Payment failed", "error");
//     }
//   };

//   if (!appointment) {
//     return (
//       <Box textAlign="center" mt={10}>
//         <Typography variant="h5" color="error">
//           No appointments available for this doctor.
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box maxWidth={600} mx="auto" mt={5}>
//       <Paper elevation={4} sx={{ p: 4 }}>
//         <Typography variant="h5" fontWeight="bold" gutterBottom>
//           Appointment Booking
//         </Typography>
//         <Typography>Doctor: Dr. {appointment.doctor_name}</Typography>
//         <Typography>Hospital: {appointment.hospital}</Typography>
//         <Typography>Date: {new Date(appointment.session_date).toLocaleDateString()}</Typography>
//         <Typography>Time: {appointment.session_time.slice(0, 5)}</Typography>
//         <Typography>Booking Number: {bookingNumber}</Typography>

//         <Box mt={3}>
//           <TextField
//             label="Your Name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//         </Box>

//         <StripeCheckout
//           stripeKey="YOUR_PUBLIC_STRIPE_KEY"
//           token={handleToken}
//           name="MediCare Appointment"
//           amount={appointment.price * 100 || 1500 * 100} // default: Rs.1500
//           currency="LKR"
//         >
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2, backgroundColor: "#2B909B" }}
//           >
//             Pay and Book
//           </Button>
//         </StripeCheckout>
//       </Paper>
//     </Box>
//   );
// };

// export default ChannelPage;
