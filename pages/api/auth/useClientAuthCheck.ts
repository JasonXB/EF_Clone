import { useSession } from 'next-auth/react';

// Checks if a user is online or offline, and is meant for the client side only
// Cannot be used in api routes (any files in pages/api folder)
// If you wish to check auth status inside API routes or getServerSideProps, read this: https://next-auth.js.org/configuration/nextjs#unstable_getserversession
export default function useClientAuthCheck() {
  const { data, status } = useSession();
  if (status === 'loading') return 'loading';
  else if (status === 'authenticated') return data;
  else return 'offline';
}

/* HOOK RETURN VALUES (3): 
if authentication checking is still in progress: hook returns "loading" string
if user's offline: hook returns "offline" string
if user's online: hook returns an object with user data 
the above object contains email, userName, profile picture.. etc
*/

// useSession article in NextAuth docs: https://next-auth.js.org/getting-started/client#usesession
