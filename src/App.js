
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HospitalDashboard from './components/HospitalDashbord';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Bookings from './Pages/Bookings';
import LabReports from './Pages/LabReports';
import SearchResults from './components/SearchResults';
import HospitalDashboards from './Pages/ChannelDoctor/HospitalDashboards';
import ChannelDoctor from './Pages/ChannelDoctor/ChannelDoctor'; 
import { AuthProvider } from "./context/AuthContext";


import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";


// const stripePromise = loadStripe("pk_test_YourPublicStripeKeyHere")
// const stripePromise = loadStripe("pk_test_51RdD3U4E2Cgk4YHuTHq1rr319Bq4FzIWcmPlQuxsgfAhGdU7CWpHpaNYInsmyz9XE23w7zVtSys4Kqz0KnB5f3JR00NxnTjm1U");

function App() {
  return (
   
    <ThemeProvider theme={theme}>
      <Router>
         <AuthProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HospitalDashboard />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/lab-reports" element={<LabReports />} />
              
              
             <Route path="/signup" element={<SignUp />} />
              <Route path="/channel-doctor" element={<HospitalDashboards />} />
              <Route path="/results" element={<SearchResults />} />
              <Route path="/channel/:id" element={<ChannelDoctor />} />

             
              {/* <Route path="/channel/:id" element={
    <Elements stripe={stripePromise}>
      <ChannelDoctor />
    </Elements>
  }
/> */}
            </Routes>
          </div>
          <Footer />
        </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;



