import MentorProfilePercentBars from './../MentorProfilePercentBars';
import BubbleTags from '../../BubbleTags';
import { BUBBLE_TAG_TYPE_CLASSES } from '../../BubbleTag';
import { dummySimilarMentorProfiles } from './dummySimilarMentorProfiles';
import Button from '../../buttons/reusable-buttons';
import SimilarMentorsCarousel from './SimilarMentorsCarousel'
import { useState } from 'react'
import { useGlobalContext } from '../../../../state-management/ReactContext/Context';



const SimilarMentors = ({}) => {

  const { selectedSimilarMentor } = useGlobalContext();

// Temporarily displaying dummySimilarMentor data
const {
  name,
  job,
  avatar,
  location,
  skills,
  percentBarSkills,
  about,
  availability,
  selected }
= selectedSimilarMentor


  return (
    
    <div className='px-20 '>
       {/* Top part */}
          <h1 className="mb-10 text-3xl font-bold text-primary-1 xl:mb-5">
        Similar mentors
      </h1>
      {/* Carousel */}
    <SimilarMentorsCarousel data={dummySimilarMentorProfiles}/>
     
      {/* Bottom part */}
      {/* Left - Name, location, details etc */}
      <div className="flex items-center px-12 mt-10 border-2 border-gray-300 shadow rounded-xl">
        <div className="flex flex-col w-2/3">
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
          <h2 className="mb-2 text-lg">{job}</h2>
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
          <p className="mb-8">{about}</p>
          <div className="flex justify-center mb-10">
            <Button variant='secondary'>View Profile</Button>
          </div>
        </div>
        
        {/* Right - Percent bars */}
        <div className="flex justify-start mb-10 ">
          <MentorProfilePercentBars percentBarSkills={percentBarSkills!} />
       
        </div>
        <span className="mb-10 bg-dark">
        <Button className='relative inset-0 ' variant="iconOnly">X</Button>        </span>

      </div>
      </div>
  );
};

export default SimilarMentors;
