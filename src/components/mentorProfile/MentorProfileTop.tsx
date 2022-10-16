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
      <div className="flex flex-col lg:flex-row xl:flex-row">
        <div className="flex flex-col items-center w-full lg:items-start xl:items-start xl:w-2/5">
          <Avatar personsName={name} imgLocation={avatar} displaySize="large" />
          <Button className="w-2/4 p-2 mt-6 mb-6 xl:ml-10">Request</Button>
        </div>

        {/* Right: Name, location etc */}
        <div className="w-full px-10 py-10 xl:px-0 xl:w-3/5 h-3/5">
          {/* Mentor name */}
          <h1 className="mb-10 text-5xl font-bold text-black xl:mb-2">
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
