


import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Card,
  CardContent,
  CircularProgress,
  Divider
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
    .matches(
      /^([0-9]{9}[vV]|[0-9]{12})$/,
      "NIC must be 9 digits + V/v or 12 digits"
    )
    .required("NIC is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});


const DoctorChannel = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const { doctorName, hospital, sessionDate, sessionTime, bookingformId } = state || {};

  useEffect(() => {
    if (!doctorName || !hospital || !sessionDate || !sessionTime || !bookingformId) {
      Swal.fire("Error", "Missing session data.", "error").then(() =>
        navigate("/search")
      );
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
      if (!res.ok) throw new Error(data.error || "Booking failed");

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
    <Box p={3} maxWidth="600px" mx="auto">
      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontStyle: "italic", mb: 1, fontWeight:"bold" }}>
            Dr. {doctor.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Hospital:</strong> {hospital}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Date:</strong> {sessionDate}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Time:</strong> {sessionTime}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1">
            Active Appointments:{" "}
            <strong>{loadingCount ? "..." : appointmentsCount} / 5</strong>
          </Typography>

          <Button
            disabled={appointmentsCount >= 5}
            variant="contained"
            onClick={() => setShowForm(true)}
            sx={{ mt: 2 }}
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
      >
        {/* <DialogTitle>Book Appointment</DialogTitle> */}
<DialogContent>
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
          <TextField
            name="patientName"
            label="Patient Name"
            value={values.patientName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={touched.patientName && !!errors.patientName}
            helperText={touched.patientName && errors.patientName}
          />
          <TextField
            name="phone"
            label="Phone"
            value={values.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={touched.phone && !!errors.phone}
            helperText={touched.phone && errors.phone}
          />
          <TextField
            select
            name="country"
            label="Country"
            value={values.country}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={touched.country && !!errors.country}
            helperText={touched.country && errors.country}
          >
            {countries.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="nic"
            label="NIC"
            value={values.nic}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={touched.nic && !!errors.nic}
            helperText={touched.nic && errors.nic}
          />
          <TextField
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <DialogActions sx={{ mt: 1 }}>
            <Button onClick={() => setShowForm(false)}>Cancel</Button>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  )}

 {step === 2 && submittedValues && (
  <>
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2,textAlign: "center" }}>
          Confirm Your Booking
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={4}
        >
          {/* Doctor Details LEFT */}
          <Box flex="1" minWidth="200px">
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
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

          {/* Patient Details RIGHT */}
          <Box flex="1" minWidth="200px">
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
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

        <Divider sx={{ my: 2 }} />

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Charge:
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            LKR 2500
          </Typography>
        </Box>
      </CardContent>
    </Card>

    <DialogActions>
      <Button sx={{width: "100px",color: "#2B909B", border: "2px solid #2B909B"}} onClick={() => setStep(1)} disabled={submitting}>Back</Button>
      <Button
        variant="contained"
        onClick={handleConfirmBooking}
        disabled={submitting}
        sx={{backgroundColor: "#2B909B"}}
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

