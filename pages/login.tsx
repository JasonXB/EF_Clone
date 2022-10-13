import type { NextPage } from 'next';
import Head from 'next/head';


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
                    <button className="connect-google block bg-white border border-2 rounded-full text-[13px] font-medium h-[53px] w-[234px] hover:border-[#026ABC] hover:font-semibold">
                      Continue with Google
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
