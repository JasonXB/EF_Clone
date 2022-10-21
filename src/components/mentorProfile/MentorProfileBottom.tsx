import BubbleTags from '../BubbleTags';
import { BUBBLE_TAG_TYPE_CLASSES } from '../BubbleTag';
import { MentorProfileBottomProps } from './mentor-profile-bottom-props.interface';

const MentorProfileBottom = ({
  name,
  availability,
  skills,
  about,
}: MentorProfileBottomProps) => {
  return (
    <>
      {/* Addition skill bubble tags, about, availability */}
        {/* Map each skill */}
        <span className="flex flex-row justify-start mb-10 ">
          <BubbleTags
            tags={skills}
            bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryLight}
          />
        </span>
        {/* About */}
        <h2 className="mb-5 text-2xl">About {name}</h2>
        <p className="mb-14 text-md">{about}</p>
        {/* Availability */}
        <h2 className="mb-5 text-2xl">{`${name}'s Availability`}</h2>
        <p className="mb-10 text-md">{availability}</p>
    </>
  );
};

export default MentorProfileBottom;
