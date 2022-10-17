import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';

import SocialMediaButtons from '../src/components/SocialMediaButtons';
import { buttonVariants } from '../src/components/buttons/reusable-buttons';
import { useState } from 'react';

const login: NextPage = ({}) => {
  const userName = useRef<HTMLInputElement | null>(null);
  const passWord = useRef<HTMLInputElement | null>(null);

  const [mentorChosen, setMentorChosen] = useState(false)
  const [menteeChosen, setMenteeChosen] = useState(false)
  
  const handleMentorChoice = () => {
    setMentorChosen(true)
    setMenteeChosen(false)
  }

  const handleMenteeChoice = () => {
    setMenteeChosen(true)
    setMentorChosen(false)
  }

  function test() {
    console.log(userName.current?.value);
    console.log(passWord.current?.value);
  }

  return (
    <div>
      <Head>
        <title>Empowered Futures - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold">HEADER</h1>

      <div className="outer font-mainFont border-smoke-3 bg-white border-t border-r rounded-5 px-5 pt-[40px]">
        <div className="outer-border py-4 px-5">
          <section className="inner-section p-2">
            <div className="inner h-full text-gray-800">
              <div className="inner-full flex justify-center items-center flex-wrap h-full">
                <div className="left-inside text-center"></div>

                <div className="right-inside w-1/2">
                  <span className="text-primary-1 text-[24px] font-semibold">
                    Login
                  </span>

                  <div>
                    <span className="block font-medium py-2">
                      Select your account type
                    </span>
                    <button 
                      className={`${mentorChosen ? 'border-primary-1 bg-primary-5 drop-shadow-lg': ''}border border-[5px] h-[50px] w-[140px] rounded-[15px] hover:bg-primary-5 hover:border-primary-1 hover:drop-shadow-lg`}
                      onClick={handleMentorChoice}
                      >
                      Mentor
                    </button>
                    
                    <button 
                      className={`${menteeChosen ? 'border-primary-1 bg-primary-5 drop-shadow-lg': ''}border border-[5px] h-[50px] w-[140px] rounded-[15px] hover:bg-primary-5 hover:border-primary-1 hover:drop-shadow-lg`}
                      onClick={handleMenteeChoice}
                      >
                      Mentee
                    </button>
                    
                  </div>
                  <div className="text-[8px] md:text-[70%] py-4">
                    <SocialMediaButtons />
                  </div>

                  <form autoComplete="off" className="w-full">
                    <div className="">
                      <span className="font-medium">Username</span>
                      <input
                        className="block w-full cursor-auto border border-2 rounded-lg h-[34px] w-full px-2"
                        placeholder=""
                        type="text"
                        name="email"
                        ref={userName}
                        required
                        autoFocus
                      />
                    </div>
                    <span className="font-medium">Password</span>
                    <input
                      className="block w-full cursor-auto border border-2 rounded-lg h-[34px] w-full px-2"
                      placeholder=""
                      type="password"
                      name="password"
                      ref={passWord}
                      required
                      autoFocus
                    />

                    <div className="py-6">
                      <button
                        onClick={() => test()}
                        type="submit"
                        className={`${buttonVariants.primary} font-light py-4 px-5`}
                      >
                        Login
                      </button>
                    </div>

                    <div className="font-medium">
                      Forgot password? <a href="#">Click Here.</a>
                    </div>
                  </form>
                </div>
              </div>

              <div>
                <button
                  className={`${buttonVariants.secondary} font-light py-4 px-5`}
                >
                  Back
                </button>
              </div>
              {/* <div className="pt-10">
                <button className="text-secondary-1 text-[29px] font-semibold border-2 border-secondary-1 rounded-[35px] h-[69px] w-[234px] hover:border-primary-1">
                  Back
                </button>
              </div> */}
            </div>
          </section>
        </div>
      </div>

      <h1 className="text-3xl font-bold">FOOTER</h1>

      {/* Login Mentee */}

      {/* Sign in with your email address + input */}

      {/* Password + input, Forgot your password? */}

      {/* Link to terms and conditions */}

      {/* Sign up, Login buttons */}

      {/* Footer */}
    </div>
  );
};

export default login;
