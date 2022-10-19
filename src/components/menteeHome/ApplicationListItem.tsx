import React from 'react';
import Image from 'next/image';
import GradientBar from '../percentBar/gradient-bar';
import Button from '../buttons/reusable-buttons';
import { ApplicationData } from '../../interface/mentee/homepage';

export default function ApplicationListItem(props: ApplicationData) {
  return (
    <li className="hidden ss:grid ss:grid-cols-[7fr,_auto] ss:h-[5.875rem] ss:gap-6 ss:mb-4 gap-4 mb-8">
      <div className="grid grid-cols-[3fr,_7fr] divide-x items-center w-full shadowVariant1 rounded-2xl px-[13px] py-[8px] xs:px-[26px] xs:py-[16px] h-[5.875rem]">
        <div className="flex flex-col pr-4">
          <div className="relative rounded-[5px] overflow-hidden w-[40px] h-[40px] flex flex-col mx-auto">
            <Image
              src="/temp-assets/elon-profile.jpg"
              alt="picture not found"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="truncate mx-auto">
            <span className="text-[12px] text-ellipsis overflow-hidden whitespace-nowrap">
              {props.mentorName}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center pl-4 m-auto">
          <p className="mb-2 text-lg">
            <span>Status:</span> {props.status}
          </p>
          <GradientBar status={props.status} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button
          clickHandler={() => {}}
          disabled={props.status === 'approved' ? false : true} // disable button when applications are not approved
          className={'max-w-[14rem] noMargins'}
        >
          Book Meeting
        </Button>
      </div>
    </li>
  );
}
