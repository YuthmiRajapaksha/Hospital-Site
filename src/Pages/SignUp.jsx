
// import React, { useState } from "react";
// import {
//   Box, Stepper, Step, StepLabel, Button, Typography,
//   TextField, Select, MenuItem, Paper, Radio, RadioGroup, FormControlLabel,
//   InputAdornment, IconButton
// } from "@mui/material";
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const SignUp = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [country, setCountry] = useState("Sri Lanka");
//   const [phone, setPhone] = useState("");
//   const [pin, setPin] = useState("");
//   const [idType, setIdType] = useState("NIC");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [phoneError, setPhoneError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const steps = ["Contact Info", "Verify", "Personal Info"];

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

//   const validatePhone = (value) => {
//     if (country === "Sri Lanka" && !/^\d{10}$/.test(value)) {
//       setPhoneError("Phone number must be 10 digits.");
//     } else {
//       setPhoneError("");
//     }
//   };

//   const validateEmail = (value) => {
//     if (country !== "Sri Lanka" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//       setEmailError("Enter a valid email address.");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handleNext = () => {
//     if (activeStep === 0) {
//       if ((country === "Sri Lanka" && !phoneError && phone) || (country !== "Sri Lanka" && !emailError && formik.values.email)) {
//         setActiveStep((prev) => prev + 1);
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Please enter valid contact information.",
//           confirmButtonColor: "#2B909B"
//         });
//       }
//     } else if (activeStep < steps.length - 1) {
//       setActiveStep((prev) => prev + 1);
//     }
//   };

//   const handleBack = () => {
//     if (activeStep > 0) setActiveStep((prev) => prev - 1);
//   };

//   const formik = useFormik({
//     initialValues: {
//       title: "",
//       firstName: "",
//       lastName: "",
//       nic: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       title: Yup.string().required("Title is required"),
//       firstName: Yup.string().required("First name is required"),
//       lastName: Yup.string().required("Last name is required"),
//       nic: Yup.string()
//     .required(`${idType} is required`)
//     .test("is-valid-nic", "Invalid NIC. Use 9 digits + V/v or 12 digits.", (value) => {
//       if (!value) return false;
//       const nineDigitPattern = /^\d{9}[vV]$/;
//       const twelveDigitPattern = /^\d{12}$/;
//       return nineDigitPattern.test(value) || twelveDigitPattern.test(value);
//     }),
//   email: Yup.string()
//     .required("Email is required")
//     .matches(/^[^\s@]+@gmail\.com$/, "Email must be a valid @gmail.com address"),
//       password: Yup.string()
//         .required("Password is required")
//         .min(6, "Must be at least 6 characters")
//         .matches(/[0-9]/, "Must contain a number")
//         .matches(/[!@#$%^&*]/, "Must contain a special character"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm your password"),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);
//       try {
//         const response = await axios.post("http://localhost:3000/api/register", {
//           country,
//           phone,
//           email: values.email,
//           title: values.title,
//           firstName: values.firstName,
//           lastName: values.lastName,
//           idType,
//           nicOrPassport: values.nic,
//           password: values.password,
//         });

//         if (response.status === 201 || response.status === 200) {
//           Swal.fire({
//             title: "Registration Complete!",
//             text: "You have successfully registered.",
//             icon: "success",
//             confirmButtonColor: "#2B909B",
//           }).then(() => navigate("/signin"));
//         }
//       } catch (error) {
//         if (error.response?.status === 400) {
//           Swal.fire({
//             title: "Registration Failed!",
//             text: error.response.data.message || "Email or NIC/Passport already exists",
//             icon: "warning",
//             confirmButtonColor: "#2B909B",
//           });
//         } else {
//           Swal.fire({
//             title: "Registration Failed!",
//             text: "Server error. Please try again.",
//             icon: "error",
//             confirmButtonColor: "#2B909B",
//           });
//         }
//       } finally {
//         setLoading(false);
//       }
//     },
//   });


  

