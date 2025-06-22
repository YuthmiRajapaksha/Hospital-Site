// import React, { useState, useEffect } from "react";
// import { Container, Paper, Typography, Grid, TextField, Autocomplete, Button } from "@mui/material";

// const HospitalDashboard = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [doctor, setDoctor] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [hospital, setHospital] = useState("");
//   const [date, setDate] = useState("");

//   useEffect(() => {
//     // Fetch doctors and specializations from the backend
//     const fetchDoctorsAndSpecializations = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/doctors");
//         const data = await response.json();
//         if (response.ok) {
//           setDoctors(data.doctors.map(doc => doc.name)); // Extract doctor names
//           setSpecializations([...new Set(data.doctors.map(doc => doc.specialization))]); // Unique specializations
//         } else {
//           console.error("Error fetching data");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchDoctorsAndSpecializations();
//   }, []);

//   return (
//     <>
//       {/* Banner Section */}
//       <div style={{ width: "100%", height: "350px", background: "#f0f0f0", overflow: "hidden" }}>
//         <img src="/img/h5.jpg" alt="Banner" style={{ width: "100%", height: "350px", objectFit: "cover", display: "block", filter: "saturate(0.9)" }} />
//       </div>

//       {/* Form Section */}
//       <Container sx={{ mt: 4, mb: 4, maxWidth: "lg" }}>
//         <Paper elevation={10} sx={{ p: 4, textAlign: "center" }}>
//           <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontFamily: "Monospace" }}>
//             CHANNEL YOUR DOCTOR
//           </Typography>
//           <Grid container spacing={2} justifyContent="center">
//             {/* Doctor Name - Searchable & Typable */}
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={doctors}
//                 value={doctor}
//                 onChange={(event, newValue) => setDoctor(newValue)}
//                 renderInput={(params) => <TextField {...params} label="Doctor Name" fullWidth />}
//               />
//             </Grid>

//             {/* Specialization - Searchable & Typable */}
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={specializations}
//                 value={specialization}
//                 onChange={(event, newValue) => setSpecialization(newValue)}
//                 renderInput={(params) => <TextField {...params} label="Specialization" fullWidth />}
//               />
//             </Grid>

//             {/* Hospital Branch - Static Options */}
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={["Piliyandala", "Maharagama", "Gampaha"]}
//                 value={hospital}
//                 onChange={(event, newValue) => setHospital(newValue)}
//                 renderInput={(params) => <TextField {...params} label="Hospital Branch" fullWidth />}
//               />
//             </Grid>

//             {/* Date Selection */}
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
//               '&:hover': {
//               backgroundColor: '#4da6a9',
//             },
//             }}
//           >
//             SEARCH
//           </Button>
//         </Paper>
//       </Container>
//     </>
//   );
// };

// export default HospitalDashboard;


