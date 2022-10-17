import Avatar from '../avatar/avatar';
import { MentorProfileTopProps } from '../../interface/mentor-profile-top-props.interface';
import Button from '../buttons/reusable-buttons';
import { locationIcon } from './ProfileIcons';
import { clockIcon } from './ProfileIcons';
import { v4 as uuidv4 } from 'uuid';

const MentorProfileTop = ({
  name,
  title,
  socialMediaIcons,
  location,
  responseTime,
  avatar,
}: MentorProfileTopProps) => {
  return (
    <>
      {/* Left: Avatar and Request button */}
      <div className="flex flex-col items-center ss:flex-row md:flex-col md:items-center lg:items-start lg:flex-row xl:flex-row">
        <div className="flex flex-col items-center w-3/5 md:items-center lg:items-center xl:items-start md:w-3/5 lg:w-4/5 xl:w-2/5">
          <Avatar personsName={name} imgLocation={avatar} displaySize="large" />
          <Button className="px-8 mt-6 mb-6 text-xl w-3/8 xl:ml-14">
            Request
          </Button>
        </div>

        {/* Right: Name, location etc */}
        <div className="w-full px-10 py-5 mt-4 xl:px-0 xl:w-3/5 ss:h-full h-3/5">
          {/* Mentor name */}
          <h1 className="mb-6 text-4xl font-bold text-black xl:text-5xl lg:mb-2 xl:mb-2">
            {name}
          </h1>
          <h2 className="mb-2 text-lg">{title}</h2>
          {/* Map each social media icon */}
          <div className="flex mb-10">
            {socialMediaIcons.map((icon) => {
              return (
                <a
                  href={icon.url}
                  className="mr-6"
                  key={uuidv4()}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon.svg}
                </a>
              );
            })}
          </div>

          {/* Location and Response Time */}
          <h2 className="flex mt-5 text-lg">
            {/* Location icon and location*/}
            {locationIcon}
            {location}
          </h2>
          {/* Clock icon and response time*/}
          <h2 className="flex text-lg">
            {clockIcon}
            {responseTime}
          </h2>
        </div>
      </div>
    </>
  );
};

export default MentorProfileTop;
