import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import Hiba from '../../../public/assets/hiba.png';
import BubbleTag from '../BubbleTag';
import { BUBBLE_TAG_TYPE_CLASSES } from '../BubbleTag';
import { MockData } from '../../interface/mentee/homepage';
// import '@splidejs/react-splide/css';

export default function SimilarMentors(props: {
  data: MockData['similarMentors'];
}) {
  // Configured options so carousel looks good on all screen sizes, despite how many similar mentors are found
  // Ex. On large screens, we can hold 3 carousel items per slide
  // If we only get 1 similar mentor match, then the carousel will change its look to keep that 1 mentor centered
  const Options = {
    perPage:
      props.data.length >= 3 
        ? 3 
        : props.data.length, //  prettier-ignore
    gap: 0,
    // padding: 20,
    pagination: false,
    // padding: { left: '3rem', right: '3rem' },
    lazyLoad: true,
    arrows: props.data.length > 3, // only show arrows when we have over 3 similar mentors
    // width: '90%',
    width: props.data.length === 1 ? '48rem' : '90%', // max width of carousel item
    breakpoints: {
      1700: {
        perPage: props.data.length >= 2 ? 3 : 1,
        arrows: props.data.length > 2, // only show arrows when we have over 2 similar mentors
      },
      1200: {
        perPage: 1,
        arrows: props.data.length > 1, // only show arrows when we have over 1 similar mentor
      },
    },
  };
  if (props.data.length === 0)
    return (
      <h5 className="mb-20 text-center mt-28">No similar mentors found!</h5>
    );

  return (
    <section className="relative bg-[#e4e4e4] w-11/12 mt-16 py-6 bg-blue-500">
      <h4 className="my-8 text-center">
        We think these mentors are a good match for you.
      </h4>
      <Splide
        aria-label="My Favorite Images"
        options={Options}
        className="carousel bg-pink-500 mx-auto"
        id="similarMentorsSplideComponent"
      >
        {props.data.map((mentor, i) => {
          return (
            <SplideSlide
              className="slide"
              key={i}
            >
              <div className="flex w-90 gap-2 shadow-branded-1 mb-8 p-4 bg-light rounded-3xl">
                <div className="flex-2 overflow-hidden flex items-center w-32 h-40 rounded-3xl">
                  <Image
                    src={Hiba}
                    // height={40}
                    objectFit="cover"
                    alt="mentor profile picture"
                    className="rounded-3xl max-w-[200px]"
                  />
                </div>
                <div className="flex-3 flex flex-col gap-2 justify-center bg-red-200">
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
                  <div className="flex flex-wrap gap-2 bg-red-100">
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
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
