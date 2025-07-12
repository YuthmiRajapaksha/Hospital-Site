


// import React, { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   MenuItem,
//   Card,
//   CardContent,
//   CircularProgress,
//   Divider
// } from "@mui/material";
// import Swal from "sweetalert2";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";

// const countries = [
//   "Sri Lanka",
//   "India",
//   "United States",
//   "United Kingdom",
//   "Canada",
//   "Australia",
// ];

// const validationSchema = Yup.object().shape({
//   patientName: Yup.string().required("Patient name is required"),
//   phone: Yup.string()
//     .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
//     .required("Phone is required"),
//   country: Yup.string().required("Country is required"),
//   nic: Yup.string()
//     .matches(
//       /^([0-9]{9}[vV]|[0-9]{12})$/,
//       "NIC must be 9 digits + V/v or 12 digits"
//     )
//     .required("NIC is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
// });


// const DoctorChannel = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { state } = location;

//   const { doctorName, hospital, sessionDate, sessionTime, bookingformId } = state || {};

//   useEffect(() => {
//     if (!doctorName || !hospital || !sessionDate || !sessionTime || !bookingformId) {
//       Swal.fire("Error", "Missing session data.", "error").then(() =>
//         navigate("/search")
//       );
//     }
//   }, [doctorName, hospital, sessionDate, sessionTime, bookingformId, navigate]);

//   const [doctor, setDoctor] = useState(null);
//   const [appointmentsCount, setAppointmentsCount] = useState(0);
//   const [showForm, setShowForm] = useState(false);
//   const [step, setStep] = useState(1);
//   const [submittedValues, setSubmittedValues] = useState(null);
//   const [submitting, setSubmitting] = useState(false);
//   const [loadingDoctor, setLoadingDoctor] = useState(true);
//   const [loadingCount, setLoadingCount] = useState(true);

//   const formattedSessionDate = sessionDate;
//   const formattedSessionTime = sessionTime.length === 5 ? `${sessionTime}:00` : sessionTime;

//   useEffect(() => {
//     if (!id) return;
//     fetch(`http://localhost:3000/api/doctors/${id}`)
//       .then((res) => res.json())
//       .then((data) => setDoctor(data.doctor || data))
//       .catch(() => Swal.fire("Error", "Doctor fetch failed.", "error"))
//       .finally(() => setLoadingDoctor(false));
//   }, [id]);

//   const fetchAppointmentCount = () => {
//     if (!hospital || !formattedSessionDate || !formattedSessionTime) return;
//     setLoadingCount(true);
//     fetch(
//       `http://localhost:3000/api/appointments/count/${id}?hospital=${encodeURIComponent(
//         hospital
//       )}&sessionDate=${formattedSessionDate}&sessionTime=${formattedSessionTime}`
//     )
//       .then((res) => res.json())
//       .then((data) => setAppointmentsCount(data.count))
//       .catch(() => Swal.fire("Error", "Failed to load count", "error"))
//       .finally(() => setLoadingCount(false));
//   };

//   useEffect(() => {
//     fetchAppointmentCount();
//   }, [id, hospital, formattedSessionDate, formattedSessionTime]);

//   const handleConfirmBooking = async () => {
//     if (submitting) return;
//     setSubmitting(true);
//     try {
//       const token = localStorage.getItem("token");

//       const res = await fetch("http://localhost:3000/api/appointments", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           ...(token && { Authorization: `Bearer ${token}` }),
//         },
//         body: JSON.stringify({
//           doctorId: doctor.id,
//           doctorName,
//           hospital,
//           sessionDate: formattedSessionDate,
//           sessionTime: formattedSessionTime,
//           date: new Date().toISOString().slice(0, 19).replace("T", " "),
//           ...submittedValues,
//           paymentId: "FAKE_PAYMENT_ID",
//           bookingformId: bookingformId,
//         }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Booking failed");

