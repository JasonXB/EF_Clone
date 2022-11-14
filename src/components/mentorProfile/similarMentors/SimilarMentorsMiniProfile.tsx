import Avatar from '../../avatar/avatar';
import { useSimilarMentorsContext } from '../../../../state-management/ReactContext/SimilarMentorsContext';

interface MentorsInfoProps {
  name: string;
  location: string;
  job: string;
  tags: string[];
  avatar: any;
  // not using cP for the time being
  // compatibilityPercent: number;
}

const SimilarMentorsMiniProfile = ({ ...mentorsInfo }: MentorsInfoProps) => {
  const { selectedSimilarMentor, selectSimilarMentor } =
    useSimilarMentorsContext();

  const { name, location, job, tags, avatar } = mentorsInfo;

  return (
    <div
      className={`flex p-6 shadow-md cursor-pointer w-[100%] min-h-[100%] rounded-xl ${
        name === selectedSimilarMentor?.name
          ? 'border-2 border-secondary-1'
          : 'border-[1px] border-smoke-3'
      }`}
    >
      <Avatar imgLocation={avatar} displaySize="medium" personsName={name} />
      <div className="flex flex-col justify-center w-full ml-4">
        <h2 className="mb-2 text-lg font-bold">{name}</h2>
        <h4 className="mb-2 text-base font-light">{location}</h4>
        <h4 className="mb-2 text-base font-light">{job}</h4>

        {/* I don't believe this is being used anymore, but am leaving
       it here just in case */}

        {/* <h4 className=''>Compatibility</h4>
          <PercentageBar
            percentage={compatibilityPercent}
            color="blue"
            showPercentageText={true}
          /> */}
      </div>
    </div>
  );
};

export default SimilarMentorsMiniProfile;
