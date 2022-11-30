import React from 'react';
import Image from 'next/image';
import GradientBar from '../percentBar/gradient-bar';
import Button from '../buttons/reusable-buttons';
import { ApplicationData } from '../../interface/mentee/homepage';
import Link from 'next/link';

export default function ApplicationListItem(props: ApplicationData) {
  // The percentage sent to the Gradient Bar is determined by the status
  const statusPercentage =
    props.status === 'Sent' // sent applications have 0% progress
      ? 0
      : props.status === 'Viewed' // viewed applications have 50% progress
      ? 50
      : props.status === 'Approved' // approved applications have 100% progress
      ? 100
      : 0; // this default value should never get used but is needed to complete the triple-ternary operator

  return (
    <li className="flex flex-col ss:flex-row ss:justify-between">
      <div className="grid grid-cols-4 ss:w-2/3 bg-white shadow-md rounded-md p-2">
        <div className="col-start-1 col-end-2 flex flex-col items-center justify-center overflow-hidden">
          <div className="relative rounded-[5px] overflow-hidden w-[40px] h-[40px] flex flex-col mx-auto">
            <Image
              src="/temp-assets/Emilio-lg.jpg"
              alt="picture not found"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mx-auto truncate w-20">
            <span className="text-sm text-ellipsis whitespace-nowrap">
              {props.mentorName}
            </span>
          </div>
        </div>
        <div className="col-start-2 col-end-5 flex flex-col justify-center h-full px-2 border-l border-black">
          <p className="mb-2">
            <span className="text-xs ss:text-sm">Status:</span>&nbsp;
            <span className="text-base ss:text-lg">{props.status}</span>
          </p>
          <GradientBar status={props.status} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link href="/mentee/meeting/1">
          <a>
            <Button
              clickHandler={() => {}}
              disabled={props.status === 'Approved' ? false : true} // disable button when applications are not approved
              className={'max-w-[14rem] noMargins text-xs ss:text-sm'}
            >
              Book Meeting
            </Button>
          </a>
        </Link>
      </div>
    </li>
  );
}
