import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from "@mui/material";
import { Link } from "react-router-dom"; // Correct import

import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const isFormValid = email && password ;

  // Handle Reset Button Click
  const handleReset = () => {
    setEmail("");
    setPassword("");
  };
  const navigate = useNavigate();
  return (
    
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{  fontFamily:"Poppins" }}>
          SIGN IN
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box display="flex" justifyContent="center" gap={2} mt={2}>
           
            <Button
              variant="contained"
              disabled={!isFormValid} 
              sx={{ width: "120px", backgroundColor: "#2B909B" }}
              onClick={() => navigate("/home")}
            >
              SIGN IN
            </Button>
            

          </Box>
          {/* This Box aligns the text and button properly */}
          <Box sx={{ mt: -2, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="body2">Don't have an account?</Typography>
            <Button
            component={Link} // This makes the button a link
            to="/signup" // Navigate to /signup
              variant="text"
              sx={{ ml: 1, fontSize: "16px", fontWeight: "bold", textTransform: "none", color:"black", 
                "&:hover": {
                // backgroundColor: "rgb(134, 233, 247)", // Hover background color
                color: "red", // Hover text color
                textDecoration: "underline", // Always underlined
              },
              }} // ml:1 adds small space
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        
      </Paper>
    </Box>
  );
};

export default SignIn;


