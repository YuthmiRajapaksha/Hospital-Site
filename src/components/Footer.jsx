import { Typography, Box, Link, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#77C2C8", py: 2, textAlign: "center", mt: 4 ,padding: "50px"}}>
      <Typography variant="body2" sx={{ fontSize: "30px", fontWeight: "bold" }}>
        MediCare
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "18px",mt:2, color: "gray" }}>
        &copy; {new Date().getFullYear()} MediCare Hospital Site. All Rights Reserved.
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 3 }}>
        <Link href="#" color="inherit" sx={{ fontSize: "14px" }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" sx={{ fontSize: "14px" }}>
          Contact Us
        </Link>
        <Link href="#" color="inherit" sx={{ fontSize: "14px" }}>
          Email Us
        </Link>
        
      </Stack>
      <Typography variant="body2" sx={{ fontSize: "14px", mt: 3 }}>
        📍 MediCare Hospital | 📞 +94 778585858 | ✉️ info@medicare.com
      </Typography>
    </Box>
  );
};

export default Footer;
