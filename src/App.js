// import logo from './logo.svg';
// import React from "react";
// import ReactDOM from "react-dom";
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HospitalDashboard from '../src/components/HospitalDashbord';
// import Navbar from './components/Navbar';
// import Footer from "../src/components/Footer";
// import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";
// import Bookings from './Pages/Bookings';
// import LabReports from './Pages/LabReports';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import DoctorResults from "./Pages/ChannelDoctor/DoctorResults";
// import SearchResults from './components/SearchResults';
// import HospitalDashboards from './Pages/ChannelDoctor/HospitalDashboards';
// import ChannelDoctor from './Pages/ChannelDoctor/ChannelDoctor'
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../src/theme"; // Import the theme
// // import { Elements } from "@stripe/react-stripe-js";
// // import { loadStripe } from "@stripe/stripe-js";
// import ChannelDoctorStripeWrapper from './Pages/ChannelDoctor/ChannelDoctorStripeWrapper';



// // const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");




// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className="content">
//             <Routes>
//               <Route path="/" element={<HospitalDashboard />} />
//               <Route path="/signin" element={<SignIn />} />
//               <Route path="/bookings" element={<Bookings />} />
//               <Route path="/lab-reports" element={<LabReports />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/channel-doctor" element={<HospitalDashboards />} />
//               <Route path="/results" element={<SearchResults />} />
//               {/* <Route path="/channel/:id" element={<ChannelDoctor />} /> */}
//               <Route path="/channel/:id" element={<ChannelDoctorStripeWrapper />} />




//             </Routes>
//           </div>
//           <Footer />
//         </div>
//       </Router>

//  {/* <Route
//   path="/channel/:id"
//   element={
//     <Elements stripe={stripePromise}>
//       <ChannelDoctor />
//     </Elements>
//   }
// /> */}


//     </ThemeProvider>
//   );
// }

// export default App;


// src/App.js

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
import About from './Pages/About';
import Contact from './Pages/Contact';
import SearchResults from './components/SearchResults';
import HospitalDashboards from './Pages/ChannelDoctor/HospitalDashboards';
import ChannelDoctorStripeWrapper from './Pages/ChannelDoctor/ChannelDoctorStripeWrapper'; // <- Stripe wrapper
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

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
              <Route path="/channel-doctor" element={<HospitalDashboards />} />
              <Route path="/results" element={<SearchResults />} />

              {/* ✅ Only this route handles payment and wraps ChannelDoctor */}
              <Route path="/channel/:id" element={<ChannelDoctorStripeWrapper />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;



