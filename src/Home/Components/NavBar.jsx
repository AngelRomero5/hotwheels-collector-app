import React from 'react';
import { useNavigate } from "react-router-dom";
// import { useAuth } from './AuthProvider';

export default function NavBar() {
    const isAuthenticated = true; // Replace with actual authentication logic
    const navigate = useNavigate();
    // const { isAuthenticated, login, logout };
    const username = "Mirai"; // Replace with actual username logic

    const handleNavigation = (route) => {
        navigate(route)
    };

    return (
        <div className="bg-white text-red-600 py-4 px-8 flex justify-between items-center z-auto">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold cursor-pointer" onClick={() => handleNavigation("/")}>Cloud Vault</h1>
            </div>
            <ul className="flex space-x-3">
                <li onClick={() => handleNavigation("/")} className="inline p-2 hover:bg-gray-100 rounded cursor-pointer" id="Home">Home</li>
                <li onClick={() => handleNavigation("/Models")} className="inline p-2 hover:bg-gray-100 rounded cursor-pointer" id="NewCar">Models</li>
                <li onClick={() => handleNavigation("/Collections")} className="inline p-2 hover:bg-gray-100 rounded cursor-pointer" id="Collections">Collections</li>
                <li onClick={() => handleNavigation("/About")} className="inline p-2 hover:bg-gray-100 rounded cursor-pointer" id="About">About</li>
            </ul>
            <div className={`flex items-center ${isAuthenticated ? 'space-x-4' : 'space-x-3'}`}>
                {isAuthenticated ? (
                    <>
                        <p className="hidden sm:block">Hi, {username}</p>
                        <button onClick={() => handleNavigation("/login")} className="bg-red-600 text-white px-4 py-1 border border-transparent rounded hover:bg-white hover:text-red-600 hover:border hover:border-red-600 box-border flex items-center space-x-2">
                            <img src="img/logout.png" alt="Logout" className="h-3 w-4" />
                            <span>Logout</span>
                        </button>
                    </>
                ) : (
                    <>
                    <button onClick={() => handleNavigation("/login")} className="bg-red-600 text-white px-4 py-1 border border-transparent rounded hover:bg-white hover:text-red-600 hover:border hover:border-red-600 box-border flex items-center space-x-2">
                        <img src="img/login.png" alt="login" className="h-3 w-4" />
                        <span>Login</span>
                    </button>
                    </>          
                )}
            </div>
        </div>
    );
}