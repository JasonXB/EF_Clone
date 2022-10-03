import NavbarLink from './NavbarLink';
import EfLogo from './EfLogo';
import eflogo from './assets/eflogo.png';

const Navbar = () => {
  return (
    <>
      {/* Empowered Futures Logo / Link to the Homepage */}
      {/* Logo is currently a screenshot (need original image) */}
      <nav className="flex flex-wrap items-center pt-5 border-b shadow-md border-slate-200">
        <EfLogo url={'/'} className={'h-24'} src={'https://raw.githubusercontent.com/empoweredfutures/EF_Frontend/092322-navmainlinks/components/assets/eflogo.png?token=GHSAT0AAAAAABY4QKINH72CE67PCS2COF6YYZ2NDPQ'} alt="Empowered Futures Logo" />
      
        {/* Left div for three links */}
        <div className="hidden w-full lg:inline-flex lg:w-auto">
          <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <NavbarLink url={'/become-a-mentor'} name={'Become a Mentor'} />
            <NavbarLink url={'/find-a-mentor'} name={'Find a Mentor'} />
            <NavbarLink url={'/about-us'} name={'About Us'} />
          </div>
       
        </div>
        {/* Right div for Login/Sign Up Buttons (not yet pulled from repo) */}
        <div className="flex flex-col items-start w-full mr-16 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          <NavbarLink url={'/about-us'} name={'Login'} />
          <NavbarLink url={'/about-us'} name={'Sign Up'} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