//       Swal.fire("Success", "Appointment booked!", "success");
//       setShowForm(false);
//       setStep(1);
//       fetchAppointmentCount();
//     } catch (err) {
//       Swal.fire("Error", err.message, "error");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loadingDoctor) return <CircularProgress />;
//   if (!doctor) return <Typography>Doctor not found</Typography>;

//   return (
//     <Box p={3} maxWidth="600px" mx="auto">
//       <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" sx={{ fontStyle: "italic", mb: 1, fontWeight:"bold" }}>
//             Dr. {doctor.name}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             <strong>Hospital:</strong> {hospital}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             <strong>Date:</strong> {sessionDate}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             <strong>Time:</strong> {sessionTime}
//           </Typography>

//           <Divider sx={{ my: 2 }} />

//           <Typography variant="body1">
//             Active Appointments:{" "}
//             <strong>{loadingCount ? "..." : appointmentsCount} / 5</strong>
//           </Typography>

//           <Button
//             disabled={appointmentsCount >= 5}
//             variant="contained"
//             onClick={() => setShowForm(true)}
//             sx={{ mt: 2 }}
//           >
//             Book Appointment
//           </Button>
//         </CardContent>
//       </Card>

//       <Dialog
//         open={showForm}
//         onClose={(event, reason) => {
//           if (submitting) return;
//           if (reason === "backdropClick" || reason === "escapeKeyDown") return;
//           setShowForm(false);
//           setStep(1);
//         }}
//         disableEscapeKeyDown={submitting}
//       >
//         {/* <DialogTitle>Book Appointment</DialogTitle> */}
// <DialogContent>
//   {step === 1 && (
//     <Formik
//       initialValues={{
//         patientName: "",
//         phone: "",
//         country: "",
//         nic: "",
//         email: "",
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         setSubmittedValues(values);
//         setStep(2);
//       }}
//     >
//       {({ values, handleChange, touched, errors }) => (
//         <Form>
//           <TextField
//             name="patientName"
//             label="Patient Name"
//             value={values.patientName}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             error={touched.patientName && !!errors.patientName}
//             helperText={touched.patientName && errors.patientName}
//           />
//           <TextField
//             name="phone"
//             label="Phone"
//             value={values.phone}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             error={touched.phone && !!errors.phone}
//             helperText={touched.phone && errors.phone}
//           />
//           <TextField
//             select
//             name="country"
//             label="Country"
//             value={values.country}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             error={touched.country && !!errors.country}
//             helperText={touched.country && errors.country}
//           >
//             {countries.map((c) => (
//               <MenuItem key={c} value={c}>
//                 {c}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             name="nic"
//             label="NIC"
//             value={values.nic}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             error={touched.nic && !!errors.nic}
//             helperText={touched.nic && errors.nic}
//           />
//           <TextField
//             name="email"
//             label="Email"
//             value={values.email}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             error={touched.email && !!errors.email}
//             helperText={touched.email && errors.email}
//           />
//           <DialogActions sx={{ mt: 1 }}>
//             <Button onClick={() => setShowForm(false)}>Cancel</Button>
//             <Button type="submit" variant="contained">
//               Next
//             </Button>
//           </DialogActions>
//         </Form>
//       )}
//     </Formik>
//   )}

//  {step === 2 && submittedValues && (
//   <>
//     <Card variant="outlined" sx={{ mb: 2 }}>
//       <CardContent>
//         <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2,textAlign: "center" }}>
//           Confirm Your Booking
//         </Typography>

//         <Box
//           display="flex"
//           justifyContent="space-between"
//           flexWrap="wrap"
//           gap={4}
//         >
          
//           <Box flex="1" minWidth="200px">
//             <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
//               Doctor Details
//             </Typography>

