import React, { useRef } from "react";

export default function Login () { 

    const usernameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();

    // Register function
    const registerNewUser = async (e) =>{

        e.preventDefault();

        if(!usernameInput.current.value || !emailInput.current.value || !passwordInput.current.value || !confirmPasswordInput.current.value){
            console.log("Please fill in all fields");
            return;
        }
            
        const username = usernameInput.current.value;
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        const confirmPassword = confirmPasswordInput.current.value;


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
            password: password
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
    // Login function
    const loginUser = async (e) =>{
        e.preventDefault();

        if(!emailInput.current.value  || !passwordInput.current.value == null){
            console.log("Please fill in all fields");
            return;
        }

        const email = emailInput.current.value;
        const password = passwordInput.current.value;

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

    return (
        <div className="bg-red-600 min-h-screen flex items-center justify-center">
        <div className="container w-1/2 mx-auto flex flex-col justify-center gap-6 shadow-md p-20 rounded-lg bg-white">
            <div className="container mx-auto">
                <h1 className="font-sans text-5xl text-center pt-5 font-medium text-red-600">Sign Up</h1>
            </div>

            <div className="relative flex items-center w-full">
                <div className="flex-grow border-t border-red-300"></div>
                <span className="mx-2">
                    <img src="img/racing-flag.png" alt="Racing Flag" className="h-6 w-6" />
                </span>
                <div className="flex-grow border-t border-red-300"></div>
            </div>

            <form className="flex flex-col space-y-6 px-10">
                <div className="flex flex-row space-x-4 items-center">
                    <img src="img/user.png" alt="User" className="h-6 w-6" />
                    <input 
                        type= "text" 
                        placeholder="Enter name" 
                        id="name"
                        name="name"
                        ref={usernameInput}
                        required
                        className="mt-1 block w-full border-b focus:outline-none sm:text-sm p-3 focus:border-red-500"
                    />
                </div>
                
                <div className="flex flex-row space-x-4 items-center">
                    <img src="img/mail.png" alt="Email" className="h-6 w-6" />
                    <input 
                        type= "email" 
                        placeholder="Enter email" 
                        id="email"
                        name="email"
                        ref={emailInput}
                        required
                        className="mt-1 block w-full border-b focus:outline-none sm:text-sm p-3 focus:border-red-500"
                    />
                </div>
                <div className="flex flex-row space-x-4 items-center">
                    <img src="img/lock-white.png" alt="lock" className="h-6 w-6" />
                    <input 
                        type="password" 
                        placeholder="Enter password" 
                        id="password"
                        name="password"
                        ref={passwordInput}
                        required
                        className="mt-1 block w-full border-b focus:outline-none sm:text-sm p-3 focus:border-red-500"
                    />
                </div>
                <div className="flex flex-row space-x-4 items-center">
                    <img src="img/lock-black.png" alt="lock" className="h-6 w-6" />
                    <input 
                        type="password" 
                        placeholder="Confirm password" 
                        id="confirmPassword"
                        name="confirmPassword"
                        ref={confirmPasswordInput}
                        required
                        className="mt-1 block w-full border-b focus:outline-none sm:text-sm p-3 focus:border-red-500"
                    />
                </div>
            </form>

            <div className="font-sans py-4 text-center text-xs text-gray-600"> 
                <p>Forgot password? Click <a href="" className="text-red-600">here</a>.</p>
            </div>

            <div className="flex flex-row space-x-10 space-around">
                    <button type="submit"
                        onClick={(e) => registerNewUser(e)}
                        className="font-sans w-1/2 bg-red-500 text-white py-3 px-4 hover:bg-red-600 rounded-md">
                        Sign up
                    </button>
                    <button type="submit"
                        onClick={(e) => loginUser(e)}
                        className="font-sans w-1/2 bg-red-500 text-white py-3 px-4 hover:bg-red-600  rounded-md">
                        Login
                    </button>
            </div>
        </div>
        </div>
    );

}
