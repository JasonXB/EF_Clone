import MentorProfilePercentBars from './MentorProfilePercentBars';
import BubbleTags from '../BubbleTags';
import { BUBBLE_TAG_TYPE_CLASSES } from '../BubbleTag';
import { dummySimilarMentorProfiles } from './dummySimilarMentorProfiles';
import Button from '../buttons/reusable-buttons';

// Temporarily displaying dummyMentor data
const {
  name,
  title,
  avatar,
  socialMediaIcons,
  location,
  responseTime,
  skills,
  percentBarSkills,
  about,
  availability,
} = dummySimilarMentorProfiles[0];

const SimilarMentors = ({}) => {
  return (
    <>
      {/* Top part */}
      <h1 className="mb-10 text-3xl font-bold text-primary-1 xl:mb-5">
        Simliar mentors
      </h1>
      
      {/* Bottom part */}
      {/* Left - Name, location, details etc */}
      <div className="flex items-center justify-center px-8 mt-10 border-2 border-gray-300 shadow rounded-xl">
        <div className="flex flex-col w-1/2">
          {/* Name */}
          <h1 className="mb-6 text-4xl font-semibold text-black xl:text-3xl lg:mb-2 xl:mb-2">
            {name}
          </h1>
          <h2 className="flex mt-0 text-lg">
            {/* Location icon and location*/}
            {/* {locationIcon} */}
            {location}
          </h2>
          {/* Title */}
          <h2 className="mb-2 text-lg">{title}</h2>
          <span className="flex flex-row justify-start mb-10 ">
            <BubbleTags
              tags={skills}
              bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryLight}
            />
          </span>

          {/* Availability */}
          <p className="mb-0 text-lg">Availabile: </p>
          <p className="mb-5">{availability}</p>

          {/* About */}
          <p className="mb-0 text-lg">About: </p>
          <p className="mb-5">{about}</p>
          <div className="flex mb-10">
            <Button>View Profile</Button>
          </div>
        </div>
        
        {/* Right - Percent bars */}
        <span className="flex flex-col justify-start mb-10 ">
          <MentorProfilePercentBars percentBarSkills={percentBarSkills} />
        </span>
      </div>
    </>
  );
};

export default SimilarMentors;
