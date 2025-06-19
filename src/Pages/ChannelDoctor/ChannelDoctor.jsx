

// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import {
// // // //   Box,
// // // //   Typography,
// // // //   Button,
// // // //   Grid,
// // // //   Card,
// // // //   CardContent,
// // // //   Dialog,
// // // //   DialogTitle,
// // // //   DialogContent,
// // // //   DialogActions,
// // // //   TextField,
// // // // } from "@mui/material";

// // // // const DoctorChannel = () => {
// // // //   const { id } = useParams();
// // // //   const [doctor, setDoctor] = useState(null);

// // // //   // Booking dialog state and form data
// // // //   const [bookingSession, setBookingSession] = useState(null);
// // // //   const [patientName, setPatientName] = useState("");
// // // //   const [patientContact, setPatientContact] = useState("");
// // // //   const [bookingSuccess, setBookingSuccess] = useState(false);

// // // //   useEffect(() => {
// // // //     fetch(`http://localhost:3000/api/doctors/${id}`)
// // // //       .then((res) => res.json())
// // // //       .then((data) => setDoctor(data.doctor))
// // // //       .catch((err) => console.error("Error fetching doctor:", err));
// // // //   }, [id]);

// // // //   const availableSessions = [
// // // //     "2025-06-20T16:30:00",
// // // //     "2025-06-24T16:30:00",
// // // //     "2025-06-27T16:30:00",
// // // //     "2025-07-01T16:30:00",
// // // //   ];

// // // //   const handleBookingSubmit = () => {
// // // //     // TODO: Replace this with your backend booking API call
// // // //     console.log("Booking session:", bookingSession);
// // // //     console.log("Patient Name:", patientName);
// // // //     console.log("Patient Contact:", patientContact);

// // // //     // Simulate successful booking
// // // //     setBookingSuccess(true);
// // // //   };

// // // //   if (!doctor) return <div>Loading...</div>;

// // // //   return (
// // // //     <Box p={3}>
// // // //       <Card sx={{ display: "flex", p: 2 }}>
// // // //         <Box sx={{ width: 120, mr: 2 }}>
// // // //           <img
// // // //             src={`http://localhost:3000/${doctor.photo}`}
// // // //             alt="Doctor"
// // // //             style={{ width: "100%", borderRadius: "8px" }}
// // // //           />
// // // //         </Box>
// // // //         <Box mt={4}>
// // // //           <Typography variant="h5" color="error">
// // // //             Dr. {doctor.name}
// // // //           </Typography>

// // // //           <Typography fontWeight="medium" mb={1}>
// // // //             {doctor.specialization}
// // // //           </Typography>

// // // //           {doctor.notes && (
// // // //             <>
// // // //               <Typography>Special Notes:</Typography>
// // // //               <Typography sx={{ ml: 2 }} color="text.secondary" whiteSpace="pre-line">
// // // //                 {doctor.notes}
// // // //               </Typography>
// // // //             </>
// // // //           )}
// // // //         </Box>
// // // //       </Card>

// // // //       <Typography variant="h6" mt={4}>
// // // //         🏥 Blue Cross Hospital - Rajagiriya Sessions
// // // //       </Typography>

// // // //       <Typography fontWeight="bold" mt={2}>
// // // //         SPORTS MEDICINE - ACUPUNCTURE ({availableSessions.length} SESSIONS)
// // // //       </Typography>

// // // //       <Grid container spacing={2} mt={1}>
// // // //         {availableSessions.map((session, index) => {
// // // //           const dateObj = new Date(session);
// // // //           return (
// // // //             <Grid item xs={12} md={6} key={index}>
// // // //               <Card>
// // // //                 <CardContent>
// // // //                   <Typography variant="h6">
// // // //                     {dateObj.toDateString()} — {dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// // // //                   </Typography>
// // // //                   <Typography color="text.secondary">Active Appointments: 00</Typography>
// // // //                   <Button
// // // //                     variant="contained"
// // // //                     color="error"
// // // //                     sx={{ mt: 1 }}
// // // //                     onClick={() => {
// // // //                       setBookingSession(session);
// // // //                       setBookingSuccess(false);
// // // //                       setPatientName("");
// // // //                       setPatientContact("");
// // // //                     }}
// // // //                   >
// // // //                     Book
// // // //                   </Button>
// // // //                   <Typography color="green" sx={{ mt: 1 }}>
// // // //                     AVAILABLE
// // // //                   </Typography>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </Grid>
// // // //           );
// // // //         })}
// // // //       </Grid>

// // // //       {/* Booking Dialog */}
// // // //       <Dialog
// // // //         open={!!bookingSession}
// // // //         onClose={() => {
// // // //           setBookingSession(null);
// // // //           setBookingSuccess(false);
// // // //         }}
// // // //       >
// // // //         <DialogTitle>Book Appointment</DialogTitle>
// // // //         <DialogContent>
// // // //           {bookingSuccess ? (
// // // //             <Typography color="green" sx={{ mt: 2 }}>
// // // //               Booking successful! Thank you.
// // // //             </Typography>
// // // //           ) : (
// // // //             <>
// // // //               <Typography mb={2}>
// // // //                 Booking for session on{" "}
// // // //                 <strong>
// // // //                   {bookingSession && new Date(bookingSession).toDateString()} at{" "}
// // // //                   {bookingSession && new Date(bookingSession).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
// // // //                 </strong>
// // // //               </Typography>

// // // //               <TextField
// // // //                 label="Patient Name"
// // // //                 fullWidth
// // // //                 margin="normal"
// // // //                 value={patientName}
// // // //                 onChange={(e) => setPatientName(e.target.value)}
// // // //               />
// // // //               <TextField
// // // //                 label="Contact Number"
// // // //                 fullWidth
// // // //                 margin="normal"
// // // //                 value={patientContact}
// // // //                 onChange={(e) => setPatientContact(e.target.value)}
// // // //               />
// // // //             </>
// // // //           )}
// // // //         </DialogContent>
// // // //         <DialogActions>
// // // //           {!bookingSuccess && (
// // // //             <Button
// // // //               variant="contained"
// // // //               color="error"
// // // //               onClick={handleBookingSubmit}
// // // //               disabled={!patientName || !patientContact}
// // // //             >
// // // //               Confirm Booking
// // // //             </Button>
// // // //           )}
// // // //           <Button
// // // //             onClick={() => {
// // // //               setBookingSession(null);
// // // //               setBookingSuccess(false);
// // // //             }}
// // // //           >
// // // //             {bookingSuccess ? "Close" : "Cancel"}
// // // //           </Button>
// // // //         </DialogActions>
// // // //       </Dialog>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default DoctorChannel;

// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import {
// // // //   Box,
// // // //   Typography,
// // // //   Button,
// // // //   Grid,
// // // //   Card,
// // // //   CardContent,
// // // //   Dialog,
// // // //   DialogTitle,
// // // //   DialogContent,
// // // //   DialogActions,
// // // //   TextField,
// // // //   MenuItem,
// // // // } from "@mui/material";

// // // // const countries = [
// // // //   "Sri Lanka",
// // // //   "India",
// // // //   "United States",
// // // //   "United Kingdom",
// // // //   "Canada",
// // // //   "Australia",
// // // // ];

// // // // const DoctorChannel = () => {
// // // //   const { id } = useParams();
// // // //   const [doctor, setDoctor] = useState(null);
// // // //   const [appointmentsCount, setAppointmentsCount] = useState({});
// // // //   const [bookingSession, setBookingSession] = useState(null);
// // // //   const [formData, setFormData] = useState({
// // // //     phone: "",
// // // //     country: "",
// // // //     nic: "",
// // // //     email: "",
// // // //   });
// // // //   const [formErrors, setFormErrors] = useState({});
// // // //   const [step, setStep] = useState(1);
// // // //   const [charge] = useState(2500);

