import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from '../../src/components/buttons/reusable-buttons';

const SignUpFormMentee = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordValidation, setPasswordValidation] = useState("");
    
    const handleSubmit = (e: any) => {
        e.preventDefault();     

        if ( name === "" ) {
            setNameError("*Please enter your name");
        } else if ( !name.match(/^[A-Za-z\s]*$/) ) {
            setNameError("*Please enter a valid name(Letters only)");
        } else {
            setNameError("");
        }

        if ( email === "" ) {
            setEmailError("*Please enter your email");
        } else if ( !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ) {
            setEmailError("*Please enter a valid email");
        } else {
            setEmailError("");
        }
       
        if (password === "" || confirmPassword === "") {
            setPasswordError("*Passwords can not be empty");
        } else {
            setPasswordError("");
        }


        if (password !== confirmPassword) {
            setConfirmPasswordError("*Passwords do not match. Please try again");
        } else {
            setConfirmPasswordError("");
        }
        
        if ( password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ) {
            setPasswordValidation("");
        } else {
            setPasswordValidation("*Password must contain 8 characters, 1 letter and 1 number");
        }
        
        // Create a new user
        fetch("http://localhost:3000/api/signUpMentee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            router.push("/login");
        });
    }

    const redirect = () => {
        router.push("/login");
    }
    return (      
        <div className="container pb-10 my-20">
            <div className="flex flex-row">
                <div>{/* This is the place holder for social media links */}</div>
                <hr className="text-secondary-1"/>
                <div className="relative w-5/12 border-l-1">
                    <h1 className="text-4xl font-bold text-secondary-1">Sign Up as a Mentee</h1>
                    {/* Not sure the route for mentor sign up page, should be changed later */}
                    <h2 className="mt-2 text-xl">Interested in being a <a href="/signUpMentor" className="font-bold text-primary-1">mentor instead?</a></h2>
                    <Button variant="primary" icon="google" clickHandler={() => console.log('Will be updated to make request function')}>Continue with Google</Button>
                    <form className="relative">
                        <div className="flex flex-col">
                            <label className="mt-2 text-xl font-bold">Name</label>
                            <input type="text" placeholder=" First and Last Name" className="p-2 mt-1 text-xl border border-solid rounded-lg border-smoke-3" value={name} onChange={(e) => setName(e.target.value)} required/>
                            <span className="text-tertiary-1">{nameError}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="mt-2 text-xl font-bold">Sign Up With Your Email Address</label>
                            <input type="email" placeholder=" Email Address" className="p-2 mt-1 text-xl border border-solid rounded-lg border-smoke-3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <span className="text-tertiary-1">{emailError}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="mt-2 text-xl font-bold">Create A Password</label>
                            <input type="password" placeholder=" Password" className="p-2 text-xl border border-solid rounded-lg mt-f1 border-smoke-3" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <span className="text-tertiary-1">{password === "" ? (passwordError) :("") }{passwordValidation}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="mt-2 text-xl font-bold">Confirm Password</label>
                            <input type="password" placeholder=" Password" className="p-2 mt-1 text-xl border border-solid rounded-lg border-smoke-3" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                            <span className="text-tertiary-1">{confirmPassword === "" ? (passwordError) :(confirmPasswordError) }</span>
                        </div>
                        {/* Need the route for Terms And Conditions*/}
                        <h3 className="mt-5 text-xs font-bold">By logging in, you agree to Empowered Future's <a href="" className="text-secondary-2">Terms And Conditions*</a></h3>
                        <div className="absolute right-0 -bottom-15">
                            <button className="px-10 py-3 mt-10 text-sm border border-solid rounded-full shadow-md text-secondary-2 bg-light border-secondary-1" onClick={redirect}>Login</button>
                            <button type="submit" className="px-10 py-3 ml-3 mr-0 text-sm text-white rounded-full shadow-md font-montserrat bg-gradient-to-r from-secondary-1 to-tertiary-2" onClick={handleSubmit}>Sign Up</button>
                        </div>                
                    </form>
                </div>
            </div>
        </div>   
    )
}

export default SignUpFormMentee;
