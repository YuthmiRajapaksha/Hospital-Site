
// // import React, { useState } from "react";
// // import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, Box, Paper } from "@mui/material";

// // const LabReports = () => {
// //   const [open, setOpen] = useState(false);
// //   const [referenceNumber, setReferenceNumber] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [reportStatusMessage, setReportStatusMessage] = useState("");

// //   const [reportFileUrl, setReportFileUrl] = useState("");

// //   const isFormValid = referenceNumber.trim() !== "";

// //   const handleCheckReport = async () => {
// //     setLoading(true);
// //     setReportStatusMessage("");
// //     setReportFileUrl("");

// //     try {
// //       const response = await fetch(`http://localhost:3000/api/lab-reports/check/${referenceNumber.trim()}`);
// //       const data = await response.json();

// //       if (data && data.status) {
        
// //         let message = "";
// //         switch (data.status) {
// //           case "Completed":
// //             message = "✅ Status: Completed";
// //             break;
// //           case "In Progress":
// //             message = "⏳ Status: In Progress";
// //             break;
// //           case "Pending":
// //             message = "🕐 Status: Pending";
// //             break;
// //           default:
// //             message = `ℹ️ Status: ${data.status}`;
// //         }
// //         setReportStatusMessage(message);

// //             if (data.fileUrl) {
// //         setReportFileUrl(`http://localhost:3000${data.fileUrl}`);
// //       }
// //     } else {
// //       setReportStatusMessage("❌ No lab report found for this reference number.");
// //     }
// //   } catch (error) {
// //     console.error("Error fetching report:", error);
// //     setReportStatusMessage("❌ There was an error fetching the report.");
// //   } finally {
// //     setLoading(false);
// //     setOpen(true);
// //   }
// // };

// //   return (
// //     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
// //       <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
// //         <Box textAlign="center" mt={3}>
// //           <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Poppins" }}>LAB REPORTS</Typography>
// //           <Typography variant="h6" mt={4} sx={{ fontFamily: "Poppins" }}>Verify your lab report status here</Typography>

         
// //           <Box mt={6}>
// //             <TextField
// //               label="Reference Number"
// //               variant="outlined"
// //               placeholder="Type your reference number"
// //               value={referenceNumber}
// //               onChange={(e) => setReferenceNumber(e.target.value)}
// //               fullWidth
// //               sx={{ maxWidth: 400 }}
// //             />
// //           </Box>

        
// //           <Box mt={6}>
// //             <Button 
// //               variant="contained"  
// //               sx={{ backgroundColor: "#2B909B", width: "120px",
// //                 '&:hover': {
// //               backgroundColor: '#4da6a9',
// //             },
// //                }}  
// //               onClick={handleCheckReport} 
// //               disabled={!isFormValid || loading}
// //             >
// //               {loading ? "Checking..." : "ENTER"}
// //             </Button>
// //           </Box>

         
// //           <Dialog open={open} onClose={() => setOpen(false)}>
// //             <DialogTitle sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Lab Report Status</DialogTitle>
// //             <DialogContent>
// //              {reportFileUrl && (
// //   <Box mt={2}>
// //     <Button
// //       variant="contained"
// //       color="primary"
// //       href={reportFileUrl}
// //       target="_blank"
// //       sx={{ backgroundColor: "#2B909B" }}
// //     >
// //       Download Report PDF
// //     </Button>
// //   </Box>
// // )}

// //               <Typography>{reportStatusMessage}</Typography>

// //             </DialogContent>
// //             <DialogActions>
// //               <Button onClick={() => setOpen(false)} color="primary">
// //                 OK
// //               </Button>
// //             </DialogActions>
// //           </Dialog>
// //         </Box>
// //       </Paper>
// //     </Box>
// //   );
// // };

// // export default LabReports;




// import React, { useState } from "react";
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, Box, Paper,Slide } from "@mui/material";