// // // //   const availableSessions = [
// // // //     "2025-06-20T16:30:00",
// // // //     "2025-06-24T16:30:00",
// // // //     "2025-06-27T16:30:00",
// // // //     "2025-07-01T16:30:00",
// // // //   ];

// // // //   useEffect(() => {
// // // //     fetch(`http://localhost:3000/api/doctors/${id}`)
// // // //       .then((res) => res.json())
// // // //       .then((data) => setDoctor(data.doctor))
// // // //       .catch((err) => console.error("Error fetching doctor:", err));
// // // //   }, [id]);

// // // //   const validate = () => {
// // // //     const errors = {};
// // // //     if (!formData.phone.trim()) errors.phone = "Phone number is required";
// // // //     else if (!/^\+?[0-9]{7,15}$/.test(formData.phone.trim()))
// // // //       errors.phone = "Invalid phone number";

// // // //     if (!formData.country) errors.country = "Country is required";

// // // //     if (!formData.nic.trim()) errors.nic = "NIC is required";

// // // //     if (!formData.email.trim()) errors.email = "Email is required";
// // // //     else if (
// // // //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
// // // //     )
// // // //       errors.email = "Invalid email address";

// // // //     setFormErrors(errors);
// // // //     return Object.keys(errors).length === 0;
// // // //   };

// // // //   const handleBookingSubmit = () => {
// // // //     if (!validate()) return;
// // // //     setStep(2);
// // // //   };

// // // //   const handleInputChange = (field, value) => {
// // // //     setFormData((prev) => ({ ...prev, [field]: value }));
// // // //     setFormErrors((prev) => ({ ...prev, [field]: undefined }));
// // // //   };

// // // //   const handleConfirmBooking = () => {
// // // //     // Simulate backend save and update appointment count
// // // //     setAppointmentsCount((prev) => ({
// // // //       ...prev,
// // // //       [bookingSession]: (prev[bookingSession] || 0) + 1,
// // // //     }));
// // // //     alert("Booking confirmed! Thank you.");
// // // //     setBookingSession(null);
// // // //     setStep(1);
// // // //   };

// // // //   if (!doctor) return <div>Loading...</div>;

// // // //   return (
// // // //     <Box p={3}>
// // // //       <Card sx={{ display: "flex", p: 2 }}>
// // // //         <Box sx={{ width: 120, mr: 2 }}>
// // // //           <img
// // // //             src={`http://localhost:3000/${doctor.photo}`}
// // // //             alt="Doctor"
// // // //             style={{ width: "100%", borderRadius: "8px" }}
// // // //           />
// // // //         </Box>
// // // //         <Box mt={4}>
// // // //           <Typography variant="h5" color="error">
// // // //             Dr. {doctor.name}
// // // //           </Typography>
// // // //           <Typography fontWeight="medium" mb={1}>
// // // //             {doctor.specialization}
// // // //           </Typography>
// // // //           {doctor.notes && (
// // // //             <>
// // // //               <Typography>Special Notes:</Typography>
// // // //               <Typography
// // // //                 sx={{ ml: 2 }}
// // // //                 color="text.secondary"
// // // //                 whiteSpace="pre-line"
// // // //               >
// // // //                 {doctor.notes}
// // // //               </Typography>
// // // //             </>
// // // //           )}
// // // //         </Box>
// // // //       </Card>

// // // //       <Typography variant="h6" mt={4}>
// // // //         🏥 Blue Cross Hospital - Rajagiriya Sessions
// // // //       </Typography>

// // // //       <Typography fontWeight="bold" mt={2}>
// // // //         SPORTS MEDICINE - ACUPUNCTURE ({availableSessions.length} SESSIONS)
// // // //       </Typography>

// // // //       <Grid container spacing={2} mt={1}>
// // // //         {availableSessions.map((session, index) => {
// // // //           const dateObj = new Date(session);
// // // //           return (
// // // //             <Grid item xs={12} md={6} key={index}>
// // // //               <Card>
// // // //                 <CardContent>
// // // //                   <Typography variant="h6">
// // // //                     {dateObj.toDateString()} —{" "}
// // // //                     {dateObj.toLocaleTimeString([], {
// // // //                       hour: "2-digit",
// // // //                       minute: "2-digit",
// // // //                     })}
// // // //                   </Typography>
// // // //                   <Typography color="text.secondary">
// // // //                     Active Appointments: {appointmentsCount[session] || 0}
// // // //                   </Typography>
// // // //                   <Button
// // // //                     variant="contained"
// // // //                     color="error"
// // // //                     sx={{ mt: 1 }}
// // // //                     onClick={() => {
// // // //                       setBookingSession(session);
// // // //                       setStep(1);
// // // //                       setFormData({
// // // //                         phone: "",
// // // //                         country: "",
// // // //                         nic: "",
// // // //                         email: "",
// // // //                       });
// // // //                       setFormErrors({});
// // // //                     }}
// // // //                   >
// // // //                     Book
// // // //                   </Button>
// // // //                   <Typography color="green" sx={{ mt: 1 }}>
// // // //                     AVAILABLE
// // // //                   </Typography>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </Grid>
// // // //           );
// // // //         })}
// // // //       </Grid>

// // // //       {/* Booking Dialog */}
// // // //       <Dialog
// // // //         open={!!bookingSession}
// // // //         onClose={() => {
// // // //           setBookingSession(null);
// // // //           setStep(1);
// // // //           setFormErrors({});
// // // //         }}
// // // //         maxWidth="xs"
// // // //         fullWidth
// // // //       >
// // // //         <DialogTitle>Book Appointment</DialogTitle>
// // // //         <DialogContent>
// // // //           {step === 1 && (
// // // //             <>
// // // //               <Typography mb={2}>
// // // //                 Booking for session on{" "}
// // // //                 <strong>
// // // //                   {bookingSession &&
// // // //                     new Date(bookingSession).toDateString()}{" "}
// // // //                   at{" "}
// // // //                   {bookingSession &&
// // // //                     new Date(bookingSession).toLocaleTimeString([], {
// // // //                       hour: "2-digit",
// // // //                       minute: "2-digit",
// // // //                     })}
// // // //                 </strong>
// // // //               </Typography>

// // // //               <TextField
// // // //                 label="Phone Number"
// // // //                 fullWidth
// // // //                 margin="normal"
// // // //                 value={formData.phone}
// // // //                 onChange={(e) => handleInputChange("phone", e.target.value)}
// // // //                 error={!!formErrors.phone}
// // // //                 helperText={formErrors.phone}
// // // //               />

// // // //               <TextField
// // // //                 select
// // // //                 label="Country"
// // // //                 fullWidth
// // // //                 margin="normal"
// // // //                 value={formData.country}
// // // //                 onChange={(e) => handleInputChange("country", e.target.value)}
// // // //                 error={!!formErrors.country}
// // // //                 helperText={formErrors.country}
// // // //               >
// // // //                 {countries.map((c) => (
// // // //                   <MenuItem key={c} value={c}>
// // // //                     {c}
// // // //                   </MenuItem>
// // // //                 ))}
// // // //               </TextField>

// // // //               <TextField
// // // //                 label="NIC"
// // // //                 fullWidth
// // // //                 margin="normal"
// // // //                 value={formData.nic}
// // // //                 onChange={(e) => handleInputChange("nic", e.target.value)}
// // // //                 error={!!formErrors.nic}
// // // //                 helperText={formErrors.nic}
// // // //               />

// // // //               <TextField
// // // //                 label="Email"
// // // //                 fullWidth
// // // //                 margin="normal"
// // // //                 value={formData.email}
// // // //                 onChange={(e) => handleInputChange("email", e.target.value)}
// // // //                 error={!!formErrors.email}
// // // //                 helperText={formErrors.email}
// // // //               />
// // // //             </>
// // // //           )}

