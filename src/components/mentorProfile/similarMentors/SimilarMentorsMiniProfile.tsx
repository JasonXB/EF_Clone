import Avatar from '../../avatar/avatar';
import { useGlobalContext } from '../../../../state-management/ReactContext/Context';

interface MentorsInfoProps {
  name: string;
  location: string;
  job: string;
  tags: string[];
  avatar: any;
  compatibilityPercent: number;
}

const SimilarMentorsMiniProfile = ({ ...mentorsInfo }: MentorsInfoProps) => {
  const { selectedSimilarMentor, selectSimilarMentor } = useGlobalContext();

  const { name, location, job, tags, compatibilityPercent, avatar } =
    mentorsInfo;

  return (
    <div
      className="flex p-6 shadow-md cursor-pointer min-h-[100%] rounded-xl"
      style={{
        border:
          name === selectedSimilarMentor?.name
            ? '2px solid #CE1982'
            : '1px  #B9C0D3',
      }}
    >
      <Avatar imgLocation={avatar} displaySize="medium" personsName={name} />
      <div className="flex flex-col justify-center w-full ml-4">
        <h2 className="mb-2 text-sm font-bold">{name}</h2>
        <h4 className="mb-2 text-xs font-light">{location}</h4>
        <h4 className="mb-2 text-xs font-light">{job}</h4>

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
