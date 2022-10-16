import Image from 'next/image';
import placeholderImg from '../assets/cat.jpeg';
import Avatar from '../avatar/avatar';
import Button from '../buttons/reusable-buttons';

const UpcomingMeetingCard = (props: any) => {
  const { name, avatar, numberOfMeetings, nextMeeting } = props.props;
  return (
    <div className="flex flex-col items-center ss:flex-row">
      {/* styles fo card */}
      <div className="flex flex-col items-center w-10/12 p-4 my-4 overflow-hidden rounded-md shadow-md ss:flex-row sm:mx-2 ">
        {/* avatar left column */}
        <div className="flex flex-col items-center w-1/4">
          <Avatar
            imgLocation={placeholderImg} //swap with avatar once dynamically passed
            personsName={name}
            displaySize={'small'}
          />
          {name}
        </div>
        {/* stats right */}
        <div className="flex flex-col items-center w-3/4 space-y-2 text-center sm:flex-row justify-evenly sm:space-y-0">
          <div className="flex flex-col items-center w-3/4 px-2 border-b-2 sm:border-r-2 sm:border-b-0 sm:w-2/12 ">
            <span className="text-2xl text-primary-1">
              {numberOfMeetings.individual}
            </span>
            <span>Number of Meetings</span>
          </div>
          <div className="flex flex-col items-center w-3/4 px-2 border-b-2 sm:border-r-2 sm:border-b-0 sm:w-1/4">
            <span className="text-2xl text-primary-1">
              {numberOfMeetings.totalMins}
            </span>
            <span>Total number of meeting minutes</span>
          </div>
          <div className="flex flex-col items-center w-3/4 px-2 sm:w-2/4">
            <span className="text-2xl text-primary-1">{nextMeeting}</span>
            <span>Upcoming Meeting</span>
          </div>
        </div>
      </div>
      <div className="w-2/12">
        <Button variant="primary">Contact</Button>
      </div>
    </div>
  );
};

export default UpcomingMeetingCard;
