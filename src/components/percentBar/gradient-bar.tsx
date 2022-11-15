import React from 'react';
import { GradientBarProp } from '../../interface/mentee/homepage';

export default function GradientBar(props: GradientBarProp) {
  // Use props to set progess width at X % and height at Y pixels
  const containerStyle = `w-full h-[20px] rounded-full`;
  if (props.status === 'Viewed') {
    return (
      <div className={`${containerStyle} bg-[#DAECFA]`}>
        <div
          className={`bg-gradient-to-r from-gradient-secondary-2 to-gradient-secondary-1 h-full w-[50%] rounded-full`}
        ></div>
      </div>
    );
  }
  if (props.status === 'Approved') {
    return (
      <div className={`${containerStyle} bg-[#DAECFA]`}>
        <div
          className={`bg-gradient-to-r from-gradient-primary-2 to-gradient-primary-1 h-full w-full rounded-full`}
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
