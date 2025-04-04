// import React, { useState } from "react";

// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, Box,Paper } from "@mui/material";

// const LabReports = () => {
//   const [open, setOpen] = useState(false);
//   const [referenceNumber, setReferenceNumber] = useState("");
//   const [reportAvailable, setReportAvailable] = useState(false);

//   const isFormValid = referenceNumber ;

//   // Simulate checking the report
//   const handleCheckReport = () => {
//     // Dummy check: If reference number ends in "5", report is available
//     if (referenceNumber.trim() !== "" && referenceNumber.endsWith("5")) {
//       setReportAvailable(true);
//     } else {
//       setReportAvailable(false);
//     }
//     setOpen(true); // Open the popup
//   };

//   return (
   
//         <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//           <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
//     <Box textAlign="center" mt={3}>
//       <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Poppins" }}>LAB REPORTS</Typography>
//       <Typography variant="h6" mt={4} sx={{ fontFamily: "Poppins" }}>Verify your lab report status here</Typography>

//       {/* Reference Number Input */}
//       <Box mt={6}>
//         <TextField
//           label="Reference Number"
//           variant="outlined"
//           placeholder="Type your reference number"
//           value={referenceNumber}
//           onChange={(e) => setReferenceNumber(e.target.value)}
//           fullWidth
//           sx={{ maxWidth: 400 }}
//         />
//       </Box>

//       {/* ENTER Button */}
//       <Box mt={6}>
//         <Button variant="contained"  
//                 sx={{ backgroundColor: "#2B909B", width: "120px" }}  onClick={handleCheckReport}  disabled={!isFormValid}>
//           ENTER
//         </Button>
//       </Box>

//       {/* Popup Dialog */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>Lab Report Status</DialogTitle>
//         <DialogContent>
//           <Typography>
//             {reportAvailable ? "✅ Your lab report is ready for download!" : "❌ No lab report found for this reference number."}
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)} color="primary">
//             OK
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//     </Paper>
//     </Box>
//   );
// };

// export default LabReports;





import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, Box, Paper } from "@mui/material";

const LabReports = () => {
  const [open, setOpen] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [reportAvailable, setReportAvailable] = useState(false);
  const [loading, setLoading] = useState(false);  // For loading state when checking the report
  const [errorMessage, setErrorMessage] = useState(""); // To handle error messages

  const isFormValid = referenceNumber.trim() !== "";

  // Simulate checking the report with an API
  const handleCheckReport = async () => {
    setLoading(true); // Set loading state
    setErrorMessage(""); // Clear previous errors
    try {
      // Replace the dummy check with an API call
      const response = await fetch(`http://localhost:3000/api/lab-reports/check/${referenceNumber.trim()}`);
      const data = await response.json();

      if (data && data.status) {
        // If the report is available, check if it is ready for download or in another status
        if (data.report_status === "ready") {
          setReportAvailable(true);
        } else {
          setReportAvailable(false);
          setErrorMessage("The lab report is available. Collect your lab report.");
        }
      } else {
        setReportAvailable(false);
        setErrorMessage("❌ No lab report found for this reference number.");
      }
    } catch (error) {
      console.error("Error fetching report:", error);
      setReportAvailable(false); // Set false if there is an error
      setErrorMessage("❌ There was an error fetching the report.");
    } finally {
      setLoading(false); // End loading state
    }

    setOpen(true); // Open the popup
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
        <Box textAlign="center" mt={3}>
          <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Poppins" }}>LAB REPORTS</Typography>
          <Typography variant="h6" mt={4} sx={{ fontFamily: "Poppins" }}>Verify your lab report status here</Typography>

          {/* Reference Number Input */}
          <Box mt={6}>
            <TextField
              label="Reference Number"
              variant="outlined"
              placeholder="Type your reference number"
              value={referenceNumber}
              onChange={(e) => setReferenceNumber(e.target.value)}
              fullWidth
              sx={{ maxWidth: 400 }}
            />
          </Box>

          {/* ENTER Button */}
          <Box mt={6}>
            <Button 
              variant="contained"  
              sx={{ backgroundColor: "#2B909B", width: "120px",
                '&:hover': {
              backgroundColor: '#4da6a9',
            },
               }}  
              onClick={handleCheckReport} 
              disabled={!isFormValid || loading}
            >
              {loading ? "Checking..." : "ENTER"}
            </Button>
          </Box>

          {/* Popup Dialog */}
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Lab Report Status</DialogTitle>
            <DialogContent>
              {errorMessage ? (
                <Typography>{errorMessage}</Typography>
              ) : (
                <Typography>
                  {reportAvailable ? "✅ Your lab report is ready for download!" : "❌ No lab report found for this reference number."}
                </Typography>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Paper>
    </Box>
  );
};

export default LabReports;


