

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
  Paper,
  Chip,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { token } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:3000/api/appointments/my", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [token]);

  // delete only from table not in database table
  const handleHide = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't see this booking anymore!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setAppointments((prev) => prev.filter((appt) => appt.id !== id));
        Swal.fire(
          "Delete!",
          "This booking has been removed from your view.",
          "success"
        );
      }
    });
  };

  if (loading)
    return <Typography>Loading your appointments...</Typography>;

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        My Bookings
      </Typography>

      {appointments.length === 0 ? (
        <Typography sx={{ fontStyle: "italic", color: "#888" }}>
          No appointments found.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#B0E0E6" }}>
                {[
                  "Doctor",
                  "Specialization",
                  "Hospital",
                  "Date",
                  "Time",
                  "Status",
                  "Actions",
                ].map((header) => (
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
                  
                  <TableCell>
                    {appt.status === "cancelled" ? (
                      <Chip label="Cancelled"  sx={{ 
        bgcolor: '#fdecea', 
        color: '#d32f2f'    
      }}  />
                    ) : (
                      <Chip label="Active" sx={{ 
        bgcolor: '#e8f5e9', 
        color: '#388e3c'    
      }}  />
                    )}
                  </TableCell>
                  <TableCell>
                   <IconButton
                      color="error"
                      onClick={() => handleHide(appt.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    </TableCell>
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

