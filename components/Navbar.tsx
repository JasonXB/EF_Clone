import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';


// Placeholder Navbar component created solely for testing whether the Links are working properly. 
// The developer who ends up making the actual Navbar can reuse the Links created below.

const Navbar: NextPage = ({}) => {
  return (
    <>
      <nav className='flex flex-wrap items-center p-3'>
        <Link href='/find-a-mentor'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8 mr-2 text-white fill-current'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span className='text-xl font-bold tracking-wide text-white uppercase'>
            EMPOWERED FUTURES
            </span>
          </a>
        </Link>
        <button className='inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-green-600 lg:hidden hover:text-white'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
          <Link href='/find-a-mentor'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white '>
                Find a Mentor
              </a>
            </Link>
            <Link href='/become-a-mentor'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'>
                Become a Mentor
              </a>
            </Link>
            <Link href='/about-us'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'>
                About Us
              </a>
            </Link>
            <Link href='/login'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'>
                Log In
              </a>
            </Link>
            <Link href='/signup'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white'>
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;