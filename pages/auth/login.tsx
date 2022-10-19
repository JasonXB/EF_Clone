import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../src/components/Layout';

import Button, { buttonVariants } from '../../src/components/buttons/reusable-buttons';

// import React, { useRef } from 'react';
// import { useState } from 'react';

const login: NextPage = ({}) => {
  // related to grabbing the values in the username and password input fields; commented out for now
  // const userName = useRef<HTMLInputElement | null>(null);
  // const passWord = useRef<HTMLInputElement | null>(null);
    // function handleLogin() {
  //   console.log(userName.current?.value);
  //   console.log(passWord.current?.value);
  // }

  // mentor mentee choosing login button; when clicked, the blue color stays
  // const [mentorChosen, setMentorChosen] = useState(false) 
  // const [menteeChosen, setMenteeChosen] = useState(false)
  // const handleMentorChoice = () => {
  //   setMentorChosen(true)
  //   setMenteeChosen(false)
  // }
  // const handleMenteeChoice = () => {
  //   setMenteeChosen(true)
  //   setMentorChosen(false)
  // }

  return (
    <div>
      <Head>
        <title>Empowered Futures - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      <div className="outer font-mainFont rounded-5 px-5 pt-[40px]">
        <div className="outer-border py-4 px-5">
          <section className="inner-section p-2">
            <div className="inner h-full">
              <div className="inner-full flex justify-center items-center flex-wrap h-full">
                <div className="left-inside text-center"></div>

                <div className="right-inside xs:w-200 sm:w-[480px]">
                  <span className="text-primary-1 text-[24px] font-semibold">
                    Login
                  </span>

                  {/* Mentor Mentee Buttons */}
                  {/* <span className="block font-medium py-2">
                    Select your account type
                  </span> */}
                  
                  {/* <div className='flex'>
                    <div className='pr-2'>
                    <button 
                      className={`${mentorChosen ? 'border-primary-1 bg-primary-5 drop-shadow-lg': ''}border border-[3px] h-[50px] w-[110px] rounded-[15px] hover:bg-primary-5 hover:border-primary-1 hover:drop-shadow-lg`}
                      onClick={handleMentorChoice}
                      >
                      Mentor
                    </button>
                    </div>

                    <div className=''>
                    <button 
                      className={`${menteeChosen ? 'border-primary-1 bg-primary-5 drop-shadow-lg': ''}border border-[3px] h-[50px] w-[110px] rounded-[15px] hover:bg-primary-5 hover:border-primary-1 hover:drop-shadow-lg`}
                      onClick={handleMenteeChoice}
                      >
                      Mentee
                    </button>
                    </div>
                  </div> */}

                  <div className="flex text-[10px] md:text-[70%] py-4">
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
                        name="email"
                        // ref={userName} // for the function up top
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
                      required
                      autoFocus
                    />

                    <div className="py-6">
                      <button
                        // onClick={() => handleLogin()} // related to login function
                        type="submit"
                        className={`${buttonVariants.primary} font-light py-4 px-5`}
                      >
                        Login
                      </button>
                    </div>

                    <div className="font-medium">
                      Forgot password?<span> </span>
                      <span className='text-primary-1 hover:text-primary-2 underline'><a href="#">Click Here.</a></span>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
      </Layout>

    </div>
  );
};

export default login;
