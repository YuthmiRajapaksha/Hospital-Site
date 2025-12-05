
// // import React, { useContext, useState } from "react";
// // import { Box, TextField, Button, Typography, Paper } from "@mui/material";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import Swal from "sweetalert2";
// // import axios from "axios";
// // import { AuthContext } from "../context/AuthContext";

// // const validationSchema = Yup.object({
// //   email: Yup.string().email("Invalid email address").required("Email is required"),
// //   password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
// // });

// // const SignIn = () => {
// //   const navigate = useNavigate();
// //   const { login } = useContext(AuthContext);
// //   const [loading, setLoading] = useState(false);

// //   const formik = useFormik({
// //     initialValues: { email: "", password: "" },
// //     validationSchema,
// //     onSubmit: async (values) => {
// //       setLoading(true);
// //       try {
// //         const res = await axios.post("http://localhost:3000/api/login", values);

// //         if (res.data.user && res.data.token) {
// //           login(res.data.user, res.data.token);

// //           Swal.fire({
// //             icon: "success",
// //             title: "Welcome back!",
// //             text: `Hi ${res.data.user.firstName || "User"}`,
// //             showConfirmButton: false,
// //             timer: 2000,
// //           });

// //           navigate("/"); 
// //         }
// //       } catch (err) {
// //         Swal.fire({
// //           icon: "error",
// //           title: "Login Failed",
// //           text: err.response?.data?.message || "Invalid email or password",
// //           confirmButtonColor: "#2B909B",
// //         });
// //       } finally {
// //         setLoading(false);
// //       }
// //     },
// //   });

// //   return (
// //     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
// //       <Paper sx={{ padding: 4, maxWidth: 400, width: "100%", boxShadow: 10 }}>
// //         <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
// //           SIGN IN
// //         </Typography>

// //         <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
// //           <Box display="flex" flexDirection="column" gap={3}>
// //             <TextField
// //               fullWidth
// //               label="Email"
// //               name="email"
// //               variant="outlined"
// //               type="email"
// //               value={formik.values.email}
// //               onChange={formik.handleChange}
// //               onBlur={formik.handleBlur}
// //               error={formik.touched.email && Boolean(formik.errors.email)}
// //               helperText={formik.touched.email && formik.errors.email}
// //             />
// //             <TextField
// //               fullWidth
// //               label="Password"
// //               name="password"
// //               variant="outlined"
// //               type="password"
// //               value={formik.values.password}
// //               onChange={formik.handleChange}
// //               onBlur={formik.handleBlur}
// //               error={formik.touched.password && Boolean(formik.errors.password)}
// //               helperText={formik.touched.password && formik.errors.password}
// //             />

// //             <Box display="flex" justifyContent="center" gap={2} mt={2}>
// //               <Button
// //                 variant="contained"
// //                 type="submit"
// //                 disabled={!formik.isValid || formik.isSubmitting || loading}
// //                 sx={{ width: "120px", backgroundColor: "#2B909B" }}
// //               >
// //                 {loading ? "Signing In..." : "SIGN IN"}
// //               </Button>
// //             </Box>

// //             <Box display="flex" justifyContent="center">
// //               <Button type="reset" variant="text" sx={{ fontSize: "14px", textTransform: "none", color: "gray" }}>
// //                 RESET
// //               </Button>
// //             </Box>

// //             <Box sx={{ mt: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
// //               <Typography variant="body2">Don't have an account?</Typography>
// //               <Button
// //                 component={Link}
// //                 to="/signup"
// //                 variant="text"
// //                 sx={{
// //                   ml: 1,
// //                   fontSize: "16px",
// //                   fontWeight: "bold",
// //                   textTransform: "none",
// //                   color: "black",
// //                   "&:hover": { color: "red", textDecoration: "underline" },
// //                 }}
// //               >
// //                 Sign Up
// //               </Button>
// //             </Box>
// //           </Box>
// //         </form>
// //       </Paper>
// //     </Box>
// //   );
// // };

// // export default SignIn;



// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   TextField,
//   Paper,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
//   InputAdornment
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";


// const SignIn = () => {
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const togglePassword = () => setShowPassword(!showPassword);

//   // ✅ VALIDATION SCHEMA
//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   // ✅ FORMIK
//   const formik = useFormik({
//     initialValues: {
//       email: localStorage.getItem("rememberedEmail") || "",
//       password: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       setLoading(true);

//       try {
//         const res = await axios.post("http://localhost:3000/api/login", {
//           email: values.email,
//           password: values.password,
//         });

//         // Save if Remember Me is checked
//         if (rememberMe) {
//           localStorage.setItem("rememberedEmail", values.email);
//         } else {
//           localStorage.removeItem("rememberedEmail");
//         }

//         // Save user info
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         localStorage.setItem("token", res.data.token);

//         Swal.fire({
//           icon: "success",
//           title: "Welcome back!",
//           text: `Hi ${res.data.user.firstName || "User"}`,
//           showConfirmButton: false,
//           timer: 2000,
//         });

//         // Redirect
//         navigate("/dashboard");

