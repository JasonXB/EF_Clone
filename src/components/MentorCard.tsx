import BubbleTags from './BubbleTags';
import Avatar from './avatar/avatar';
import tempImage from './assets/cat.jpeg';
import { BUBBLE_TAG_TYPE_CLASSES } from './BubbleTag';
import styles from '../../styles/MentorCard.module.css';
import PercentageBar from './percentBar/percent-bar';
import Button from './buttons/reusable-buttons';
import Link from 'next/link';

interface MentorsInfoProps {
  id: number;
  firstName: string;
  fullName: string;
  location: string;
  job: string;
  aboutMentor: string;
  tags: string[]; 
  skills: [string, number][];
}

const MentorCard = ({ ...mentorsInfo }: MentorsInfoProps) => {
  const { id, firstName, fullName, location, job, tags, skills, aboutMentor } =
    mentorsInfo;

  return (
    <div className={`${styles.mentorCard} flex`}>
      <div
        className={`${styles.avatarAndButtonContainer} h-full flex flex-col justify-between items-center`}
      >
        <div className={styles.avatarContainer}>
          <Avatar
            imgLocation={tempImage}
            displaySize="medium"
            personsName={fullName}
          />
        </div>

        {/* Put in link to mentor page when available */}

        <Link href="">
          <Button className={styles.profileButton} variant="secondary">
            View Profile
          </Button>
        </Link>
      </div>

      <div className={`${styles.infoContainer} font-mainFont pl-3`}>
        <h2 className={styles.name}>{fullName}</h2>
        <div className=" h-full flex w-full">
          <div>
            <h4 className={styles.locationJob}>{location}</h4>
            <h4 className={`${styles.locationJob} pb-3`}>{job}</h4>
            <BubbleTags tags={tags} bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryLight} />
            <h4 className={`${styles.aboutMentorTitle} pt-3`}>About {firstName}</h4>
            <div className={styles.aboutMentorInfo}>{aboutMentor}</div>
          </div>

          <div className={styles.skillsContainer}>
            {skills.slice(0,2).map((skill: [string, number], i) => (
              <div className={styles.skill} key={i}>
                <div className={`${styles.skillTitle}`}>{skill[0]}</div>
                <PercentageBar
                  percentage={skill[1]}
                  color="pink"
                  showPercentageText={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