// // // //           {step === 2 && (
// // // //             <>
// // // //               <Typography variant="h6" gutterBottom>
// // // //                 Confirm your booking details
// // // //               </Typography>
// // // //               <Typography>
// // // //                 <strong>Session:</strong>{" "}
// // // //                 {bookingSession &&
// // // //                   new Date(bookingSession).toDateString() +
// // // //                     " " +
// // // //                     new Date(bookingSession).toLocaleTimeString([], {
// // // //                       hour: "2-digit",
// // // //                       minute: "2-digit",
// // // //                     })}
// // // //               </Typography>
// // // //               <Typography>
// // // //                 <strong>Phone:</strong> {formData.phone}
// // // //               </Typography>
// // // //               <Typography>
// // // //                 <strong>Country:</strong> {formData.country}
// // // //               </Typography>
// // // //               <Typography>
// // // //                 <strong>NIC:</strong> {formData.nic}
// // // //               </Typography>
// // // //               <Typography>
// // // //                 <strong>Email:</strong> {formData.email}
// // // //               </Typography>
// // // //               <Typography mt={2} fontWeight="bold">
// // // //                 Charge: LKR {charge.toLocaleString()}
// // // //               </Typography>
// // // //             </>
// // // //           )}
// // // //         </DialogContent>
// // // //         <DialogActions>
// // // //           {step === 1 && (
// // // //             <>
// // // //               <Button
// // // //                 variant="contained"
// // // //                 color="error"
// // // //                 onClick={handleBookingSubmit}
// // // //               >
// // // //                 Next
// // // //               </Button>
// // // //               <Button
// // // //                 onClick={() => {
// // // //                   setBookingSession(null);
// // // //                   setFormErrors({});
// // // //                 }}
// // // //               >
// // // //                 Cancel
// // // //               </Button>
// // // //             </>
// // // //           )}

// // // //           {step === 2 && (
// // // //             <>
// // // //               <Button variant="contained" color="error" onClick={handleConfirmBooking}>
// // // //                 Confirm Booking
// // // //               </Button>
// // // //               <Button onClick={() => setStep(1)}>Edit</Button>
// // // //             </>
// // // //           )}
// // // //         </DialogActions>
// // // //       </Dialog>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default DoctorChannel;



// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";
// // // import {
// // //   Box,
// // //   Typography,
// // //   Button,
// // //   Grid,
// // //   Card,
// // //   CardContent,
// // //   Dialog,
// // //   DialogTitle,
// // //   DialogContent,
// // //   DialogActions,
// // //   TextField,
// // //   MenuItem,
// // // } from "@mui/material";

// // // const countries = [
// // //   "Sri Lanka",
// // //   "India",
// // //   "United States",
// // //   "United Kingdom",
// // //   "Canada",
// // //   "Australia",
// // // ];

// // // const DoctorChannel = () => {
// // //   const { id } = useParams();
// // //   const [doctor, setDoctor] = useState(null);
// // //   const [appointmentsCount, setAppointmentsCount] = useState({});
// // //   const [bookingSession, setBookingSession] = useState(null);
// // //   const [formData, setFormData] = useState({
// // //     phone: "",
// // //     country: "",
// // //     nic: "",
// // //     email: "",
// // //     patientName: "",
// // //   });
// // //   const [formErrors, setFormErrors] = useState({});
// // //   const [step, setStep] = useState(1);
// // //   const [charge] = useState(2500);

// // //   const availableSessions = [
// // //     "2025-06-20T16:30:00",
// // //     "2025-06-24T16:30:00",
// // //     "2025-06-27T16:30:00",
// // //     "2025-07-01T16:30:00",
// // //   ];

// // //   useEffect(() => {
// // //     fetch(`http://localhost:3000/api/doctors/${id}`)
// // //       .then((res) => res.json())
// // //       .then((data) => setDoctor(data.doctor))
// // //       .catch((err) => console.error("Error fetching doctor:", err));
// // //   }, [id]);

// // //   const validate = () => {
// // //     const errors = {};
// // //     if (!formData.patientName.trim()) errors.patientName = "Patient name is required";

// // //     if (!formData.phone.trim()) errors.phone = "Phone number is required";
// // //     else if (!/^\+?[0-9]{7,15}$/.test(formData.phone.trim()))
// // //       errors.phone = "Invalid phone number";

// // //     if (!formData.country) errors.country = "Country is required";

// // //     if (!formData.nic.trim()) errors.nic = "NIC is required";

// // //     if (!formData.email.trim()) errors.email = "Email is required";
// // //     else if (
// // //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
// // //     )
// // //       errors.email = "Invalid email address";

// // //     setFormErrors(errors);
// // //     return Object.keys(errors).length === 0;
// // //   };

// // //   const handleBookingSubmit = () => {
// // //     if (!validate()) return;
// // //     setStep(2);
// // //   };

// // //   const handleInputChange = (field, value) => {
// // //     setFormData((prev) => ({ ...prev, [field]: value }));
// // //     setFormErrors((prev) => ({ ...prev, [field]: undefined }));
// // //   };

// // //   const handleConfirmBooking = () => {
// // //     if (!bookingSession) return;

// // //     const payload = {
// // //       doctorId: doctor.id,
// // //       session: bookingSession,
// // //       patientName: formData.patientName,
// // //       phone: formData.phone,
// // //       country: formData.country,
// // //       nic: formData.nic,
// // //       email: formData.email,
// // //     };
// // //      console.log("Booking payload:", payload);

// // //     fetch("http://localhost:3000/api/appointments", {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //       body: JSON.stringify(payload),
// // //     })
// // //      .then(async (res) => {
// // //       const text = await res.text();
// // //       console.log("Response status:", res.status);
// // //       console.log("Response body:", text);

// // //       if (!res.ok) throw new Error(text || "Failed to book appointment");

// // //       return JSON.parse(text);
// // //     })
// // //     .then(() => {
// // //       alert("Booking confirmed! Thank you.");
// // //       setAppointmentsCount((prev) => ({
// // //         ...prev,
// // //         [bookingSession]: (prev[bookingSession] || 0) + 1,
// // //       }));
// // //       setBookingSession(null);
// // //       setStep(1);
// // //       setFormData({
// // //         phone: "",
// // //         country: "",
// // //         nic: "",
// // //         email: "",
// // //         patientName: "",
// // //       });
// // //     })
// // //     .catch((err) => {
// // //       alert("Error booking appointment: " + err.message);
// // //       console.error("Booking error:", err);
// // //     });
// // // };

// // //   if (!doctor) return <div>Loading...</div>;

// // //   return (
// // //     <Box p={3}>
// // //       <Card sx={{ display: "flex", p: 2 }}>
// // //         <Box sx={{ width: 120, mr: 2 }}>
// // //           <img
// // //             src={`http://localhost:3000/${doctor.photo}`}
// // //             alt="Doctor"
// // //             style={{ width: "100%", borderRadius: "8px" }}
// // //           />
// // //         </Box>
// // //         <Box mt={4}>
// // //           <Typography variant="h5" color="error">
// // //             Dr. {doctor.name}
// // //           </Typography>
// // //           <Typography fontWeight="medium" mb={1}>
// // //             {doctor.specialization}
// // //           </Typography>
// // //           {doctor.notes && (
// // //             <>
// // //               <Typography>Special Notes:</Typography>
// // //               <Typography
// // //                 sx={{ ml: 2 }}
// // //                 color="text.secondary"
// // //                 whiteSpace="pre-line"
// // //               >
// // //                 {doctor.notes}
// // //               </Typography>
// // //             </>
// // //           )}
// // //         </Box>
// // //       </Card>

// // //       <Typography variant="h6" mt={4}>
// // //         🏥 Blue Cross Hospital - Rajagiriya Sessions
// // //       </Typography>

