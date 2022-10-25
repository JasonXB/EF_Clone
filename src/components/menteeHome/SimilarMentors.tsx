import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import Hiba from '../../../public/assets/hiba.png';
import BubbleTag from '../BubbleTag';
import { BUBBLE_TAG_TYPE_CLASSES } from '../BubbleTag';
import '@splidejs/react-splide/css';

export default function SimilarMentors() {
  //! Make carousel content dynamic
  //! Make carousel look good with 2 or 1 items
  //! Adjust paddings to keep arrows further apart
  const Options = {
    perPage: 3,
    gap: '2rem',
    pagination: false,
    // padding: { left: '3rem', right: '3rem' },
    lazyLoad: true,
    arrows: true,
    breakpoints: {
      1400: {
        perPage: 2,
        arrows: true,
      },
      900: {
        perPage: 1,
        arrows: true,
      },
    },
  };

  const comp = (
    <SplideSlide className="slide px-8 ad:px-0">
      <div className="grid grid-cols-[40%_1fr] gap-4 h-[14.6875rem] p-6 bg-light rounded-[20px]">
        <Image
          src={Hiba}
          height="100%"
          objectFit="cover"
          alt=""
          className="rounded-[20px]"
        />
        <div className="grid grid-rows-[auto_auto_auto_1fr_26px_26px] gap-2">
          <div className="truncate">
            <h6 className="font-semibold mx-1 text-ellipsis overflow-hidden">
              Darra Wittney Aliaga Escobar
            </h6>
          </div>
          <div className="truncate">
            <p className="font-medium mx-1 text-ellipsis overflow-hidden">
              USA
            </p>
          </div>
          <p className="font-medium mx-1 text-ellipsis overflow-hidden">
            Project Manager at CIBC
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
  return (
    <Splide
      aria-label="My Favorite Images"
      options={Options}
      className="carousel px-0"
    >
      {comp}
      {comp}
      {comp}
      {comp}
      {comp}
      {comp}
    </Splide>
  );
}
