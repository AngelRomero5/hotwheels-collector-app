import React from 'react';
// import { useAuth } from './AuthProvider';

export default function NavBar() {
    const isAuthenticated = false; // Replace with actual authentication logic
    // const { isAuthenticated, login, logout };
    const username = "Mirai"; // Replace with actual username logic

    return (
        <div className="bg-white text-red-700 py-4 px-8 flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold">HW Collections</h1>
            </div>
            <ul className="flex space-x-3">
                <li className="inline p-2 hover:bg-gray-100 rounded cursor-pointer" id="Home">Home</li>
                <li className="inline p-2 hover:bg-gray-100 rounded cursor-pointer" id="NewCar">Add Car</li>
                <li className="inline p-2 hover:bg-gray-100 rounded cursor-pointer" id="Collections">Collections</li>
            </ul>
            <div className={`flex items-center ${isAuthenticated ? 'space-x-4' : 'space-x-3'}`}>
                {isAuthenticated ? (
                    <>
                        <p className="hidden sm:block">Hi, {username}</p>
                        <button onClick="" className="bg-red-700 text-white px-4 py-1 border border-transparent rounded hover:bg-white hover:text-red-700 hover:border hover:border-red-700 box-border">Logout</button>
                    </>
                ) : (
                    <button onClick="" className="bg-red-700 text-white px-4 py-1 border border-transparent rounded hover:bg-white hover:text-red-700 hover:border hover:border-red-700 box-border">Login</button>
                )}
            </div>
        </div>
    );
}