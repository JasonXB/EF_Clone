import React from 'react';

export default function spinner() {
  return (
    <div className="flex justify-center items-center overflow-hidden h-[100vh]">
      <div
        className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
