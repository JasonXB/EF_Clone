import NavbarLink from './NavbarLink';
import EfLogo from './EfLogo';
import { buttonVariants } from '../buttons/reusuable-buttons';
import { Disclosure } from '@headlessui/react';

import ProfileNavMenu from './ProfileNavMenu';
import LoginSignup from './LoginSignup';

//issues when under 440px, logo not being responsive

const MainLinks = () => (
  <div className="w-full lg:inline-flex lg:w-auto">
    <div className="flex items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
      <NavbarLink url={'/become-a-mentor'} name={'Become a Mentor'} />
      <NavbarLink url={'/find-a-mentor'} name={'Find a Mentor'} />
      <NavbarLink url={'/about-us'} name={'About Us'} />
    </div>
  </div>
);

const Navbar = () => {
  let notLoggedIn = false; //temp for testing, will switch to auth

  return (
    <Disclosure
      as="nav"
      className="pt-5 bg-white border-b shadow-md border-slate-200"
    >
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className={`${buttonVariants.primary} inline-flex items-center justify-center p-2`}
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
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  {/* Empowered Futures Logo / Link to the Homepage */}
                  {/* Logo is currently a screenshot (need original image) */}
                  <EfLogo alt={'Empowered Futures Logo'} />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <MainLinks />
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {notLoggedIn ? <LoginSignup /> : <ProfileNavMenu />}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MainLinks />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

<>
  <nav className="flex flex-wrap items-center justify-between pt-5 border-b shadow-md border-slate-200"></nav>
</>;
