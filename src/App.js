import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './Home/Components/NavBar';
import Login from './Home/Login';
import Home from './Home/Homescreen';


function App() {
    return (
        <Router>
            <ConditionalNavBar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

function ConditionalNavBar() {
    const location = useLocation();
    return location.pathname !== '/login' ? <NavBar /> : null;
}

export default App;