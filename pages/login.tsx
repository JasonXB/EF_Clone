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

      <div className="outer bg-white border-t border-1 border-r rounded-5 h-full font-mainFont">
        <div className="outer-border p-4">
          <section className="inner-section p-24">
            <div className="inner h-full text-gray-800">
              <div className="inner-full flex justify-between justify-center items-center flex-wrap h-full">
                <div className="left-inside w-1/4">
                  <button className="connect-google bg-white border border-2 border-#BBB9B9 rounded-full text-sm pl-8 pr-4 h-12">
                    Continue with Google
                  </button>
                  <button className='grid'>Back</button>
                </div>

                <div className="right-inside w-1/2">
                  <span>Login</span>
                  <div>
                    <button className='border px-7 py-6 rounded-lg text-2xl'>Mentor</button>
                    <button className='border px-7 py-6 rounded-lg text-2xl'>Mentee</button>
                  </div>
                  <form>
                    <span className='text-xl'>Username</span>
                    <input 
                      className='block w-full cursor-auto border border-2 rounded-lg h-14'
                      placeholder=''
                      type='text'
                      name='email'
                      // value={}
                      // onChange={}
                      required
                      autoFocus
                    />
                    <span className='text-xl'>Password</span>
                    <input 
                      className='block w-full cursor-auto border border-2 rounded-lg h-14'
                      placeholder=''
                      type='password'
                      name='password'
                      // value={}
                      // onChange={}
                      required
                      autoFocus
                    />
                  </form>
                </div>

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
