import Link from 'next/link';
import { buttonVariants } from '../buttons/reusuable-buttons';

const LoginSignup = () => (
  <div className="flex flex-col items-start w-full lg:inline-flex sm:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
    {/*These links are made to look like buttons */}
    <Link href={'/login'}>
      <a
        className={buttonVariants.secondary}
        aria-label="brings you to login screen"
      >
        Login
      </a>
    </Link>
    <Link href={'/signup'}>
      <a
        className={buttonVariants.primary}
        aria-label="brings you to a different screen to sign up"
      >
        Sign Up
      </a>
    </Link>
  </div>
);

export default LoginSignup;
