import React, { useState } from 'react';
import { MockData } from '../../interface/mentee/homepage';
import Carousel from '../carousel/Carousel';

export default function SimilarMentors(props: {
  data: MockData['similarMentors'];
}) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderLocation, setSliderLocation] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
    setSliderLocation(sliderLocation + 21.5);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
    setSliderLocation(sliderLocation - 21.5);
  };

  if (props.data.length === 0)
    return (
      <h5 className="mb-20 text-center mt-28">No similar mentors found!</h5>
    );

  return (
    <section className="relative bg-[#e4e4e4] w-full my-16 py-6">
      <p className="text-center font-medium text-primary-1 text-lg sm:text-2xl lg:text-3xl">
        We think these mentors are a good match for you.
      </p>

      <div className="relative py-8 px-2 overflow-hidden">
        <div
          className={`relative w-[21.5rem] lg:w-[65rem] mx-auto flex justify-start items-center gap-3 pl-2 overflow-hidden`}
        >
          {props.data.map((mentor, i) => (
            <Carousel
              key={`mentor-${i}`}
              mentor={mentor}
              sliderLocation={sliderLocation}
            />
          ))}
        </div>

        {/* Carousel buttons */}
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/50 transition-colors duration-150 ease rounded-full flex justify-center items-center pl-1 ${
            currentSlide === 0
              ? 'pointer-events-none bg-black/20'
              : 'cursor-pointer hover:bg-white/80'
          }`}
          onClick={prevSlide}
        >
          <div className="w-3 h-3 border-black border-b-2 border-l-2 rotate-45"></div>
        </div>
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/50 transition-colors duration-150 ease rounded-full flex justify-center items-center pr-1 ${
            currentSlide === props.data.length - 1
              ? 'pointer-events-none bg-black/20'
              : 'cursor-pointer hover:bg-white/80'
          }`}
          onClick={nextSlide}
        >
          <div className="w-3 h-3 border-black border-t-2 border-r-2 rotate-45"></div>
        </div>
      </div>
    </section>
  );
}
