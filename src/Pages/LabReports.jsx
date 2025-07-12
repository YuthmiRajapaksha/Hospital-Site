
import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, Box, Paper } from "@mui/material";

const LabReports = () => {
  const [open, setOpen] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [reportStatusMessage, setReportStatusMessage] = useState("");

  const isFormValid = referenceNumber.trim() !== "";

  const handleCheckReport = async () => {
    setLoading(true);
    setReportStatusMessage("");

    try {
      const response = await fetch(`http://localhost:3000/api/lab-reports/check/${referenceNumber.trim()}`);
      const data = await response.json();

      if (data && data.status) {
        
        let message = "";
        switch (data.status) {
          case "Completed":
            message = "✅ Status: Completed";
            break;
          case "In Progress":
            message = "⏳ Status: In Progress";
            break;
          case "Pending":
            message = "🕐 Status: Pending";
            break;
          default:
            message = `ℹ️ Status: ${data.status}`;
        }
        setReportStatusMessage(message);
      } else {
        setReportStatusMessage("❌ No lab report found for this reference number.");
      }
    } catch (error) {
      console.error("Error fetching report:", error);
      setReportStatusMessage("❌ There was an error fetching the report.");
    } finally {
      setLoading(false);
      setOpen(true);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
        <Box textAlign="center" mt={3}>
          <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Poppins" }}>LAB REPORTS</Typography>
          <Typography variant="h6" mt={4} sx={{ fontFamily: "Poppins" }}>Verify your lab report status here</Typography>

         
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

         
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Lab Report Status</DialogTitle>
            <DialogContent>
             
              <Typography>{reportStatusMessage}</Typography>

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