//       } catch (error) {
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed",
//           text: error.response?.data?.message || "Invalid credentials",
//           confirmButtonColor: "#2B909B",
//         });
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(120deg, #2B909B, #77C8C6)",
//       }}
//     >
//       <Paper elevation={10} sx={{ p: 4, width: 400, borderRadius: 3 }}>
//         <Typography variant="h4" textAlign="center" fontWeight="bold">
//           SIGN IN
//         </Typography>

//         <form onSubmit={formik.handleSubmit}>
//           {/* EMAIL */}
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             sx={{ mt: 3 }}
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email && formik.errors.email}
//           />

//           {/* PASSWORD */}
//           <TextField
//             fullWidth
//             label="Password"
//             name="password"
//             type={showPassword ? "text" : "password"}
//             sx={{ mt: 2 }}
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={togglePassword}>
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />

//           {/* Remember Me */}
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//                 color="primary"
//               />
//             }
//             label="Remember me"
//             sx={{ mt: 1 }}
//           />

//           {/* LOGIN BUTTON */}
//           <Button
//             fullWidth
//             type="submit"
//             variant="contained"
//             sx={{
//               mt: 3,
//               p: 1.2,
//               backgroundColor: "#2B909B",
//               fontSize: "16px",
//             }}
//             disabled={loading}
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </Button>
//         </form>

//         {/* LINK */}
//         <Typography textAlign="center" mt={3}>
//           Don’t have an account?{" "}
//           <span
//             style={{ color: "#2B909B", cursor: "pointer", fontWeight: "bold" }}
//             onClick={() => navigate("/signup")}
//           >
//             Sign Up
//           </span>
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default SignIn;

import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";



const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  // ✅ Validation
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem("rememberedEmail") || "",
      password: "",
    },
    validationSchema,

    onSubmit: async (values) => {
  setLoading(true);

  try {
    const res = await axios.post("http://localhost:3000/api/login", {
      email: values.email,
      password: values.password,
    });

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", values.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    // ✅ THIS IS THE FIX
    login({
      user: res.data.user,
      token: res.data.token,
      role: res.data.role,
    });

    Swal.fire({
      icon: "success",
      title: "Welcome back!",
      text: `Hi ${res.data.user.firstName || "User"}`,
      showConfirmButton: false,
      timer: 2000,
    });

    navigate("/dashboard");

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error.response?.data?.message || "Invalid credentials",
      confirmButtonColor: "#2B909B",
    });
  } finally {
    setLoading(false);
  }
},


    // onSubmit: async (values) => {
    //   setLoading(true);

    //   try {
    //     const res = await axios.post("http://localhost:3000/api/login", {
    //       email: values.email,
    //       password: values.password,
    //     });

    //     // ✅ Remember Me
    //     if (rememberMe) {
    //       localStorage.setItem("rememberedEmail", values.email);
    //     } else {
    //       localStorage.removeItem("rememberedEmail");
    //     }

    //     // ✅ Save to Context
    //     login({
    //       token: res.data.token,
    //       role: res.data.role,       // "user" | "admin" | "doctor"
    //       user: res.data.user,        // when normal user
    //       doctor: res.data.doctor,    // when doctor
    //     });

    //     Swal.fire({
    //       icon: "success",
    //       title: "Welcome back!",
    //       text: `Hi ${res.data.user?.firstName || res.data.doctor?.name || "User"}`,
    //       showConfirmButton: false,
    //       timer: 2000,
    //     });

    //     // ✅ Role based redirect
    //     if (res.data.role === "admin") {
    //       navigate("/admin/dashboard");
    //     } 
    //     else if (res.data.role === "doctor") {
    //       navigate("/doctor/dashboard");
    //     } 
    //     else {
    //       navigate("/dashboard");
    //     }

    //   } catch (error) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Login Failed",
    //       text: error.response?.data?.message || "Invalid credentials",
    //       confirmButtonColor: "#2B909B",
    //     });
    //   } finally {
    //     setLoading(false);
    //   }
    // },


  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(120deg, #2B909B, #77C8C6)",
      }}
    >
      <Paper elevation={10} sx={{ p: 4, width: 400, borderRadius: 3 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold">
          SIGN IN
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          {/* EMAIL */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            sx={{ mt: 3 }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          {/* PASSWORD */}
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            sx={{ mt: 2 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Remember Me */}
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember me"
            sx={{ mt: 1 }}
          />

          {/* LOGIN BUTTON */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              p: 1.2,
              backgroundColor: "#2B909B",
              fontSize: "16px",
            }}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
          <Typography
  variant="body2"
  textAlign="right"
  sx={{ mt: 1, cursor: "pointer", color: "#2B909B" }}
  onClick={() => navigate("/forgot-password")}
>
  Forgot Password?
</Typography>

        </form>

        {/* LINK */}
        <Typography textAlign="center" mt={3}>
          Don’t have an account?{" "}
          <span
            style={{
              color: "#2B909B",
              cursor: "pointer",
              fontWeight: "bold"
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </Typography>
        
      </Paper>
    </Box>
  );
};

export default SignIn;