//   return (
//     <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
//       <Paper elevation={10} sx={{ p: 4, width: "40%", minWidth: "350px" }}>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {steps.map((label, idx) => (
//             <Step key={idx}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>

//         {activeStep === 0 && (
//           <Box mt={4} textAlign="center">
//             <Typography variant="h4" fontWeight="bold">SIGN UP</Typography>
//             <Typography variant="body1" mt={2}>Contact Info</Typography>

//             <Select fullWidth value={country} onChange={(e) => { setCountry(e.target.value); setPhone(""); formik.setFieldValue("email", ""); setPhoneError(""); setEmailError(""); }} sx={{ mt: 2 }}>
//               <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
//               <MenuItem value="India">India</MenuItem>
//               <MenuItem value="USA">USA</MenuItem>
//             </Select>

//             {country === "Sri Lanka" ? (
//               <TextField fullWidth label="Phone Number" variant="outlined" value={phone} onChange={(e) => { setPhone(e.target.value); validatePhone(e.target.value); }} error={!!phoneError} helperText={phoneError} sx={{ mt: 2 }} />
//             ) : (
//               <TextField fullWidth label="Email Address" variant="outlined" value={formik.values.email} onChange={(e) => { formik.setFieldValue("email", e.target.value); validateEmail(e.target.value); }} error={!!emailError} helperText={emailError} sx={{ mt: 2 }} />
//             )}

//             <Button variant="contained" sx={{ mt: 3, backgroundColor: "#2B909B" }} onClick={handleNext} disabled={country === "Sri Lanka" ? !phone || phoneError : !formik.values.email || emailError}>
//               NEXT
//             </Button>
//           </Box>
//         )}

//         {activeStep === 1 && (
//           <Box mt={4} textAlign="center">
//             <Typography variant="h5" fontWeight="bold">SIGN UP</Typography>
//             <Typography variant="body1" mt={2}>6-digit PIN is sent to ******{phone.slice(-4)}</Typography>

//             <TextField fullWidth label="Enter PIN to verify" variant="outlined" value={pin} onChange={(e) => setPin(e.target.value)} sx={{ mt: 2 }} />
//             <Typography variant="body2" sx={{ mt: 1 }}>Didn’t receive a PIN? <span style={{ color: "#2B909B", cursor: "pointer", fontWeight: "bold" }}>Resend PIN</span></Typography>

//             <Box display="flex" justifyContent="space-between" mt={3}>
//               <Button variant="text" sx={{ width: "100px", color: "#2B909B", border: "2px solid #2B909B" }} onClick={handleBack}>Back</Button>
//               <Button variant="contained" sx={{ backgroundColor: "#2B909B", width: "100px" }} onClick={handleNext} disabled={pin.length !== 6}>NEXT</Button>
//             </Box>
//           </Box>
//         )}

//         {activeStep === 2 && (
//           <Box mt={6} textAlign="center">
//             <Typography variant="h5" fontWeight="bold">SIGN UP</Typography>
//             <Typography variant="body1" mt={2}>Personal Info</Typography>

//             <form onSubmit={formik.handleSubmit}>
//               <Box display="flex" gap={2} mt={2}>
//                 <Select fullWidth name="title" value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.title && Boolean(formik.errors.title)} displayEmpty sx={{ flex: 1 }}>
//                   <MenuItem value="" disabled>Title</MenuItem>
//                   <MenuItem value="Mr.">Mr.</MenuItem>
//                   <MenuItem value="Ms.">Ms.</MenuItem>
//                   <MenuItem value="Dr.">Dr.</MenuItem>
//                 </Select>

//                 <TextField fullWidth name="firstName" label="First Name" variant="outlined" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.firstName && Boolean(formik.errors.firstName)} helperText={formik.touched.firstName && formik.errors.firstName} sx={{ flex: 2 }} />
//                 <TextField fullWidth name="lastName" label="Last Name" variant="outlined" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.lastName && Boolean(formik.errors.lastName)} helperText={formik.touched.lastName && formik.errors.lastName} sx={{ flex: 2 }} />
//               </Box>

