import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { placeholderDataForRequest } from './tempData';

import MentorshipRequestCard from './mentorship-request-card';

class ResponsiveSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="mx-auto max-w-[1000px]">
        {/* arrows invisible, need to fix */}
        <Slider {...settings}>
          {placeholderDataForRequest.map((each, i) => (
            <MentorshipRequestCard
              key={i}
              props={each}
              numberOfRequests={placeholderDataForRequest?.length}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

const DisplayMentorShipContainer = () => (
  <>
    <h1 className="py-4 text-4xl text-center md:text-5xl text-primary-1">
      Mentorship Requests
    </h1>

    {/* logic if there are no requests */}
    {placeholderDataForRequest?.length === 0 ? (
      <div className="w-1/2 mx-auto mt-[10%]">
        <p className="font-bold text-center text-smoke-2">
          No new mentorship requests <br /> Check back later.
        </p>
      </div>
    ) : placeholderDataForRequest?.length == 1 ? (
      // display if there is 1
      <div className="flex flex-col md:flex-row sm:max-w-[800px] sm:mx-auto">
        {placeholderDataForRequest?.map((each, i) => (
          <MentorshipRequestCard
            key={i}
            props={each}
            numberOfRequests={placeholderDataForRequest.length}
          />
        ))}
      </div>
    ) : (
      // display as carousel only if 3 or more
      <ResponsiveSlider />
    )}
  </>
);

export default DisplayMentorShipContainer;
