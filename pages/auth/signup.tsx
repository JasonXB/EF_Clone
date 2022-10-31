import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';
import Layout from '../../src/components/Layout';

import Button, {
  buttonVariants,
} from '../../src/components/buttons/reusable-buttons';
import { signupAPI } from '../../src/api/auth';

// import React, { useRef } from 'react';
// import { useState } from 'react';

const Signup: NextPage = ({}) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  function handleLogin() {
    signupAPI(username, email, password);
  }

  return (
    <div>
      <Head>
        <title>Empowered Futures - Sign Up</title>
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
                      Signup
                    </span>

                    <div className="flex text-[12px] md:text-[70%]">
                      <Button
                        variant="tertiary"
                        icon="google"
                        clickHandler={() =>
                          console.log(
                            'will be updated to make a request function'
                          )
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
                          onChange={(e) => {
                            const username = e.target.value;
                            if (username.length > 2) setUsername(username);
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
                            const email = e.target.value;
                            if (email.length > 2) setEmail(email);
                          }}
                          required
                          autoFocus
                        />
                      </div>
                      <div>
                        <span className="font-medium">Password</span>
                        <input
                          className="block border-2 rounded-lg h-[34px] w-full px-2"
                          placeholder=""
                          type="password"
                          name="password"
                          // ref={passWord} //for the function up top
                          onChange={(e) => {
                            const pw = e.target.value;
                            if (pw.length > 2) setPassword(pw);
                          }}
                          required
                          autoFocus
                        />
                      </div>

                      <div className="py-6">
                        <Button
                          variant="primary"
                          type="submit"
                          clickHandler={(e) => {
                            e.preventDefault();
                            handleLogin();
                          }}
                        >
                          Register
                        </Button>
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

export default Signup;
