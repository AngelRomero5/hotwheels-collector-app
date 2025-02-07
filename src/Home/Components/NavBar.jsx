import React from 'react';
import { useNavigate } from "react-router-dom";
// import { useAuth } from './AuthProvider';

export default function NavBar() {
    const isAuthenticated = false; // Replace with actual authentication logic
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
                <li onClick={() => handleNavigation("/")} className="inline p-2 hover:text-black rounded cursor-pointer transition duration-300" id="Home">Home</li>
                <li onClick={() => handleNavigation("/Models")} className="inline p-2 hover:text-black rounded cursor-pointer transition duration-300" id="NewCar">Models</li>
                <li onClick={() => handleNavigation("/Collections")} className="inline p-2 hover:text-black rounded cursor-pointer transition duration-300" id="Collections">Collections</li>
                <li onClick={() => handleNavigation("/About")} className="inline p-2 hover:text-black rounded cursor-pointer transition duration-300" id="About">About</li>
            </ul>
            <div className={`flex items-center ${isAuthenticated ? 'space-x-4' : 'space-x-3'}`}>
                {isAuthenticated ? <p className="hidden sm:block">Hi, {username}</p> :<></>}
                <button onClick={() => handleNavigation("/login")} className="bg-red-600 text-white px-4 py-1 border border-transparent rounded hover:bg-white hover:text-red-600 hover:border hover:border-red-600 box-border flex items-center space-x-2 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    {isAuthenticated ? <span>Logout</span> : <span>Login</span>}
                </button>
            </div>
        </div>
    );
}