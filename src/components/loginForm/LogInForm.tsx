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

const LogInForm = ({ chosenRole }: SignupFormProps) => {
  const router = useRouter();
  const { clientSideLogin, logout } = useAuth();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleLogin() {
    const accessToken = await loginAPI(username, email, password);
    clientSideLogin(email, accessToken);
    chosenRole === 'Mentee' ? router.push('/mentee') : router.push('/mentor');
  }

  return (
    <div className="outer font-mainFont rounded-5 px-5 pt-[40px]">
      <div className="px-5 py-4 outer-border">
        <section className="p-2 inner-section">
          <div className="h-full inner">
            <div className="flex flex-wrap items-center justify-center h-full inner-full">
              <div className="text-center left-inside"></div>

              <div className="right-inside xs:w-200 sm:w-[480px]">
                <span className="text-primary-1 text-[24px] font-semibold">
                  Login as a {chosenRole === 'Mentee' ? 'Mentee' : 'Mentor'}
                </span>
                {chosenRole === 'Mentee' ? (
                  <p>
                    Not a Mentee?{' '}
                    <span className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">
                      <Link
                        href="/auth/mentor/login"
                        className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
                      >
                        Login as a Mentor
                      </Link>
                    </span>
                  </p>
                ) : (
                  <p>
                    Not a Mentor?{' '}
                    <span className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">
                      <Link
                        href="/auth/mentee/login"
                        className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
                      >
                        Login as a Mentee
                      </Link>
                    </span>
                  </p>
                )}

                <div className="flex text-[12px] md:text-[70%]">
                  <Button
                    variant="tertiary"
                    icon="google"
                    clickHandler={() =>
                      console.log('will be updated to make a request function')
                    }
                  >
                    Continue with google
                  </Button>
                </div>

                <form autoComplete="off" className="">
                  <div className="py-3">
                    <span className="font-medium">Username</span>
                    <input
                      className="block border-2 rounded-lg h-[34px] w-full px-2"
                      placeholder=""
                      type="text"
                      name="username"
                      // ref={userName} // for the function up top
                      onChange={(e) => {
                        e.preventDefault();
                        const username = e.target.value;
                        setUsername(username);
                      }}
                      required
                      autoFocus
                    />
                  </div>
                  <div className="py-3">
                    <span className="font-medium">Email</span>
                    <input
                      className="block border-2 rounded-lg h-[34px] w-full px-2"
                      placeholder=""
                      type="text"
                      name="email"
                      // ref={userName} // for the function up top
                      onChange={(e) => {
                        e.preventDefault();
                        const email = e.target.value;
                        setEmail(email);
                      }}
                      required
                      autoFocus
                    />
                  </div>
                  <span className="font-medium">Password</span>
                  <input
                    className="block border-2 rounded-lg h-[34px] w-full px-2"
                    placeholder=""
                    type="password"
                    name="password"
                    // ref={passWord} //for the function up top
                    onChange={(e) => {
                      e.preventDefault();
                      const pw = e.target.value;
                      setPassword(pw);
                    }}
                    required
                    autoFocus
                  />

                  <div className="py-6">
                    <Button
                      variant="primary"
                      type="submit"
                      clickHandler={(e) => {
                        e.preventDefault();
                        handleLogin();
                      }}
                    >
                      Login
                    </Button>
                  </div>

                  <div className="font-medium">
                    Forgot password?<span> </span>
                    <span className="underline text-primary-1 hover:text-primary-2">
                      <a href="#">Click Here.</a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogInForm;
