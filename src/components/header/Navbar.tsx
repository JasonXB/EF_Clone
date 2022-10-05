import NavbarLink from './NavbarLink';
import EfLogo from './EfLogo';
import Button, { buttonVariants } from '../buttons/reusuable-buttons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      {/* Empowered Futures Logo / Link to the Homepage */}
      {/* Logo is currently a screenshot (need original image) */}
      <nav className="flex flex-wrap items-center pt-5 border-b shadow-md border-slate-200">
        <EfLogo alt={'Empowered Futures Logo'} />

        {/* Left div for three links */}
        <div className="w-full lg:inline-flex lg:w-auto">
          <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <NavbarLink url={'/become-a-mentor'} name={'Become a Mentor'} />
            <NavbarLink url={'/find-a-mentor'} name={'Find a Mentor'} />
            <NavbarLink url={'/about-us'} name={'About Us'} />
          </div>
        </div>
        {/* Right div for Login/Sign Up Buttons*/}
        <div className="flex flex-col items-start w-full mr-16 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          {/*These links are made to look like buttons */}
          <Link href={'/login'}>
            <a className={buttonVariants.secondary}>Login</a>
          </Link>
          <Link href={'/signup'}>
            <a className={buttonVariants.primary}>Sign Up</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