// // Optional: smooth slide-up animation for better UX
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const LabReports = () => {
//   const [open, setOpen] = useState(false);
//   const [referenceNumber, setReferenceNumber] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [reportStatusMessage, setReportStatusMessage] = useState("");

//   const [reportFileUrl, setReportFileUrl] = useState("");

//   const isFormValid = referenceNumber.trim() !== "";

//   const handleCheckReport = async () => {
//     setLoading(true);
//     setReportStatusMessage("");
//     setReportFileUrl("");

//     try {
//       const response = await fetch(`http://localhost:3000/api/lab-reports/check/${referenceNumber.trim()}`);
//       const data = await response.json();

//       if (data && data.status) {
        
//         let message = "";
//         switch (data.status) {
//           case "Completed":
//             message = "✅ Status: Completed";
//             break;
//           case "In Progress":
//             message = "⏳ Status: In Progress";
//             break;
//           case "Pending":
//             message = "🕐 Status: Pending";
//             break;
//           default:
//             message = `ℹ️ Status: ${data.status}`;
//         }
//         setReportStatusMessage(message);

//             if (data.fileUrl) {
//         setReportFileUrl(`http://localhost:3000${data.fileUrl}`);
//       }
//     } else {
//       setReportStatusMessage("❌ No lab report found for this reference number.");
//     }
//   } catch (error) {
//     console.error("Error fetching report:", error);
//     setReportStatusMessage("❌ There was an error fetching the report.");
//   } finally {
//     setLoading(false);
//     setOpen(true);
//   }
// };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//       <Paper sx={{ padding: 4, mt: -20, maxWidth: 400, width: "100%", boxShadow: 10 }}>
//         <Box textAlign="center" mt={3}>
//           <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Poppins" }}>LAB REPORTS</Typography>
//           <Typography variant="h6" mt={4} sx={{ fontFamily: "Poppins" }}>Verify your lab report status here</Typography>

         
//           <Box mt={6}>
//             <TextField
//               label="Reference Number"
//               variant="outlined"
//               placeholder="Type your reference number"
//               value={referenceNumber}
//               onChange={(e) => setReferenceNumber(e.target.value)}
//               fullWidth
//               sx={{ maxWidth: 400 }}
//             />
//           </Box>

        
//           <Box mt={6}>
//             <Button 
//               variant="contained"  
//               sx={{ backgroundColor: "#2B909B", width: "120px",
//                 '&:hover': {
//               backgroundColor: '#4da6a9',
//             },
//                }}  
//               onClick={handleCheckReport} 
//               disabled={!isFormValid || loading}
//             >
//               {loading ? "Checking..." : "ENTER"}
//             </Button>
//           </Box>

         
//           {/* <Dialog open={open} onClose={() => setOpen(false)}>
//             <DialogTitle sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Lab Report Status</DialogTitle>
//             <DialogContent>
//              {reportFileUrl && (
//   <Box mt={2}>
//     <Button
//       variant="contained"
//       color="primary"
//       href={reportFileUrl}
//       target="_blank"
//       sx={{ backgroundColor: "#2B909B" }}
//     >
//       Download Report PDF
//     </Button>
//   </Box>
// )}

//               <Typography>{reportStatusMessage}</Typography>

//             </DialogContent>
//             <DialogActions>
//               <Button onClick={() => setOpen(false)} color="primary">
//                 OK
//               </Button>
//             </DialogActions>
//           </Dialog> */}

//         <Dialog
//   open={open}
//   onClose={() => setOpen(false)}
//   PaperProps={{
//     sx: {
//       borderRadius: "16px",
//       padding: 2,
//       width: 400,
//     },
//   }}
// >
//   <DialogTitle
//     sx={{
//       fontFamily: "Poppins",
//       fontWeight: "bold",
//       textAlign: "center",
//       color: "black",
//     }}
//   >
//     Lab Report Status
//   </DialogTitle>

//  <DialogContent>
//   {reportFileUrl && (
//     <Box
//       mt={2}
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       gap={2}
//     >
//       <Button
//         variant="contained"
//         href={reportFileUrl}
//         target="_blank"
//         sx={{
//           backgroundColor: "#2B909B",
//           fontWeight: "bold",
//           textTransform: "none",
//           px: 3,
//           py: 1.2,
//           borderRadius: "10px",
//           boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
//           "&:hover": {
//             backgroundColor: "#218c98",
//             transform: "scale(1.05)",
//           },
//         }}
//       >
//         📄 Download Report PDF
//       </Button>
//     </Box>
//   )}

//   {/* Status text always visible */}
//   <Typography
//     mt={2}
//     variant="body1"
//     sx={{
//       fontSize: "1rem",
//       fontWeight: 500,
//       letterSpacing: "0.5px",
//       color:
//         reportStatusMessage.includes("Completed")
//           ? "#2e7d32"
//           : reportStatusMessage.includes("In Progress")
//           ? "#f9a825"
//           : reportStatusMessage.includes("Pending")
//           ? "#d32f2f"
//           : "#555",
//       textAlign: "center",
//     }}
//   >
//     {reportStatusMessage}
//   </Typography>
// </DialogContent>


//   <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
//     <Button
//       onClick={() => setOpen(false)}
//       sx={{
//         backgroundColor: "#43a047",
//         color: "#fff",
//         fontWeight: "bold",
//         px: 5,
//         py: 1.2,
//         borderRadius: "20px",
//         textTransform: "none",
//         boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//         transition: "all 0.3s ease",
//         "&:hover": {
//           backgroundColor: "#388e3c",
//           transform: "scale(1.05)",
//         },
//       }}
//     >
//       ✅ OK
//     </Button>
//   </DialogActions>
// </Dialog>



//         </Box>
//       </Paper>
//     </Box>
//   );

// };

// export default LabReports;



import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Slide,
} from "@mui/material";

