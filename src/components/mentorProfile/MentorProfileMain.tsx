import MentorProfileTop from './MentorProfileTop';
import MentorProfileBottom from './MentorProfileBottom';
import Line from './Line';
import MentorProfilePercentBars from './MentorProfilePercentBars';

import { dummyMentorProfiles } from './dummyMentorProfiles';

// Temporarily displaying dummyMentor data
const {
  name,
  title,
  avatar,
  socialMediaIcons,
  location,
  responseTime,
  skills,
  about,
  percentBarSkills,
  availability,
} = dummyMentorProfiles[0];

const MentorProfileMain = ({}) => {
  return (
    <>
      <div className="grid w-auto grid-cols-1 m-0 mt-10 xl:grid-cols-10">
        <div className="flex col-span-7">
          <div className="flex flex-col items-center xl:items-stretch">
            {/* Top-left section  */}
            <MentorProfileTop
              name={name}
              title={title}
              socialMediaIcons={socialMediaIcons}
              location={location}
              responseTime={responseTime}
              avatar={avatar}
            />

            {/* Line */}
            <Line />

            {/* Bottom section */}
            <MentorProfileBottom
              name={name}
              about={about}
              skills={skills}
              availability={availability}
            />

            {/* 2nd Line */}
            <Line />
          </div>
        </div>

        {/* Top-right side - Secondary skills Percent bars */}
        <MentorProfilePercentBars percentBarSkills={percentBarSkills} />
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
