

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const MyBookings = () => {
  const { token } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return; // Safety check

    axios.get("http://localhost:3000/api/appointments/my", {
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
      <Typography variant="h4" gutterBottom sx={{fontFamily:"Poppins"}}>My Bookings</Typography>
      {appointments.length === 0 ? (
        <Typography>No appointments found.</Typography>
      ) : (
        <List>
          {appointments.map((appt) => (
            <ListItem key={appt.id} divider>
              
              <ListItemText
              
                primary={`Dr. ${appt.doctor_name} at ${appt.hospital}`}
                secondary={`Date: ${appt.session_date} Time: ${appt.session_time}`}
                
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default MyBookings;