//             <Box mt={1}>
//               <Typography sx={{ fontWeight: "bold" }}>Date:</Typography>
//               <Typography>{sessionDate}</Typography>
//             </Box>
//            <Box mt={1}>
//               <Typography sx={{ fontWeight: "bold" }}>Time:</Typography>
//               <Typography>{sessionTime}</Typography>
//             </Box>
//             <Box mt={1}>
//               <Typography sx={{ fontWeight: "bold" }}>Doctor:</Typography>
//               <Typography>Dr. {doctorName}</Typography>
//             </Box>
//             <Box mt={1}>
//               <Typography sx={{ fontWeight: "bold" }}>Hospital:</Typography>
//               <Typography>{hospital}</Typography>
//             </Box>
//           </Box>

          
//           <Box flex="1" minWidth="200px">
//             <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
//               Patient Details
//             </Typography>
//             <Box mt={1}>
//               <Typography sx={{ fontWeight: "bold" }}>Name:</Typography>
//               <Typography>{submittedValues.patientName}</Typography>
//             </Box>
//             <Box mt={1}>
//               <Typography sx={{ fontWeight: "bold" }}>Phone:</Typography>
//               <Typography>{submittedValues.phone}</Typography>
//             </Box>
//             <Box mt={1}>
//               <Typography sx={{ fontWeight: "bold" }}>NIC:</Typography>
//               <Typography>{submittedValues.nic}</Typography>
//             </Box>
//             <Box mt={1}>
//               <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
//               <Typography>{submittedValues.email}</Typography>
//             </Box>

          
//           </Box>
//         </Box>

//         <Divider sx={{ my: 2 }} />

//         <Box display="flex" justifyContent="space-between">
//           <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//             Charge:
//           </Typography>
//           <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//             LKR 2500
//           </Typography>
//         </Box>
//       </CardContent>
//     </Card>

//     <DialogActions>
//       <Button sx={{width: "100px",color: "#2B909B", border: "2px solid #2B909B"}} onClick={() => setStep(1)} disabled={submitting}>Back</Button>
//       <Button
//         variant="contained"
//         onClick={handleConfirmBooking}
//         disabled={submitting}
//         sx={{backgroundColor: "#2B909B"}}
//       >
//         {submitting ? "Processing..." : "Confirm Booking"}
//       </Button>
//     </DialogActions>
//   </>
// )}

// </DialogContent>

//       </Dialog>
//     </Box>
//   );
// };

// export default DoctorChannel;

import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Card,
  CardContent,
  CircularProgress,
  Divider,
} from "@mui/material";
import Swal from "sweetalert2";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const countries = [
  "Sri Lanka",
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
];

