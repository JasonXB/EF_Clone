import MentorProfilePercentBars from './../MentorProfilePercentBars';
import BubbleTags from '../../BubbleTags';
import { BUBBLE_TAG_TYPE_CLASSES } from '../../BubbleTag';
import { dummySimilarMentorProfiles } from './dummySimilarMentorProfiles';
import Button from '../../buttons/reusable-buttons';
import SimilarMentorsCarousel from './SimilarMentorsCarousel';
import { useGlobalContext } from '../../../../state-management/ReactContext/Context';

const SimilarMentors = ({}) => {
  const { selectedSimilarMentor, selectSimilarMentor } = useGlobalContext();

  // Temporarily displaying dummySimilarMentor data

  return (
    <div className="px-0 mb-10 md:pl-20">
      {/* Top part */}
      <h1 className="mb-10 text-3xl font-bold text-primary-1 xl:mb-5">
        Similar mentors
      </h1>
      {/* Carousel */}
      <SimilarMentorsCarousel data={dummySimilarMentorProfiles} />

      {/* Bottom part */}

      {/* Close button */}
      <div className={selectedSimilarMentor ? 'relative mb-10' : 'hidden'}>
        <Button
          className="absolute top-10 right-5 lg:right-10 lg:top-16"
          clickHandler={() => selectSimilarMentor(null)}
          variant="iconOnly"
        >
          X
        </Button>{' '}
      </div>
      {/* Left - Name, location, details etc */}
      <div className="flex flex-col items-center px-2 mt-10 border-2 border-gray-300 shadow md:px-12 sm:flex-row rounded-xl">
        {selectedSimilarMentor?.name && (
          <div className="flex flex-col px-2 mb-0 md:mb-20 md:w-2/3">
            {/* Name */}
            <h1 className="mt-5 mb-4 text-2xl font-semibold text-black xl:text-3xl lg:mb-2 xl:mb-2">
              {selectedSimilarMentor.name}
            </h1>
            <p className="flex mt-0 text-md md:text-lg">
              {/* Location*/}
              {selectedSimilarMentor.location}
            </p>
            {/* Title */}
            <p className="mb-6 text-md md:text-lg">
              {selectedSimilarMentor.job}
            </p>
            <span className="flex flex-row justify-center mb-10 sm:justify-start ">
              <BubbleTags
                tags={selectedSimilarMentor.skills}
                bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryLight}
              />
            </span>

            {/* Availability */}
            <p className="mb-0 text-md md:text-lg">Availabile: </p>
            <p className="mb-5 text-md md:text-lg">
              {selectedSimilarMentor.availability}
            </p>

            {/* About */}
            <p className="mb-0 text-md md:text-lg">About: </p>
            <p className="mb-8 text-md md:text-lg">
              {selectedSimilarMentor.about}
            </p>
            <div className="flex justify-center mb-10 md:mb-0">
              {/* When mentor profiles are fed by dynamic data, this button
            will link to the clicked mentor's profile page */}
              <Button
                variant="secondary"
                clickHandler={() =>
                  console.log('This will link to clicked mentor profile')
                }
              >
                View Profile
              </Button>
            </div>
          </div>
        )}
        {/* If selectedSimilarMentor is null, render this */}
        {!selectedSimilarMentor && (
          <div className="w-full text-center">
            <h6>Select a mentor from above</h6>
          </div>
        )}

        {/* If selectedSimilarMentor, render this */}
        {selectedSimilarMentor && (
          <div className="">
            {/* Right - Percent bars */}
            <div className="flex justify-start mb-10 sm:mb-0">
              <MentorProfilePercentBars
                percentBarSkills={selectedSimilarMentor?.percentBarSkills!}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimilarMentors;
