

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Paper,
//   Button,
// } from "@mui/material";

// // 🔍 Fetch doctors based on filters
// const fetchDoctors = async ({ name, specialization, hospital, date }) => {
//   const query = new URLSearchParams();
//   if (name) query.append("name", name);
//   if (specialization) query.append("specialization", specialization);
//   if (hospital) query.append("hospital", hospital);
//   if (date) query.append("date", date);

//   try {
//     const res = await fetch(`http://localhost:3000/api/doctors/search?${query.toString()}`);
//     const data = await res.json();

//     if (res.ok) {
//       return data.doctors;
//     } else {
//       console.error("Backend Error:", data.message);
//       return [];
//     }
//   } catch (err) {
//     console.error("Fetch Error:", err);
//     return [];
//   }
// };

// const SearchResults = () => {
//   const [results, setResults] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get query parameters from URL
//   const params = new URLSearchParams(location.search);
//   const name = params.get("doctor");
//   const specialization = params.get("specialization");
//   const hospital = params.get("hospital");
//   const date = params.get("date");

//   useEffect(() => {
//     const fetchResults = async () => {
//       const doctors = await fetchDoctors({ name, specialization, hospital, date });
//       setResults(doctors);
//     };

//     fetchResults();
//   }, [name, specialization, hospital, date]);

//   return (
//     <Container sx={{ mt: 5, pb: 8 }}>
//       <Typography
//         variant="h4"
//         gutterBottom
//         sx={{ fontFamily: "Poppins", fontSize: "40px", fontWeight: "bold", mb: 5 }}
//       >
//         Search Results
//       </Typography>

//       {results.length === 0 ? (
//         <Paper
//           sx={{
//             p: 2,
//             textAlign: "center",
//             fontStyle: "italic",
//             fontWeight: "bold",
//             color: "#808080",
//           }}
//         >
//           No Matching Doctors Found.
//         </Paper>
//       ) : (
//         <Grid container spacing={3}>
//           {results.map((doc, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card
//                 sx={{
//                   maxWidth: 300,
//                   boxShadow: 8,
//                   "&:hover": {
//                     transform: "scale(1.03)",
//                     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image={
//                     doc.photo ? `http://localhost:3000/${doc.photo}` : "/img/doc.png"
//                   }
//                   alt={doc.name}
//                 />
//                 <CardContent sx={{ backgroundColor: "#CFEFF1" }}>
//                   <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
//                     Dr. {doc.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     Specialization: {doc.specialization}
//                   </Typography>
//                   {/* Show appointment hospital if available, else doctor's hospital */}
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     Hospital: {doc.appointment_hospital || doc.hospital}
//                   </Typography>
//                   {/* Show appointment date if available */}
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     Date: {doc.session_date ? new Date(doc.session_date).toLocaleDateString() : "N/A"}
//                   </Typography>
//                   {/* Show appointment time if available */}
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     Time: {doc.session_time ? doc.session_time.slice(0,5) : "N/A"}
//                   </Typography>

//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       mt: 2,
//                       backgroundColor: "#2B909B",
//                       "&:hover": { backgroundColor: "#257E85" },
//                     }}
//                     onClick={() => navigate(`/channel/${doc.id}`)}
//                   >
//                     Channel
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// };

// export default SearchResults;


// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Paper,
//   Button,
// } from "@mui/material";

// // 🔍 Fetch doctors based on filters
// const fetchDoctors = async ({ name, specialization, hospital, date }) => {
//   const query = new URLSearchParams();
//   if (name) query.append("name", name);
//   if (specialization) query.append("specialization", specialization);
//   if (hospital) query.append("hospital", hospital);
//   if (date) query.append("date", date);

//   try {
//     const res = await fetch(`http://localhost:3000/api/doctors/search?${query.toString()}`);
//     const data = await res.json();

