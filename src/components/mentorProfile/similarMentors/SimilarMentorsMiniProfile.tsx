import BubbleTags from '../../BubbleTags';
import Avatar from '../../avatar/avatar';
import { BUBBLE_TAG_TYPE_CLASSES } from '../../BubbleTag';
import PercentageBar from '../../percentBar/percent-bar';

interface MentorsInfoProps {
  name: string;
  location: string;
  job: string;
  tags: string[];
  // Matt - added 'avatar'
  avatar: any;
  compatibilityPercent: number;
}



const SimilarMentorsMiniProfile = (
  { ...mentorsInfo }: MentorsInfoProps, 

  // selected: {}
  ) => {
  const { name, location, job, tags, compatibilityPercent, avatar } = mentorsInfo;

  return (
    <div className='flex p-6 border shadow-xl rounded-xl'>
      <Avatar
        imgLocation={avatar}
        displaySize='medium'
        personsName={name}
      />
      <div className='flex flex-col justify-center w-full ml-4'>
        <h2 className='mb-2 text-sm font-bold'>{name}</h2>
        <h4 className='mb-2 text-xs font-light'>{location}</h4>
        <h4 className='mb-2 text-xs font-light'>{job}</h4>
       
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
