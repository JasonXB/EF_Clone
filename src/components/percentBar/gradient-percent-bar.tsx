import React from 'react';
interface props {
  variant: 'blue' | 'pink' | 'gray';
}
export default function gradientPercentBar(props: props) {
  if (props.variant === 'blue') {
    return (
      <div className="w-full h-5 mb-6 rounded-full bg-[#DAECFA]">
        <div className="bg-gradient-to-r from-[#8DC3ED] to-[#0B066E] h-5 w-3/5 rounded-full"></div>
      </div>
    );
  }
  if (props.variant === 'pink') {
    return (
      <div className="w-full h-5 mb-6 rounded-full bg-[#DAECFA]">
        <div className="bg-gradient-to-r from-[#E1589A] to-[#CE1982] h-5 w-full rounded-full"></div>
      </div>
    );
  }
  if (props.variant === 'gray') {
    return (
      <div className="w-full h-5 mb-6 rounded-full bg-[#e5e7eb]">
        <div className="h-5 w-3/5 rounded-full"></div>
      </div>
    );
  }
  return null;
}
