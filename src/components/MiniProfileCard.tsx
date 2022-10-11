import BubbleTags from './BubbleTags';
import Avatar from './avatar/avatar';
import tempImage from '../../src/assets/cat.jpeg';
import { BUBBLE_TAG_TYPE_CLASSES } from './BubbleTag';
import style from '../../styles/MiniProfileCard.module.css';

interface MentorsInfoProps {
  name: string;
  location: string;
  job: string;
  tags?: string[]; //temp optional, remove ? once implemented
  compatibilityPercent?: number; //temp optional, remove ? once implemented
}

const MiniProfileCard = ({ ...mentorsInfo }: MentorsInfoProps) => {
  const { name, location, job } = mentorsInfo;
  const arrTags = ['management', 'design']; //should also be passed in, add to above deconstruction value
  const personsName = 'Bilbo Baggins'; //this should be passed in from mentorsInfo

  return (
    <div className={`${style.miniProfileCard} flex`}>
      <Avatar
        imgLocation={tempImage}
        displaySize="mediumLarge"
        personsName={personsName}
      />
      <div className={`${style.infoContainer} font-mainFont pl-3`}>
        <h2 className={style.name}>{name}</h2>
        <h4 className={style.locationJob}>{location}</h4>
        <h4 className={style.locationJob}>{job}</h4>
        {/* Remove below div when <BubbleTags/> is working, and uncomment <BubbleTags/> */}
        <div className="my-4 h-7">[Bubble Tags]</div>
        {/* <BubbleTags tags={arrTags} bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.blue} /> */}
        <div className={style.compatibility}>
          <h4>Compatibility</h4>
          {/* Remove below div when <PercentBar/> is working, and uncomment <PercentBar/> */}
          <div className="my-4 h-7">[Percent Bar]</div>
          {/* <PercentBar /> */}
        </div>
      </div>
    </div>
  );
};

export default MiniProfileCard;
