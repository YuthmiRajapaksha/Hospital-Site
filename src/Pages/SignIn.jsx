// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper
// } from "@mui/material";
// import { Link } from "react-router-dom"; // Correct import

// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//   const isFormValid = email && password ;

//   // Handle Reset Button Click
//   const handleReset = () => {
//     setEmail("");
//     setPassword("");
//   };
//   const navigate = useNavigate();
//   return (
    
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//       <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
//         <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{  fontFamily:"Poppins" }}>
//           SIGN IN
//         </Typography>

//         <Box display="flex" flexDirection="column" gap={3}>
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             variant="outlined"
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <Box display="flex" justifyContent="center" gap={2} mt={2}>
           
//             <Button
//               variant="contained"
//               disabled={!isFormValid} 
//               sx={{ width: "120px", backgroundColor: "#2B909B" }}
//               onClick={() => navigate("/home")}
//             >
//               SIGN IN
//             </Button>
            

//           </Box>
//           {/* This Box aligns the text and button properly */}
//           <Box sx={{ mt: -2, display: "flex", justifyContent: "center", alignItems: "center" }}>
//             <Typography variant="body2">Don't have an account?</Typography>
//             <Button
//             component={Link} // This makes the button a link
//             to="/signup" // Navigate to /signup
//               variant="text"
//               sx={{ ml: 1, fontSize: "16px", fontWeight: "bold", textTransform: "none", color:"black", 
//                 "&:hover": {
//                 // backgroundColor: "rgb(134, 233, 247)", // Hover background color
//                 color: "red", // Hover text color
//                 textDecoration: "underline", // Always underlined
//               },
//               }} // ml:1 adds small space
//             >
//               Sign Up
//             </Button>
//           </Box>
//         </Box>
        
//       </Paper>
//     </Box>
//   );
// };

// export default SignIn;


// import React from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// // Validation schema
// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

// const SignIn = () => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: ""
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log("Form submitted:", values);
//       navigate("/home");
//     },
//     onReset: () => {
//       formik.resetForm();
//     }
//   });

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//       <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           textAlign="center"
//           gutterBottom
//           sx={{ fontFamily: "Poppins" }}
//         >
//           SIGN IN
//         </Typography>

//         <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
//           <Box display="flex" flexDirection="column" gap={3}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               variant="outlined"
//               type="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//             />

//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               variant="outlined"
//               type="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//             />

//             <Box display="flex" justifyContent="center" gap={2} mt={2}>
//               <Button
//                 variant="contained"
//                 type="submit"
//                 disabled={!formik.isValid || formik.isSubmitting}
//                 sx={{ width: "120px", backgroundColor: "#2B909B" }}
//               >
//                 SIGN IN
//               </Button>
//             </Box>

//             <Box display="flex" justifyContent="center">
//               <Button
//                 type="reset"
//                 variant="text"
//                 sx={{ fontSize: "14px", textTransform: "none", color: "gray" }}
//               >
//                 Reset
//               </Button>
//             </Box>

//             <Box sx={{ mt: -1, display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <Typography variant="body2">Don't have an account?</Typography>
//               <Button
//                 component={Link}
//                 to="/signup"
//                 variant="text"
//                 sx={{
//                   ml: 1,
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   textTransform: "none",
//                   color: "black",
//                   "&:hover": {
//                     color: "red",
//                     textDecoration: "underline",
//                   },
//                 }}
//               >
//                 Sign Up
//               </Button>
//             </Box>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default SignIn;



// src/pages/SignIn.jsx
// src/pages/SignIn.jsx
// import React from "react";
// import { Box, TextField, Button, Typography, Paper } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email address").required("Email is required"),
//   password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
// });

// const SignIn = () => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema,

//     onSubmit: async (values) => {
//   try {
//     const res = await axios.post("http://localhost:3000/api/login", values);

