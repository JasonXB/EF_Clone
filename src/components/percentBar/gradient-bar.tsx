import React from 'react';
import { StatusProp } from '../../interface/mentee/homepage';

export default function GradientBar(props: StatusProp) {
  if (props.status === 'viewed') {
    return (
      <div className="w-full h-5 rounded-full bg-[#DAECFA]">
        <div className="bg-gradient-to-r from-[#8DC3ED] to-[#0B066E] h-5 w-3/5 rounded-full"></div>
      </div>
    );
  }
  if (props.status === 'approved') {
    return (
      <div className="w-full h-5 rounded-full bg-[#DAECFA]">
        <div className="bg-gradient-to-r from-[#E1589A] to-[#CE1982] h-5 w-full rounded-full"></div>
      </div>
    );
  }
  if (props.status === 'sent') {
    return (
      <div className="w-full h-5 rounded-full bg-[#e5e7eb]">
        <div className="h-5 w-3/5 rounded-full"></div>
      </div>
    );
  }
  return null;
}
