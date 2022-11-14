import React from 'react';
import Image from 'next/image';
import { MeetingData } from '../../interface/mentee/homepage';

export default function MeetingListItem(props: MeetingData) {
  return (
    <>
      {/* The following layout only applies after the ss breakpoint */}
      <li className="grid grid-cols-[43%,_37%,_20%] divide-x items-center mb-4 w-full shadow-branded-1 rounded-2xl px-[26px] py-[16px] h-[5.875rem]">
        <div className="flex flex-row pr-4 divide-x-0">
          <div className="relative rounded-[5px] overflow-hidden w-[47px] h-[47px] pr-4 my-auto shrink-0">
            <Image
              src="/temp-assets/Emilio-lg.jpg"
              alt="elon musk pfp"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-center ml-4 truncate">
            <p className="text-xl trailingDots">{props.mentorName}</p>
            <p className="text-[0.6875rem] trailingDots">
              {props.mentorPosition}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full pl-4 pr-4 truncate">
          <p className="text-xl text-center trailingDots">{props.date}</p>
          <p className="text-[0.6875rem] text-center trailingDots">
            {props.time}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center h-full pl-4">
          <button
            type="button"
            className="block px-4 py-2 border-2 m-0 h-[2rem] max-w-[12rem] border-[#FF0A0A] text-[#FF0A0A] font-medium text-xs leading-tight uppercase rounded-[25px]"
          >
            Contact
          </button>
        </div>
      </li>
    </>
  );
}
