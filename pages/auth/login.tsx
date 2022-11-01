import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';
import Layout from '../../src/components/Layout';
import Button, { buttonVariants } from '../../src/components/buttons/reusable-buttons'; //  prettier-ignore
import { loginAPI } from '../../src/api/auth';
import { useAuth } from '../../state-management/ReactContext/AuthContext';
import { Roles } from '../../src/enum/role.enum';
import { useRouter } from 'next/router';

const Login: NextPage = ({}) => {
  const router = useRouter();
  const { clientSideLogin, logout } = useAuth();

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
                      Login as a {role === Roles.mentee ? 'Mentee' : 'Mentor'}
                    </span>
                    <p>
                      Not a {role === Roles.mentee ? 'Mentee' : 'Mentor'}?{' '}
                      <a
                        onClick={() => {
                          switchSignupRole();
                        }}
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                      >
                        Login as a {role === Roles.mentee ? 'Mentor' : 'Mentee'}
                      </a>
                    </p>

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
                        <span className="text-primary-1 hover:text-primary-2 underline">
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
    </div>
  );
};

export default Login;
