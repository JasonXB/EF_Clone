import { Splide, SplideSlide } from '@splidejs/react-splide';
// Docs for splide https://splidejs.com/
import '@splidejs/react-splide/css';
import { placeholderDataForRequest } from '../tempData/temp-data-mentor';

import MentorshipRequestCard from './mentorship-request-card';

//need to fix arrows adjustment and progress dots
const ResponsiveSlider = () => {
  const Options = {
    perPage: 3,
    // padding: { left: '3rem', right: '3rem' },
    lazyLoad: true,

    breakpoints: {
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  };
  return (
    <div className="mx-auto max-w-[1200px]">
      <Splide options={Options} aria-label="" tag="section">
        {placeholderDataForRequest.map((each, i) => (
          <SplideSlide key={i}>
            <MentorshipRequestCard
              key={i}
              props={each}
              numberOfRequests={placeholderDataForRequest?.length}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
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
    ) : placeholderDataForRequest?.length < 3 ? (
      // display if there is 1-2
      <div className="flex flex-col md:flex-row sm:max-w-[900px] sm:mx-auto">
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
