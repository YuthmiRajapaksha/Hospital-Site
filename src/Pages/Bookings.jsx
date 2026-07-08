
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
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  Button,
  TablePagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Swal from "sweetalert2";
import Tooltip from "@mui/material/Tooltip";

const MyBookings = () => {
  // const { token } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
const token = auth?.token;
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const [filterDoctor, setFilterDoctor] = useState("");
  const [filterHospital, setFilterHospital] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  //  Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

//   useEffect(() => {
//     if (!token) return;

//     axios
//       .get("http://localhost:3000/api/appointments/my/${userId}", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         setAppointments(res.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       })
//       .finally(() => setLoading(false));
//   }, [token]);

// useEffect(() => {
//   const userId = localStorage.getItem("userId");

//   if (!userId) {
//     console.error("User ID not found");
//     setLoading(false);
//     return;
//   }

//   axios
//     .get(`http://localhost:3000/api/appointments/my/${userId}`)
//     .then((res) => {
//       console.log("Appointments:", res.data);
//       setAppointments(res.data);
//     })
//     .catch((err) => {
//       console.error("Error fetching appointments:", err);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, []);

// useEffect(() => {
//   if (!token) {
//     setLoading(false);
//     return;
//   }

//   axios
//     .get("http://localhost:3000/api/appointments/my", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       console.log("Appointments:", res.data);
//       setAppointments(res.data);
//     })
//     .catch((err) => {
//       console.error("Error fetching appointments:", err);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, [token]);

useEffect(() => {
  console.log("Token:", token);

  if (!token) {
    console.log("No token found");
    setLoading(false);
    return;
  }

  axios
    .get("http://localhost:3000/api/appointments/my", {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer ${auth.token}`
      },
    })
    .then((res) => {
      console.log("Appointments from API:", res.data);
      setAppointments(res.data);
    })
    .catch((err) => {
      console.error("API Error:", err.response?.data || err);
    })
    .finally(() => {
      setLoading(false);
    });
}, [token]);

  // const handleHide = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't see this booking anymore!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       setAppointments((prev) => prev.filter((appt) => appt.id !== id));
  //       Swal.fire(
  //         "Deleted!",
  //         "This booking has been removed from your view.",
  //         "success"
  //       );
  //     }
  //   });
  // };

  if (loading) {
    return <Typography>Loading your appointments...</Typography>;
  }

  const hospitalOptions = [
    ...new Set(appointments.map((appt) => appt.hospital)),
  ];

  //  Apply filters
  const filteredAppointments = appointments
    .filter((appt) =>
      appt.doctor_name.toLowerCase().includes(filterDoctor.toLowerCase())
    )
    .filter((appt) =>
      filterHospital ? appt.hospital === filterHospital : true
    )
    .filter((appt) =>
      filterStatus
        ? filterStatus === "active"
          ? appt.status !== "cancelled"
          : appt.status === "cancelled"
        : true
    );

  //  Paginate after filtering
  const paginatedAppointments = filteredAppointments.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };



  const isCancelDisabled = (appointment) => {
  const appointmentDateTime = new Date(
    `${appointment.session_date}T${appointment.session_time.substring(0,5)}`
  );

  const now = new Date();

  const diffInMilliseconds = appointmentDateTime - now;

  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

  // Disable cancel when less than or equal to 2 hours remaining
  return diffInHours <= 2;
};

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        My Bookings
      </Typography>

      {/*  Filters + Reset */}
      {/* <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mb: 2 }}
      >
        <TextField
          label="Filter by Doctor Name"
          variant="outlined"
          value={filterDoctor}
          onChange={(e) => setFilterDoctor(e.target.value)}
        />

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Hospital</InputLabel>
          <Select
            label="Hospital"
            value={filterHospital}
            onChange={(e) => setFilterHospital(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {hospitalOptions.map((hospital) => (
              <MenuItem key={hospital} value={hospital}>
                {hospital}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<RestartAltIcon />}
          onClick={() => {
            setFilterDoctor("");
            setFilterHospital("");
            setFilterStatus("");
          }}
        >
          Reset Filters
        </Button>
      </Stack> */}

      <Stack
  direction={{ xs: "column", md: "row" }}
  spacing={2}
  sx={{ mb: 3 }}
>
  <TextField
    label="Doctor Name / Specialization"
    value={filterDoctor}
    onChange={(e) => setFilterDoctor(e.target.value)}
     sx={{
    flex: 1,
    "& .MuiOutlinedInput-root": {
      height: 50,
    },
  }}
  />

  <FormControl  sx={{
    flex: 1,
    "& .MuiOutlinedInput-root": {
      height: 50,
    },
  }}>
    <InputLabel>Hospital</InputLabel>
    <Select
      value={filterHospital}
      label="Hospital"
      onChange={(e) => setFilterHospital(e.target.value)}
    >
      <MenuItem value="">All Hospitals</MenuItem>
      {hospitalOptions.map((hospital) => (
        <MenuItem key={hospital} value={hospital}>
          {hospital}
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  <FormControl  sx={{
    flex: 1,
    "& .MuiOutlinedInput-root": {
      height: 50,
    },
  }}>
    <InputLabel>Status</InputLabel>
    <Select
      value={filterStatus}
      label="Status"
      onChange={(e) => setFilterStatus(e.target.value)}
    >
      <MenuItem value="">All Status</MenuItem>
      <MenuItem value="active">Active</MenuItem>
      <MenuItem value="cancelled">Cancelled</MenuItem>
    </Select>
  </FormControl>

  {/* <Button
    variant="contained"
    startIcon={<RestartAltIcon />}
    onClick={() => {
      setFilterDoctor("");
      setFilterHospital("");
      setFilterStatus("");
    }}
    sx={{
      flex: 1,
      height: 56,
    }}
  >
    Reset
  </Button> */}
  <Button
  variant="contained"
  startIcon={<RestartAltIcon />}
  onClick={() => {
    setFilterDoctor("");
    setFilterHospital("");
    setFilterStatus("");
  }}
  sx={{
    flex: 0.5, // smaller than the others
    height: 50,
    whiteSpace: "nowrap",
     backgroundColor: '#187984',
  }}
>
  Reset
</Button>
</Stack>

      {filteredAppointments.length === 0 ? (
        <Typography sx={{ fontStyle: "italic", color: "#888" }}>
          No appointments found.
        </Typography>
      ) : (
        <>
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
                    "Action"
                   
                  ].map((header) => (
                    <TableCell key={header} sx={{ fontWeight: "bold" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedAppointments.map((appt) => (
                  <TableRow key={appt.id}>
                    <TableCell>{`Dr. ${appt.doctor_name}`}</TableCell>
                    <TableCell>{appt.specialization}</TableCell>
                    <TableCell>{appt.hospital}</TableCell>
                    <TableCell>{appt.session_date}</TableCell>
                    <TableCell>{appt.session_time}</TableCell>
                    <TableCell>
                      {appt.status === "cancelled" ? (
                        <Chip
                          label="Cancelled"
                          sx={{
                            bgcolor: "#fdecea",
                            color: "#d32f2f",
                          }}
                        />
                      ) : (
                        <Chip
                          label="Active"
                          sx={{
                            bgcolor: "#e8f5e9",
                            color: "#388e3c",
                          }}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Tooltip
  title={
    isCancelDisabled(appt)
      ? "Cancellation is not allowed within 2 hours of the appointment"
      : "Cancel appointment"
  }
>


                    <Button
  variant="outlined"
  color="error"
  // disabled={isDisabled} // disable when true
  // disabled={disabledButtons.includes(appt.id)}
  disabled={
  disabledButtons.includes(appt.id) ||
  isCancelDisabled(appt)
}
  onClick={async () => {
    const confirmed = await Swal.fire({
      title: "Cancel Appointment?",
      text: "Are you sure you want to cancel this appointment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it",
    });

    if (confirmed.isConfirmed) {
      const res = await fetch(
        `http://localhost:3000/api/appointments/cancelByPatient/${appt.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // if (res.ok) {
      //   Swal.fire("Cancelled!", "Your appointment was cancelled.", "success");
      //   // setIsDisabled(true); //  disable button after success
      //   setDisabledButtons((prev) => [...prev, appt.id]);
      // } 
      if (res.ok) {
  Swal.fire("Cancelled!", "Your appointment was cancelled.", "success");

  setAppointments((prev) =>
    prev.map((a) =>
      a.id === appt.id ? { ...a, status: "cancelled" } : a
    )
  );
}
      
      else {
        Swal.fire("Error", "Could not cancel appointment.", "error");
      }
    }
  }}
>
  Cancel
</Button>
</Tooltip>


                    </TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/*  Pagination Controls */}
          <TablePagination
            component="div"
            count={filteredAppointments.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </>
      )}
    </Box>
  );
};

export default MyBookings;




//  import React, { useEffect, useState } from "react";
//  import axios from "axios";

// const MyBookings = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//  useEffect(() => {
//   const userId = localStorage.getItem("userId");

//   console.log("userId =", userId);

//   axios
//     .get(`http://localhost:3000/api/appointments/my/${userId}`)
//     .then((res) => {
//       console.log("API Response:", res.data);
//       setAppointments(res.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }, []);

//   console.log("Appointments State:", appointments);

//   if (loading) {
//     return <div>Loading your appointments...</div>;
//   }

//   return (
//     <div>
//       <h2>My Bookings</h2>

//       {appointments.length === 0 ? (
//         <p>No appointments found.</p>
//       ) : (
//         appointments.map((appt) => (
//           <div key={appt.id}>
//             <p>Doctor: {appt.doctor_name}</p>
//             <p>Hospital: {appt.hospital}</p>
//             <p>Date: {appt.session_date}</p>
//             <hr />
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyBookings;
