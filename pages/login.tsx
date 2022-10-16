import type { NextPage } from 'next';
import Head from 'next/head';
import SocialMediaButtons from '../src/components/SocialMediaButtons';
import React, { useRef } from "react";

const login: NextPage = ({}) => {
  const userName = useRef<HTMLInputElement | null>(null);
  const passWord = useRef<HTMLInputElement | null>(null);

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

      <div className="outer font-mainFont border-smoke-3 bg-white border-t border-r rounded-5 pt-[75px]">
        <div className="outer-border p-4">
          <section className="inner-section p-2">
            <div className="inner h-full text-gray-800">
              <div className="inner-full flex justify-center items-center flex-wrap h-full">
                <div className="left-inside text-center"></div>

                <div className="right-inside w-1/2">
                  <span className="text-primary-1 text-[48px] font-semibold">
                    Login
                  </span>

                  <div>
                    <span className="block text-[20px] font-medium py-2">
                      Select your account type
                    </span>
                    <button className="border border-[5px] h-[74px] w-[152px] rounded-[15px] text-[25px] hover:bg-smoke-3 hover:border-primary-1 hover:drop-shadow-lg">
                      Mentor
                    </button>
                    <button className="border border-[5px] h-[74px] w-[152px] rounded-[15px] text-[25px] hover:bg-smoke-3 hover:border-primary-1 hover:drop-shadow-lg">
                      Mentee
                    </button>
                  </div>
                  <div className="py-2">
                    <SocialMediaButtons />
                  </div>

                  <form 
                    autoComplete='off'
                    className="w-full"
                    >
                    <div className='py-[20px]'>
                    <span className="text-[20px] font-medium">Username</span>
                    <input
                      className="block w-full cursor-auto border border-2 rounded-lg h-[61px] w-full px-2"
                      placeholder=""
                      type="text"
                      name="email"
                      ref={userName}
                      required
                      autoFocus
                    />
                    </div>
                    <span className="text-[20px] font-medium">Password</span>
                    <input
                      className="block w-full cursor-auto border border-2 rounded-lg h-[61px] w-full px-2"
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
                        type='submit'
                        className="text-white bg-secondary-1 text-[20px] font-semibold rounded-[25px] h-[60px] w-[146px]">
                        Login
                      </button>
                    </div>

                    <div className="text-[20px] font-medium">
                      Forgot password? <a href="#">Click Here.</a>
                    </div>
                  </form>
                </div>
              </div>

              <div className="pt-10">
                <button className="text-secondary-1 text-[29px] font-semibold border-2 border-secondary-1 rounded-[35px] h-[69px] w-[234px] hover:border-primary-1">
                  Back
                </button>
              </div>

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
