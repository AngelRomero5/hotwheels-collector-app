import React, { useRef } from "react";

export default function Register () { 

    const registerNewUser = async (e) =>{

        e.preventDefault();

        const username = useRef();
        const email = useRef();
        const password = useRef();
        const confirmPassword = useRef();


        // Password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!passwordRegex.test(password)){
            console.log("Password must contain at least 8 characters, one uppercase letter, one number and one special character");
            return;
        }

        if (password !== confirmPassword){
            console.log("Passwords do not match");
            return;
        }

        // Save new user to database
        const newUser = {
            name: username,
            email: email,
            password: hashedPassword
        };

        try {
            const response = await fetch('http://localhost:3001/api/register', {
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
            console.log('User registered successfully! : ', data);
        } catch (error) {     
            console.log(error);
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
                <h1 className="text-lg text-center">Register</h1>
                <form className="space-y-10">
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter Name</label>
                        <input 
                            type= "text" 
                            placeholder="Enter name" 
                            id="name"
                            name="name"
                            ref={username}
                            required
                            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                        />
                        
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
                        <input 
                            type= "text" 
                            placeholder="Enter email" 
                            id="email"
                            name="email"
                            ref={email}
                            required
                            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                        />

                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="text" 
                            placeholder="Enter password" 
                            id="password"
                            name="password"
                            ref={password}
                            required
                            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                        />

                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input 
                            type="text" 
                            placeholder="Confirm password" 
                            id="password"
                            name="password"
                            ref={confirmPassword}
                            required
                            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit"  
                            onClick={(e) => registerNewUser(e)}
                            className="w-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 p-3">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}