// // //       <Typography fontWeight="bold" mt={2}>
// // //         SPORTS MEDICINE - ACUPUNCTURE ({availableSessions.length} SESSIONS)
// // //       </Typography>

// // //       <Grid container spacing={2} mt={1}>
// // //         {availableSessions.map((session, index) => {
// // //           const dateObj = new Date(session);
// // //           return (
// // //             <Grid item xs={12} md={6} key={index}>
// // //               <Card>
// // //                 <CardContent>
// // //                   <Typography variant="h6">
// // //                     {dateObj.toDateString()} —{" "}
// // //                     {dateObj.toLocaleTimeString([], {
// // //                       hour: "2-digit",
// // //                       minute: "2-digit",
// // //                     })}
// // //                   </Typography>
// // //                   <Typography color="text.secondary">
// // //                     Active Appointments: {appointmentsCount[session] || 0}
// // //                   </Typography>
// // //                   <Button
// // //                     variant="contained"
// // //                     color="error"
// // //                     sx={{ mt: 1 }}
// // //                     onClick={() => {
// // //                       setBookingSession(session);
// // //                       setStep(1);
// // //                       setFormData({
// // //                         phone: "",
// // //                         country: "",
// // //                         nic: "",
// // //                         email: "",
// // //                         patientName: "",
// // //                       });
// // //                       setFormErrors({});
// // //                     }}
// // //                   >
// // //                     Book
// // //                   </Button>
// // //                   <Typography color="green" sx={{ mt: 1 }}>
// // //                     AVAILABLE
// // //                   </Typography>
// // //                 </CardContent>
// // //               </Card>
// // //             </Grid>
// // //           );
// // //         })}
// // //       </Grid>

// // //       {/* Booking Dialog */}
// // //       <Dialog
// // //         open={!!bookingSession}
// // //         onClose={() => {
// // //           setBookingSession(null);
// // //           setStep(1);
// // //           setFormErrors({});
// // //         }}
// // //         maxWidth="xs"
// // //         fullWidth
// // //       >
// // //         <DialogTitle>Book Appointment</DialogTitle>
// // //         <DialogContent>
// // //           {step === 1 && (
// // //             <>
// // //               <Typography mb={2}>
// // //                 Booking for session on{" "}
// // //                 <strong>
// // //                   {bookingSession && new Date(bookingSession).toDateString()}{" "}
// // //                   at{" "}
// // //                   {bookingSession &&
// // //                     new Date(bookingSession).toLocaleTimeString([], {
// // //                       hour: "2-digit",
// // //                       minute: "2-digit",
// // //                     })}
// // //                 </strong>
// // //               </Typography>

// // //               <TextField
// // //                 label="Patient Name"
// // //                 fullWidth
// // //                 margin="normal"
// // //                 value={formData.patientName}
// // //                 onChange={(e) => handleInputChange("patientName", e.target.value)}
// // //                 error={!!formErrors.patientName}
// // //                 helperText={formErrors.patientName}
// // //               />

// // //               <TextField
// // //                 label="Phone Number"
// // //                 fullWidth
// // //                 margin="normal"
// // //                 value={formData.phone}
// // //                 onChange={(e) => handleInputChange("phone", e.target.value)}
// // //                 error={!!formErrors.phone}
// // //                 helperText={formErrors.phone}
// // //               />

// // //               <TextField
// // //                 select
// // //                 label="Country"
// // //                 fullWidth
// // //                 margin="normal"
// // //                 value={formData.country}
// // //                 onChange={(e) => handleInputChange("country", e.target.value)}
// // //                 error={!!formErrors.country}
// // //                 helperText={formErrors.country}
// // //               >
// // //                 {countries.map((c) => (
// // //                   <MenuItem key={c} value={c}>
// // //                     {c}
// // //                   </MenuItem>
// // //                 ))}
// // //               </TextField>

// // //               <TextField
// // //                 label="NIC"
// // //                 fullWidth
// // //                 margin="normal"
// // //                 value={formData.nic}
// // //                 onChange={(e) => handleInputChange("nic", e.target.value)}
// // //                 error={!!formErrors.nic}
// // //                 helperText={formErrors.nic}
// // //               />

// // //               <TextField
// // //                 label="Email"
// // //                 fullWidth
// // //                 margin="normal"
// // //                 value={formData.email}
// // //                 onChange={(e) => handleInputChange("email", e.target.value)}
// // //                 error={!!formErrors.email}
// // //                 helperText={formErrors.email}
// // //               />
// // //             </>
// // //           )}

// // //           {step === 2 && (
// // //             <>
// // //               <Typography variant="h6" gutterBottom>
// // //                 Confirm your booking details
// // //               </Typography>
// // //               <Typography>
// // //                 <strong>Session:</strong>{" "}
// // //                 {bookingSession &&
// // //                   new Date(bookingSession).toDateString() +
// // //                     " " +
// // //                     new Date(bookingSession).toLocaleTimeString([], {
// // //                       hour: "2-digit",
// // //                       minute: "2-digit",
// // //                     })}
// // //               </Typography>
// // //               <Typography>
// // //                 <strong>Patient Name:</strong> {formData.patientName}
// // //               </Typography>
// // //               <Typography>
// // //                 <strong>Phone:</strong> {formData.phone}
// // //               </Typography>
// // //               <Typography>
// // //                 <strong>Country:</strong> {formData.country}
// // //               </Typography>
// // //               <Typography>
// // //                 <strong>NIC:</strong> {formData.nic}
// // //               </Typography>
// // //               <Typography>
// // //                 <strong>Email:</strong> {formData.email}
// // //               </Typography>
// // //               <Typography mt={2} fontWeight="bold">
// // //                 Charge: LKR {charge.toLocaleString()}
// // //               </Typography>
// // //             </>
// // //           )}
// // //         </DialogContent>
// // //         <DialogActions>
// // //           {step === 1 && (
// // //             <>
// // //               <Button
// // //                 variant="contained"
// // //                 color="error"
// // //                 onClick={handleBookingSubmit}
// // //               >
// // //                 Next
// // //               </Button>
// // //               <Button
// // //                 onClick={() => {
// // //                   setBookingSession(null);
// // //                   setFormErrors({});
// // //                 }}
// // //               >
// // //                 Cancel
// // //               </Button>
// // //             </>
// // //           )}

// // //           {step === 2 && (
// // //             <>
// // //               <Button
// // //                 variant="contained"
// // //                 color="error"
// // //                 onClick={handleConfirmBooking}
// // //               >
// // //                 Confirm Booking
// // //               </Button>
// // //               <Button onClick={() => setStep(1)}>Edit</Button>
// // //             </>
// // //           )}
// // //         </DialogActions>
// // //       </Dialog>
// // //     </Box>
// // //   );
// // // };

// // // export default DoctorChannel;

// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import {
// //   Box,
// //   Typography,
// //   Button,
// //   Grid,
// //   Card,
// //   CardContent,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   TextField,
// //   MenuItem,
// // } from "@mui/material";

// // const countries = [
// //   "Sri Lanka",
// //   "India",
// //   "United States",
// //   "United Kingdom",
// //   "Canada",
// //   "Australia",
// // ];

// // const DoctorChannel = () => {
// //   const { id } = useParams();
// //   const [doctor, setDoctor] = useState(null);
// //   const [appointmentsCount, setAppointmentsCount] = useState({});
// //   const [bookingSession, setBookingSession] = useState(null);
// //   const [formData, setFormData] = useState({
// //     patientName: "",
// //     phone: "",
// //     country: "",
// //     nic: "",
// //     email: "",
// //   });
// //   const [formErrors, setFormErrors] = useState({});
// //   const [step, setStep] = useState(1);
// //   const [charge] = useState(2500);

// //   const availableSessions = [
// //     "2025-06-20T16:30:00",
// //     "2025-06-24T16:30:00",
// //     "2025-06-27T16:30:00",
// //     "2025-07-01T16:30:00",
// //   ];

