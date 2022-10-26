import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from '../../src/components/buttons/reusable-buttons';
import TitledInput from "./TitledInput";

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
        } else if ( !name.match(/^[a-zA-Z].*(-[a-zA-Z]*)?$/) ) {
            setNameError("*Please enter a valid name(only letters and hyphens allowed)");
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
        
        if ( password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ) {
            setPasswordValidation("");
        } else {
            setPasswordValidation("*Password must contain 8 characters, one uppercase letter, one lowercase letter, 1 number and one special character(@$!%*?&)");
        }
    

    }

    const redirect = () => {
        router.push("/auth/login");
    }
    return (      
        <div className="py-20 bg-fixed backdrop:outer">
            <div className="flex flex-wrap items-center justify-center h-full py-20 inner-full" >
                <div className="relative w-7/12 px-20 pt-20 pb-20 shadow-2xl rounded-3xl border-l-1">
                    <h1 className="text-4xl font-bold text-secondary-1">Sign Up as a Mentee</h1>
                    {/* Not sure the route for mentor sign up page, should be changed later */}
                    <h2 className="mt-2 text-xl">Interested in being a <a href="/signUpMentor" className="font-bold text-primary-1">mentor instead?</a></h2>
                    <Button
                    variant="tertiary"
                    icon="google"
                    clickHandler={() =>
                        console.log('will be updated to make a request function')
                    }
                    >
                    Continue with google
                    </Button>
                    <form className="relative">
                        {/* <div className="flex flex-col">
                            <label className="mt-2 text-xl font-bold">Name</label>
                            <input type="text" placeholder=" First and Last Name" className="p-2 mt-1 text-xl border border-solid rounded-lg border-smoke-3" value={name} onChange={(e) => setName(e.target.value)} required/>
                            <span className="text-tertiary-1">{nameError}</span>
                        
                            <label className="mt-2 text-xl font-bold">Sign Up With Your Email Address</label>
                            <input type="email" placeholder=" Email Address" className="p-2 mt-1 text-xl border border-solid rounded-lg border-smoke-3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <span className="text-tertiary-1">{emailError}</span>

                            <label className="mt-2 text-xl font-bold">Create A Password</label>
                            <input type="password" placeholder=" Password" className="p-2 text-xl border border-solid rounded-lg mt-f1 border-smoke-3" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <span className="text-tertiary-1">{password === "" ? (passwordError) :("") }{passwordValidation}</span>

                            <label className="mt-2 text-xl font-bold">Confirm Password</label>
                            <input type="password" placeholder=" Password" className="p-2 mt-1 text-xl border border-solid rounded-lg border-smoke-3" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                            <span className="text-tertiary-1">{confirmPassword === "" ? (passwordError) :(confirmPasswordError) }</span>
                        </div> */}
                        <TitledInput
                            title="Name"
                            placeholder="First and Last Name"
                            type="text"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            error={nameError}
                            required
                        />
                        <TitledInput
                            title="Sign Up With Your Email Address"
                            placeholder="Email Address"
                            type="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            error={emailError}
                            required
                        />
                        <TitledInput
                            title="Create A Password"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                            error={password === "" ? (passwordError) : password !== "" && passwordValidation}
                            required
                        />
                        <TitledInput
                            title="Confirm Password"
                            placeholder="Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e: any) => setConfirmPassword(e.target.value)}
                            error={confirmPassword === "" ? (passwordError) : (confirmPasswordError)}
                            required
                        />
                            
                        {/* Need the route for Terms And Conditions*/}
                        <h3 className="mt-5 text-xs font-bold">By logging in, you agree to Empowered Future's <a href="" className="text-secondary-2">Terms And Conditions*</a></h3>
                        <div className="absolute right-0 -bottom-15">
                            <Button
                                variant="secondary"
                                clickHandler={redirect}
                                >
                                Login
                            </Button>
                            <Button
                                variant="primary"
                                clickHandler={handleSubmit}
                                >
                                Sign Up
                            </Button>
                        </div>                
                    </form>
                </div>
            </div>
        </div>   
    )
}

export default SignUpFormMentee;
