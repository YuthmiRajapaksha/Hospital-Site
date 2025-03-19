import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HospitalDashboard from '../src/components/HospitalDashbord';
import Navbar from './components/Navbar';
import Footer from "../src/components/Footer";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Bookings from './Pages/Bookings';
import LabReports from './Pages/LabReports';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme"; // Import the theme


// function App() {
 
//     return (
//       <ThemeProvider theme={theme}>
//       {/* Your app components go here */}
//     </ThemeProvider>
//     <Router> 
//          <Navbar />
//       <Routes>
//         <Route path="" element={<HospitalDashboard  />} /> 
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/bookings" element={<Bookings />} />
//         <Route path="/lab-reports" element={<LabReports />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </Router>
//   );
// }

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme"; // Import your theme
// import Navbar from "./components/Navbar";
// import HospitalDashboard from "./pages/HospitalDashboard";
// import SignIn from "./pages/SignIn";
// import Bookings from "./pages/Bookings";
// import LabReports from "./pages/LabReports";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import SignUp from "./pages/SignUp";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <Navbar />
        
//         <Routes>
//           <Route path="/" element={<HospitalDashboard />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/bookings" element={<Bookings />} />
//           <Route path="/lab-reports" element={<LabReports />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }



// export default App;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HospitalDashboard />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/lab-reports" element={<LabReports />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


