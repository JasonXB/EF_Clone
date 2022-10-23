import React from 'react';

const Timezone = ({ zone }) => {
  return (
    <div>
      <button className="font-sm border border-black">
        <p>{zone}</p>
      </button>
    </div>
  );
};

export default Timezone;
