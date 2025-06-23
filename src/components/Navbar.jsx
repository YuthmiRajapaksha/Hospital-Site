// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
// import { AuthContext } from '../context/AuthContext';




// const Navbar = () => {
//    const { user, logout } = useContext(AuthContext);
//   const [userName, setUserName] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (token && user) {
//     setIsLoggedIn(true);
//     setUserName(user.firstName || "User");
//   } else {
//     setIsLoggedIn(false);
//     setUserName("");
//   }

//   // Listen to storage changes (when another tab logs in/out)
//   window.addEventListener("storage", () => {
//     const token = localStorage.getItem("token");
//     const user = JSON.parse(localStorage.getItem("user"));
//     setIsLoggedIn(!!token && !!user);
//     setUserName(user?.firstName || "");
//   });
// }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   const navButtonStyle = {
//     mx: 1,
//     textTransform: "capitalize",
//     fontWeight:8,
//     fontSize: "18px",
//     fontFamily: 'Poppins',  // Increases font size (default is usually 1rem)
//     "&:hover": { 
//       backgroundColor: "transparent", 
//       color: "#77C2C8", // Change text color on hover
//     },
//   };
//   return (
//     <AppBar position="static" color="default">
//       <Toolbar>
//         <Box display="flex" alignItems="center" sx={{ flexGrow: 1, }}>
//           <img
//             src="/img/Logo7.PNG"
//             alt="Logo"
//             style={{ width: "55px", height: "55px", marginRight: "10px", borderRadius: "50%", objectFit: "cover" }}
//           />
          
//           <Box display="flex" gap={1}>
//             <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "black" }}>
//                MediCare
//             </Typography>
//             <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "#2B909B" }}>
//                Hospitals
//             </Typography>
//           </Box>

//         </Box>
// {/*         
//         <Button component={Link} to="" color="inherit" sx={navButtonStyle}>Home</Button>
//         <Button component={Link} to="/signin" color="inherit" sx={navButtonStyle}>Sign In</Button>
//         <Button component={Link} to="/bookings" color="inherit" sx={navButtonStyle}>My Bookings</Button>
//         <Button component={Link} to="/lab-reports" color="inherit" sx={navButtonStyle}> Lab Reports</Button> */}
//         {/* <Button component={Link} to="/about" color="inherit" sx={navButtonStyle}> About</Button>
//         <Button component={Link} to="/contact" color="inherit" sx={navButtonStyle}>Contact</Button> */}



//         {/* {isLoggedIn ? (
//           <>
//             <Typography variant="body1" sx={{ mx: 2, fontFamily: 'Poppins' }}>
//               Hello, <strong>{userName}</strong>
//             </Typography>
//             <Button onClick={handleLogout} sx={navButtonStyle} color="inherit">Logout</Button>
//           </>
//         ) : (
//           <Button component={Link} to="/signin" color="inherit" sx={navButtonStyle}>Sign In</Button>
//         )} */}


//   <Button component={Link} to="/" color="inherit" sx={navButtonStyle}>
//   Home
// </Button>

// <Button component={Link} to="/lab-reports" color="inherit" sx={navButtonStyle}>
//   Lab Reports
// </Button>

// {isLoggedIn && (
//   <Button component={Link} to="/bookings" color="inherit" sx={navButtonStyle}>
//     My Bookings
//   </Button>
// )}

// {isLoggedIn ? (
//   <>
//     <Typography variant="body1" sx={{ mx: 2, fontFamily: 'Poppins' }}>
//       Hello, <strong>{userName}</strong>
//     </Typography>
//     <Button onClick={handleLogout} sx={navButtonStyle} color="inherit">
//       Logout
//     </Button>
//   </>
// ) : (
//   <Button component={Link} to="/signin" color="inherit" sx={navButtonStyle}>
//     Sign In
//   </Button>
// )}
        
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // ✅ use context
  const navigate = useNavigate();

  const navButtonStyle = {
    mx: 1,
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: "18px",
    fontFamily: 'Poppins',
    "&:hover": {
      backgroundColor: "transparent",
      color: "#77C2C8",
    },
  };

  const handleLogout = () => {
    logout();       // ✅ clear context + storage
    navigate("/");  // optional redirect
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
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

        {/* Always show */}
        <Button component={Link} to="/" color="inherit" sx={navButtonStyle}>Home</Button>
        <Button component={Link} to="/lab-reports" color="inherit" sx={navButtonStyle}>Lab Reports</Button>

        {/* Show only if logged in */}
        {user && (
          <Button component={Link} to="/bookings" color="inherit" sx={navButtonStyle}>My Bookings</Button>
        )}

        {/* Auth buttons */}
        {user ? (
          <>
            <Typography variant="body1" sx={{ mx: 2, fontFamily: 'Poppins' }}>
              Hello, <strong>{user.firstName}</strong>
            </Typography>
            <Button onClick={handleLogout} sx={navButtonStyle} color="inherit">Logout</Button>
          </>
        ) : (
          <Button component={Link} to="/signin" color="inherit" sx={navButtonStyle}>Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


