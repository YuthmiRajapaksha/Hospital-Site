import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";

const Navbar = () => {
  const navButtonStyle = {
    mx: 1,
    textTransform: "capitalize",
    fontWeight:8,
    fontSize: "18px",
    fontFamily: 'Poppins',  // Increases font size (default is usually 1rem)
    "&:hover": { 
      backgroundColor: "transparent", 
      color: "#77C2C8", // Change text color on hover
    },
  };
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1, }}>
          <img
            src="/img/Logo7.PNG"
            alt="Logo"
            style={{ width: "55px", height: "55px", marginRight: "10px", borderRadius: "50%", objectFit: "cover" }}
          />
          
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "black" }}>
               MediCare
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "#2B909B" }}>
               Hospitals
            </Typography>
          </Box>

        </Box>
        <Button component={Link} to="" color="inherit" sx={navButtonStyle}>Home</Button>
        <Button component={Link} to="/signin" color="inherit" sx={navButtonStyle}>Sign In</Button>
        <Button component={Link} to="/bookings" color="inherit" sx={navButtonStyle}>My Bookings</Button>
        <Button component={Link} to="/lab-reports" color="inherit" sx={navButtonStyle}> Lab Reports</Button>
        <Button component={Link} to="/about" color="inherit" sx={navButtonStyle}> About</Button>
        <Button component={Link} to="/contact" color="inherit" sx={navButtonStyle}>Contact</Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