const validationSchema = Yup.object().shape({
  patientName: Yup.string().required("Patient name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  country: Yup.string().required("Country is required"),
  nic: Yup.string()
    .matches(/^([0-9]{9}[vV]|[0-9]{12})$/, "NIC must be 9 digits + V/v or 12 digits")
    .required("NIC is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const primaryColor = "#2B909B";

const DoctorChannel = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const { doctorName, hospital, sessionDate, sessionTime, bookingformId } = state || {};

  useEffect(() => {
    if (!doctorName || !hospital || !sessionDate || !sessionTime || !bookingformId) {
      Swal.fire("Error", "Missing session data.", "error").then(() => navigate("/search"));
    }
  }, [doctorName, hospital, sessionDate, sessionTime, bookingformId, navigate]);

  const [doctor, setDoctor] = useState(null);
  const [appointmentsCount, setAppointmentsCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState(1);
  const [submittedValues, setSubmittedValues] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loadingDoctor, setLoadingDoctor] = useState(true);
  const [loadingCount, setLoadingCount] = useState(true);

  const formattedSessionDate = sessionDate;
  const formattedSessionTime = sessionTime.length === 5 ? `${sessionTime}:00` : sessionTime;

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3000/api/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data.doctor || data))
      .catch(() => Swal.fire("Error", "Doctor fetch failed.", "error"))
      .finally(() => setLoadingDoctor(false));
  }, [id]);

  const fetchAppointmentCount = () => {
    if (!hospital || !formattedSessionDate || !formattedSessionTime) return;
    setLoadingCount(true);
    fetch(
      `http://localhost:3000/api/appointments/count/${id}?hospital=${encodeURIComponent(
        hospital
      )}&sessionDate=${formattedSessionDate}&sessionTime=${formattedSessionTime}`
    )
      .then((res) => res.json())
      .then((data) => setAppointmentsCount(data.count))
      .catch(() => Swal.fire("Error", "Failed to load count", "error"))
      .finally(() => setLoadingCount(false));
  };

  useEffect(() => {
    fetchAppointmentCount();
  }, [id, hospital, formattedSessionDate, formattedSessionTime]);

  const handleConfirmBooking = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:3000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          doctorId: doctor.id,
          doctorName,
          hospital,
          sessionDate: formattedSessionDate,
          sessionTime: formattedSessionTime,
          date: new Date().toISOString().slice(0, 19).replace("T", " "),
          ...submittedValues,
          paymentId: "FAKE_PAYMENT_ID",
          bookingformId: bookingformId,
        }),
      });

      const data = await res.json();
      
       if (!res.ok) {
        if (res.status === 409) {
          Swal.fire("Duplicate Booking", data.error, "warning");
          setShowForm(false);
          setStep(1);
          fetchAppointmentCount();
        } else {
          throw new Error(data.error || "Booking failed");
        }
        return;
      }

      Swal.fire("Success", "Appointment booked!", "success");
      setShowForm(false);
      setStep(1);
      fetchAppointmentCount();
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingDoctor) return <CircularProgress />;
  if (!doctor) return <Typography>Doctor not found</Typography>;

  return (
    <Box p={3} maxWidth="500px" mx="auto">
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4, bgcolor: "#f9f9f9" }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
             
              mb: 1,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            Dr. {doctor.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
  <strong>Hospital:</strong>{" "}
  <Box component="span" sx={{ fontWeight: "bold", color: "black" }}>
    {hospital}
  </Box>
</Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Date:</strong> {sessionDate}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Time:</strong> {sessionTime}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" sx={{ mb: 2 }}>
            Active Appointments:{" "}
            <strong style={{ color: appointmentsCount >= 5 ? "red" : "green" }}>
              {loadingCount ? "..." : `${appointmentsCount} / 5`}
            </strong>
          </Typography>

          <Button
  disabled={appointmentsCount >= 5}
  variant="contained"
  onClick={() => setShowForm(true)}
  sx={{
    mt: 2,
    backgroundColor: primaryColor,
    "&:hover": { backgroundColor: "#237d88" },
    width: "auto",        
    fontWeight: "bold",
    fontSize: "0.875rem", 
    py: 0.8,              
    px: 3,                
    borderRadius: 2,
  }}
>
  Book Appointment
</Button>
        </CardContent>
      </Card>

      <Dialog
        open={showForm}
        onClose={(event, reason) => {
          if (submitting) return;
          if (reason === "backdropClick" || reason === "escapeKeyDown") return;
          setShowForm(false);
          setStep(1);
        }}
        disableEscapeKeyDown={submitting}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent sx={{ pt: 4, pb: 3 }}>
          {step === 1 && (
            <Formik
              initialValues={{
                patientName: "",
                phone: "",
                country: "",
                nic: "",
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                setSubmittedValues(values);
                setStep(2);
              }}
            >
              {({ values, handleChange, touched, errors }) => (
                <Form>
                  {[
                    { name: "patientName", label: "Patient Name", type: "text" },
                    { name: "phone", label: "Phone", type: "text" },
                    {
                      name: "country",
                      label: "Country",
                      type: "select",
                      options: countries,
                    },
                    { name: "nic", label: "NIC", type: "text" },
                    { name: "email", label: "Email", type: "email" },
                  ].map((field) =>
                    field.type === "select" ? (
                      <TextField
                        key={field.name}
                        select
                        name={field.name}
                        label={field.label}
                        value={values[field.name]}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={touched[field.name] && Boolean(errors[field.name])}
                        helperText={touched[field.name] && errors[field.name]}
                        sx={{ mt: 2 }}
                      >
                        {field.options.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    ) : (
                      <TextField
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        value={values[field.name]}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        type={field.type}
                        error={touched[field.name] && Boolean(errors[field.name])}
                        helperText={touched[field.name] && errors[field.name]}
                        sx={{ mt: 2 }}
                      />
                    )
                  )}

                  <DialogActions sx={{ mt: 3, px: 0, justifyContent: "space-between" }}>
                    <Button
  onClick={() => setShowForm(false)}
  disabled={submitting}
  sx={{ 
    color: "red",
    fontWeight: "bold",
    "&:hover": { backgroundColor: "rgba(255,0,0,0.1)" } 
  }}
>
  Cancel
</Button>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={submitting}
                      sx={{
                        backgroundColor: primaryColor,
                        "&:hover": { backgroundColor: "#237d88" },
                        fontWeight: "bold",
                        px: 4,
                      }}
                    >
                      Next
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          )}

          {step === 2 && submittedValues && (
            <>
              <Card
                variant="outlined"
                sx={{ mb: 3, p: 3, borderRadius: 3, bgcolor: "#fafafa" }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", mb: 3, textAlign: "center", color: primaryColor }}
                  >
                    Confirm Your Booking
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap={4}
                  >
                    <Box flex="1" minWidth="220px">
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", mb: 1, borderBottom: `2px solid ${primaryColor}`, pb: 1 }}
                      >
                        Doctor Details
                      </Typography>

                      <Box mt={1}>
                        <Typography sx={{ fontWeight: "bold" }}>Date:</Typography>
                        <Typography>{sessionDate}</Typography>
                      </Box>
                      <Box mt={1}>
                        <Typography sx={{ fontWeight: "bold" }}>Time:</Typography>
                        <Typography>{sessionTime}</Typography>
                      </Box>
                      <Box mt={1}>
                        <Typography sx={{ fontWeight: "bold" }}>Doctor:</Typography>
                        <Typography>Dr. {doctorName}</Typography>
                      </Box>
                      <Box mt={1}>
                        <Typography sx={{ fontWeight: "bold" }}>Hospital:</Typography>
                        <Typography>{hospital}</Typography>
                      </Box>
                    </Box>

                    <Box flex="1" minWidth="220px">
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", mb: 1, borderBottom: `2px solid ${primaryColor}`, pb: 1 }}
                      >
                        Patient Details
                      </Typography>
                      <Box mt={1}>
                        <Typography sx={{ fontWeight: "bold" }}>Name:</Typography>
                        <Typography>{submittedValues.patientName}</Typography>
                      </Box>
                      <Box mt={1}>
                        <Typography sx={{ fontWeight: "bold" }}>Phone:</Typography>
                        <Typography>{submittedValues.phone}</Typography>
                      </Box>
                      <Box mt={1}>
                        <Typography sx={{ fontWeight: "bold" }}>NIC:</Typography>
                        <Typography>{submittedValues.nic}</Typography>
                      </Box>
                      <Box mt={1}>
                        <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
                        <Typography>{submittedValues.email}</Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Charge:
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", color: primaryColor }}
                    >
                      LKR 2500
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <DialogActions>
                <Button
                  sx={{
                    width: "120px",
                    color: primaryColor,
                    border: `2px solid ${primaryColor}`,
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#d1e7eb",
                    },
                  }}
                  onClick={() => setStep(1)}
                  disabled={submitting}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleConfirmBooking}
                  disabled={submitting}
                  sx={{
                    backgroundColor: primaryColor,
                    px: 4,
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#237d88",
                    },
                  }}
                >
                  {submitting ? "Processing..." : "Confirm Booking"}
                </Button>
              </DialogActions>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DoctorChannel;