// //   useEffect(() => {
// //     fetch(`http://localhost:3000/api/doctors/${id}`)
// //       .then((res) => res.json())
// //       .then((data) => setDoctor(data.doctor))
// //       .catch((err) => console.error("Error fetching doctor:", err));
// //   }, [id]);

// //   const validate = () => {
// //     const errors = {};
// //     if (!formData.patientName.trim()) errors.patientName = "Patient name is required";

// //     if (!formData.phone.trim()) errors.phone = "Phone number is required";
// //     else if (!/^\+?[0-9]{7,15}$/.test(formData.phone.trim()))
// //       errors.phone = "Invalid phone number";

// //     if (!formData.country) errors.country = "Country is required";

// //     if (!formData.nic.trim()) errors.nic = "NIC is required";

// //     if (!formData.email.trim()) errors.email = "Email is required";
// //     else if (
// //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
// //     )
// //       errors.email = "Invalid email address";

// //     setFormErrors(errors);
// //     return Object.keys(errors).length === 0;
// //   };

// //   const handleBookingSubmit = () => {
// //     if (!validate()) return;
// //     setStep(2);
// //   };

// //   const handleInputChange = (field, value) => {
// //     setFormData((prev) => ({ ...prev, [field]: value }));
// //     setFormErrors((prev) => ({ ...prev, [field]: undefined }));
// //   };

// //   const handleConfirmBooking = async () => {
// //   try {
// //     const response = await fetch("http://localhost:3000/api/appointments", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         doctorId: doctor.id,
// //         session: bookingSession,
// //         patientName: formData.patientName || "Anonymous",
// //         phone: formData.phone,
// //         country: formData.country,
// //         nic: formData.nic,
// //         email: formData.email,
// //       }),
// //     });

// //     let data;
// //     try {
// //       data = await response.json();
// //     } catch (jsonErr) {
// //       console.error("JSON parse error:", jsonErr);
// //       alert("Server returned invalid JSON");
// //       return;
// //     }

// //     if (!response.ok) {
// //       console.error("Booking error:", data);
// //       alert(`Error booking appointment: ${data.error || "Unknown error"}`);
// //       return;
// //     }

// //     setAppointmentsCount((prev) => ({
// //       ...prev,
// //       [bookingSession]: (prev[bookingSession] || 0) + 1,
// //     }));

// //     alert("Booking confirmed! Thank you.");
// //     setBookingSession(null);
// //     setStep(1);
// //   } catch (error) {
// //     console.error("Network or other error:", error);
// //     alert("Network error: Could not book appointment.");
// //   }
// // };

// //   if (!doctor) return <div>Loading...</div>;

// //   return (
// //     <Box p={3}>
// //       <Card sx={{ display: "flex", p: 2 }}>
// //         <Box sx={{ width: 120, mr: 2 }}>
// //           <img
// //             src={`http://localhost:3000/${doctor.photo}`}
// //             alt="Doctor"
// //             style={{ width: "100%", borderRadius: "8px" }}
// //           />
// //         </Box>
// //         <Box mt={4}>
// //           <Typography variant="h5" color="error">
// //             Dr. {doctor.name}
// //           </Typography>
// //           <Typography fontWeight="medium" mb={1}>
// //             {doctor.specialization}
// //           </Typography>
// //           {doctor.notes && (
// //             <>
// //               <Typography>Special Notes:</Typography>
// //               <Typography
// //                 sx={{ ml: 2 }}
// //                 color="text.secondary"
// //                 whiteSpace="pre-line"
// //               >
// //                 {doctor.notes}
// //               </Typography>
// //             </>
// //           )}
// //         </Box>
// //       </Card>

// //       <Typography variant="h6" mt={4}>
// //         🏥 Blue Cross Hospital - Rajagiriya Sessions
// //       </Typography>

// //       <Typography fontWeight="bold" mt={2}>
// //         SPORTS MEDICINE - ACUPUNCTURE ({availableSessions.length} SESSIONS)
// //       </Typography>

// //       <Grid container spacing={2} mt={1}>
// //         {availableSessions.map((session, index) => {
// //           const dateObj = new Date(session);
// //           return (
// //             <Grid item xs={12} md={6} key={index}>
// //               <Card>
// //                 <CardContent>
// //                   <Typography variant="h6">
// //                     {dateObj.toDateString()} —{" "}
// //                     {dateObj.toLocaleTimeString([], {
// //                       hour: "2-digit",
// //                       minute: "2-digit",
// //                     })}
// //                   </Typography>
// //                   <Typography color="text.secondary">
// //                     Active Appointments: {appointmentsCount[session] || 0}
// //                   </Typography>
// //                   <Button
// //                     variant="contained"
// //                     color="error"
// //                     sx={{ mt: 1 }}
// //                     onClick={() => {
// //                       setBookingSession(session);
// //                       setStep(1);
// //                       setFormData({
// //                         patientName: "",
// //                         phone: "",
// //                         country: "",
// //                         nic: "",
// //                         email: "",
// //                       });
// //                       setFormErrors({});
// //                     }}
// //                   >
// //                     Book
// //                   </Button>
// //                   <Typography color="green" sx={{ mt: 1 }}>
// //                     AVAILABLE
// //                   </Typography>
// //                 </CardContent>
// //               </Card>
// //             </Grid>
// //           );
// //         })}
// //       </Grid>

// //       {/* Booking Dialog */}
// //       <Dialog
// //         open={!!bookingSession}
// //         onClose={() => {
// //           setBookingSession(null);
// //           setStep(1);
// //           setFormErrors({});
// //         }}
// //         maxWidth="xs"
// //         fullWidth
// //       >
// //         <DialogTitle>Book Appointment</DialogTitle>
// //         <DialogContent>
// //           {step === 1 && (
// //             <>
// //               <Typography mb={2}>
// //                 Booking for session on{" "}
// //                 <strong>
// //                   {bookingSession && new Date(bookingSession).toDateString()}{" "}
// //                   at{" "}
// //                   {bookingSession &&
// //                     new Date(bookingSession).toLocaleTimeString([], {
// //                       hour: "2-digit",
// //                       minute: "2-digit",
// //                     })}
// //                 </strong>
// //               </Typography>

// //               <TextField
// //                 label="Patient Name"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.patientName}
// //                 onChange={(e) => handleInputChange("patientName", e.target.value)}
// //                 error={!!formErrors.patientName}
// //                 helperText={formErrors.patientName}
// //               />

// //               <TextField
// //                 label="Phone Number"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.phone}
// //                 onChange={(e) => handleInputChange("phone", e.target.value)}
// //                 error={!!formErrors.phone}
// //                 helperText={formErrors.phone}
// //               />

// //               <TextField
// //                 select
// //                 label="Country"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.country}
// //                 onChange={(e) => handleInputChange("country", e.target.value)}
// //                 error={!!formErrors.country}
// //                 helperText={formErrors.country}
// //               >
// //                 {countries.map((c) => (
// //                   <MenuItem key={c} value={c}>
// //                     {c}
// //                   </MenuItem>
// //                 ))}
// //               </TextField>

// //               <TextField
// //                 label="NIC"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.nic}
// //                 onChange={(e) => handleInputChange("nic", e.target.value)}
// //                 error={!!formErrors.nic}
// //                 helperText={formErrors.nic}
// //               />

// //               <TextField
// //                 label="Email"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.email}
// //                 onChange={(e) => handleInputChange("email", e.target.value)}
// //                 error={!!formErrors.email}
// //                 helperText={formErrors.email}
// //               />
// //             </>
// //           )}

