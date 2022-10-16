// Until the first line.

import Avatar from '../avatar/avatar';
import { MentorProfileTopProps } from '../../interface/mentor-profile-top-props.interface';
import Button from '../buttons/reusable-buttons';
import { locationIcon } from './ProfileIcons';
import { clockIcon } from './ProfileIcons';
import { v4 as uuidv4 } from 'uuid';
import PercentageBar from '../percentBar/percent-bar';


interface PercentBarsProps {
  percentBarSkills: Array<{
  name: string;
  percentage: number
}> }

const MentorProfilePercentBars = ({
  percentBarSkills
}: PercentBarsProps) => {
  return (
    <>
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
    </>
  );
};

export default MentorProfilePercentBars;
