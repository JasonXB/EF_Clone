import { v4 as uuidv4 } from 'uuid';
import PercentageBar from '../percentBar/percent-bar';


interface PercentBarsProps {
  percentBarSkills: Array<{
  name: string;
  percentage: number,
}> }

const MentorProfilePercentBars = ({
  percentBarSkills
}: PercentBarsProps) => {
  return (
    <>
   <div className="flex justify-center ml-0 md:mt-20 lg:justify-start xl:justify-start md:ml-10 lg:mt-20 xl:mt-20 lg:ml-20 xl:ml-20">
          <div className="col-span-3 ">
            {/* Map each skill title and corresponding percent bar */}
            <div className="flex flex-col items-center px-3 py-5 border-2 rounded-lg shadow-xl xs:ml-5 border-smoke-4">
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
