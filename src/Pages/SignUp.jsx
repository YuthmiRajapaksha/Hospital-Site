import React, { useState } from "react";
import { 
  Box, Stepper, Step, StepLabel, Button, Typography, 
  TextField, Select, MenuItem, Paper ,Radio, RadioGroup, FormControlLabel,InputAdornment, IconButton
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Swal from "sweetalert2";  // Import SweetAlert2
import { useNavigate } from "react-router-dom";  // Import useNavigate

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [country, setCountry] = useState("Sri Lanka");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idType, setIdType] = useState("NIC");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [phoneError, setPhoneError] = useState("");
// const [emailError, setEmailError] = useState("");

const [firstNameError, setFirstNameError] = useState("");
const [lastNameError, setLastNameError] = useState("");
const [nicError, setNicError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmPassword, setConfirmPassword] = useState('');
const [confirmPasswordError, setConfirmPasswordError] = useState('');
const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for toggling confirm password visibility

 // Function to toggle password visibility
 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

// Function to toggle confirm password visibility
const toggleConfirmPasswordVisibility = () => {
  setShowConfirmPassword(!showConfirmPassword);
};

const handleRegister = () => {
  let isValid = true;

  if (!firstName) {
    setFirstNameError("First name is required");
    isValid = false;
  } else {
    setFirstNameError("");
  }

  if (!lastName) {
    setLastNameError("Last name is required");
    isValid = false;
  } else {
    setLastNameError("");
  }

  if (!nic) {
    setNicError(`${idType} is required`);
    isValid = false;
  } else {
    setNicError("");
  }

  if (!email) {
    setEmailError("Email is required");
    isValid = false;
  } else {
    setEmailError("");
  }

  if (!password) {
    setPasswordError("Password is required");
    isValid = false;
  } else {
    setPasswordError("");
  }
  // Validation for Confirm Password
  if (password !== confirmPassword) {
    setConfirmPasswordError("Passwords do not match");
    isValid = false;
  } else {
    setConfirmPasswordError("");
  }

  if (isValid) {
    Swal.fire({
      title: "Registration Complete!",
      text: "You have successfully registered.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#2B909B"
    }).then(() => {
      navigate("/signin"); 
    });
  }
};

  // const handleRegister = () => {
  //   Swal.fire({
  //     title: "Registration Complete!",
  //     text: "You have successfully registered.",
  //     icon: "success",
  //     confirmButtonText: "OK",
  //     confirmButtonColor: "#2B909B"
  //   }).then(() => {
  //     navigate("/signin");  // Navigate to the sign-in page after successful registration
  //   });
  // };
  const steps = ["Contact Info", "Verify", "Personal Info"];

   // Validate Phone Number
   const validatePhone = (value) => {
    if (country === "Sri Lanka") {
      if (!/^\d{10}$/.test(value)) {
        setPhoneError("Phone number must be 10 digits.");
      } else {
        setPhoneError("");
      }
    }
  };

  // Validate Email
  const validateEmail = (value) => {
    if (country !== "Sri Lanka") {
      if (!/^[^\s@]+@gmail\.com$/.test(value)) {
        setEmailError("Enter a valid Gmail address.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (country === "Sri Lanka" && !phoneError && phone) {
        setActiveStep((prevStep) => prevStep + 1);
      } else if (country !== "Sri Lanka" && !emailError && email) {
        setActiveStep((prevStep) => prevStep + 1);
      }
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // const handleNext = () => {
  //   setActiveStep((prevStep) => prevStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevStep) => prevStep - 1);
  // };
//   const handleRegister = () => {
//     alert(`User Registered!\nName: ${fullName}\nEmail: ${email}`);
//   };



  return (
   
    <Box 
  sx={{ 
    mt: 2,  // Moves entire form down
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",  // Keeps it centered
  }}
>
  <Paper 
    elevation={10} 
    sx={{ p: 4, width: "40%", minWidth: "350px" }}
  >
        
        {/* Stepper */}
        {/* <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper> */}

<Stepper
  activeStep={activeStep}
  alternativeLabel
  sx={{
    "& .MuiStepIcon-root": {
      color: "#2B909B",  // Set the color of all the icons (default)
    },
    "& .MuiStepIcon-active": {
      color: "#2B909B",  // Set the color of the active icon
    },
    "& .MuiStepIcon-completed": {
      color: "#2B909B",  // Set the color of the completed icon
    },
    "& .MuiStepLabel-label": {
      color: "black",// Set the color of the step labels 
    //   fontWeight:"bold", 
    },
    "& .MuiStepLabel-active .MuiStepLabel-label": {
      color: "#2B909B",
      fontWeight:"bold",  // Set the color of the active step label
    },
    "& .MuiStepLabel-completed .MuiStepLabel-label": {
      color: "#2B909B",  // Set the color of the completed step label
    },
  }}
>
  {steps.map((label, index) => (
    <Step key={index}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>


        {/* Step 1: Contact Info */}
        {activeStep === 0 && (
          <Box mt={4} textAlign="center">
            <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Poppins" }}>SIGN UP</Typography>
            <Typography variant="body1" mt={2}>Contact Info</Typography>

            <Select 
              fullWidth 
              value={country} 
              onChange={(e) => {setCountry(e.target.value);
                setPhone(""); setEmail("");
                setPhoneError(""); setEmailError("");
              }} 
              sx={{ mt: 2 }}
            >
              <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
            </Select>

            {country === "Sri Lanka" ? (
              <TextField 
                fullWidth 
                label="Phone Number" 
                variant="outlined" 
                value={phone} 
                onChange={(e) => {
                  setPhone(e.target.value);
                  validatePhone(e.target.value);
                }}
                error={!!phoneError}
                helperText={phoneError}
                sx={{ mt: 2 }}
              />
            ) : (
              <TextField 
                fullWidth 
                label="Email Address" 
                variant="outlined" 
                value={email} 
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                error={!!emailError}
                helperText={emailError}
                sx={{ mt: 2 }}
              />
            )}

            <Button 
              variant="contained" 
              sx={{ mt: 3, backgroundColor: "#2B909B" }} 
              onClick={handleNext} 
              disabled={country === "Sri Lanka" ? !phone || phoneError : !email || emailError}
            >
              NEXT
            </Button>
          </Box>
        )}

            {/* <TextField 
              fullWidth 
              label="Phone Number" 
              variant="outlined" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              sx={{ mt: 2 }}
            />

            <Button 
              variant="contained" 
              sx={{ mt: 3, backgroundColor: "#2B909B" }} 
              onClick={handleNext} 
              disabled={!phone}
            >
              NEXT
            </Button>
          </Box>
        )} */}

        {/* Step 2: Verify */}
        {activeStep === 1 && (
          <Box mt={4} textAlign="center">
            <Typography variant="h5" fontWeight="bold">SIGN UP</Typography>
            <Typography variant="body1" mt={2}>6-digit PIN is sent to ******{phone.slice(-4)}</Typography>

            <TextField 
              fullWidth 
              label="Enter PIN to verify" 
              variant="outlined" 
              value={pin} 
              onChange={(e) => setPin(e.target.value)} 
              sx={{ mt: 2 }}
            />

            <Typography variant="body2" sx={{ mt: 1  }}>
              Didn’t receive a PIN? <span style={{ color: "#2B909B", cursor: "pointer", fontWeight: "bold" }}>Resend PIN</span>
            </Typography>

            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button variant="text" sx={{ 
                 width: "100px", 
                 color: "#2B909B",  // Text color
                 backgroundColor: "white", 
                 border:"2px solid #2B909B",
                 borderColor: "#2B909B", // Border color
                   "&:hover": {
                     backgroundColor: "#E0F7FA", // Light hover effect
                     borderColor: "#2B909B",
      
                    }
                     }} onClick={handleBack}>Back</Button>
              <Button 
                variant="contained" 
                sx={{ backgroundColor: "#2B909B" ,width: "100px" }} 
                onClick={handleNext} 
                disabled={pin.length !== 6}
              >
                NEXT
              </Button>
            </Box>
         </Box>
        )}

      {/* Step 3: Personal Info */}
      {activeStep === 2 && (
         <Box mt={6} textAlign="center"> {/* Increased margin-top */}
            
            <Typography variant="h5" fontWeight="bold">SIGN UP</Typography>
            <Typography variant="body1" mt={2}>Personal Info</Typography>

            <Box display="flex" gap={2} mt={2}>
            <Select 
              fullWidth 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              sx={{  flex: 1}}
              displayEmpty
            >
              <MenuItem value="" disabled>Title</MenuItem>
              <MenuItem value="Mr.">Mr.</MenuItem>
              <MenuItem value="Ms.">Ms.</MenuItem>
              <MenuItem value="Dr.">Dr.</MenuItem>
            </Select>

            {/* <Box display="flex" gap={2} mt={2}> */}
              <TextField 
                fullWidth 
                label="First Name" 
                variant="outlined" 
                value={firstName} 
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setFirstNameError("");  // Clear error on input
                }} 
                error={!!firstNameError}
                helperText={firstNameError}
                sx={{ flex: 2 }}
              />
              <TextField 
                fullWidth 
                label="Last Name" 
                variant="outlined" 
                value={lastName} 
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameError("");  // Clear error on input
                }} 
                error={!!lastNameError}
                helperText={lastNameError}
                sx={{ flex: 2 }}
              />
            </Box>

            <RadioGroup 
              row 
              value={idType} 
              onChange={(e) => setIdType(e.target.value)} 
              sx={{ mt: 2, justifyContent: "center" }}
            >
              <FormControlLabel value="NIC" control={<Radio />} label="NIC" />
              <FormControlLabel value="Passport" control={<Radio />} label="Passport" />
            </RadioGroup>

            <TextField 
              fullWidth 
              label={`Enter ${idType}`} 
              variant="outlined" 
              value={nic} 
              onChange={(e) => {
                setNic(e.target.value);
                setNicError("");  // Clear error on input
              }} 
              error={!!nicError}
              helperText={nicError}
              sx={{ mt: 2 }}
            />

            <TextField 
              fullWidth 
              label="Email Address" 
              variant="outlined" 
              value={email} 
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");  // Clear error on input
              }} 
              error={!!emailError}
              helperText={emailError}
            
              sx={{ mt: 2 }}
            />
            
            <Box display="flex" gap={2} mt={2}>
            <TextField 
              fullWidth 
              label="Password" 
              type={showPassword ? "text" : "password"} 
              variant="outlined" 
              value={password} 
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");  // Clear error on input
              }} 
              
              error={!!passwordError}
              helperText={passwordError}
              sx={{ flex: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              
            />
        <TextField 
          fullWidth 
          label="Confirm Password" 
          type={showConfirmPassword ? "text" : "password"}
          variant="outlined" 
          value={confirmPassword} 
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError("");  // Clear error on input
          }} 
          error={!!confirmPasswordError}
          helperText={confirmPasswordError}
          sx={{ flex: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
            

            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button 
                variant="text" 
                sx={{ 
                  width: "100px", 
                  color: "#2B909B",  
                  backgroundColor: "white", 
                  border:"2px solid #2B909B",
                  borderColor: "#2B909B", 
                  "&:hover": {
                    backgroundColor: "#E0F7FA",
                    borderColor: "#2B909B",
                  }
                }} 
                onClick={handleBack}
              >
                Back
              </Button>

              <Button 
                variant="contained" 
                sx={{ backgroundColor: "#2B909B", width: "120px" }} 
                onClick={handleRegister}  // Trigger the registration and alert
                // disabled={!title || !firstName || !lastName || !nic || !email || !password}
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        )}

      </Paper>
    </Box>
  );
};

export default SignUp;