import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Paper,
} from "@mui/material";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const doctor = params.get("doctor");
  const specialization = params.get("specialization");
  const hospital = params.get("hospital");
  const date = params.get("date");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/doctors");
        const data = await response.json();

        if (response.ok) {
          const filtered = data.doctors.filter((doc) => {
            return (
              (!doctor || doc.name.toLowerCase().includes(doctor.toLowerCase())) &&
              (!specialization || doc.specialization.toLowerCase().includes(specialization.toLowerCase())) &&
              (!hospital || doc.hospital.toLowerCase().includes(hospital.toLowerCase()))
            );
          });
          setResults(filtered);
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, [doctor, specialization, hospital]);

  return (
    <Container sx={{ mt: 5, pb: 8  }}>
      <Typography variant="h4" gutterBottom  sx={{ fontFamily: 'Poppins' ,fontSize:"40px", fontWeight: 'bold', mb: 5}}>
        Search Results
      </Typography>
      {results.length === 0 ? (
        <Paper sx={{ p: 2, textAlign: "center", fontStyle: "italic" , fontWeight: 'bold', color: "#808080" }}>No Matching Doctors Found.</Paper>
      ) : (
        <Grid container spacing={3}>
          {results.map((doc, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 300 ,  boxShadow: 8 ,
                "&:hover": {
                  //  transform: "scale(1.03)",
                  transform: "scale(1.1)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                },
               }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={doc.image || "/img/doc.png"}
                  alt={doc.name}
                />
                <CardContent sx={{ backgroundColor: '#CFEFF1' }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    Dr. {doc.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Specialization: {doc.specialization}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hospital: {doc.hospital}
                  </Typography>
                  {/* {date && (
                    <Typography variant="body2" color="text.secondary">
                      Date: {date}
                    </Typography>
                  )} */}
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
