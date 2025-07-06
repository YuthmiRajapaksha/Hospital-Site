


// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   Avatar,
//   AppBar,
//   Toolbar,
//   Button,
//   Box,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem
// } from "@mui/material";
// import { AuthContext } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [anchorEl, setAnchorEl] = useState(null);

//   const navButtonStyle = {
//     mx: 1,
//     textTransform: "capitalize",
//     fontWeight: 600,
//     fontSize: "18px",
//     fontFamily: 'Poppins',
//     "&:hover": {
//       backgroundColor: "transparent",
//       color: "#77C2C8",
//     },
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     logout();
//     handleMenuClose();
//     navigate("/");
//   };

//   return (
//     <AppBar position="static" color="default">
//       <Toolbar>
//         <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
//           <img
//             src="/img/Logo7.PNG"
//             alt="Logo"
//             style={{
//               width: "55px",
//               height: "55px",
//               marginRight: "10px",
//               borderRadius: "50%",
//               objectFit: "cover",
//             }}
//           />
//           <Box display="flex" gap={1}>
//             <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "black" }}>
//               MediCare
//             </Typography>
//             <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "#2B909B" }}>
//               Hospitals
//             </Typography>
//           </Box>
//         </Box>

//         {/* Always show */}
//         <Button component={Link} to="/" color="inherit" sx={navButtonStyle}>Home</Button>
//         <Button component={Link} to="/lab-reports" color="inherit" sx={navButtonStyle}>Lab Reports</Button>

//         {/* Show only if logged in */}
//         {user && (
//           <Button component={Link} to="/bookings" color="inherit" sx={navButtonStyle}>
//             My Bookings
//           </Button>
//         )}

//         {/* Auth buttons */}
//         {user ? (
//           <>
//             <IconButton onClick={handleMenuOpen} sx={{ mx: 2 }}>
//               <Avatar sx={{ bgcolor: "#2B909B" }}>
//                 {user.firstName ? user.firstName[0] : 'U'}
//               </Avatar>
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//             >
//               <MenuItem onClick={handleLogout}>Logout</MenuItem>
//             </Menu>
//           </>
//         ) : (
//           <Button
//             component={Link}
//             to="/signin"
//             color="inherit"
//             sx={navButtonStyle}
//           >
//             Sign In
//           </Button>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

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

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate("/");
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Lab Reports", path: "/lab-reports" },
    ...(user ? [{ text: "My Bookings", path: "/bookings" }] : []),
  ];

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <img
            src="/img/Logo7.PNG"
            alt="Logo"
            style={{
              width: "55px",
              height: "55px",
              marginRight: "10px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
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

        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={link.text} disablePadding>
                      <ListItemButton component={Link} to={link.path}>
                        <ListItemText primary={link.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  {user ? (
                    <ListItem disablePadding>
                      <ListItemButton onClick={handleLogout}>
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </ListItem>
                  ) : (
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/signin">
                        <ListItemText primary="Sign In" />
                      </ListItemButton>
                    </ListItem>
                  )}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            {navLinks.map((link) => (
              <Button
                key={link.text}
                component={Link}
                to={link.path}
                color="inherit"
                sx={navButtonStyle}
              >
                {link.text}
              </Button>
            ))}

            {user ? (
              <>
                <IconButton onClick={handleMenuOpen} sx={{ mx: 2 }}>
                  <Avatar sx={{ bgcolor: "#2B909B" }}>
                    {user.firstName ? user.firstName[0] : 'U'}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                component={Link}
                to="/signin"
                color="inherit"
                sx={navButtonStyle}
              >
                Sign In
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

