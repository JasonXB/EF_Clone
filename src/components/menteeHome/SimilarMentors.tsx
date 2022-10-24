import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import Hiba from '../../../public/assets/hiba.png';
import '@splidejs/react-splide/css';

export default function SimilarMentors() {
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
      <div className="grid grid-cols-[40%_1fr] h-[14.6875rem] p-6 bg-emerald-200 rounded-[20px]">
        <Image
          src={Hiba}
          height="100%"
          objectFit="cover"
          alt=""
          className="rounded-[20px]"
        />
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
