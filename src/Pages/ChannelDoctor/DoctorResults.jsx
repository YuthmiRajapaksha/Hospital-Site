// Pages/ChannelDoctor/DoctorResults.js

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const DoctorResults = () => {
  const { state } = useLocation();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const query = new URLSearchParams({
          doctor: state?.doctor || '',
          specialization: state?.specialization || '',
          hospital: state?.hospital || '',
          date: state?.date || '',
        }).toString();

        const response = await fetch(`http://localhost:3000/api/search?${query}`);
        const data = await response.json();
        setResults(data.doctors || []);
      } catch (error) {
        console.error("Search failed:", error);
      }
    };

    fetchResults();
  }, [state]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Doctor Search Results
      </Typography>
      <Grid container spacing={3}>
        {results.length === 0 ? (
          <Typography>No matching doctors found.</Typography>
        ) : (
          results.map((doc, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{doc.name}</Typography>
                  <Typography>Specialization: {doc.specialization}</Typography>
                  <Typography>Branch: {doc.hospital}</Typography>
                  <Typography>Date: {state.date}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default DoctorResults;
