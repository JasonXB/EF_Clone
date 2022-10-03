import Link from 'next/link';
import { NavbarLinkProps } from '../interface/navbar-link-props.interface';


const NavbarLink = ({url, name}:  NavbarLinkProps) => {
  return (
<>
<Link href={url}>
              <a className='items-center justify-center w-full px-6 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto hover:bg-gray-100 hover:text-black '>
               {name}
              </a>
            </Link>
    </>
  );
};

export default NavbarLink;