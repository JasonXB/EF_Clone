import React from 'react';
import { GradientBarProp } from '../../interface/mentee/homepage';

export default function GradientBar(props: GradientBarProp) {
  // Use props to set progess width at X % and height at Y pixels
  const containerStyle = `w-full h-[20px] rounded-full`;
  if (props.status === 'Viewed') {
    return (
      <div className={`${containerStyle} bg-[#DAECFA]`}>
        <div
          className={`bg-gradient-to-r from-[#8DC3ED] to-[#0B066E] h-full w-[50%] rounded-full`}
        ></div>
      </div>
    );
  }
  if (props.status === 'Approved') {
    return (
      <div className={`${containerStyle} bg-[#DAECFA]`}>
        <div
          className={`bg-gradient-to-r from-[#E1589A] to-[#CE1982] h-full w-full rounded-full`}
        ></div>
      </div>
    );
  }
  if (props.status === 'Sent') {
    return (
      <div className={`${containerStyle} bg-[#e5e7eb]`}>
        <div className={`h-full w-[0%] rounded-full`}></div>
      </div>
    );
  }
  return null;
}