// //           {step === 2 && (
// //             <>
// //               <Typography variant="h6" gutterBottom>
// //                 Confirm your booking details
// //               </Typography>
// //               <Typography>
// //                 <strong>Session:</strong>{" "}
// //                 {bookingSession &&
// //                   new Date(bookingSession).toDateString() +
// //                     " " +
// //                     new Date(bookingSession).toLocaleTimeString([], {
// //                       hour: "2-digit",
// //                       minute: "2-digit",
// //                     })}
// //               </Typography>
// //               <Typography>
// //                 <strong>Patient Name:</strong> {formData.patientName}
// //               </Typography>
// //               <Typography>
// //                 <strong>Phone:</strong> {formData.phone}
// //               </Typography>
// //               <Typography>
// //                 <strong>Country:</strong> {formData.country}
// //               </Typography>
// //               <Typography>
// //                 <strong>NIC:</strong> {formData.nic}
// //               </Typography>
// //               <Typography>
// //                 <strong>Email:</strong> {formData.email}
// //               </Typography>
// //               <Typography mt={2} fontWeight="bold">
// //                 Charge: LKR {charge.toLocaleString()}
// //               </Typography>
// //             </>
// //           )}
// //         </DialogContent>
// //         <DialogActions>
// //           {step === 1 && (
// //             <>
// //               <Button
// //                 variant="contained"
// //                 color="error"
// //                 onClick={handleBookingSubmit}
// //               >
// //                 Next
// //               </Button>
// //               <Button
// //                 onClick={() => {
// //                   setBookingSession(null);
// //                   setFormErrors({});
// //                 }}
// //               >
// //                 Cancel
// //               </Button>
// //             </>
// //           )}

// //           {step === 2 && (
// //             <>
// //               <Button variant="contained" color="error" onClick={handleConfirmBooking}>
// //                 Confirm Booking
// //               </Button>
// //               <Button onClick={() => setStep(1)}>Edit</Button>
// //             </>
// //           )}
// //         </DialogActions>
// //       </Dialog>
// //     </Box>
// //   );
// // };

// // export default DoctorChannel;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   MenuItem,
// } from "@mui/material";

// const countries = [
//   "Sri Lanka",
//   "India",
//   "United States",
//   "United Kingdom",
//   "Canada",
//   "Australia",
// ];

// const DoctorChannel = () => {
//   const { id } = useParams();
//   const [doctor, setDoctor] = useState(null);
//   const [appointmentsCount, setAppointmentsCount] = useState({});
//   const [bookingSession, setBookingSession] = useState(null);
//   const [formData, setFormData] = useState({
//     patientName: "",
//     phone: "",
//     country: "",
//     nic: "",
//     email: "",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [step, setStep] = useState(1);
//   const [charge] = useState(2500);

//   const availableSessions = [
//     "2025-06-20T16:30:00",
//     "2025-06-24T16:30:00",
//     "2025-06-27T16:30:00",
//     "2025-07-01T16:30:00",
//   ];

//   useEffect(() => {
//     fetch(`http://localhost:3000/api/doctors/${id}`)
//       .then((res) => res.json())
//       .then((data) => setDoctor(data.doctor))
//       .catch((err) => console.error("Error fetching doctor:", err));
//   }, [id]);

