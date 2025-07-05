// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MyBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       // ✅ If no token → redirect to login
//       navigate("/login");
//       return;
//     }

//     const fetchBookings = async () => {
//       try {
//         const res = await axios.get("/api/appointments/my", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setBookings(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchBookings();
//   }, [navigate]);

//   return (
//     <div>
//       <h2>My Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         bookings.map((b) => (
//           <div key={b.id}>
//             <p>Doctor: {b.doctor_name}</p>
//             <p>Hospital: {b.hospital}</p>
//             <p>Date: {b.session_date}</p>
//             <p>Time: {b.session_time}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyBookings;

// src/pages/MyBookings.jsx
// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const MyBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { token, logout } = useContext(AuthContext);

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     const fetchBookings = async () => {
//       try {
//         const res = await axios.get("/api/appointments/my", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setBookings(res.data);
//       } catch (err) {
//         console.error(err);
//         if (err.response && err.response.status === 401) {
//           logout();
//           navigate("/login");
//         } else {
//           setError("Failed to fetch bookings.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, [token, navigate, logout]);

//   if (loading) return <p>Loading bookings...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>My Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         bookings.map((b) => (
//           <div key={b.id} style={{ border: "1px solid #ccc", padding: "8px", margin: "8px 0" }}>
//             <p><strong>Doctor:</strong> {b.doctor_name}</p>
//             <p><strong>Hospital:</strong> {b.hospital}</p>
//             <p><strong>Date:</strong> {new Date(b.session_date).toLocaleDateString()}</p>
//             <p><strong>Time:</strong> {b.session_time}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyBookings;
