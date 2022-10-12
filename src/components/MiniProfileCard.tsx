import BubbleTags from './BubbleTags';
import Avatar from './avatar/avatar';
import tempImage from './assets/cat.jpeg';
import { BUBBLE_TAG_TYPE_CLASSES } from './BubbleTag';
import style from '../../styles/MiniProfileCard.module.css';
import PercentageBar from './percentBar/percent-bar'

interface MentorsInfoProps {
  name: string;
  location: string;
  job: string;
  tags?: string[]; //temp optional, remove ? once implemented
  compatibilityPercent: number;
}

const MiniProfileCard = ({ ...mentorsInfo }: MentorsInfoProps) => {
  const { name, location, job, tags, compatibilityPercent } = mentorsInfo;

  return (
    <div className={`${style.miniProfileCard} flex`}>
      <Avatar
        imgLocation={tempImage}
        displaySize="mediumLarge"
        personsName={name}
      />
      <div className={`${style.infoContainer} font-mainFont pl-3`}>
        <h2 className={style.name}>{name}</h2>
        <h4 className={style.locationJob}>{location}</h4>
        <h4 className={style.locationJob}>{job}</h4>
        {/* Remove below div when <BubbleTags/> is working, and uncomment <BubbleTags/> */}
        <div className="my-4 h-7">[Bubble Tags]</div>
        {/* <BubbleTags tags={tags} bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.blue} /> */}
        <div className={style.compatibility}>
          <h4 className={`${style.compatibility} pb-1`}>Compatibility</h4>
          <PercentageBar percentage={compatibilityPercent} color="blue" showPercentageText={true}/>
        </div>
      </div>
    </div>
  );
};

export default MiniProfileCard;
