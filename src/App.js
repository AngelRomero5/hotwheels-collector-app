import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './Home/NavBar';
import Login from './login';
import Homescreen from './Home/Homescreen';


function App() {
    return (
        <Router>
            <ConditionalNavBar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Homescreen />} />
                <Route path="/" element={<Homescreen />} />
            </Routes>
        </Router>
    );
}

function ConditionalNavBar() {
    const location = useLocation();
    return location.pathname !== '/login' ? <NavBar /> : null;
}

export default App;