//               <RadioGroup row value={idType} onChange={(e) => setIdType(e.target.value)} sx={{ mt: 2, justifyContent: "center" }}>
//                 <FormControlLabel value="NIC" control={<Radio />} label="NIC" />
//                 <FormControlLabel value="Passport" control={<Radio />} label="Passport" />
//               </RadioGroup>

//               <TextField fullWidth name="nic" label={`Enter ${idType}`} variant="outlined" value={formik.values.nic} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.nic && Boolean(formik.errors.nic)} helperText={formik.touched.nic && formik.errors.nic} sx={{ mt: 2 }} />
//               <TextField fullWidth name="email" label="Email Address" variant="outlined" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} sx={{ mt: 2 }} />

//               <Box display="flex" gap={2} mt={2}>
//                 <TextField fullWidth name="password" label="Password" type={showPassword ? "text" : "password"} variant="outlined" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} sx={{ flex: 2 }} InputProps={{ endAdornment: (<InputAdornment position="end"><IconButton onClick={togglePasswordVisibility} edge="end">{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>), }} />
//                 <TextField fullWidth name="confirmPassword" label="Confirm Password" type={showConfirmPassword ? "text" : "password"} variant="outlined" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)} helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} sx={{ flex: 2 }} InputProps={{ endAdornment: (<InputAdornment position="end"><IconButton onClick={toggleConfirmPasswordVisibility} edge="end">{showConfirmPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>), }} />
//               </Box>

//               <Box display="flex" justifyContent="space-between" mt={3}>
//                 <Button variant="text" sx={{ width: "100px", color: "#2B909B", border: "2px solid #2B909B" }} onClick={handleBack}>Back</Button>
//                 <Button variant="contained" sx={{ backgroundColor: "#2B909B", width: "120px" }} type="submit" disabled={loading}>{loading ? "Registering..." : "REGISTER"}</Button>
//               </Box>
//             </form>
//           </Box>
//         )}
//       </Paper>
//     </Box>
//   );
// };

// export default SignUp;



