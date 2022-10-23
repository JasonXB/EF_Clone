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
    padding: { left: '3rem', right: '3rem' },
    lazyLoad: true,
    arrows: true,
    breakpoints: {
      1024: {
        perPage: 2,
        arrows: true,
      },
      767: {
        perPage: 1,
        arrows: true,
      },
    },
  };

  const comp = (
    <SplideSlide className="slide">
      <div className="grid grid-cols-[35%_65%] h-[14.6875rem] p-6 bg-emerald-200">
        <Image src={Hiba} width="100%" height="100%" alt="" />
        <span>ddd</span>
      </div>
    </SplideSlide>
  );
  return (
    <Splide aria-label="My Favorite Images" options={Options}>
      {comp}
      {comp}
      {comp}
      {comp}
      {comp}
      {comp}
    </Splide>
  );
}
