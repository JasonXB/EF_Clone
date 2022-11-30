import React from 'react';
import Image from 'next/image';
import { MeetingData } from '../../interface/mentee/homepage';
import Button from '../buttons/reusable-buttons';

export default function MeetingListItem(props: MeetingData) {
  return (
    <>
      {/* The following layout only applies after the ss breakpoint */}
      <li className="flex flex-col ss:flex-row ss:justify-between">
        <div className="grid grid-cols-9 ss:w-3/4 bg-white shadow-md rounded-md p-2">
          <div className="col-start-1 col-end-6 flex flex-row pr-4 divide-x-0 border-r border-black">
            <div className="relative rounded-[5px] overflow-hidden w-[47px] h-[47px] pr-4 my-auto shrink-0">
              <Image
                src="/temp-assets/Emilio-lg.jpg"
                alt="elon musk pfp"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center ml-4 truncate">
              <p className="text-base ss:text-xl trailingDots">{props.mentorName}</p>
              <p className="text-xs ss:text-sm trailingDots">{props.mentorPosition}</p>
            </div>
          </div>
          <div className="col-start-6 col-end-10 flex flex-col justify-center h-full">
            <p className="text-base ss:text-xl text-center trailingDots">{props.date}</p>
            <p className="text-center text-xs ss:text-sm trailingDots">{props.time}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <Button variant="primary" className='text-xs ss:text-sm'>Message</Button>
        </div>
      </li>
    </>
  );
}
