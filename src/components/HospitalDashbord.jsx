import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, TextField, MenuItem,Autocomplete, Grid, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer"


const specializations = ["Cardiology", "Dermatology", "Neurology", "Pediatrics"];
const hospitals = ["Piliyandala", "Maharagama", "Gampaha"];
const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Lee"];



const HospitalDashboard = () => {
  const [doctor, setDoctor] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [hospital, setHospital] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      {/* Banner Section */}
      <div 
        style={{
          width: "100%", 
          height: "350px", 
          background: "#f0f0f0", 
          overflow: "hidden"
        }}
      >
        <img 
          src="/img/h5.jpg" 
          alt="Banner" 
          style={{
            width: "100%", 
            height: "350px", 
            objectFit: "cover", 
            display: "block", 
            filter: "saturate(0.9)"
          }} 
        />
      </div>

      {/* Form Section */}
      <Container sx={{ mt: 4, mb: 4, maxWidth: "lg" }}>
        <Paper elevation={10} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontFamily: "Monospace" }}>
            CHANNEL YOUR DOCTOR
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {/* Doctor Name - Searchable & Typable */}
            <Grid item xs={12} sm={3}>
              <Autocomplete
                freeSolo
                options={doctors}
                value={doctor}
                onChange={(event, newValue) => setDoctor(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="Doctor Name" fullWidth />
                )}
              />
            </Grid>

            {/* Specialization - Searchable & Typable */}
            <Grid item xs={12} sm={3}>
              <Autocomplete
                freeSolo
                options={specializations}
                value={specialization}
                onChange={(event, newValue) => setSpecialization(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="Specialization" fullWidth />
                )}
              />
            </Grid>

            {/* Hospital Branch - Searchable & Typable */}
            <Grid item xs={12} sm={3}>
              <Autocomplete
                freeSolo
                options={hospitals}
                value={hospital}
                onChange={(event, newValue) => setHospital(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="Hospital Branch" fullWidth />
                )}
              />
            </Grid>

            {/* Date Selection */}
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
            sx={{
              width: "170px",
              backgroundColor: "#2B909B",
              mt: 3,
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            SEARCH
          </Button>
        </Paper>
      </Container>

         {/* Footer Section */}
         {/* <Footer /> */}

    </>
  );
};

export default HospitalDashboard;




