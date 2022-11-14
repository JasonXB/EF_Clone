import BubbleTags from './BubbleTags';
import Avatar from './avatar/avatar';
import { BUBBLE_TAG_TYPE_CLASSES } from './BubbleTag';
import PercentageBar from './percentBar/percent-bar';
import Button from './buttons/reusable-buttons';
import { useRouter } from 'next/router';
import { Mentor } from '../interface/mentor.interface';

interface MentorsCardProps {
  mentor: Mentor;
}

export default function MentorCard({ mentor }: MentorsCardProps) {
  const {
    id,
    first_name,
    last_name,
    profile_path,
    location,
    job,
    tags,
    skills,
    bio,
  } = mentor;

  const router = useRouter();

  return (
    <div className="w-[550px] md:w-[850px] md:h-[264px] lg:w-[1011px] p-[28px] bg-white shadow-branded-2 rounded-[38px] flex">
      <div className="md:h-[218px] w-[180px] flex flex-col justify-start md:justify-between items-center">
        <div className="h-[150px] w-[140px] overflow-hidden">
          <Avatar
            imgLocation={profile_path}
            displaySize="medium"
            personsName={`${first_name} ${last_name}`}
          />
        </div>

        <Button
          className="mt-[25px] md:m-1  text-[14px]"
          variant="secondary"
          clickHandler={() => {
            router.push(`/mentor/${id}`); // Wrapping button in next/link does not work
          }}
        >
          View Profile
        </Button>
      </div>

      <div className="md:h-[180px] w-full font-mainFont pl-3">
        <h2 className="font-bold leading-[25px] text-[25px] mb-[2px] ">
          {`${first_name} ${last_name}`}
        </h2>
        <div className="flex flex-col items-start justify-start w-full h-full md:flex-row">
          <div>
            <h4 className="font-bold text-[17px] leading-[25px]">{location}</h4>
            <h4 className="font-bold text-[17px] leading-[25px] pb-3">{job}</h4>
            <BubbleTags
              tags={tags}
              bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryLight}
            />
            <h4 className="text-lg leading-[22px] font-[600] pt-3">
              About {first_name}
            </h4>
            <div className="text-xs leading-4 pt-[6px] overflow-hidden h-14 w-[300px] lg:w-[405px]">
              {bio}
            </div>
          </div>

          <div className="flex flex-col justify-end w-full h-full gap-5 pb-4 items-left md:pb-0 md:items-center">
            {skills.slice(0, 2).map((skill, i) => (
              <div key={i}>
                <div className="text-xl leading-6 mb-[18px]">{skill[0]}</div>
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
}
