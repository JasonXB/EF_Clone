import React, { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Session } from 'next-auth'; // an interface from NextAuth's TS type support

export default function useRedirectWhenOffline(redirectPath: string) {
  const router = useRouter();
  // Create and manage your own loading and session states
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSession, setLoadedSession] = useState<null | Session>(null);
  // If we are not logged in, redirect to a path specified by props
  useEffect(() => {
    const confirmSession = async function () {
      const session = await getSession(); // falsy if we aren't logged in
      setLoadedSession(session); // update our session state
      if (!session) router.push(redirectPath);
      else setIsLoading(false); // update our loading state (we're done now)
    };
    confirmSession();
  }, []);
  return { isLoading, loadedSession };
}

// USAGE GUIDE (only use on client side)
// isLoading=true (loading)      isLoading=false (not loading)
// loadedSession=null (offline)  loadedSession= session-object (online)
