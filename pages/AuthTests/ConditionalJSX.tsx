import { signOut, signIn } from 'next-auth/react';
import useClientAuthCheck from '../api/auth/useClientAuthCheck';
import axios from 'axios';
import { Session } from 'next-auth'; // NextAuth built in interface

// Webpage renders certain JSX when users are online, and different JSX when users are offline
// It also features a button that lets users make a request to a protected api route
// This api route sends back an error response when offline users make a request to it
// Test by visiting http://localhost:3000/AuthTests/ConditionalJSX (capitals matter)
export default function ConditionalJSX(props: Session) {
  const buttonStyling = 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'; // prettier-ignore
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
  // Check if the user is on or offline using this custom React hook which only works on the client side
  const loginData = useClientAuthCheck(); // Possible outputs are "loading", "offline", or an object containing user data
  // IF THE AUTHENTICATION PROCESS IS STILL GOING:
  if (loginData === 'loading') return <p>Currently checking if user is online or offline...</p>; // prettier-ignore
  // OPTION 2: RENDER DIFFERENT JSX WHEN USER IS OFFLINE
  if (loginData === 'offline')
    return (
      <div className="m-20">
        <h1>User is offline</h1>
        <button onClick={() => signIn()} className={buttonStyling}>
          Click to sign in
        </button>
        <div>
          <button onClick={requestProtectedApiRoute} className={buttonStyling}>
            Make request to a protected API route (should receive error
            response)
          </button>
        </div>
      </div>
    );
  // IF THE USER IS ONLINE:
  if (loginData.user) {
    return (
      <div className="m-20">
        <p>User is signed in. Associated email is... {loginData.user.email}</p>
        <button onClick={() => signOut()} className={buttonStyling}>
          Press button to sign out
        </button>
        <br />
        <div>
          <button onClick={requestProtectedApiRoute} className={buttonStyling}>
            Make request to a protected API route (should work)
          </button>
        </div>
      </div>
    );
  }
}
