import React from 'react';
import axios from 'axios';
import Error from 'next/error';
export default function ConnectToBackend() {
  // Get mentor profile of a user
  const connect1 = async function () {
    try {
      const response = await axios.get(
        'https://efback.azurewebsites.net/api/mentor/635c5faebd78597264248282'
      );
      // Make request to azure endpoint where backend repo is hosted
      console.log(response.data);
    } catch (e) {
      if (typeof e === 'string') e.toUpperCase();
      else if (e instanceof Error) console.log(e);
      alert('Failed to connect to / endpoint');
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
        Click me to connect to the backend endpoint
        <br />
        https://efback.azurewebsites.net/api/mentor/:id
      </button>
    </div>
  );
}
