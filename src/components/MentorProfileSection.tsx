import { useSearchContext } from '../../context/SearchContext';
import Avatar from './avatar/avatar';
import cat from '../assets/cat.jpeg';
import Button from './buttons/reusuable-buttons';
import { MentorProfileProps } from '../../interface/mentor-profile-props.interface';

const MentorProfileSection = ({
  id,
  name,
  title,
  socialMediaIcons,
  location,
  responseTime,
  skills,
  about,
}: MentorProfileProps) => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-10 ">
        <div className="col-span-7 bg-purple-200">
          {/* With profile pic */}
          {/* Ppic and button */}
          <div className="flex flex-col items-center xl:items-stretch">
            <div className="flex flex-col lg:flex-row xl:flex-row">
              <div className="flex flex-col items-center w-full bg-indigo-200 xl:w-2/5">
                <Avatar
                  personsName={name}
                  imgLocation={cat}
                  displaySize="large"
                />
                <Button className="w-1/3 p-2 mt-6 mb-6 text-xl">
                  Request
                </Button>
              </div>
              {/* Name, country etc */}
              <div className="w-full p-10 bg-indigo-300 xl:w-3/5 h-3/5">
                <h1 className="mb-10 text-5xl font-bold text-black xl:mb-0">
                  {name}
                </h1>
                <h2 className="mb-2 text-lg">{title}</h2>
                <span className="mt-2">{socialMediaIcons}</span>
                <h2 className="mt-10">(icon) {location}</h2>
                <h2>(icon) {responseTime}</h2>
              </div>
            </div>

            {/* Line */}
            <div className="px-24">
              <hr className="w-full h-1 mb-8 bg-black" />
            </div>
            <div className="px-24">
              {/* Addition skill buttons, about, availability */}
              <span className="flex">
                {skills.map((skill) => {
                  return (
                    <Button variant="tertiary">{skill}</Button>
                  )
                })}
              </span>
              <h1>About Hiba</h1>
              <p>
                {about}
              </p>
              {/* Line */}
              <div className="">
                <hr className="w-full h-1 mt-10 bg-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Secondary skills */}
        <div className="col-span-3 p-10 bg-purple-300">
          SKILL BARS COMPONENT
        </div>
      </div>
      <div>Similar Mentors component here</div>
    </>
  );
};

export default MentorProfileSection;