//     if (res.data.user && res.data.token) {
//       // ✅ Save token and user
//       localStorage.setItem("token", res.data.token);
//       const token = localStorage.getItem("token");
//       if (token) {
//   console.log("🔐 Token found:", token);
// } else {
//   console.log("❌ No token found, user is not logged in");
// }
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       Swal.fire({
//         icon: "success",
//         title: "Welcome back!",
//         text: `Hi ${res.data.user.firstName || "User"}`,
//         showConfirmButton: false,
//         timer: 2000,
//       });

//       navigate("/");
//     }
//   } catch (err) {
//     Swal.fire({
//       icon: "error",
//       title: "Login Failed",
//       text: err.response?.data?.message || "Invalid email or password",
//       confirmButtonColor: "#2B909B",
//     });
//   }
// },

//     // onSubmit: async (values) => {
//     //   try {
//     //     const res = await axios.post("http://localhost:3000/api/login", values);

//     //     if (res.data.user) {
//     //       Swal.fire({
//     //         icon: "success",
//     //         title: "Welcome back!",
//     //         text: `Hi ${res.data.user.firstName || "User"}`,
//     //         showConfirmButton: false,
//     //         timer: 2000,
//     //       });

//     //       localStorage.setItem("user", JSON.stringify(res.data));
//     //       navigate("/home"); // redirect to dashboard
//     //     }
//     //   } catch (err) {
//     //     Swal.fire({
//     //       icon: "error",
//     //       title: "Login Failed",
//     //       text: err.response?.data?.message || "Invalid email or password",
//     //       confirmButtonColor: "#2B909B",
//     //     });
//     //   }
//     // },
//   });

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//       <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
//         <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ fontFamily: "Poppins" }}>
//           SIGN IN
//         </Typography>

//         <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
//           <Box display="flex" flexDirection="column" gap={3}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               variant="outlined"
//               type="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               variant="outlined"
//               type="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//             />

//             <Box display="flex" justifyContent="center" gap={2} mt={2}>
//               <Button
//                 variant="contained"
//                 type="submit"
//                 disabled={!formik.isValid || formik.isSubmitting}
//                 sx={{ width: "120px", backgroundColor: "#2B909B" }}
//               >
//                 SIGN IN
//               </Button>
//             </Box>

//             <Box display="flex" justifyContent="center">
//               <Button type="reset" variant="text" sx={{ fontSize: "14px", textTransform: "none", color: "gray" }}>
//                 RESET
//               </Button>
//             </Box>

//             <Box sx={{ mt: -1, display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <Typography variant="body2">Don't have an account?</Typography>
//               <Button
//                 component={Link}
//                 to="/signup"
//                 variant="text"
//                 sx={{
//                   ml: 1,
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   textTransform: "none",
//                   color: "black",
//                   "&:hover": {
//                     color: "red",
//                     textDecoration: "underline",
//                   },
//                 }}
//               >
//                 Sign Up
//               </Button>
//             </Box>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default SignIn;


// import React, { useContext } from "react";
// import { Box, TextField, Button, Typography, Paper } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext"; 
// import  jwtDecode  from "jwt-decode";


// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email address").required("Email is required"),
//   password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
// });

// const SignIn = () => {
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext); 

//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const res = await axios.post("http://localhost:3000/api/login", values);

//         if (res.data.user && res.data.token) {
//           login(res.data.user, res.data.token); 

//           Swal.fire({
//             icon: "success",
//             title: "Welcome back!",
//             text: `Hi ${res.data.user.firstName || "User"}`,
//             showConfirmButton: false,
//             timer: 2000,
//           });

//           navigate("/");
//         }
//       } catch (err) {
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed",
//           text: err.response?.data?.message || "Invalid email or password",
//           confirmButtonColor: "#2B909B",
//         });
//       }
//     },
//   });

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//       <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
//         <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ fontFamily: "Poppins" }}>
//           SIGN IN
//         </Typography>

//         <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
//           <Box display="flex" flexDirection="column" gap={3}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               variant="outlined"
//               type="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               variant="outlined"
//               type="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//             />

//             <Box display="flex" justifyContent="center" gap={2} mt={2}>
//               <Button
//                 variant="contained"
//                 type="submit"
//                 disabled={!formik.isValid || formik.isSubmitting}
//                 sx={{ width: "120px", backgroundColor: "#2B909B" }}
//               >
//                 SIGN IN
//               </Button>
//             </Box>

//             <Box display="flex" justifyContent="center">
//               <Button type="reset" variant="text" sx={{ fontSize: "14px", textTransform: "none", color: "gray" }}>
//                 RESET
//               </Button>
//             </Box>

//             <Box sx={{ mt: -1, display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <Typography variant="body2">Don't have an account?</Typography>
//               <Button
//                 component={Link}
//                 to="/signup"
//                 variant="text"
//                 sx={{
//                   ml: 1,
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   textTransform: "none",
//                   color: "black",
//                   "&:hover": {
//                     color: "red",
//                     textDecoration: "underline",
//                   },
//                 }}
//               >
//                 Sign Up
//               </Button>
//             </Box>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default SignIn;


import React, { useContext } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../context/AuthContext"; // No jwtDecode import needed here

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:3000/api/login", values);

        if (res.data.user && res.data.token) {
          login(res.data.user, res.data.token);

          Swal.fire({
            icon: "success",
            title: "Welcome back!",
            text: `Hi ${res.data.user.firstName || "User"}`,
            showConfirmButton: false,
            timer: 2000,
          });

          navigate("/");
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.response?.data?.message || "Invalid email or password",
          confirmButtonColor: "#2B909B",
        });
      }
    },
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ fontFamily: "Poppins" }}>
          SIGN IN
        </Typography>

        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <Box display="flex" flexDirection="column" gap={3}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Box display="flex" justifyContent="center" gap={2} mt={2}>
              <Button
                variant="contained"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                sx={{ width: "120px", backgroundColor: "#2B909B" }}
              >
                SIGN IN
              </Button>
            </Box>

            <Box display="flex" justifyContent="center">
              <Button type="reset" variant="text" sx={{ fontSize: "14px", textTransform: "none", color: "gray" }}>
                RESET
              </Button>
            </Box>

            <Box sx={{ mt: -1, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="body2">Don't have an account?</Typography>
              <Button
                component={Link}
                to="/signup"
                variant="text"
                sx={{
                  ml: 1,
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                  color: "black",
                  "&:hover": {
                    color: "red",
                    textDecoration: "underline",
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default SignIn;


