import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import Hiba from '../../../public/assets/hiba.png';
import BubbleTag from '../BubbleTag';
import { BUBBLE_TAG_TYPE_CLASSES } from '../BubbleTag';
import { MockData } from '../../interface/mentee/homepage';
import '@splidejs/react-splide/css';

export default function SimilarMentors(props: {
  data: MockData['similarMentors'];
}) {
  // Configured options so carousel looks good on all screen sizes, despite how many similar mentors are found
  // Ex. On large screens, we can hold 3 carousel items per slide
  // If we only get 1 similar mentor match, then the carousel will change its look to keep that 1 mentor centered
  const Options = {
    perPage:
      props.data.length >= 3 ? 3 : 
      props.data.length === 2 ? 2 : 
      props.data.length === 1 ? 1 : 1, //  prettier-ignore
    gap: '1rem',
    pagination: false,
    // padding: { left: '3rem', right: '3rem' },
    lazyLoad: true,
    arrows: props.data.length > 3 ? true : false, // only show arrows when we have over 3 similar mentors
    breakpoints: {
      1400: {
        perPage: props.data.length >= 2 ? 2 : props.data.length === 1 ? 1 : 1,
        arrows: true,
      },
      1060: {
        perPage: 1,
        arrows: true,
      },
    },
  };
  if (props.data.length === 0)
    return <h5 className="text-center">No similar mentors found!</h5>;
  return (
    <section className="bg-[#d9d9d9] mt-16 py-6 extendBeyondLayout">
      <h4 className="text-center mb-8">
        We think these mentors are a good match for you.
      </h4>
      <Splide
        aria-label="My Favorite Images"
        options={Options}
        className="carousel px-0"
        id="similarMentorsSplideComponent"
      >
        {props.data.map((mentor, i) => {
          return (
            <SplideSlide className="slide px-8 md:px-0" key={i}>
              <div className="grid grid-cols-[40%_1fr] gap-4 h-[14.6875rem] p-6 bg-light rounded-[20px]">
                <Image
                  src={Hiba}
                  height="100%"
                  objectFit="cover"
                  alt="mentor profile picture"
                  className="rounded-[20px]"
                />
                <div className="grid grid-rows-[auto_auto_auto_1fr_26px_26px] gap-2">
                  <div className="truncate">
                    <h6 className="font-semibold mx-1 text-ellipsis overflow-hidden">
                      {mentor.mentorName}
                    </h6>
                  </div>
                  <div className="truncate">
                    <p className="font-medium mx-1 text-ellipsis overflow-hidden">
                      {mentor.location}
                    </p>
                  </div>
                  <p className="font-medium mx-1 text-ellipsis overflow-hidden">
                    {mentor.mentorPosition}
                  </p>
                  <br />
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
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
