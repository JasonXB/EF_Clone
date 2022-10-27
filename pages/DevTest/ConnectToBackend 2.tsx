import React from 'react';
import axios from 'axios';
import Error from 'next/error';
export default function ConnectToBackend() {
  // DOCKER-LESS DEMONSTRATION PROCEDURE
  // Step 1: Setup backend repo (npm install dependencies, copy paste api keys into .env)
  // Step 2: Run backend repo using "npm run serve" in project terminal (seperate VS Code terminal)
  // Step 3: Hit button to test connection to backend endpoints

  // Connect to "/" endpoint
  const connect1 = async function () {
    try {
      const response = await axios.get(`http://localhost:5200/`);
      // Make request to endpoint where backend repo is being broadcast
      // alert(response);
      console.log(response.data);
    } catch (e) {
      if (typeof e === 'string') e.toUpperCase();
      else if (e instanceof Error) console.log(e);
      alert('Failed to connect to / endpoint');
    }
  };

  // Connect to "/check" endpoint
  const connect2 = async function () {
    try {
      const response = await axios.get(`http://localhost:5200/check`);
      // Make request to endpoint where backend repo is being broadcast
      console.log(response.data);
    } catch (e) {
      if (typeof e === 'string') e.toUpperCase();
      else if (e instanceof Error) console.log(e);
      alert('Failed to connect to /check endpoint');
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={connect1}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block m-20 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Click me to connect to the backend endpoint &quot;/&quot;
      </button>
      <button
        type="button"
        onClick={connect2}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block m-20 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Click me to connect to the backend endpoint &quot;/check&quot;
      </button>
    </div>
  );
}
