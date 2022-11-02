import NavbarLink from './NavbarLink';
import EfLogo from '../EfLogo';
import { buttonVariants } from '../buttons/reusable-buttons';
import { Disclosure } from '@headlessui/react';

import ProfileNavMenu from './ProfileNavMenu';
import LoginSignup from './LoginSignupButton';
import { useAuth } from '../../../state-management/ReactContext/AuthContext';

//issues when under 440px, logo not being responsive

const MainLinks = () => (
  <div className="w-full lg:inline-flex lg:w-auto">
    <div className="flex flex-col items-start w-full md:inline-flex md:flex-row sm:ml-auto sm:w-auto sm:items-center sm:h-auto">
      <NavbarLink url={'/public/become-a-mentor'} name={'Become a Mentor'} />
      <NavbarLink url={'/find-a-mentor'} name={'Find a Mentor'} />
      <NavbarLink url={'/public/about-us'} name={'About Us'} />
    </div>
  </div>
);

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Disclosure
      as="nav"
      className="pt-5 bg-white border-b shadow-md border-slate-200  min-w-[400px] z-20 relative"
    >
      {/*handles open close boolean */}
      {({ open }) => (
        <>
          <div className="px-2 mx-auto sm:px-6 md:px-8">
            <div className="relative flex items-center h-20 ">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className={`${buttonVariants.primary} px-3 `}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-list"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-center flex-1 md:justify-start">
                {/* Empowered Futures Logo / Link to the Homepage */}

                <div className="flex items-center max-w-[180px] mr-[10%] ss:mr-0 ml-0 sm:ml-[20%] md:ml-0 sm:max-w-[250px] ">
                  <EfLogo alt={'Empowered Futures Logo'} />
                </div>

                {/*desktop nav */}
                <div className="hidden ml-1 md:ml-6 md:block">
                  <MainLinks />
                </div>
              </div>
              {/*toggled state login/sign up buttons or profile menu */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/*hides login from nav when its too crowded */}
                {isLoggedIn ? (
                  <ProfileNavMenu />
                ) : (
                  <span className="hidden sm:block">
                    <LoginSignup />
                  </span>
                )}
              </div>
            </div>
          </div>

          {/*mobile hamburger nav */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MainLinks />
              {/*displays login/signup buttons in panel when nav runs out of room */}
              {isLoggedIn ? null : (
                <span className="sm:hidden">
                  <LoginSignup />
                </span>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
