import Avatar from '../avatar/avatar';
import { MentorProfileProps } from '../../interface/mentor-profile-props.interface';
import Button from '../buttons/reusable-buttons';
import PercentageBar from '../percentBar/percent-bar';
import BubbleTags from '../BubbleTags';
import { BUBBLE_TAG_TYPE_CLASSES } from '../BubbleTag';
import { locationIcon } from './ProfileIcons';
import { clockIcon } from './ProfileIcons';
import { v4 as uuidv4 } from 'uuid';

const MentorProfileMain = ({
  id,
  name,
  title,
  socialMediaIcons,
  percentBarSkills,
  location,
  responseTime,
  skills,
  avatar,
  about,
}: MentorProfileProps) => {
  return (
    <>
      <div className="grid w-auto grid-cols-1 m-0 mt-10 xl:grid-cols-10">
        <div className="flex col-span-7">
          {/* Left side */}
          <div className="flex flex-col items-center xl:items-stretch">
            {/* Left: Avatar and Request button */}
            <div className="flex flex-col lg:flex-row xl:flex-row">
              <div className="flex flex-col items-center w-full lg:items-start xl:items-start xl:w-2/5">
                <Avatar
                  personsName={name}
                  imgLocation={avatar}
                  displaySize="large"
                />
                <Button className="w-2/4 p-2 mt-6 mb-6 xl:ml-10">
                  Request
                </Button>
              </div>
              
              {/* Right: Name, location etc */}
              <div className="w-full px-10 py-10 xl:px-0 xl:w-3/5 h-3/5">
                {/* Mentor name */}
                <h1 className="mb-10 text-5xl font-bold text-black xl:mb-2">
                  {name}
                </h1>
                <h2 className="mb-2 text-lg">{title}</h2>
                {/* Map each social media icon */}
                <div className="flex mb-10">
                  {socialMediaIcons.map((icon) => {
                    return (
                      <a href={icon.url} className="mr-6" key={uuidv4()} target="_blank" rel="noreferrer">
                        {icon.svg}
                      </a>
                    );
                  })}
                </div>
                
                {/* Location and Response Time */}
                <h2 className="flex mt-5 text-lg">
                  {/* Location icon and location*/}
                  {locationIcon}
                  {location}
                </h2>
                {/* Clock icon and response time*/}
                <h2 className="flex text-lg">
                  {clockIcon}
                  {responseTime}
                </h2>
              </div>
            </div>
            
            {/* Line */}
            <div className="flex justify-center xl:justify-start lg:justify-start">
              <hr className="w-full mb-8 h-[3px] bg-smoke-2" />
            </div>
            
            {/* Addition skill bubble tags, about, availability */}
            <div className="">
              {/* Map each skill */}
              <span className="flex flex-col justify-start mb-10 lg:flex-row xl:flex-row">
                <BubbleTags
                  tags={skills}
                  bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.blue}
                />
              </span>
              {/* About */}
              <h2 className="mb-5 text-2xl">About {name}</h2>
              <p className="mb-14 text-md">{about}</p>
              {/* Availability */}
              <h2 className="mb-5 text-2xl">{`${name}'s Availability`}</h2> 
              <p className="mb-5 text-md">{about}</p>
              
              {/* 2nd Line */}
              <div className="flex justify-center">
                <hr className="w-full mt-10 mb-10 h-[3px] bg-smoke-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Secondary skills Percent bars */}
        <div className="flex mt-0 lg:mt-20 xl:mt-20 lg:ml-20 xl:ml-20">
          <div className="col-span-3 ">
            {/* Map each skill title and corresponding percent bar */}
            <div className="flex flex-col items-center px-3 py-5 border-2 rounded-lg shadow-xl border-smoke-4">
              {percentBarSkills.map((skill) => {
                return (
                  <div key={uuidv4()} className="flex flex-col mb-4">
                    <p className="mb-2 text-lg">{skill.name}</p>
                    <PercentageBar percentage={skill.percentage} color="pink" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Mentors Component */}
      <div>
        <h1 className="flex items-center mt-10 text-4xl">
          Similar Mentors component goes here
        </h1>
      </div>
    </>
  );
};

export default MentorProfileMain;
