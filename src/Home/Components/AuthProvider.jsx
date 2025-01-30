// import React, { useState, useEffect, createContext, useContext } from 'react';
// import jwtDecode from 'jwt-decode';

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//     const [token, setToken] = useState(null);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => { 
//         // token is not on local storage, it comes from a request from my server
//         const storedToken = localStorage.getItem('token');
//         if (storedToken) {
//             try {
//                 const decodedToken = jwtDecode(storedToken);
//                 if (decodedToken.exp * 1000 > Date.now()) {
//                     setToken(storedToken);
//                     setIsAuthenticated(true);
//                 } else {
//                     localStorage.removeItem('token');
//                 }
//             } catch (error) {
//                 console.error('Invalid token:', error);
//                 localStorage.removeItem('token');
//             }
//         }
//     }, []);

//     const login = (newToken) => {
//         localStorage.setItem('token', newToken);
//         setToken(newToken);
//         setIsAuthenticated(true);
//     };

//     const logout = () => {
//         localStorage.removeItem('token');
//         setToken(null);
//         setIsAuthenticated(false);
//     };

//     return (
//         <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export const useAuth = () => useContext(AuthContext);