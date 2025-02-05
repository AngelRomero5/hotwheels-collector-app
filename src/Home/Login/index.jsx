import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../../api/axios";

export default function Login () { 

    // Consts and vars
    const navigate = useNavigate();

    const [action, setAction] = useState('Login');

    const usernameInput = useRef(null);

    const emailInput = useRef(null);
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [passwordInput, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [confirmPasswordInput, setConfirmPassword] = useState("");
    const [matchedPassword, setMatchedPassword] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    
    const errRef = useRef();

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Clean values after switching between login and register
    const cleanValues = () => {
        if (usernameInput.current) usernameInput.current.value = "";
        if (emailInput.current) emailInput.current.value = "";
        setPassword("");
        setConfirmPassword("");
    }

    // Focus on first input field
    useEffect(() => {
        cleanValues();
        action === "Login" ? emailInput.current.focus() : usernameInput.current.focus();
    }, [action]);

    // Validate input fields
    const handleEmailChange = () => {
        if (action === "Sign up") {
            setValidEmail(EMAIL_REGEX.test(emailInput.current.value));
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (action === "Sign up") {
            setValidPassword(PASSWORD_REGEX.test(e.target.value));
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setMatchedPassword(e.target.value === passwordInput);
    };

    useEffect(() => {
        if(action === "Sign up"){
            setErrorMessage("");
        }
    }, [action, usernameInput, emailInput, passwordInput, confirmPasswordInput]);

    // Register function
    const registerNewUser = async (e) =>{

        e.preventDefault();
            
        const username = usernameInput.current?.value || "";
        const email = emailInput.current?.value || "";
        const password = passwordInput;

        if (!username || !email || !password) {
            setErrorMessage("Error: All fields are required.");
            return;
        }

        // Save new user to database
        const newUser = {
            name: username,
            email: email,
            password: password
        };

        try {
            const response = await axios.post('/register', newUser,{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('User registered successfully! : ', response.data);
            setSuccess(true);
        } catch (error) {     
            if(error.status === 409){
                setErrorMessage("Error: User already exists.");
            } else if(error.status === 500){
                setErrorMessage("Internal server error.");
            } else {
                setErrorMessage("Error: Something went wrong.");
            }
            console.log(error);
        }
    }
    // Login function
    const loginUser = async (e) =>{
        e.preventDefault();

        const email = emailInput.current?.value || "";
        const password = passwordInput;

        if (!email || !password) {
            setErrorMessage("Error: All fields are required.");
            return;
        }

        const newUser = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post('/login', newUser, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('User logged in:', response.data);
            setSuccess(true);
        } catch (error) {     
            if(error.status === 401){
                setErrorMessage("Error: Invalid credentials.");
            } else if(error.status === 500){
                setErrorMessage("Internal server error.");
            } else {
                setErrorMessage("Error: Something went wrong.");
            }
            console.log(error);
        }
    }


    return (
        <>
        {success ? (
            navigate("/Homescreen/index") // Redirect immediately when success is true
        )  : 
        <section className="bg-red-600 min-h-screen flex items-center justify-center">
        <div className="container w-1/2 mx-auto flex flex-col justify-center gap-6 shadow-md p-20 rounded-lg bg-white">
            <div className="flex justify-center">
                <p ref={errRef} className={errorMessage ? "text-center bg-red-400 text-white py-5 w-1/2 " : "display-none"}>
                {errorMessage}
                </p>
            </div>
           
                
            <div className="container mx-auto">
                <h1 className="font-sans text-5xl text-center pt-5 font-medium text-red-600">{action}</h1>
            </div>

            <div className="relative flex items-center w-full px-10">
                <div className="flex-grow border-t border-red-300"></div>
                <span className="mx-2">
                    <img src="img/racing-flag.png" alt="Racing Flag" className="h-6 w-6" />
                </span>
                <div className="flex-grow border-t border-red-300"></div>
            </div>

            <form className="flex flex-col space-y-6 px-10">
                {action === "Sign up" && 
                <>
                    <div className="flex flex-row space-x-4 items-center">
                        <img src="img/user.png" alt="User" className="h-6 w-6" />
                        <input 
                            type= "text" 
                            placeholder="Enter name" 
                            id="name"
                            name="name"
                            ref={usernameInput}
                            required
                            autoComplete="off"
                            className="mt-1 block w-full border-b focus:outline-none sm:text-sm p-3 focus:border-red-600"
                        />
                    </div>               
                </>
                }
                
                <div className="flex flex-row space-x-4 items-center">
                    <img src="img/mail.png" alt="Email" className="h-6 w-6" />
                    <input 
                        type= "email" 
                        placeholder="Enter email" 
                        id="email"
                        name="email"
                        ref={emailInput}
                        required
                        autoComplete="off"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        onChange={handleEmailChange}
                        className="mt-1 block w-full border-b focus:outline-none sm:text-sm p-3 focus:border-red-600"
                    />
                </div>
                {action === "Sign up" && emailFocus && !validEmail &&
                        <p className="text-xs text-red-600 mx-10">Enter a valid email.</p>
                }
                <div className="flex flex-row space-x-4 items-center">
                    <img src="img/lock-white.png" alt="lock" className="h-6 w-6" />
                    <input 
                        type="password" 
                        placeholder="Enter password"
                        id="password"
                        name="password"
                        value = {passwordInput}
                        required
                        autoComplete="off"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                        onChange={handlePasswordChange}
                        className="mt-1 block w-full border-b focus:outline-none sm:text-sm p-3 focus:border-red-600"
                    />
                </div>
                {action === "Sign up" && passwordFocus && !validPassword &&
                    <p className="text-xs text-red-600 mx-10">Password must contain at least 8 characters,
                                           one uppercase letter, one number, and one special character.</p>               
                }
                {action === "Sign up" &&
                <>
                    <div className="flex flex-row space-x-4 items-center">
                        <img src="img/lock-black.png" alt="lock" className="h-6 w-6" />
                        <input 
                            type="password" 
                            placeholder="Confirm password" 
                            id="confirmPassword"
                            name="confirmPassword"
                            value = {confirmPasswordInput}
                            required
                            onFocus={() => setConfirmPasswordFocus(true)}
                            onBlur={() => setConfirmPasswordFocus(false)}
                            onChange={handleConfirmPasswordChange}
                            className="mt-1 block w-full border-b focus:outline-none sm:text-sm p-3 focus:border-red-600"
                        />
                         
                    </div>
                    { confirmPasswordFocus && !matchedPassword &&
                            <p className="text-xs text-red-600 mx-10">Passwords do not match.</p>
                    }
                    </>                        
                }
            </form>

            {action === "Login" &&
                <div className="font-sans py-2 px-10 text-right text-xs text-gray-600"> 
                    <p>Forgot password? <a href="" className="text-red-600">Click here</a>.</p>
                </div>
            }

            <div className="flex flex-row space-around px-10">
                <button type="submit"
                    onClick={action === "Sign up" ? (e) => registerNewUser(e) : (e) => loginUser(e)}
                    className={"font-sans w-full bg-red-500 text-white py-3 px-4 hover:bg-red-600 rounded-md"}>
                    {action}
                </button>
            </div>

            <div className="font-sans py-4 text-center text-xs text-gray-600">
                {action === "Login" ?
                <p> Not a member? <span className="text-red-600 cursor-pointer" onClick={() => setAction("Sign up")}>Sign Up</span>.</p>
                :<p>Already a member? <span className="text-red-600 cursor-pointer" onClick={() => setAction("Login")}>Login</span>.</p>
                }
            </div>
        </div>
        </section>
        }
        </>
    );
    

}
