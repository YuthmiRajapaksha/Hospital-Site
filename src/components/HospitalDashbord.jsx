

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

  const isSearchDisabled = !doctorId && !specialization && !hospital && !date;


  useEffect(() => {
    
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
      
      <div style={{ width: "100%", height: "350px", background: "#f0f0f0", overflow: "hidden" }}>
        <img
          src="/img/h5.jpg"
          alt="Banner"
          style={{ width: "100%", height: "350px", objectFit: "cover", display: "block", filter: "saturate(0.9)" }}
        />
      </div>

    
      {userName && (
        <Typography variant="h6" sx={{ position: "absolute", top: 15, right: 30, color: "#2B909B", fontWeight: "bold" }}>
          Hi, {userName}! Welcome back.
        </Typography>
      )}

      
      <Container sx={{ mt: 4, mb: 4, maxWidth: "lg" }}>
        <Paper elevation={10} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontFamily: "Monospace" }}>
            <u>CHANNEL YOUR DOCTOR</u>
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
                inputProps={{
                min: new Date().toISOString().split("T")[0], // disable past dates
                }}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onKeyDown={(e) => e.preventDefault()} 
                />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={isSearchDisabled}
            sx={{ width: "170px", backgroundColor: "#2B909B", mt: 3, fontSize: "16px", fontWeight: "bold",
        "&:disabled": { backgroundColor: "#e0e0e0" } }}
          >
            SEARCH
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default HospitalDashboard;

