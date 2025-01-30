import React, { useRef, useState, useEffect } from "react";

export default function Login () { 

    // Consts and vars
    const [action, setAction] = useState('Login');
    const [validUsername, setValidUsername] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [matchedPassword, setMatchedPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const USER_REGEX = /^[a-zA-Z0-9]{3,30}$/;
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const usernameInput = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const confirmPasswordInput = useRef(null);

    // Clean values after switching between login and register
    const cleanValues = () => {
        if (usernameInput.current) usernameInput.current.value = "";
        if (emailInput.current) emailInput.current.value = "";
        if (passwordInput.current) passwordInput.current.value = "";
        if (confirmPasswordInput.current) confirmPasswordInput.current.value = "";
    }

    // Focus on first input field
    useEffect(() => {
        cleanValues();
        action === "Login" ? emailInput.current.focus() : usernameInput.current.focus();
    }, [action]);


    // Validate input fields
    useEffect(() => {
        if (action === "SignUp" && usernameInput.current) {
            const result = USER_REGEX.test(usernameInput.current.value);
            setValidUsername(result);
        }
    }, [action, usernameInput]);

    useEffect(() => {
        if (action === "SignUp" && emailInput.current) {
            const result = EMAIL_REGEX.test(emailInput.current.value);
            setValidEmail(result);
        }
    }, [action, emailInput]);

    useEffect(() => {
        if (action === "SignUp" && passwordInput.current) {
            const result = PASSWORD_REGEX.test(passwordInput.current.value);
            setValidPassword(result);
            const equal = passwordInput.current.value === confirmPasswordInput.current.value;
            setMatchedPassword(equal);
        }
    }, [action, passwordInput, confirmPasswordInput]);

    useEffect(() => {
        setErrorMessage("");
    }, [usernameInput, emailInput, passwordInput, confirmPasswordInput]);

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
        console.log(newUser);

        try {
            const response = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true
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
        console.log(newUser);

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true
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
                {action === "Sign up" &&
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
        </div>
    );

}
