import Image from 'next/image';
import placeholder from '../assets/cat.jpeg';
import Button from '../buttons/reusable-buttons';

const MentorshipRequestCard = (props: any) => {
  const { name, position, avatar, age, email, status, date, goalOfMeeting } =
    props.props;
  return (
    <div className="flex flex-col w-full p-4 my-4 overflow-hidden rounded-lg shadow-md sm:mx-2 ss:flex-row sm:w-1/3 bg-light sm:flex-col">
      <div className="flex flex-col items-center sm:basis-1/3">
        <div className="w-20 ">
          <Image
            className="rounded-full"
            src={placeholder} //avatar for future dynamic props
            alt={`${name} avatar`}
            layout="intrinsic"
            placeholder="blur"
          />
        </div>
        <span>{name}</span>

        <span>
          {position} |{age}{' '}
        </span>

        <a>{email}</a>
      </div>
      <div className="w-full sm:basis-2/3">
        <div className="px-4 py-2 my-2 bg-white rounded-md shadow-sm">
          status:<span className="text-tertiary-1">{status}</span>| since {date}
        </div>
        <div className="flex-1 px-4 py-2 my-2 bg-white rounded-md shadow-sm">
          <h6>Goal of the meeting</h6>
          <p className="text-xs line-clamp-2 sm:line-clamp-3">
            {goalOfMeeting}
          </p>
          {/* still needs 'read more'. not sure what response they want to happen when clicked */}
        </div>
        <div className="mx-auto my-2 space-x-5 w-fit sm:space-x-2">
          {/* needs logic added */}
          <Button variant="primary">Accept</Button>
          <Button variant="secondary">Reject</Button>
        </div>
      </div>
    </div>
  );
};

export default MentorshipRequestCard;
