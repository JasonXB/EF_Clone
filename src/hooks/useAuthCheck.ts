import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useInput() {
  const [authStatus, setAuthStatus] = useState('');
  useEffect(() => {
    const checkStatus = async function () {
      try {
        // Check for a JWT inside Local-storage
        const jwtString = localStorage.getItem('EFuserCredentials') || ""; // prettier-ignore
        // Make an axios request using the jwt in the header
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': encodeURIComponent(`Bearer ${jwtString}`), // prettier-ignore
        };
        const backendResponse = await axios.get(
          'http://localhost:1992/api/users/check/status',
          { headers }
        );
        // console.log(backendResponse);
        // If no errors are returned, it means the user is authenticated as a Mentor or Mentee or Admin
        const status = backendResponse.data.status; // "Admin", "Mentor", "Mentee"
        setAuthStatus(status);
      } catch (error) {
        // Error response occurs when user is not authenticated (is a Guest)
        setAuthStatus('Guest');
        // console.error(error);
      }
    };
    checkStatus();
  }, []);

  return authStatus;
}

export default useInput;
