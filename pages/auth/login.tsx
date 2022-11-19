import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';
import Layout from '../../src/components/Layout';
import Button, { buttonVariants } from '../../src/components/buttons/reusable-buttons'; //  prettier-ignore
import { loginAPI } from '../../src/api/auth';
import { useAuth } from '../../state-management/ReactContext/AuthContext';
import { Roles } from '../../src/enum/role.enum';
import { useRouter } from 'next/router';
// import useAuthStatusCheck from '../../src/hooks/useAuthStatusCheck';
// import Spinner from '../../src/components/loadingVisuals/spinner';

const Login: NextPage = ({}) => {
  const { clientSideLogin, logout } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<Roles>(Roles.mentee);

  async function handleLogin() {
    const accessToken = await loginAPI(username, email, password);
    clientSideLogin(email, accessToken);
    if (role === Roles.mentee) {
      router.push('/mentee');
    } else {
      router.push('/mentor');
    }
  }

  function switchSignupRole() {
    if (role === Roles.mentee) {
      setRole(Roles.mentor);
    }
    if (role === Roles.mentor) {
      setRole(Roles.mentee);
    }
  }

  return (
    <Layout headTitle="Login">
      <div className="outer font-mainFont rounded-5 px-5 pt-[40px]">
        <div className="px-5 py-4 outer-border">
          <section className="p-2 inner-section">
            <div className="h-full inner">
              <div className="flex flex-wrap items-center justify-center h-full inner-full">
                <div className="text-center left-inside"></div>

                <div className="right-inside xs:w-200 sm:w-[480px]">
                  <span className="text-primary-1 text-[24px] font-semibold">
                    Login as a {role === Roles.mentee ? 'Mentee' : 'Mentor'}
                  </span>
                  <p>
                    Not a {role === Roles.mentee ? 'Mentee' : 'Mentor'}?{' '}
                    <a
                      onClick={() => {
                        switchSignupRole();
                      }}
                      className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
                    >
                      Login as a {role === Roles.mentee ? 'Mentor' : 'Mentee'}
                    </a>
                  </p>

                  <div className="flex ">
                    <Button
                      variant="simple"
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
                      {/* fix hover */}
                      <span className="underline text-primary-1 hover:text-secondary-3">
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
    </Layout>
  );
};

export default Login;
