import React, { useRef } from "react";

export default function Login () {

    const loginUser = async (e) =>{
        e.preventDefault();

        const email = useRef();
        const password = useRef();

        const newUser = {
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error(response.Error);
            }

            const data = await response.json();
            console.log('User logged in:', data);
        } catch (error) {     
            console.log(error);
        }


    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-lg mx-auto bg-white p-10 rounded-lg shadow-md space-y-4">
                <h1 className="text-lg text-center">Login</h1>
                <form className="space-y-10">
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
                        <input 
                            type="text" 
                            placeholder="Enter username" 
                            id="email"
                            name="email"
                            ref={email}
                            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                        />

                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="text" 
                            placeholder="Enter password" 
                            id="password"
                            name="password"
                            ref={password}
                            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit"  
                            onClick={(e) => loginUser(e)}
                            className="w-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 p-3">
                            Login
                        </button>
                        <button type="submit"  

                            className="w-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 p-3">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}