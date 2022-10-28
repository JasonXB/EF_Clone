import BubbleTags from './BubbleTags';
import Avatar from './avatar/avatar';
import { BUBBLE_TAG_TYPE_CLASSES } from './BubbleTag';
import style from '../../styles/MiniProfileCard.module.css';
import PercentageBar from './percentBar/percent-bar';

interface MentorsInfoProps {
  name: string;
  location: string;
  job: string;
  tags: string[];
  // Matt - added 'avatar'
  avatar: any;
  compatibilityPercent: number;
}

const MiniProfileCard = ({ ...mentorsInfo }: MentorsInfoProps) => {
  const { name, location, job, tags, compatibilityPercent, avatar } = mentorsInfo;

  return (
    <div className={`${style.miniProfileCard} flex`}>
      <Avatar
        imgLocation={avatar}
        displaySize="small"
        personsName={name}
      />
      <div className={`${style.infoContainer} font-mainFont pl-3`}>
        <h2 className={style.name}>{name}</h2>
        <h4 className={style.locationJob}>{location}</h4>
        <h4 className={style.locationJob}>{job}</h4>

        <BubbleTags
          tags={tags}
          bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryShaded}
        />
        <div className={style.compatibility}>
          <h4 className={`${style.compatibility} pb-1`}>Compatibility</h4>
          <PercentageBar
            percentage={compatibilityPercent}
            color="blue"
            showPercentageText={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniProfileCard;
