import { useContext } from 'react';
import Image from 'next/image';
import MentorshipRequest from '../../interface/mentorship-request';
import Button from '../buttons/reusable-buttons';
import profile_path from '../../../public/assets/christina-wocintechchat-com-sw3FSL9hIoI-unsplash.jpg';
import ResponseMentorshipRequest from './api/response-mentorship-request';
import { MentorshipRequestsContext } from '../../../state-management/ReactContext/MentorshipRequestsContext';

interface MentorshipRequestCardProps {
  mentorshipRequest: MentorshipRequest;
}

// todo: a spinner can be placed while waiting the response from api fetch
function MentorshipRequestCard({
  mentorshipRequest,
}: MentorshipRequestCardProps) {
  //avatar will be a future pass

  const { setMentorshipRequests, pendingRequests } = useContext(
    MentorshipRequestsContext
  );

  // With default values in case not getting the correct info from api fetch
  const {
    _id,
    menteeDetails: { firstname },
    menteeDetails: { lastname },
    menteeDetails: { title },
    menteeDetails: { email },
    mentee: menteeId,
    mentor: mentorId,
    goal,
    date: dateString,
  } = mentorshipRequest;

  const full_name = `${firstname} ${lastname}`;
  const date = new Date(dateString);

  //  style logic incase there is only 1-2 request */
  const styleForLessThan2 = () => {
    if (pendingRequests.length) {
      return 'sm:flex-row';
    }
    return 'sm:flex-col';
  };

  const responseToRequest = async (urlPart: string) => {
    const response = await ResponseMentorshipRequest(
      urlPart,
      mentorId,
      menteeId
    );
    // an else statement can be added here to show an error message to mentor user.
    if (response && response.status === 200) {
      setMentorshipRequests((prevState: MentorshipRequest[]) => {
        return prevState.filter((request) => request._id != _id);
      });
    }
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
        <h2 className="max-w-full text-sm font-light text-center text-hue-700">
          {/* | divider looks a little weird on certain break points. trying to think of dynamic solution */}
          {title}
          <br />
        </h2>
        {/* temp option for email? */}
        <a href="mailto:name@email.com" className=" text-primary-1">
          {email}
        </a>
      </div>
      <div className="w-full h-3/4 ">
        <div className="flex px-4 py-2 my-2 bg-white rounded-md shadow-sm wrap ">
          <h4 className="flex flex-wrap pr-2 mx-auto text-base w-fit">
            <span>{date.toDateString()}</span>
          </h4>
        </div>
        <div className="flex-1 px-4 py-2 my-2 bg-white rounded-md shadow-sm min-h-[120px]">
          <h6 className="text-xl">Goal of the meeting</h6>
          <p className="line-clamp-2 sm:line-clamp-3">{goal}</p>
          {/* still needs 'read more'. not sure what response they want to happen when clicked */}
        </div>

        <div
          className={`flex items-center mx-auto my-auto ss:space-x-5 ss:flex-row ${styleForLessThan2()} w-fit sm:space-x-0 md:space-x-2 md:flex-row`}
        >
          {/* needs logic added */}
          <Button
            variant="primary"
            clickHandler={() => {
              responseToRequest('accept');
            }}
          >
            Accept
          </Button>
          <Button
            variant="secondary"
            clickHandler={() => {
              responseToRequest('reject');
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
