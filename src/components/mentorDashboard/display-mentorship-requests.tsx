import {
  Splide,
  SplideSlide,
  Options as SplideOptions,
} from '@splidejs/react-splide';
// Docs for splide https://splidejs.com/
import '@splidejs/react-splide/css';
import MentorshipRequest from '../../interface/mentorship-request';
import MentorshipRequestCard from './mentorship-request-card';

interface ResponsiveSliderProps {
  filteredMentorshipRequests: MentorshipRequest[];
  setMentorshipRequests: React.Dispatch<
    React.SetStateAction<MentorshipRequest[]>
  >;
}

//need to fix arrows adjustment and progress dots
const ResponsiveSlider = ({
  filteredMentorshipRequests,
  setMentorshipRequests,
}: ResponsiveSliderProps) => {
  const Options: SplideOptions = {
    perPage: 3,
    gap: '2em',
    pagination: false,
    // padding: { left: '3rem', right: '3rem' },
    lazyLoad: true,
    arrows: filteredMentorshipRequests.length > 3,
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

  return (
    <div className="mx-auto max-w-[1200px]">
      <Splide
        options={Options}
        aria-label="show case mentorship requests"
        tag="section"
        id="mentorRequestSplideComponent"
      >
        {filteredMentorshipRequests.map((request) => (
          <SplideSlide key={request._id}>
            <MentorshipRequestCard
              mentorshipRequest={request}
              setMentorshipRequests={setMentorshipRequests}
              numberOfRequests={filteredMentorshipRequests.length}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

interface DisplayMentorShipContainerProps {
  mentorshipRequests: MentorshipRequest[];
  setMentorshipRequests: React.Dispatch<
    React.SetStateAction<MentorshipRequest[]>
  >;
}

const DisplayMentorShipContainer = ({
  mentorshipRequests,
  setMentorshipRequests,
}: DisplayMentorShipContainerProps) => {
  const filteredMentorshipRequests = mentorshipRequests.filter(
    (request) =>
      request.status !== 'Request Accepted' &&
      request.status !== 'Request Rejected'
  );
  return (
    <>
      <h1 className="py-4 text-4xl text-center md:text-5xl text-primary-1">
        Mentorship Requests
      </h1>

      {/* logic if there are no requests */}
      {filteredMentorshipRequests.length === 0 ? (
        <div className="w-1/2 mx-auto mt-[10%]">
          <p className="font-bold text-center text-hue-700">
            No new mentorship requests <br /> Check back later.
          </p>
        </div>
      ) : filteredMentorshipRequests.length < 3 ? (
        // display if there is 1-2
        <div className="flex flex-col md:flex-row sm:max-w-[900px] sm:mx-auto">
          {filteredMentorshipRequests.map((request) => (
            <MentorshipRequestCard
              key={request._id}
              mentorshipRequest={request}
              setMentorshipRequests={setMentorshipRequests}
              numberOfRequests={filteredMentorshipRequests.length}
            />
          ))}
        </div>
      ) : (
        // display as carousel only if 3 or more
        <ResponsiveSlider
          filteredMentorshipRequests={filteredMentorshipRequests}
          setMentorshipRequests={setMentorshipRequests}
        />
      )}
    </>
  );
};

export default DisplayMentorShipContainer;
