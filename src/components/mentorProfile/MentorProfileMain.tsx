import MentorProfileTop from './MentorProfileTop';
import MentorProfileBottom from './MentorProfileBottom';
import Line from './Line';
import MentorProfilePercentBars from './MentorProfilePercentBars';
import Mentor from '../../interface/mentor.interface';
import SimilarMentors from './similarMentors/SimilarMentors';
import { id } from 'date-fns/locale';

interface MentorProfileProps {
  mentor: Mentor;
}
const MentorProfileMain = ({ mentor }: MentorProfileProps) => {
  const {
    id,
    first_name,
    last_name,
    location,
    job,
    bio,
    profile_path,
    skills,
    tags,
  } = mentor;
  const full_name = `${first_name} ${last_name}`;
  const percentBarSkills = skills.map((skill) => {
    return {
      name: skill[0],
      percentage: skill[1],
    };
  });
  return (
    <>
      <div className="grid w-auto grid-cols-1 m-0 mt-10 md:grid-cols-10">
        <div className="flex col-span-7">
          <div className="flex flex-col items-center lg:items-stretch xl:items-stretch">
            {/* Top-left section  */}
            <MentorProfileTop
              id={id}
              name={full_name}
              title={job}
              location={location}
              // placeholder: replace with real dynamic data when backend is ready
              responseTime={'Responds in a day'}
              avatar={profile_path}
            />

            {/* Line */}
            <Line />

            {/* Bottom section */}
            <MentorProfileBottom
              name={full_name}
              about={bio}
              skills={tags}
              availability={'Available Monday - Friday afternoons'}
            />

            {/* 2nd Line */}
            <Line />
          </div>
        </div>

        {/* Top-right side - Secondary skills Percent bars */}
        <MentorProfilePercentBars skills={percentBarSkills} />
      </div>

      {/* Similar Mentors Component */}
      <div className="mt-20 w-[100%] md:mt-0">
        <SimilarMentors />
      </div>
    </>
  );
};

export default MentorProfileMain;
