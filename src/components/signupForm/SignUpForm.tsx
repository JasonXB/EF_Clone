import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

import Button from '../buttons/reusable-buttons';
import TitledInput from '../titledInput/TitledInput';
import { useAuth } from '../../../state-management/ReactContext/AuthContext';
import { loginAPI, signupAPI } from '../../api/auth';
import { Roles } from '../../enum/role.enum';

interface SignupFormProps {
  chosenRole: 'Mentee' | 'Mentor' | 'Admin';
}

const SignUpForm = ({ chosenRole }: SignupFormProps) => {
  const router = useRouter();
  const { clientSideLogin } = useAuth();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<string>(chosenRole);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  async function handleSignup() {
    const success = await signupAPI(username, email, password, role);
    if (!success) return; // todo: tell the user their signup failed
    const token = await loginAPI(username, email, password);
    console.log(email, password, token, '28rm');
    clientSideLogin(email, token);
    // todo: redirect
    if (chosenRole === 'Mentee') router.push('/mentee');
    if (chosenRole === 'Mentor') router.push('/mentor');
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email === '') {
      setEmailError('*Please enter your email');
      return;
    } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setEmailError('*Please enter a valid email');
      return;
    } else {
      setEmailError('');
    }

    if (password === '' || confirmPassword === '') {
      setPasswordError('*Passwords can not be empty');
      return;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('*Passwords do not match. Please try again');
      return;
    } else {
      setConfirmPasswordError('');
    }

    if (
      password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      setPasswordValidation('');
    } else {
      setPasswordValidation(
        '*Password must contain 8 characters, one uppercase letter, one lowercase letter, 1 number and one special character(@$!%*?&)'
      );
      return;
    }
    handleSignup();
  };

  return (
    <div className="backdrop:outer">
      <div className="relative flex flex-wrap items-center justify-center h-full py-20 inner-full">
        <div className="relative w-7/12 px-20 pt-20 pb-20 bg-white shadow-2xl rounded-3xl border-l-1">
          <h1 className="text-4xl font-bold text-secondary-1">
            Sign Up as a {role === Roles.mentee ? 'Mentee' : 'Mentor'}
          </h1>
          {role === Roles.mentee ? (
            <h2 className="mt-2 text-xl">
              Interested in being a{' '}
              <Link
                href="/auth/mentor/signup"
                className="font-bold text-primary-1"
              >
                <span className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">
                  mentor instead?
                </span>
              </Link>
            </h2>
          ) : (
            <h2 className="mt-2 text-xl">
              Interested in being a{' '}
              <Link
                href="/auth/mentee/signup"
                className="font-bold text-primary-1"
              >
                <span className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">
                  mentee instead?
                </span>
              </Link>
            </h2>
          )}
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
            <TitledInput
              title="Username"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              required
            />
            <TitledInput
              title="Email Address"
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
              error={
                password === ''
                  ? passwordError
                  : password !== '' && passwordValidation
              }
              required
            />
            <TitledInput
              title="Confirm Password"
              placeholder="Password"
              type="password"
              value={confirmPassword}
              onChange={(e: any) => setConfirmPassword(e.target.value)}
              error={
                confirmPassword === '' ? passwordError : confirmPasswordError
              }
              required
            />

            {/* Need the route for Terms And Conditions*/}
            <h3 className="mt-5 text-xs font-bold">
              By logging in, you agree to Empowered Future's{' '}
              <Link
                href="/public/terms-and-conditions"
                className="text-secondary-2"
              >
                Terms And Conditions*
              </Link>
            </h3>
            <div className="absolute right-0 -bottom-15">
              <Button variant="primary" clickHandler={handleSubmit}>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