// Smooth dialog animation
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LabReports = () => {
  const [open, setOpen] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [reportStatusMessage, setReportStatusMessage] = useState("");
  const [reportFileUrl, setReportFileUrl] = useState("");

  const isFormValid = referenceNumber.trim() !== "";

  const handleCheckReport = async () => {
    setLoading(true);
    setReportStatusMessage("");
    setReportFileUrl("");

    try {
      const response = await fetch(
        `http://localhost:3000/api/lab-reports/check/${referenceNumber.trim()}`
      );
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

        if (data.fileUrl) {
          setReportFileUrl(`http://localhost:3000${data.fileUrl}`);
        }
      } else {
        setReportStatusMessage(
          "❌ No lab report found for this reference number."
        );
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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        // background: "linear-gradient(135deg, #e0f2f1, #f8fafc)",
        px: 2,
      }}
    >
      
      {/* TITLE */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          background: "linear-gradient(90deg, #2B909B, #1bb5f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}
      >
        LAB REPORTS
      </Typography>

      <Typography
        variant="h6"
        sx={{ color: "#64748b", mb: 5 }}
      >
        Verify your lab report status
      </Typography>

      {/* INPUT LINE */}
      <Box sx={{ width: "100%", maxWidth: 400 }}>
        <input
          type="text"
          placeholder="Enter Reference Number"
          value={referenceNumber}
          onChange={(e) => setReferenceNumber(e.target.value)}
          style={{
            width: "100%",
            border: "none",
            borderBottom: "2px solid #94a3b8",
            outline: "none",
            padding: "12px 5px",
            fontSize: "16px",
            background: "transparent",
            textAlign: "center",
            transition: "0.3s",
          }}
          onFocus={(e) =>
            (e.target.style.borderBottom = "2px solid #2B909B")
          }
          onBlur={(e) =>
            (e.target.style.borderBottom = "2px solid #94a3b8")
          }
        />
      </Box>

      {/* BUTTON */}
      <Box mt={5}>
        <Button
          variant="contained"
          onClick={handleCheckReport}
          disabled={!isFormValid || loading}
          sx={{
            background: "linear-gradient(135deg, #2B909B, #38bdf8)",
            px: 5,
            py: 1.5,
            borderRadius: "30px",
            fontWeight: 600,
            fontColor: "White",
            textTransform: "none",
            boxShadow: "0 10px 25px rgba(43,144,155,0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #1f6f78, #2B909B)",
              transform: "scale(1.05)",
            },
          }}
        >
          {loading ? "Checking..." : "Check Report"}
        </Button>
      </Box>

      {/* DIALOG */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            borderRadius: "20px",
            padding: 2,
            width: 400,
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Lab Report Status
        </DialogTitle>

        <DialogContent>
          {reportFileUrl && (
            <Box
              mt={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Button
                variant="contained"
                href={reportFileUrl}
                target="_blank"
                sx={{
                  background: "linear-gradient(135deg, #2B909B, #167781)",
                  borderRadius: "10px",
                  px: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                📄 Download Report
              </Button>
            </Box>
          )}

          <Typography
            mt={3}
            sx={{
              fontWeight: 500,
              textAlign: "center",
              color:
                reportStatusMessage.includes("Completed")
                  ? "#2e7d32"
                  : reportStatusMessage.includes("In Progress")
                  ? "#f9a825"
                  : reportStatusMessage.includes("Pending")
                  ? "#d32f2f"
                  : "#555",
            }}
          >
            {reportStatusMessage}
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              backgroundColor: "#2B909B",
              color: "#fff",
              px: 5,
              borderRadius: "20px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1f6f78",
              },
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LabReports;