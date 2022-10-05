import { GetServerSideProps } from 'next';
import { nextAuthConfig } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next'; // server side auth check method from NextAuth
import { Session } from 'next-auth'; // NextAuth built in interface
import axios from 'axios';
import { signOut } from 'next-auth/react';
// Use the server side pre rendering method to redirect users accessing this page who are offline
// Test by visiting http://localhost:3000/AuthTests/RedirectOfflineUsers (capitals matter)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    nextAuthConfig
  );
  // If the user is offline, redirect them to homepage
  if (!session) {
    return {
      redirect: {
        destination: '/signin', // redirect to this path
        permanent: false,
      },
    };
  }
  // If the user is online, feed the session object as a prop to the React component
  return { props: { session } };
};

export default function RedirectOfflineUsers(props: Session) {
  const buttonStyling = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-[700px]'; // prettier-ignore

  const requestProtectedApiRoute = async function () {
    try {
      const result = await axios.get('/api/protectedRoute');
      console.log(result.data);
      alert('SUCCESS! User is allowed to access locked protected privileges');
    } catch (err) {
      if (err instanceof Error) console.log(err);
      alert('USER NOT ALLOWED TO ACCESS PROTECTED CONTENT');
    }
  };
  console.log(props); // see whats inside the session object
  return (
    <div className="flex flex-col">
      <button onClick={requestProtectedApiRoute} className={buttonStyling}>
        Make request to a protected API route (should work since you are online)
      </button>
      <button onClick={() => signOut()} className={buttonStyling}>
        Press button to sign out which will get you redirected to /signin
      </button>
    </div>
  );
}
