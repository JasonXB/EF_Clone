import type { NextPage } from 'next';
import Head from 'next/head';
import SocialMediaButtons from '../src/components/SocialMediaButtons';

const login: NextPage = ({}) => {
  return (
    <div>
      <Head>
        <title>Empowered Futures - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold">HEADER</h1>

      <div className="outer font-mainFont border-[#B9C0D3] bg-white border-t border-r rounded-5">
        <div className="outer-border p-4">
          <section className="inner-section p-2">
            <div className="inner h-full text-gray-800">
              <div className="inner-full flex justify-center items-center flex-wrap h-full">
                <div className="left-inside text-center"></div>

                <div className="right-inside w-1/2">
                  <span className="text-[#026ABC] text-[48px] font-semibold">
                    Login
                  </span>

                  <div>
                    <span className="block text-[20px] font-medium py-2">
                      Select your account type
                    </span>
                    <button className="border border-[5px] h-[74px] w-[152px] rounded-[15px] text-[25px] hover:bg-[#AEDBFF] hover:border-[#026ABC] hover:drop-shadow-lg">
                      Mentee
                    </button>
                    <button className="border border-[5px] h-[74px] w-[152px] rounded-[15px] text-[25px] hover:bg-[#AEDBFF] hover:border-[#026ABC] hover:drop-shadow-lg">
                      Mentor
                    </button>
                  </div>
                  <div className="py-2">
                    {/* <button className="connect-google block bg-white border border-2 rounded-full text-[13px] font-medium h-[53px] w-[234px] hover:border-[#026ABC] hover:font-semibold" >
                      Continue with Google
                    </button> */}
                    <button className='flex border-2 rounded-[30px] font-medium px-4 py-4 hover:border-[#026ABC]'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-6 mr-3'><title>Google</title><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                      <span>Continue with Google</span>
                    </button>
                  </div>
                  <form className="w-full">
                    <span className="text-[20px] font-medium">Username</span>
                    <input
                      className="block w-full cursor-auto border border-2 rounded-lg h-[61px] w-full px-2"
                      placeholder=""
                      type="text"
                      name="email"
                      // value={}
                      // onChange={}
                      required
                      autoFocus
                    />
                    <span className="text-[20px] font-medium">Password</span>
                    <input
                      className="block w-full cursor-auto border border-2 rounded-lg h-[61px] w-full px-2"
                      placeholder=""
                      type="password"
                      name="password"
                      // value={}
                      // onChange={}
                      required
                      autoFocus
                    />

                    <div className="py-6">
                      <button className="text-white bg-[#D8286D] text-[20px] font-semibold rounded-[25px] h-[60px] w-[146px]">
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
                <button className="text-[#CE1982] text-[29px] font-semibold border-2 border-[#FF7474] rounded-[35px] h-[69px] w-[234px] hover:border-[#026ABC]">
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
