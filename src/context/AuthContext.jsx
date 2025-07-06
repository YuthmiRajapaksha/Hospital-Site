// import React, { createContext, useEffect, useState } from 'react';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = (userData) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// src/context/AuthContext.js
// import React, { createContext, useState, useEffect, useCallback } from "react";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// function setupAutoLogout(token, logoutCallback) {
//   try {
//     const decoded = jwtDecode(token);
//     const exp = decoded.exp;
//     const currentTime = Date.now() / 1000;
//     const delay = (exp - currentTime) * 1000;

//     if (delay <= 0) {
//       logoutCallback();
//     } else {
//       setTimeout(logoutCallback, delay);
//     }
//   } catch {
//     logoutCallback();
//   }
// }

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const navigate = useNavigate();

//   const logout = useCallback(() => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   }, [navigate]);

//   const login = (userData, authToken) => {
//     setUser(userData);
//     setToken(authToken);
//     localStorage.setItem("token", authToken);
//     localStorage.setItem("user", JSON.stringify(userData));
//     setupAutoLogout(authToken, logout);
//   };

//   // On app load, check localStorage for token & user
//   useEffect(() => {
//     const savedToken = localStorage.getItem("token");
//     const savedUser = localStorage.getItem("user");

//     if (savedToken && savedUser) {
//       const userData = JSON.parse(savedUser);
//       setUser(userData);
//       setToken(savedToken);
//       setupAutoLogout(savedToken, logout);
//     }
//   }, [logout]);

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// import React, { createContext, useState, useEffect, useCallback } from "react";
// import {jwtDecode} from "jwt-decode"; // Correct default import
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// function setupAutoLogout(token, logoutCallback) {
//   try {
//     const decoded = jwtDecode(token);
//     const exp = decoded.exp;
//     const currentTime = Date.now() / 1000;
//     const delay = (exp - currentTime) * 1000;

//     if (delay <= 0) {
//       logoutCallback();
//     } else {
//       setTimeout(logoutCallback, delay);
//     }
//   } catch {
//     logoutCallback();
//   }
// }

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const navigate = useNavigate();

//   const logout = useCallback(() => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/signin"); // or "/login" if that's your route
//   }, [navigate]);

//   const login = (userData, authToken) => {
//     setUser(userData);
//     setToken(authToken);
//     localStorage.setItem("token", authToken);
//     localStorage.setItem("user", JSON.stringify(userData));
//     setupAutoLogout(authToken, logout);
//   };

//   // On app load, check localStorage for token & user
//   useEffect(() => {
//     const savedToken = localStorage.getItem("token");
//     const savedUser = localStorage.getItem("user");

//     if (savedToken && savedUser) {
//       const userData = JSON.parse(savedUser);
//       setUser(userData);
//       setToken(savedToken);
//       setupAutoLogout(savedToken, logout);
//     }
//   }, [logout]);

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// import React, { createContext, useState, useEffect, useCallback } from "react";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// function setupAutoLogout(token, logoutCallback) {
//   try {
//     const decoded = jwtDecode(token);
//     const exp = decoded.exp;
//     const currentTime = Date.now() / 1000;
//     const delay = (exp - currentTime) * 1000;

//     console.log("Token expires at:", new Date(exp * 1000));
//     console.log("Will logout in:", delay / 1000, "seconds");

//     if (delay <= 0) {
//       logoutCallback();
//     } else {
//       setTimeout(logoutCallback, delay);
//     }
//   } catch {
//     logoutCallback();
//   }
// }

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const navigate = useNavigate();

//   const logout = useCallback(() => {
//     console.log("🔒 Logging out now (expired or manual)");
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/signin");
//   }, [navigate]);

//   const login = (userData, authToken) => {
//     setUser(userData);
//     setToken(authToken);
//     localStorage.setItem("token", authToken);
//     localStorage.setItem("user", JSON.stringify(userData));
//     setupAutoLogout(authToken, logout);
//   };

//   useEffect(() => {
//     const savedToken = localStorage.getItem("token");
//     const savedUser = localStorage.getItem("user");

//     if (savedToken && savedUser) {
//       const userData = JSON.parse(savedUser);
//       setUser(userData);
//       setToken(savedToken);
//       setupAutoLogout(savedToken, logout);
//     }
//   }, [logout]);

//   // ✅ Interval fallback — check every 5s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (token) {
//         const decoded = jwtDecode(token);
//         if (decoded.exp < Date.now() / 1000) {
//           console.log("🔄 Token expired — auto logging out");
//           logout();
//         }
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [token, logout]);

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

