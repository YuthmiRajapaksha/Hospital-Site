

// // // // // import React, { createContext, useState, useEffect } from "react";
// // // // // import axios from "axios";

// // // // // export const AuthContext = createContext();

// // // // // export const AuthProvider = ({ children }) => {
// // // // //   const [user, setUser] = useState(() => {
// // // // //     const storedUser = localStorage.getItem("user");
// // // // //     return storedUser ? JSON.parse(storedUser) : null;
// // // // //   });

// // // // //   const [token, setToken] = useState(() => localStorage.getItem("token"));

// // // // //   useEffect(() => {
// // // // //     if (token) {
// // // // //       localStorage.setItem("token", token);
// // // // //       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// // // // //     } else {
// // // // //       localStorage.removeItem("token");
// // // // //       delete axios.defaults.headers.common["Authorization"];
// // // // //     }
// // // // //   }, [token]);

// // // // //   useEffect(() => {
// // // // //     if (user) {
// // // // //       localStorage.setItem("user", JSON.stringify(user));
// // // // //     } else {
// // // // //       localStorage.removeItem("user");
// // // // //     }
// // // // //   }, [user]);

// // // // //   const login = (userData, jwtToken) => {
// // // // //     setUser(userData);
// // // // //     setToken(jwtToken);
    
// // // // //   };

// // // // //   const logout = () => {
// // // // //     setUser(null);
// // // // //     setToken(null);
// // // // //   };

// // // // //   return (
// // // // //     <AuthContext.Provider value={{ user, token, login, logout }}>
// // // // //       {children}
// // // // //     </AuthContext.Provider>
// // // // //   );
// // // // // };


// // // // import { createContext, useState, useEffect } from "react";

// // // // export const AuthContext = createContext();

// // // // export const AuthProvider = ({ children }) => {
// // // //   const [auth, setAuth] = useState({
// // // //     isLoggedIn: false,
// // // //     role: null,
// // // //     token: null,
// // // //     doctor: null,
// // // //   });

// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("token");
// // // //     const role = localStorage.getItem("role");

// // // //     if (token) {
// // // //       setAuth({
// // // //         isLoggedIn: true,
// // // //         role,
// // // //         token,
// // // //       });
// // // //     }
// // // //   }, []);

// // // //   const login = (data) => {
// // // //     localStorage.setItem("token", data.token);
// // // //     localStorage.setItem("role", data.role);

// // // //     setAuth({
// // // //       isLoggedIn: true,
// // // //       role: data.role,
// // // //       token: data.token,
// // // //       doctor: data.doctor || null,
// // // //     });
// // // //   };

// // // //   const logout = () => {
// // // //     localStorage.clear();
// // // //     setAuth({
// // // //       isLoggedIn: false,
// // // //       role: null,
// // // //       token: null,
// // // //       doctor: null,
// // // //     });
// // // //   };

// // // //   return (
// // // //     <AuthContext.Provider value={{ auth, login, logout }}>
// // // //       {children}
// // // //     </AuthContext.Provider>
// // // //   );
// // // // };



// // // import { createContext, useState, useEffect } from "react";

// // // export const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //   const [auth, setAuth] = useState({
// // //     isLoggedIn: false,
// // //     role: null,
// // //     token: null,
// // //     doctor: null,
// // //     user: null,
// // //   });

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("token");
// // //     const role = localStorage.getItem("role");
// // //     const savedUser = localStorage.getItem("user");

// // //     if (token && role && savedUser) {
// // //       const parsedUser = JSON.parse(savedUser);

// // //       setAuth({
// // //         isLoggedIn: true,
// // //         role,
// // //         token,
// // //         doctor: role === "doctor" ? parsedUser : null,
// // //         user: role === "user" ? parsedUser : null,
// // //       });
// // //     }
// // //   }, []);

// // //   const login = (data) => {
// // //     const { token, role, user, doctor } = data;

// // //     localStorage.setItem("token", token);
// // //     localStorage.setItem("role", role);

// // //     if (user) {
// // //       localStorage.setItem("user", JSON.stringify(user));
// // //     }

// // //     if (doctor) {
// // //       localStorage.setItem("user", JSON.stringify(doctor));
// // //     }

// // //     setAuth({
// // //       isLoggedIn: true,
// // //       role,
// // //       token,
// // //       doctor: role === "doctor" ? doctor : null,
// // //       user: role === "user" ? user : null,
// // //     });
// // //   };

// // //   const logout = () => {
// // //     localStorage.clear();
// // //     setAuth({
// // //       isLoggedIn: false,
// // //       role: null,
// // //       token: null,
// // //       doctor: null,
// // //       user: null,
// // //     });
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ auth, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };



// // import { createContext, useState, useEffect } from "react";

// // export const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [token, setToken] = useState(null);
// //   const [role, setRole] = useState(null);

// //   // Load from localStorage on refresh
// //   useEffect(() => {
// //     const savedUser = localStorage.getItem("user");
// //     const savedToken = localStorage.getItem("token");
// //     const savedRole = localStorage.getItem("role");

// //     if (savedUser && savedToken) {
// //       setUser(JSON.parse(savedUser));
// //       setToken(savedToken);
// //       setRole(savedRole);
// //     }
// //   }, []);

// //   const login = (data) => {
// //     // expected: { user, token, role }
// //     localStorage.setItem("user", JSON.stringify(data.user));
// //     localStorage.setItem("token", data.token);
// //     localStorage.setItem("role", data.role || "");

// //     setUser(data.user);
// //     setToken(data.token);
// //     setRole(data.role || "");
// //   };

// //   const logout = () => {
// //     localStorage.clear();
// //     setUser(null);
// //     setToken(null);
// //     setRole(null);
// //   };

// //   return (
// //     <AuthContext.Provider
// //       value={{ user, token, role, login, logout }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };


// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//   const [auth, setAuth] = useState({
//     isLoggedIn: false,
//     role: null,
//     token: null,
//     user: null,     // ✅ ADD
//     doctor: null,
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (token) {
//       setAuth({
//         isLoggedIn: true,
//         role,
//         token,
//         user,
//         doctor: null
//       });
//     }
//   }, []);

//   const login = (data) => {

//     localStorage.setItem("token", data.token);
//     localStorage.setItem("role", data.role);

//     if (data.user) {
//       localStorage.setItem("user", JSON.stringify(data.user)); 
//     }

//     setAuth({
//       isLoggedIn: true,
//       role: data.role,
//       token: data.token,
//       user: data.user || null,      
//       doctor: data.doctor || null,
//     });
//   };

//   const logout = () => {
//     localStorage.clear();
//     setAuth({
//       isLoggedIn: false,
//       role: null,
//       token: null,
//       user: null,
//       doctor: null,
//     });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         auth,
//         user: auth.user,      
//         login,
//         logout
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };


import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    role: null,
    token: null,
    user: null,
    doctor: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token) {
      setAuth({
        isLoggedIn: true,
        role: role || "user",
        token,
        user: user || null,
      });
    }
  }, []);

  const login = ({ token, role, user, doctor }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role || "user"); // fallback
    if (user) localStorage.setItem("user", JSON.stringify(user));
    if (doctor) localStorage.setItem("doctor", JSON.stringify(doctor));

    setAuth({
      isLoggedIn: true,
      token,
      role: role || "user",
      user: user || null,
      doctor: doctor || null,
    });
  };

  const logout = () => {
    localStorage.clear();
    setAuth({
      isLoggedIn: false,
      role: null,
      token: null,
      user: null,
      doctor: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