//   const validate = () => {
//     const errors = {};
//     if (!formData.patientName.trim()) errors.patientName = "Patient name is required";
//     if (!formData.phone.trim()) errors.phone = "Phone number is required";
//     else if (!/^\+?[0-9]{7,15}$/.test(formData.phone.trim()))
//       errors.phone = "Invalid phone number";
//     if (!formData.country) errors.country = "Country is required";
//     if (!formData.nic.trim()) errors.nic = "NIC is required";
//     if (!formData.email.trim()) errors.email = "Email is required";
//     else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
//     )
//       errors.email = "Invalid email address";

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleBookingSubmit = () => {
//     if (!validate()) return;
//     setStep(2);
//   };

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     setFormErrors((prev) => ({ ...prev, [field]: undefined }));
//   };

//   const handleConfirmBooking = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/appointments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           doctorId: doctor.id,
//           appointment_time: bookingSession, // ✅ changed from "session"
//           patientName: formData.patientName || "Anonymous",
//           phone: formData.phone,
//           country: formData.country,
//           nic: formData.nic,
//           email: formData.email,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//   console.error("❌ Backend error response:", data); // 🔍 log full error
//   alert(`Error booking appointment: ${data.error || "Unknown error"}`);
//   return;
// }

//       setAppointmentsCount((prev) => ({
//         ...prev,
//         [bookingSession]: (prev[bookingSession] || 0) + 1,
//       }));

//       alert("Booking confirmed! Thank you.");
//       setBookingSession(null);
//       setStep(1);
//     } catch (error) {
//       alert("Network error: Could not book appointment.");
//     }
//   };

//   if (!doctor) return <div>Loading...</div>;

//   return (
//     <Box p={3}>
//       <Card sx={{ display: "flex", p: 2 }}>
//         <Box sx={{ width: 120, mr: 2 }}>
//           <img
//             src={`http://localhost:3000/${doctor.photo}`}
//             alt="Doctor"
//             style={{ width: "100%", borderRadius: "8px" }}
//           />
//         </Box>
//         <Box mt={4}>
//           <Typography variant="h5" color="error">
//             Dr. {doctor.name}
//           </Typography>
//           <Typography fontWeight="medium" mb={1}>
//             {doctor.specialization}
//           </Typography>
//           {doctor.notes && (
//             <>
//               <Typography>Special Notes:</Typography>
//               <Typography
//                 sx={{ ml: 2 }}
//                 color="text.secondary"
//                 whiteSpace="pre-line"
//               >
//                 {doctor.notes}
//               </Typography>
//             </>
//           )}
//         </Box>
//       </Card>

//       <Typography variant="h6" mt={4}>
//         🏥 Blue Cross Hospital - Rajagiriya Sessions
//       </Typography>

//       <Typography fontWeight="bold" mt={2}>
//         SPORTS MEDICINE - ACUPUNCTURE ({availableSessions.length} SESSIONS)
//       </Typography>

//       <Grid container spacing={2} mt={1}>
//         {availableSessions.map((session, index) => {
//           const dateObj = new Date(session);
//           return (
//             <Grid item xs={12} md={6} key={index}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">
//                     {dateObj.toDateString()} —{" "}
//                     {dateObj.toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                   </Typography>
//                   <Typography color="text.secondary">
//                     Active Appointments: {appointmentsCount[session] || 0}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="error"
//                     sx={{ mt: 1 }}
//                     onClick={() => {
//                       setBookingSession(session);
//                       setStep(1);
//                       setFormData({
//                         patientName: "",
//                         phone: "",
//                         country: "",
//                         nic: "",
//                         email: "",
//                       });
//                       setFormErrors({});
//                     }}
//                   >
//                     Book
//                   </Button>
//                   <Typography color="green" sx={{ mt: 1 }}>
//                     AVAILABLE
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>

//       {/* Booking Dialog */}
//       <Dialog
//         open={!!bookingSession}
//         onClose={() => {
//           setBookingSession(null);
//           setStep(1);
//           setFormErrors({});
//         }}
//         maxWidth="xs"
//         fullWidth
//       >
//         <DialogTitle>Book Appointment</DialogTitle>
//         <DialogContent>
//           {step === 1 && (
//             <>
//               <Typography mb={2}>
//                 Booking for session on{" "}
//                 <strong>
//                   {bookingSession && new Date(bookingSession).toDateString()}{" "}
//                   at{" "}
//                   {bookingSession &&
//                     new Date(bookingSession).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                 </strong>
//               </Typography>

//               <TextField
//                 label="Patient Name"
//                 fullWidth
//                 margin="normal"
//                 value={formData.patientName}
//                 onChange={(e) => handleInputChange("patientName", e.target.value)}
//                 error={!!formErrors.patientName}
//                 helperText={formErrors.patientName}
//               />

//               <TextField
//                 label="Phone Number"
//                 fullWidth
//                 margin="normal"
//                 value={formData.phone}
//                 onChange={(e) => handleInputChange("phone", e.target.value)}
//                 error={!!formErrors.phone}
//                 helperText={formErrors.phone}
//               />

//               <TextField
//                 select
//                 label="Country"
//                 fullWidth
//                 margin="normal"
//                 value={formData.country}
//                 onChange={(e) => handleInputChange("country", e.target.value)}
//                 error={!!formErrors.country}
//                 helperText={formErrors.country}
//               >
//                 {countries.map((c) => (
//                   <MenuItem key={c} value={c}>
//                     {c}
//                   </MenuItem>
//                 ))}
//               </TextField>

//               <TextField
//                 label="NIC"
//                 fullWidth
//                 margin="normal"
//                 value={formData.nic}
//                 onChange={(e) => handleInputChange("nic", e.target.value)}
//                 error={!!formErrors.nic}
//                 helperText={formErrors.nic}
//               />

//               <TextField
//                 label="Email"
//                 fullWidth
//                 margin="normal"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange("email", e.target.value)}
//                 error={!!formErrors.email}
//                 helperText={formErrors.email}
//               />
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <Typography variant="h6" gutterBottom>
//                 Confirm your booking details
//               </Typography>
//               <Typography>
//                 <strong>Session:</strong>{" "}
//                 {bookingSession &&
//                   new Date(bookingSession).toDateString() +
//                     " " +
//                     new Date(bookingSession).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//               </Typography>
//               <Typography>
//                 <strong>Patient Name:</strong> {formData.patientName}
//               </Typography>
//               <Typography>
//                 <strong>Phone:</strong> {formData.phone}
//               </Typography>
//               <Typography>
//                 <strong>Country:</strong> {formData.country}
//               </Typography>
//               <Typography>
//                 <strong>NIC:</strong> {formData.nic}
//               </Typography>
//               <Typography>
//                 <strong>Email:</strong> {formData.email}
//               </Typography>
//               <Typography mt={2} fontWeight="bold">
//                 Charge: LKR {charge.toLocaleString()}
//               </Typography>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           {step === 1 && (
//             <>
//               <Button
//                 variant="contained"
//                 color="error"
//                 onClick={handleBookingSubmit}
//               >
//                 Next
//               </Button>
//               <Button
//                 onClick={() => {
//                   setBookingSession(null);
//                   setFormErrors({});
//                 }}
//               >
//                 Cancel
//               </Button>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <Button variant="contained" color="error" onClick={handleConfirmBooking}>
//                 Confirm Booking
//               </Button>
//               <Button onClick={() => setStep(1)}>Edit</Button>
//             </>
//           )}
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default DoctorChannel;

// ✅ Imports
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   MenuItem,
// } from "@mui/material";

// // ✅ List of countries
// const countries = [
//   "Sri Lanka",
//   "India",
//   "United States",
//   "United Kingdom",
//   "Canada",
//   "Australia",
// ];

// const DoctorChannel = () => {
//   const { id } = useParams();
//   const [doctor, setDoctor] = useState(null);
//   const [appointmentsCount, setAppointmentsCount] = useState({});
//   const [bookingSession, setBookingSession] = useState(null);
//   const [formData, setFormData] = useState({
//     patientName: "",
//     phone: "",
//     country: "",
//     nic: "",
//     email: "",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [step, setStep] = useState(1);
//   const [charge] = useState(2500);

//   const availableSessions = [
//     "2025-06-20T16:30:00",
//     "2025-06-24T16:30:00",
//     "2025-06-27T16:30:00",
//     "2025-07-01T16:30:00",
//   ];

//   // ✅ Fetch doctor data
//   useEffect(() => {
//     fetch(`http://localhost:3000/api/doctors/${id}`)
//       .then((res) => res.json())
//       .then((data) => setDoctor(data.doctor))
//       .catch((err) => console.error("Error fetching doctor:", err));
//   }, [id]);

//   // ✅ Validation
//   const validate = () => {
//     const errors = {};
//     if (!formData.patientName.trim()) errors.patientName = "Patient name is required";
//     if (!formData.phone.trim()) errors.phone = "Phone number is required";
//     else if (!/^\+?[0-9]{7,15}$/.test(formData.phone.trim()))
//       errors.phone = "Invalid phone number";
//     if (!formData.country) errors.country = "Country is required";
//     if (!formData.nic.trim()) errors.nic = "NIC is required";
//     if (!formData.email.trim()) errors.email = "Email is required";
//     else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
//     )
//       errors.email = "Invalid email address";

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleBookingSubmit = () => {
//     if (!validate()) return;
//     setStep(2);
//   };

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     setFormErrors((prev) => ({ ...prev, [field]: undefined }));
//   };

//   // ✅ Submit to backend
//   const handleConfirmBooking = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/appointments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           doctorId: doctor.id,
//           session: bookingSession, // ✅ 'session' will be mapped to 'date' in backend
//           patientName: formData.patientName,
//           phone: formData.phone,
//           country: formData.country,
//           nic: formData.nic,
//           email: formData.email,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         alert(`Error booking appointment: ${data.error || "Unknown error"}`);
//         return;
//       }

//       setAppointmentsCount((prev) => ({
//         ...prev,
//         [bookingSession]: (prev[bookingSession] || 0) + 1,
//       }));

//       alert("✅ Booking confirmed! Thank you.");
//       setBookingSession(null);
//       setStep(1);
//     } catch (error) {
//       alert("Network error: Could not book appointment.");
//     }
//   };

//   if (!doctor) return <div>Loading...</div>;

//   return (
//     <Box p={3}>
//       <Card sx={{ display: "flex", p: 2 }}>
//         <Box sx={{ width: 120, mr: 2 }}>
//           <img
//             src={`http://localhost:3000/${doctor.photo}`}
//             alt="Doctor"
//             style={{ width: "100%", borderRadius: "8px" }}
//           />
//         </Box>
//         <Box mt={4}>
//           <Typography variant="h5" color="error">
//             Dr. {doctor.name}
//           </Typography>
//           <Typography fontWeight="medium" mb={1}>
//             {doctor.specialization}
//           </Typography>
//           {doctor.notes && (
//             <>
//               <Typography>Special Notes:</Typography>
//               <Typography
//                 sx={{ ml: 2 }}
//                 color="text.secondary"
//                 whiteSpace="pre-line"
//               >
//                 {doctor.notes}
//               </Typography>
//             </>
//           )}
//         </Box>
//       </Card>

//       <Typography variant="h6" mt={4}>
//         🏥 Blue Cross Hospital - Rajagiriya Sessions
//       </Typography>

//       <Typography fontWeight="bold" mt={2}>
//         SPORTS MEDICINE - ACUPUNCTURE ({availableSessions.length} SESSIONS)
//       </Typography>

//       <Grid container spacing={2} mt={1}>
//         {availableSessions.map((session, index) => {
//           const dateObj = new Date(session);
//           return (
//             <Grid item xs={12} md={6} key={index}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">
//                     {dateObj.toDateString()} —{" "}
//                     {dateObj.toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                   </Typography>
//                   <Typography color="text.secondary">
//                     Active Appointments: {appointmentsCount[session] || 0}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="error"
//                     sx={{ mt: 1 }}
//                     onClick={() => {
//                       setBookingSession(session);
//                       setStep(1);
//                       setFormData({
//                         patientName: "",
//                         phone: "",
//                         country: "",
//                         nic: "",
//                         email: "",
//                       });
//                       setFormErrors({});
//                     }}
//                   >
//                     Book
//                   </Button>
//                   <Typography color="green" sx={{ mt: 1 }}>
//                     AVAILABLE
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>

//       {/* Booking Dialog */}
//       <Dialog
//         open={!!bookingSession}
//         onClose={() => {
//           setBookingSession(null);
//           setStep(1);
//           setFormErrors({});
//         }}
//         maxWidth="xs"
//         fullWidth
//       >
//         <DialogTitle>Book Appointment</DialogTitle>
//         <DialogContent>
//           {step === 1 && (
//             <>
//               <Typography mb={2}>
//                 Booking for session on{" "}
//                 <strong>
//                   {bookingSession && new Date(bookingSession).toDateString()}{" "}
//                   at{" "}
//                   {bookingSession &&
//                     new Date(bookingSession).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                 </strong>
//               </Typography>

//               <TextField
//                 label="Patient Name"
//                 fullWidth
//                 margin="normal"
//                 value={formData.patientName}
//                 onChange={(e) => handleInputChange("patientName", e.target.value)}
//                 error={!!formErrors.patientName}
//                 helperText={formErrors.patientName}
//               />

//               <TextField
//                 label="Phone Number"
//                 fullWidth
//                 margin="normal"
//                 value={formData.phone}
//                 onChange={(e) => handleInputChange("phone", e.target.value)}
//                 error={!!formErrors.phone}
//                 helperText={formErrors.phone}
//               />

//               <TextField
//                 select
//                 label="Country"
//                 fullWidth
//                 margin="normal"
//                 value={formData.country}
//                 onChange={(e) => handleInputChange("country", e.target.value)}
//                 error={!!formErrors.country}
//                 helperText={formErrors.country}
//               >
//                 {countries.map((c) => (
//                   <MenuItem key={c} value={c}>
//                     {c}
//                   </MenuItem>
//                 ))}
//               </TextField>

//               <TextField
//                 label="NIC"
//                 fullWidth
//                 margin="normal"
//                 value={formData.nic}
//                 onChange={(e) => handleInputChange("nic", e.target.value)}
//                 error={!!formErrors.nic}
//                 helperText={formErrors.nic}
//               />

//               <TextField
//                 label="Email"
//                 fullWidth
//                 margin="normal"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange("email", e.target.value)}
//                 error={!!formErrors.email}
//                 helperText={formErrors.email}
//               />
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <Typography variant="h6" gutterBottom>
//                 Confirm your booking details
//               </Typography>
//               <Typography>
//                 <strong>Session:</strong>{" "}
//                 {bookingSession &&
//                   new Date(bookingSession).toDateString() +
//                     " " +
//                     new Date(bookingSession).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//               </Typography>
//               <Typography>
//                 <strong>Patient Name:</strong> {formData.patientName}
//               </Typography>
//               <Typography>
//                 <strong>Phone:</strong> {formData.phone}
//               </Typography>
//               <Typography>
//                 <strong>Country:</strong> {formData.country}
//               </Typography>
//               <Typography>
//                 <strong>NIC:</strong> {formData.nic}
//               </Typography>
//               <Typography>
//                 <strong>Email:</strong> {formData.email}
//               </Typography>
//               <Typography mt={2} fontWeight="bold">
//                 Charge: LKR {charge.toLocaleString()}
//               </Typography>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           {step === 1 && (
//             <>
//               <Button
//                 variant="contained"
//                 color="error"
//                 onClick={handleBookingSubmit}
//               >
//                 Next
//               </Button>
//               <Button
//                 onClick={() => {
//                   setBookingSession(null);
//                   setFormErrors({});
//                 }}
//               >
//                 Cancel
//               </Button>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <Button variant="contained" color="error" onClick={handleConfirmBooking}>
//                 Confirm Booking
//               </Button>
//               <Button onClick={() => setStep(1)}>Edit</Button>
//             </>
//           )}
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default DoctorChannel;


import React, { useState, useEffect } from "react";
import {
  Box, Typography, Button, Grid, Card, CardContent,
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, MenuItem
} from "@mui/material";
import { useParams } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useStripe } from "@stripe/react-stripe-js";


const countries = ["Sri Lanka", "India", "United States", "United Kingdom", "Canada", "Australia"];

const DoctorChannel = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [appointmentsCount, setAppointmentsCount] = useState({});
  const [bookingSession, setBookingSession] = useState(null);
  const [step, setStep] = useState(1);
  const [charge] = useState(2500);
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    patientName: "", phone: "", country: "", nic: "", email: ""
  });
  const [formErrors, setFormErrors] = useState({});

  const availableSessions = [
    "2025-06-20T16:30:00",
    "2025-06-24T16:30:00",
    "2025-06-27T16:30:00",
    "2025-07-01T16:30:00",
  ];

  useEffect(() => {
    fetch(`http://localhost:3000/api/doctors/${id}`)
      .then(res => res.json())
      .then(data => setDoctor(data.doctor));
  }, [id]);

  const validate = () => {
    const errors = {};
    if (!formData.patientName.trim()) errors.patientName = "Required";
    if (!formData.phone.trim()) errors.phone = "Required";
    if (!formData.country) errors.country = "Required";
    if (!formData.nic.trim()) errors.nic = "Required";
    if (!formData.email.trim()) errors.email = "Required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setFormErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleBookingSubmit = () => {
    if (validate()) setStep(2);
  };

  const handleConfirmBooking = async () => {
    if (!stripe || !elements) return;

    try {
      const paymentRes = await fetch("http://localhost:3000/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: charge })
      });

      const { clientSecret } = await paymentRes.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name: formData.patientName, email: formData.email },
        }
      });

      if (result.error) {
        alert("❌ Payment failed: " + result.error.message);
        return;
      }

      if (result.paymentIntent.status === "succeeded") {
        const saveRes = await fetch("http://localhost:3000/api/appointments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            doctorId: doctor.id,
            session: bookingSession,
            ...formData,
            paymentId: result.paymentIntent.id
          })
        });

        if (saveRes.ok) {
          alert("✅ Booking confirmed!");
          setAppointmentsCount(prev => ({
            ...prev, [bookingSession]: (prev[bookingSession] || 0) + 1
          }));
          setBookingSession(null);
          setStep(1);
        } else {
          alert("❌ Booking failed after payment");
        }
      }
    } catch (err) {
      alert("❌ Error during booking");
    }
  };

  if (!doctor) return <div>Loading...</div>;

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>Dr. {doctor.name} - {doctor.specialization}</Typography>

      <Grid container spacing={2}>
        {availableSessions.map((session, idx) => {
          const date = new Date(session);
          return (
            <Grid item xs={12} md={6} key={idx}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{date.toDateString()} at {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</Typography>
                  <Typography>Active: {appointmentsCount[session] || 0}</Typography>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setBookingSession(session);
                      setStep(1);
                      setFormData({ patientName: "", phone: "", country: "", nic: "", email: "" });
                    }}
                  >
                    Book
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Dialog open={!!bookingSession} onClose={() => setBookingSession(null)} fullWidth maxWidth="sm">
        <DialogTitle>Book Appointment</DialogTitle>
        <DialogContent>
          {step === 1 && (
            <>
              {["patientName", "phone", "nic", "email"].map((field) => (
                <TextField
                  key={field}
                  fullWidth
                  margin="dense"
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  error={!!formErrors[field]}
                  helperText={formErrors[field]}
                />
              ))}
              <TextField
                select fullWidth margin="dense" label="Country"
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                error={!!formErrors.country}
                helperText={formErrors.country}
              >
                {countries.map((c) => (
                  <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}
              </TextField>
            </>
          )}

          {step === 2 && (
            <>
              <Typography variant="subtitle1" gutterBottom>Review & Pay LKR {charge}</Typography>
              <CardElement />
            </>
          )}
        </DialogContent>
        <DialogActions>
          {step === 1 ? (
            <>
              <Button onClick={() => setBookingSession(null)}>Cancel</Button>
              <Button onClick={handleBookingSubmit} variant="contained" color="error">Next</Button>
            </>
          ) : (
            <>
              <Button onClick={() => setStep(1)}>Back</Button>
              <Button onClick={handleConfirmBooking} variant="contained" color="error">Pay & Confirm</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DoctorChannel;

