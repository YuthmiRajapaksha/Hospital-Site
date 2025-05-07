// // Pages/ChannelDoctor/HospitalDashboards.js

// import React, { useState, useEffect } from "react";
// import { Container, Paper, Typography, Grid, TextField, Autocomplete, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const HospitalDashboards = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [doctor, setDoctor] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [hospital, setHospital] = useState("");
//   const [date, setDate] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDoctorsAndSpecializations = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/doctors");
//         const data = await response.json();
//         if (response.ok) {
//           setDoctors(data.doctors.map(doc => doc.name));
//           setSpecializations([...new Set(data.doctors.map(doc => doc.specialization))]);
//         } else {
//           console.error("Error fetching doctors");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchDoctorsAndSpecializations();
//   }, []);

//   const handleSearch = () => {
//     navigate("/results", {
//       state: { doctor, specialization, hospital, date }
//     });
//   };

//   return (
//     <>
//       <div style={{ width: "100%", height: "350px", background: "#f0f0f0", overflow: "hidden" }}>
//         <img src="/img/h5.jpg" alt="Banner" style={{ width: "100%", height: "350px", objectFit: "cover", display: "block", filter: "saturate(0.9)" }} />
//       </div>

//       <Container sx={{ mt: 4, mb: 4, maxWidth: "lg" }}>
//         <Paper elevation={10} sx={{ p: 4, textAlign: "center" }}>
//           <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontFamily: "Monospace" }}>
//             CHANNEL YOUR DOCTOR
//           </Typography>
//           <Grid container spacing={2} justifyContent="center">
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={doctors}
//                 value={doctor}
//                 onChange={(event, newValue) => setDoctor(newValue)}
//                 renderInput={(params) => <TextField {...params} label="Doctor Name" fullWidth />}
//               />
//             </Grid>

//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={specializations}
//                 value={specialization}
//                 onChange={(event, newValue) => setSpecialization(newValue)}
//                 renderInput={(params) => <TextField {...params} label="Specialization" fullWidth />}
//               />
//             </Grid>

//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={["Piliyandala", "Maharagama", "Gampaha"]}
//                 value={hospital}
//                 onChange={(event, newValue) => setHospital(newValue)}
//                 renderInput={(params) => <TextField {...params} label="Hospital Branch" fullWidth />}
//               />
//             </Grid>

//             <Grid item xs={12} sm={3}>
//               <TextField
//                 fullWidth
//                 type="date"
//                 label="Date"
//                 InputLabelProps={{ shrink: true }}
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             variant="contained"
//             sx={{
//               width: "170px",
//               backgroundColor: "#2B909B",
//               mt: 3,
//               fontSize: "16px",
//               fontWeight: "bold",
//               '&:hover': { backgroundColor: '#4da6a9' },
//             }}
//             onClick={handleSearch}
//           >
//             SEARCH
//           </Button>
//         </Paper>
//       </Container>
//     </>
//   );
// };

// export default HospitalDashboards;
