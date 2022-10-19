import React from 'react';
import Image from 'next/image';
import { MeetingData } from '../../interface/mentee/homepage';

export default function MeetingListItem(props: MeetingData) {
  return (
    <>
      {/* The following layout only applies after the ss breakpoint */}
      <li className="hidden ss:grid grid-cols-[45%,_35%,_20%] divide-x items-center mb-4 w-full shadowVariant1 rounded-2xl px-[26px] py-[16px] h-[5.875rem]">
        <div className="flex flex-row pr-4 divide-x-0">
          <div className="relative rounded-[5px] overflow-hidden w-[47px] h-[47px] pr-4 my-auto">
            <Image
              src="/temp-assets/elon-profile.jpg"
              alt="elon musk pfp"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-center ml-4 truncate">
            <p className="text-lg trailingDots">{props.mentorName}</p>
            <p className="text-[0.6875rem] trailingDots">
              {props.mentorPosition}
            </p>
          </div>
        </div>
        <div className="pl-4 pr-4 h-full flex flex-col justify-center truncate">
          <p className="text-lg text-center trailingDots">{props.date}</p>
          <p className="text-[0.6875rem] text-center trailingDots">
            {props.time}
          </p>
        </div>
        <div className="pl-4 h-full flex flex-col justify-center items-center">
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
