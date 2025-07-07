

// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

// const MyBookings = () => {
//   const { token } = useContext(AuthContext);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!token) return; // Safety check

//     axios.get("http://localhost:3000/api/appointments/my", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then((res) => {
//       setAppointments(res.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     })
//     .finally(() => setLoading(false));
//   }, [token]);

//   if (loading) return <Typography>Loading your appointments...</Typography>;

//   return (
//     <Box p={3}>
//       <Typography variant="h4" gutterBottom sx={{fontFamily:"Poppins"}}>My Bookings</Typography>
//       {appointments.length === 0 ? (
//         <Typography>No appointments found.</Typography>
//       ) : (
//         <List>
//           {appointments.map((appt) => (
//             <ListItem key={appt.id} divider>
              
//               <ListItemText
              
//                 primary={`Dr. ${appt.doctor_name} at ${appt.hospital}`}
//                 secondary={`Date: ${appt.session_date} Time: ${appt.session_time}`}
                
//               />
//             </ListItem>
//           ))}
//         </List>
//       )}
//     </Box>
//   );
// };

// export default MyBookings;


import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

const MyBookings = () => {
  const { token } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return; 

    axios
      .get("http://localhost:3000/api/appointments/my", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <Typography>Loading your appointments...</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "Poppins",fontWeight: "bold" }}>
        My Bookings
      </Typography>

      {appointments.length === 0 ? (
        <Typography sx={{ fontStyle: "italic", color: "#888" }}>No appointments found.</Typography>
        
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
  <TableRow sx={{ backgroundColor: "#B0E0E6" }}>
    {["Doctor","Specialization", "Hospital", "Date", "Time"].map((header) => (
      <TableCell key={header} sx={{ fontWeight: "bold" }}>
        {header}
      </TableCell>
    ))}
  </TableRow>
</TableHead>
            <TableBody>
              {appointments.map((appt) => (
                <TableRow key={appt.id}>
                  <TableCell>{`Dr. ${appt.doctor_name}`}</TableCell>
                  <TableCell>{appt.specialization}</TableCell>
                  <TableCell>{appt.hospital}</TableCell>
                  <TableCell>{appt.session_date}</TableCell>
                  <TableCell>{appt.session_time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default MyBookings;
