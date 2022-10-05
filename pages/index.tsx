import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = ({}) => {
  return (
    <>
      <h1>Home Page - Hello world!</h1>
      <Link href="/become-a-mentor">
        <a>Click</a>
      </Link>
    </>
  );
};

export default Home;
