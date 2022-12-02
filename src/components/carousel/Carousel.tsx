import React, { useState } from 'react';
import Image from 'next/image';
import BubbleTag from '../BubbleTag';
import { BUBBLE_TAG_TYPE_CLASSES } from '../BubbleTag';
import Hiba from '../../../public/assets/hiba.png';

type MentorType = {
  mentor: {
    mentorName: string;
    location: string;
    mentorPosition: string;
    bubbleTag1: string;
    bubbleTag2: string;
    image: string;
  };
  sliderLocation: number;
};

const Carousel: React.FC<MentorType> = ({ mentor, sliderLocation }) => {
  return (
    <div
      className={`flex -translate-x-[${sliderLocation}rem] transition-all duration-500 ease w-90 gap-2 shadow-branded-1 p-4 bg-light rounded-3xl`}
    >
      <div className="flex-2 overflow-hidden flex items-center w-32 h-40 rounded-3xl">
        <Image
          src={Hiba}
          objectFit="cover"
          alt="mentor profile picture"
          className="rounded-3xl max-w-[200px]"
        />
      </div>
      <div className="flex-3 flex flex-col gap-2 justify-center">
        <div className="flex flex-col gap-2">
          <p className=" text-lg mx-1 overflow-hidden font-semibold text-ellipsis">
            {mentor.mentorName}
          </p>
          <p className="mx-1 overflow-hidden font-medium text-ellipsis">
            {mentor.location}
          </p>
          <p className="mx-1 overflow-hidden font-medium text-ellipsis">
            {mentor.mentorPosition}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <BubbleTag
            tag="Entrepeneurship"
            bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryShaded}
          />
          <BubbleTag
            tag="Management"
            bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryShaded}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
