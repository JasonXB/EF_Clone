import NavbarLink from './NavbarLink';
import EfLogo from './EfLogo';
import Button, { buttonVariants } from '../buttons/reusuable-buttons';
import Link from 'next/link';

const MainLinks = () => (
  <>
    <NavbarLink url={'/become-a-mentor'} name={'Become a Mentor'} />
    <NavbarLink url={'/find-a-mentor'} name={'Find a Mentor'} />
    <NavbarLink url={'/about-us'} name={'About Us'} />
  </>
);
const LoginSignup = () => (
  <>
    {/*These links are made to look like buttons */}
    <Link href={'/login'}>
      <a className={buttonVariants.secondary}>Login</a>
    </Link>
    <Link href={'/signup'}>
      <a className={buttonVariants.primary}>Sign Up</a>
    </Link>
  </>
);

const ProfileNavMenu = () => <div>Temp</div>;

const Navbar = () => {
  let notLoggedIn = true; //temp for testing, will switch to auth
  return (
    <>
      {/* Empowered Futures Logo / Link to the Homepage */}
      {/* Logo is currently a screenshot (need original image) */}
      <nav className="flex flex-wrap items-center pt-5 border-b shadow-md border-slate-200">
        <EfLogo alt={'Empowered Futures Logo'} />
        {/*Desktop menu */}
        <div className="w-full lg:inline-flex lg:w-auto">
          <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <MainLinks />
          </div>
        </div>
        <div className="flex flex-col items-start w-full mr-16 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          {notLoggedIn ? <LoginSignup /> : <ProfileNavMenu />}
        </div>
        {/*Mobile + tablet */}
      </nav>
    </>
  );
};

export default Navbar;
