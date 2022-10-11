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
        <div className="col-span-7">
          {/* Left side */}
          <div className="flex flex-col items-center xl:items-stretch">
            {/* Left: Avatar and Request button */}
            <div className="flex flex-col lg:flex-row xl:flex-row">
              <div className="flex flex-col items-center w-full xl:w-2/5">
                <Avatar
                  personsName={name}
                  imgLocation={cat}
                  displaySize="large"
                />
                <Button className="w-1/3 p-2 mt-6 mb-6 text-xl">Request</Button>
              </div>
              {/* Right: Name, country etc */}
              <div className="w-full p-10 xl:w-3/5 h-3/5">
                <h1 className="mb-10 text-5xl font-bold text-black xl:mb-0">
                  {name}
                </h1>
                <h2 className="mb-2 text-lg">{title}</h2>
                {/* LinkedIn Icon - SM Buttons will be dynamically added later */}
                <a href={socialMediaIcons} className="mr-2">
                  <span className="mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="rounded bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </span>
                </a>
                {/* Location and Response Time */}
                <h2 className="flex mt-5">
                  {/* Location icon: Need the correct svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="mb-2 mr-2 bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  {location}
                </h2>
                {/* Clock icon: need the correct svg */}
                <h2 className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="mr-2 bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  {responseTime}
                </h2>
              </div>
            </div>

            {/* Line */}
            <div className="px-24">
              <hr className="w-full h-1 mb-8 bg-black" style={{ height: 3 }} />
            </div>
            <div className="px-24">
              {/* Addition skill buttons, about, availability */}
              <span className="flex mb-10">
                {skills.map((skill) => {
                  return (
                    <Button variant="tertiary" className="mr-4">
                      {skill}
                    </Button>
                  );
                })}
              </span>
              {/* About */}
              <h2 className="mb-5 text-2xl">About {name}</h2>
              <p className="mb-14 text-md">{about}</p>
              {/* Availability */}
              <h2 className="mb-5 text-2xl">{name}'s Availability</h2>
              <p className="mb-5 text-md">{about}</p>
              {/* 2nd Line */}
              <div className="">
                <hr
                  className="w-full mt-10 mb-10 bg-black"
                  style={{ height: 3 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Secondary skills */}
        <div className="col-span-3 p-10">
          <h1 className="text-4xl ">SKILL BARS COMPONENT</h1>
        </div>
      </div>
      {/* Similar Mentors Component */}
      <div>
        <h1 className="flex items-center text-4xl">

          Similar Mentors component here
        </h1>
      </div>
    </>
  );
};

export default MentorProfileSection;