//     if (res.ok) {
//       return data.doctors;
//     } else {
//       console.error("Backend Error:", data.message);
//       return [];
//     }
//   } catch (err) {
//     console.error("Fetch Error:", err);
//     return [];
//   }
// };

// const SearchResults = () => {
//   const [results, setResults] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const params = new URLSearchParams(location.search);
//   const name = params.get("doctor");
//   const specialization = params.get("specialization");
//   const hospital = params.get("hospital");
//   const date = params.get("date");

//   useEffect(() => {
//     const fetchResults = async () => {
//       const doctors = await fetchDoctors({ name, specialization, hospital, date });
//       setResults(doctors);
//     };

//     fetchResults();
//   }, [name, specialization, hospital, date]);

//   return (
//     <Container sx={{ mt: 5, pb: 8 }}>
//       <Typography
//         variant="h4"
//         gutterBottom
//         sx={{ fontFamily: "Poppins", fontSize: "40px", fontWeight: "bold", mb: 5 }}
//       >
//         Search Results
//       </Typography>

//       {results.length === 0 ? (
//         <Paper
//           sx={{
//             p: 2,
//             textAlign: "center",
//             fontStyle: "italic",
//             fontWeight: "bold",
//             color: "#808080",
//           }}
//         >
//           No Matching Doctors Found.
//         </Paper>
//       ) : (
//         <Grid container spacing={3}>
//           {results.map((doc, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card
//                 sx={{
//                   maxWidth: 300,
//                   boxShadow: 8,
//                   "&:hover": {
//                     transform: "scale(1.03)",
//                     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image={
//                     doc.photo ? `http://localhost:3000/${doc.photo}` : "/img/doc.png"
//                   }
//                   alt={doc.name}
//                 />
//                 <CardContent sx={{ backgroundColor: "#CFEFF1" }}>
//                   <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
//                     Dr. {doc.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     Specialization: {doc.specialization}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     Hospital: {doc.appointment_hospital || doc.hospital}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     Date: {doc.session_date ? new Date(doc.session_date).toLocaleDateString() : "N/A"}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" gutterBottom>
//                     Time: {doc.session_time ? doc.session_time.slice(0,5) : "N/A"}
//                   </Typography>

//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       mt: 2,
//                       backgroundColor: "#2B909B",
//                       "&:hover": { backgroundColor: "#257E85" },
//                     }}
//                     onClick={() => navigate(`/channel/${doc.id}`)}
//                   >
//                     Channel
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// };

// export default SearchResults;



// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Paper,
// } from "@mui/material";

// const SearchResults = () => {
//   const [results, setResults] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const params = new URLSearchParams(location.search);
//   const doctorId = params.get("doctorId") || "";
//   const hospital = params.get("hospital") || "";
//   const sessionDate = params.get("date") || "";

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const query = new URLSearchParams();
//         if (doctorId) query.append("doctorId", doctorId);
//         if (hospital) query.append("hospital", hospital);
//         if (sessionDate) query.append("session_date", sessionDate);

//         const res = await fetch(
//           `http://localhost:3000/api/bookingform/search?${query.toString()}`
//         );

//         const data = await res.json();
//         if (res.ok) {
//           setResults(data);
//         } else {
//           setResults([]);
//         }
//       } catch (error) {
//         console.error("Error fetching:", error);
//         setResults([]);
//       }
//     };

//     fetchBookings();
//   }, [doctorId, hospital, sessionDate]);

//   return (
//     <Container sx={{ mt: 5 }}>
//       <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 5 }}>
//         Search Results
//       </Typography>