import React, { useState, useEffect } from "react";
import {
  Box, Stepper, Step, StepLabel, Button, Typography,
  TextField, Select, MenuItem, Paper, Radio, RadioGroup, FormControlLabel,
  InputAdornment, IconButton
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [country, setCountry] = useState("Sri Lanka");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [generatedPin, setGeneratedPin] = useState("");
  const [idType, setIdType] = useState("NIC");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const steps = ["Contact Info", "Verify", "Personal Info"];

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const validatePhone = (value) => {
    if (country === "Sri Lanka" && !/^\d{10}$/.test(value)) {
      setPhoneError("Phone number must be 10 digits.");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = (value) => {
    if (country !== "Sri Lanka" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if ((country === "Sri Lanka" && !phoneError && phone) || (country !== "Sri Lanka" && !emailError && formik.values.email)) {
        setActiveStep((prev) => prev + 1);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please enter valid contact information.",
          confirmButtonColor: "#2B909B"
        });
      }
    } else if (activeStep < steps.length - 1) {
      if (activeStep === 1 && pin !== generatedPin) {
        Swal.fire({
          icon: "error",
          title: "Invalid PIN",
          text: "The PIN you entered is incorrect.",
          confirmButtonColor: "#2B909B"
        });
        return;
      }
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  // Generate new PIN when step 1 loads
  useEffect(() => {
    if (activeStep === 1) {
      const newPin = generatePin();
      setGeneratedPin(newPin);
      setPin("");
    }
  }, [activeStep]);

  const generatePin = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleResendPin = () => {
    const newPin = generatePin();
    setGeneratedPin(newPin);
    setPin("");
    Swal.fire({
      icon: "success",
      title: "PIN Resent",
      text: `A new PIN has been generated.`,
      confirmButtonColor: "#2B909B"
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      nic: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      nic: Yup.string()
        .required(`${idType} is required`)
        .test("is-valid-nic", "Invalid NIC. Use 9 digits + V/v or 12 digits.", (value) => {
          if (!value) return false;
          const nineDigitPattern = /^\d{9}[vV]$/;
          const twelveDigitPattern = /^\d{12}$/;
          return nineDigitPattern.test(value) || twelveDigitPattern.test(value);
        }),
      email: Yup.string()
        .required("Email is required")
        .matches(/^[^\s@]+@gmail\.com$/, "Email must be a valid @gmail.com address"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Must be at least 6 characters")
        .matches(/[0-9]/, "Must contain a number")
        .matches(/[!@#$%^&*]/, "Must contain a special character"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:3000/api/register", {
          country,
          phone,
          email: values.email,
          title: values.title,
          firstName: values.firstName,
          lastName: values.lastName,
          idType,
          nicOrPassport: values.nic,
          password: values.password,
        });

        if (response.status === 201 || response.status === 200) {
          Swal.fire({
            title: "Registration Complete!",
            text: "You have successfully registered.",
            icon: "success",
            confirmButtonColor: "#2B909B",
          }).then(() => navigate("/signin"));
        }
      } catch (error) {
        if (error.response?.status === 400) {
          Swal.fire({
            title: "Registration Failed!",
            text: error.response.data.message || "Email or NIC/Passport already exists",
            icon: "warning",
            confirmButtonColor: "#2B909B",
          });
        } else {
          Swal.fire({
            title: "Registration Failed!",
            text: "Server error. Please try again.",
            icon: "error",
            confirmButtonColor: "#2B909B",
          });
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <Paper elevation={10} sx={{ p: 4, width: "40%", minWidth: "350px" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, idx) => (
            <Step key={idx}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* STEP 1: CONTACT INFO */}
        {activeStep === 0 && (
          <Box mt={4} textAlign="center">
            <Typography variant="h4" fontWeight="bold">SIGN UP</Typography>
            <Typography variant="body1" mt={2}>Contact Info</Typography>

            <Select fullWidth value={country} onChange={(e) => { setCountry(e.target.value); setPhone(""); formik.setFieldValue("email", ""); setPhoneError(""); setEmailError(""); }} sx={{ mt: 2 }}>
              <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
            </Select>

            {country === "Sri Lanka" ? (
              <TextField fullWidth label="Phone Number" variant="outlined" value={phone} onChange={(e) => { setPhone(e.target.value); validatePhone(e.target.value); }} error={!!phoneError} helperText={phoneError} sx={{ mt: 2 }} />
            ) : (
              <TextField fullWidth label="Email Address" variant="outlined" value={formik.values.email} onChange={(e) => { formik.setFieldValue("email", e.target.value); validateEmail(e.target.value); }} error={!!emailError} helperText={emailError} sx={{ mt: 2 }} />
            )}

            <Button variant="contained" sx={{ mt: 3, backgroundColor: "#2B909B" }} onClick={handleNext} disabled={country === "Sri Lanka" ? !phone || phoneError : !formik.values.email || emailError}>
              NEXT
            </Button>
          </Box>
        )}

        {/* STEP 2: PIN VERIFICATION */}
        {activeStep === 1 && (
          <Box mt={4} textAlign="center">
            <Typography variant="h5" fontWeight="bold">SIGN UP</Typography>
            <Typography variant="body1" mt={2}>6-digit PIN is sent to ******{phone.slice(-4)}</Typography>

            <TextField
              fullWidth
              label="Enter PIN to verify"
              variant="outlined"
              value={pin}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d{0,6}$/.test(val)) setPin(val);
              }}
              sx={{ mt: 2 }}
              error={pin && pin !== generatedPin}
              helperText={pin && pin !== generatedPin ? "PIN does not match" : " "}
            />

            <Typography variant="caption" sx={{ mt: 1, display: "block", color: "#2B909B" }}>
              Generated PIN: {generatedPin}
            </Typography>

            <Typography variant="body2" sx={{ mt: 1, cursor: "pointer", fontWeight: "bold", color: "#2B909B" }} onClick={handleResendPin}>
              Didn’t receive a PIN? Resend PIN
            </Typography>

            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button variant="text" sx={{ width: "100px", color: "#2B909B", border: "2px solid #2B909B" }} onClick={handleBack}>Back</Button>
              <Button variant="contained" sx={{ backgroundColor: "#2B909B", width: "100px" }} onClick={handleNext} disabled={pin.length !== 6 || pin !== generatedPin}>
                NEXT
              </Button>
            </Box>
          </Box>
        )}

        {/* STEP 3: PERSONAL INFO */}
        {activeStep === 2 && (
          <Box mt={6} textAlign="center">
            <Typography variant="h5" fontWeight="bold">SIGN UP</Typography>
            <Typography variant="body1" mt={2}>Personal Info</Typography>

            <form onSubmit={formik.handleSubmit}>
              <Box display="flex" gap={2} mt={2}>
                <Select fullWidth name="title" value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.title && Boolean(formik.errors.title)} displayEmpty sx={{ flex: 1 }}>
                  <MenuItem value="" disabled>Title</MenuItem>
                  <MenuItem value="Mr.">Mr.</MenuItem>
                  <MenuItem value="Ms.">Ms.</MenuItem>
                  <MenuItem value="Dr.">Dr.</MenuItem>
                </Select>

                <TextField fullWidth name="firstName" label="First Name" variant="outlined" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.firstName && Boolean(formik.errors.firstName)} helperText={formik.touched.firstName && formik.errors.firstName} sx={{ flex: 2 }} />
                <TextField fullWidth name="lastName" label="Last Name" variant="outlined" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.lastName && Boolean(formik.errors.lastName)} helperText={formik.touched.lastName && formik.errors.lastName} sx={{ flex: 2 }} />
              </Box>

              <RadioGroup row value={idType} onChange={(e) => setIdType(e.target.value)} sx={{ mt: 2, justifyContent: "center" }}>
                <FormControlLabel value="NIC" control={<Radio />} label="NIC" />
                <FormControlLabel value="Passport" control={<Radio />} label="Passport" />
              </RadioGroup>

              <TextField fullWidth name="nic" label={`Enter ${idType}`} variant="outlined" value={formik.values.nic} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.nic && Boolean(formik.errors.nic)} helperText={formik.touched.nic && formik.errors.nic} sx={{ mt: 2 }} />
              <TextField fullWidth name="email" label="Email Address" variant="outlined" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} sx={{ mt: 2 }} />

              <Box display="flex" gap={2} mt={2}>
                <TextField fullWidth name="password" label="Password" type={showPassword ? "text" : "password"} variant="outlined" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} sx={{ flex: 2 }} InputProps={{ endAdornment: (<InputAdornment position="end"><IconButton onClick={togglePasswordVisibility} edge="end">{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>), }} />
                <TextField fullWidth name="confirmPassword" label="Confirm Password" type={showConfirmPassword ? "text" : "password"} variant="outlined" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)} helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} sx={{ flex: 2 }} InputProps={{ endAdornment: (<InputAdornment position="end"><IconButton onClick={toggleConfirmPasswordVisibility} edge="end">{showConfirmPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>), }} />
              </Box>

              <Box display="flex" justifyContent="space-between" mt={3}>
                <Button variant="text" sx={{ width: "100px", color: "#2B909B", border: "2px solid #2B909B" }} onClick={handleBack}>Back</Button>
                <Button variant="contained" sx={{ backgroundColor: "#2B909B", width: "120px" }} type="submit" disabled={loading}>{loading ? "Registering..." : "REGISTER"}</Button>
              </Box>
            </form>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default SignUp;