// src/pages/HospitalDashboard.jsx
import React, { useState, useEffect } from "react";
import {
  Container, Paper, Typography, Grid, TextField, Autocomplete, Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HospitalDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [hospital, setHospital] = useState("");
  const [date, setDate] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get user name from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) {
      setUserName(user.name);
    }

    const fetchDoctors = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/doctors");
        const data = await res.json();
        if (res.ok) {
          setDoctors(data.doctors);
          setSpecializations([...new Set(data.doctors.map(doc => doc.specialization))]);
        }
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };

    fetchDoctors();
  }, []);

  const handleSearch = () => {
    const query = new URLSearchParams({
      doctorId,
      specialization,
      hospital,
      date,
    }).toString();

    navigate(`/results?${query}`);
  };

  return (
    <>
      {/* Banner */}
      <div style={{ width: "100%", height: "350px", background: "#f0f0f0", overflow: "hidden" }}>
        <img
          src="/img/h5.jpg"
          alt="Banner"
          style={{ width: "100%", height: "350px", objectFit: "cover", display: "block", filter: "saturate(0.9)" }}
        />
      </div>

      {/* Welcome Message */}
      {userName && (
        <Typography variant="h6" sx={{ position: "absolute", top: 15, right: 30, color: "#2B909B", fontWeight: "bold" }}>
          Hi, {userName}! Welcome back.
        </Typography>
      )}

      {/* Search Form */}
      <Container sx={{ mt: 4, mb: 4, maxWidth: "lg" }}>
        <Paper elevation={10} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontFamily: "Monospace" }}>
            CHANNEL YOUR DOCTOR
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={3}>
              <Autocomplete
                options={doctors}
                getOptionLabel={(option) => option.name || ""}
                value={doctors.find((doc) => doc.id === doctorId) || null}
                onChange={(e, newValue) => setDoctorId(newValue ? newValue.id : "")}
                renderInput={(params) => <TextField {...params} label="Doctor Name" fullWidth />}
                ListboxProps={{ style: { maxHeight: "100px", overflow: "auto" } }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Autocomplete
                freeSolo
                options={specializations}
                value={specialization}
                onInputChange={(e, val) => setSpecialization(val)}
                renderInput={(params) => <TextField {...params} label="Specialization" fullWidth />}
                ListboxProps={{ style: { maxHeight: "100px", overflow: "auto" } }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Autocomplete
                freeSolo
                options={["Piliyandala", "Maharagama", "Gampaha"]}
                value={hospital}
                onInputChange={(e, val) => setHospital(val)}
                renderInput={(params) => <TextField {...params} label="Hospital Branch" fullWidth />}
                ListboxProps={{ style: { maxHeight: "100px", overflow: "auto" } }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{ width: "170px", backgroundColor: "#2B909B", mt: 3, fontSize: "16px", fontWeight: "bold" }}
          >
            SEARCH
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default HospitalDashboard;







// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Paper,
//   Typography,
//   Grid,
//   TextField,
//   Autocomplete,
//   Button,
// } from "@mui/material";
// // import { createFilterOptions } from '@mui/material/Autocomplete';
// import { useNavigate } from "react-router-dom";

// const HospitalDashboard = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [doctor, setDoctor] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [hospital, setHospital] = useState("");
//   const [date, setDate] = useState("");
//   const navigate = useNavigate();

//   // Custom filter: only show options starting with the input
// // const filterOptions = createFilterOptions({
// //   matchFrom: "start",
// //   stringify: (option) => option,
// // });

//   useEffect(() => {
//     const fetchDoctorsAndSpecializations = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/doctors");
//         const data = await response.json();
//         if (response.ok) {
//           setDoctors(data.doctors.map((doc) => doc.id));
//           setSpecializations([
//             ...new Set(data.doctors.map((doc) => doc.specialization)),
//           ]);
//         } else {
//           console.error("Error fetching data");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchDoctorsAndSpecializations();
//   }, []);

//   const handleSearch = () => {
//     // Navigate to /results with query parameters
//     const query = new URLSearchParams({
//       doctor,
//       specialization,
//       hospital,
//       date,
//     }).toString();
//     navigate(`/results?${query}`);
//   };

//   return (
//     <>
//       {/* Banner */}
//       <div
//         style={{
//           width: "100%",
//           height: "350px",
//           background: "#f0f0f0",
//           overflow: "hidden",
//         }}
//       >
//         <img
//           src="/img/h5.jpg"
//           alt="Banner"
//           style={{
//             width: "100%",
//             height: "350px",
//             objectFit: "cover",
//             display: "block",
//             filter: "saturate(0.9)",
//           }}
//         />
//       </div>

//       {/* Search Form */}
//       <Container sx={{ mt: 4, mb: 4, maxWidth: "lg" }}>
//         <Paper elevation={10} sx={{ p: 4, textAlign: "center" }}>
//           <Typography
//             variant="h5"
//             fontWeight="bold"
//             gutterBottom
//             sx={{ fontFamily: "Monospace" }}
//           >
//             CHANNEL YOUR DOCTOR
//           </Typography>
//           <Grid container spacing={2} justifyContent="center">
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={doctors}
//                 value={doctor}
//                 onInputChange={(e, val) => setDoctor(val)}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Doctor Name" fullWidth />
//                 )}
//                 // filterOptions={filterOptions}
//                 ListboxProps={{
//                   style: {
//                     maxHeight: '100px', // Limit height
//                     overflow: 'auto',   // Enable scroll
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={specializations}
//                 value={specialization}
//                 onInputChange={(e, val) => setSpecialization(val)}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Specialization" fullWidth />
//                 )}
//                 // filterOptions={filterOptions}
//                 ListboxProps={{
//                   style: {
//                     maxHeight: "100px",
//                     overflow: "auto",
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={["Piliyandala", "Maharagama", "Gampaha"]}
//                 value={hospital}
//                 onInputChange={(e, val) => setHospital(val)}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Hospital Branch" fullWidth />
//                 )}
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
//             onClick={handleSearch}
//             sx={{
//               width: "170px",
//               backgroundColor: "#2B909B",
//               mt: 3,
//               fontSize: "16px",
//               fontWeight: "bold",
//               "&:hover": {
//                 backgroundColor: "#4da6a9",
//               },
//             }}
//           >
//             SEARCH
//           </Button>
//         </Paper>
//       </Container>
//     </>
//   );
// };

// export default HospitalDashboard;







//workinggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Container, TextField, MenuItem,Autocomplete, Grid, Paper, Box } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Footer from "./Footer"


// const specializations = ["Cardiology", "Dermatology", "Neurology", "Pediatrics"];
// const hospitals = ["Piliyandala", "Maharagama", "Gampaha"];
// const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Lee"];



// const HospitalDashboard = () => {
//   const [doctor, setDoctor] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [hospital, setHospital] = useState("");
//   const [date, setDate] = useState("");

//   return (
//     <>
//       {/* Banner Section */}
//       <div 
//         style={{
//           width: "100%", 
//           height: "350px", 
//           background: "#f0f0f0", 
//           overflow: "hidden"
//         }}
//       >
//         <img 
//           src="/img/h5.jpg" 
//           alt="Banner" 
//           style={{
//             width: "100%", 
//             height: "350px", 
//             objectFit: "cover", 
//             display: "block", 
//             filter: "saturate(0.9)"
//           }} 
//         />
//       </div>

//       {/* Form Section */}
//       <Container sx={{ mt: 4, mb: 4, maxWidth: "lg" }}>
//         <Paper elevation={10} sx={{ p: 4, textAlign: "center" }}>
//           <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontFamily: "Monospace" }}>
//             CHANNEL YOUR DOCTOR
//           </Typography>
//           <Grid container spacing={2} justifyContent="center">
//             {/* Doctor Name - Searchable & Typable */}
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={doctors}
//                 value={doctor}
//                 onChange={(event, newValue) => setDoctor(newValue)}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Doctor Name" fullWidth />
//                 )}
//               />
//             </Grid>

//             {/* Specialization - Searchable & Typable */}
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={specializations}
//                 value={specialization}
//                 onChange={(event, newValue) => setSpecialization(newValue)}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Specialization" fullWidth />
//                 )}
//               />
//             </Grid>

//             {/* Hospital Branch - Searchable & Typable */}
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={hospitals}
//                 value={hospital}
//                 onChange={(event, newValue) => setHospital(newValue)}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Hospital Branch" fullWidth />
//                 )}
//               />
//             </Grid>

//             {/* Date Selection */}
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
//             }}
//           >
//             SEARCH
//           </Button>
//         </Paper>
//       </Container>

//          {/* Footer Section */}
//          {/* <Footer /> */}

//     </>
//   );
// };

// export default HospitalDashboard;




// import React, { useState, useEffect } from "react";
// import { Container, Grid, Paper, Typography, TextField, Button, Autocomplete } from "@mui/material";

// const hospitals = ["Piliyandala", "Maharagama", "Gampaha"];

// const HospitalDashboard = () => {
//   const [doctor, setDoctor] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [hospital, setHospital] = useState("");
//   const [date, setDate] = useState("");
//   const [doctorData, setDoctorData] = useState([]); // State to store fetched doctors
//   const [specializations, setSpecializations] = useState([]); // State to store specializations

//   // Fetch specializations from backend
//   useEffect(() => {
//     const fetchSpecializations = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/specializations"); // Fetch specializations
//         const data = await response.json();
//         if (response.ok) {
//           setSpecializations(data.specializations); // Update state with fetched specializations
//         } else {
//           console.error("Error fetching specializations");
//         }
//       } catch (error) {
//         console.error("Error fetching specializations:", error);
//       }
//     };
//     fetchSpecializations();
//   }, []);

//   // Fetch doctors based on specialization
//   useEffect(() => {
//     if (specialization) {
//       const fetchDoctorsBySpecialization = async () => {
//         try {
//           const response = await fetch(`http://localhost:3000/api/doctors?specialization=${specialization}`); // Fetch doctors by specialization
//           const data = await response.json();
//           if (response.ok) {
//             setDoctorData(data.doctors); // Update state with fetched doctors
//           } else {
//             console.error("Error fetching doctors");
//           }
//         } catch (error) {
//           console.error("Error fetching doctors:", error);
//         }
//       };
//       fetchDoctorsBySpecialization();
//     }
//   }, [specialization]); // This will trigger whenever specialization changes

//   return (
//     <>
//       {/* Banner Section */}
//       <div
//         style={{
//           width: "100%",
//           height: "350px",
//           background: "#f0f0f0",
//           overflow: "hidden",
//         }}
//       >
//         <img
//           src="/img/h5.jpg"
//           alt="Banner"
//           style={{
//             width: "100%",
//             height: "350px",
//             objectFit: "cover",
//             display: "block",
//             filter: "saturate(0.9)",
//           }}
//         />
//       </div>

//       {/* Form Section */}
//       <Container sx={{ mt: 4, mb: 4, maxWidth: "lg" }}>
//         <Paper elevation={10} sx={{ p: 4, textAlign: "center" }}>
//           <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontFamily: "Monospace" }}>
//             CHANNEL YOUR DOCTOR
//           </Typography>
//           <Grid container spacing={2} justifyContent="center">
//             {/* Doctor Name - Searchable & Typable */}
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={doctorData.map((doc) => doc.name)} // Populate doctors based on selected specialization
//                 value={doctor}
//                 onChange={(event, newValue) => setDoctor(newValue)}
//                 renderInput={(params) => <TextField {...params} label="Doctor Name" fullWidth />}
//               />
//             </Grid>

//             {/* Specialization - Searchable & Typable */}
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={specializations} // Use fetched specializations
//                 value={specialization}
//                 onChange={(event, newValue) => setSpecialization(newValue)}
//                 renderInput={(params) => <TextField {...params} label="Specialization" fullWidth />}
//               />
//             </Grid>

//             {/* Hospital Branch - Searchable & Typable */}
//             <Grid item xs={12} sm={3}>
//               <Autocomplete
//                 freeSolo
//                 options={hospitals}
//                 value={hospital}
//                 onChange={(event, newValue) => setHospital(newValue)}
//                 renderInput={(params) => <TextField {...params} label="Hospital Branch" fullWidth />}
//               />
//             </Grid>

//             {/* Date Selection */}
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
//             }}
//           >
//             SEARCH
//           </Button>
//         </Paper>
//       </Container>
//     </>
//   );
// };

// export default HospitalDashboard;