//       {results.length === 0 ? (
//         <Paper
//           sx={{
//             p: 2,
//             textAlign: "center",
//             fontStyle: "italic",
//             fontWeight: "bold",
//             color: "#808080",
//           }}
//         >
//           No Matching Bookings Found.
//         </Paper>
//       ) : (
//         <Grid container spacing={3}>
//           {results.map((booking) => (
//             <Grid item xs={12} sm={6} md={4} key={booking.id}>
//               <Card
//                 sx={{
//                   maxWidth: 350,
//                   boxShadow: 8,
//                   "&:hover": {
//                     transform: "scale(1.03)",
//                     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
//                   },
//                 }}
//               >
//                 <CardContent sx={{ backgroundColor: "#CFEFF1" }}>
//                   <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
//                     Booking ID: {booking.id}
//                   </Typography>
//                   <Typography variant="body2">Doctor ID: {booking.doctor_id}</Typography>
//                   <Typography variant="body2">Hospital: {booking.hospital}</Typography>
//                   <Typography variant="body2">
//                     Date: {new Date(booking.session_date).toLocaleDateString()}
//                   </Typography>
//                   <Typography variant="body2">Time: {booking.session_time?.slice(0, 5)}</Typography>

//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 2, backgroundColor: "#2B909B" }}
//                     onClick={() => navigate(`/channel/${booking.doctor_id}`)}
//                   >
//                     Channel
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// };

// export default SearchResults;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Paper,
} from "@mui/material";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const doctorId = params.get("doctorId") || "";
  const hospital = params.get("hospital") || "";
  const sessionDate = params.get("date") || "";
  const specialization = params.get("specialization") || "";
  const doctorName = params.get("doctor_name") || "";

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const query = new URLSearchParams();
        if (doctorId) query.append("doctorId", doctorId);
        if (hospital) query.append("hospital", hospital);
        if (sessionDate) query.append("session_date", sessionDate);
        if (specialization) query.append("specialization", specialization);
        if (doctorName) query.append("doctor_name", doctorName);

        const res = await fetch(
          `http://localhost:3000/api/bookingform/search?${query.toString()}`
        );

        const data = await res.json();
       
        if (res.ok) {
  const today = new Date().setHours(0, 0, 0, 0);

  const upcoming = data.filter((booking) => {
    const bookingDate = new Date(booking.session_date).setHours(0, 0, 0, 0);
    return bookingDate >= today;
  });

  setResults(upcoming);
} else {
  setResults([]);
}
      } catch (error) {
        console.error("Error fetching:", error);
        setResults([]);
      }
    };

    fetchBookings();
  }, [doctorId, hospital, sessionDate, specialization, doctorName]);

  return (
    <Container sx={{ mt: 5, pb: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 5 }}>
        Search Results
      </Typography>

      {results.length === 0 ? (
        <Paper
          sx={{
            p: 2,
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#808080",
          }}
        >
          No Matching Bookings Found.
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {results.map((booking) => (
            <Grid item xs={12} sm={6} md={4} key={booking.id}>
              <Card
                sx={{
                  maxWidth: 300,
                  boxShadow: 8,
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={
                    booking.photo
                      ? `http://localhost:3000/${booking.photo}`
                      : "/img/doc.png"
                  }
                  alt={booking.doctor_name || "Doctor"}
                />
                <CardContent sx={{ backgroundColor: "#CFEFF1" }}>
                  <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
                    Dr. {booking.doctor_name || "Not Available"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Specialization: {booking.specialization || "Unknown"}
                  </Typography>
                  <Typography variant="body2">Hospital: {booking.hospital}</Typography>
                  <Typography variant="body2">
                    Date: {new Date(booking.session_date).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2">
                    Time: {booking.session_time?.slice(0, 5)}
                  </Typography>

                  
      <Button
  fullWidth
  variant="contained"
  sx={{ mt: 2, backgroundColor: "#2B909B" }}
  onClick={() => navigate(`/channel/${booking.doctor_id}`, {
    state: {
      doctorName: booking.doctor_name,
      hospital: booking.hospital,
      sessionDate: booking.session_date,
      sessionTime: booking.session_time,
       bookingformId: booking.id
    },
  })}
>
  Channel
</Button>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SearchResults;


