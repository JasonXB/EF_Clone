import Image from 'next/image';
import MentorshipRequest from '../../interface/mentorship-request';
import Button from '../buttons/reusable-buttons';

import ResponseMentorshipRequest from './response-mentorship-request';

interface MentorshipRequestCardProps {
  mentorshipRequest: MentorshipRequest;
}

function MentorshipRequestCard({
  mentorshipRequest,
}: MentorshipRequestCardProps) {
  //avatar will be a future pass
  const {
    id: mentorId,
    first_name,
    last_name,
    job,
    profile_path,
    email,
    bio,
  } = mentorshipRequest.mentor;
  const full_name = `${first_name} ${last_name}`;

  /* style logic incase there is only 1-2 request */
  const styleForLessThan2 = () => {
    if (mentorshipRequest.numberOfRequests < 3) {
      return 'sm:flex-row';
    }
    return 'sm:flex-col';
  };

  return (
    <div
      className={` mx-auto flex flex-col w-11/12 p-4 my-4   min-w-[280px] ss:min-w-[240px] overflow-hidden rounded-lg shadow-md ss:flex-row  bg-light sm:mx-2 sm:flex-col`}
    >
      <div className="flex flex-col items-center pr-2 mt-2 min-h-[190px] ">
        <div className="h-auto">
          {/* width/height may need to be adjust once we pass image through. Double check if this is distorted later on. */}
          <Image
            className="rounded-[50%]"
            src={profile_path} //avatar for future dynamic props
            alt={`${full_name} profile picture`}
            layout="intrinsic"
            width={90}
            height={90}
          />
        </div>
        <span className="text-lg truncate max-w-[13ch] ">{full_name}</span>
        <h2 className="max-w-full text-sm text-center text-smoke-2">
          {/* | divider looks a little weird on certain break points. trying to think of dynamic solution */}
          {job}
          <br />
        </h2>
        {/* temp option for email? */}
        <a href="mailto:name@email.com" className="text-xs text-primary-2">
          {email}
        </a>
      </div>
      <div className="w-full h-3/4 ">
        <div className="flex px-4 py-2 my-2 bg-white rounded-md shadow-sm wrap ">
          <h3 className="flex flex-wrap pr-2 mx-auto text-sm w-fit">
            <span>{new Date().toDateString()}</span>
          </h3>
        </div>
        <div className="flex-1 px-4 py-2 my-2 bg-white rounded-md shadow-sm min-h-[120px]">
          <h3 className="text-xl">Goal of the meeting</h3>
          <p className="text-xs line-clamp-2 sm:line-clamp-3">{bio}</p>
          {/* still needs 'read more'. not sure what response they want to happen when clicked */}
        </div>

        <div
          className={`flex items-center mx-auto my-auto ss:space-x-5 ss:flex-row ${styleForLessThan2()} w-fit sm:space-x-0 md:space-x-2 md:flex-row`}
        >
          {/* needs logic added */}
          <Button
            variant="primary"
            clickHandler={() => {
              ResponseMentorshipRequest('accept', '9', '12');
            }}
          >
            Accept
          </Button>
          <Button
            variant="secondary"
            clickHandler={() => {
              ResponseMentorshipRequest('reject', '7', '11');
            }}
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MentorshipRequestCard;
