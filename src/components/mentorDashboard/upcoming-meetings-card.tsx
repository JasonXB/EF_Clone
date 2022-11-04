import Meeting from '../../interface/meeting.interface';
import Avatar from '../avatar/avatar';
import Button from '../buttons/reusable-buttons';

interface UpcomingMeetingCardProps {
  meeting: Meeting;
}

const UpcomingMeetingCard = ({ meeting }: UpcomingMeetingCardProps) => {
  const { name, avatar, numberOfMeetings, nextMeeting } = meeting;
  //avatar will be passed in the future

  return (
    <div className="flex flex-col items-center sm:flex-row">
      {/* styles fo card */}
      <div className="flex flex-col items-center w-10/12 p-4 my-4 overflow-hidden rounded-md shadow-md sm:flex-row sm:mx-2 ">
        {/* avatar left column */}
        <div className="flex flex-col items-center w-full ss:w-1/3">
          <Avatar
            imgLocation={avatar} //swap with avatar once dynamically passed
            personsName={name}
            displaySize={'small'}
          />
          <span className="py-2 text-xl font-bold text-center sm:text-md sm:font-normal">
            {name}
          </span>
        </div>
        {/* stats right */}
        <div className="flex flex-col items-center w-full mt-4 space-y-6 text-center sm:mt-0 sm:3/4 sm:flex-row justify-evenly sm:space-y-0">
          <div className="flex flex-row w-full pt-4 sm:border-t-0 border-t-[1px] sm:w-1/2 border-smoke-4 ">
            <div className="flex flex-col items-center w-3/4 px-2 border-r-2 sm:w-1/2 ">
              <span className="text-xl ss:text-2xl text-primary-1">
                {numberOfMeetings.individual}
              </span>
              <span className="text-xs ss:text-md">Number of Meetings</span>
            </div>
            <div className="flex flex-col items-center w-3/4 px-2 sm:border-r-2 sm:w-1/2">
              <span className="text-xl ss:text-2xl text-primary-1">
                {numberOfMeetings.totalMins}
              </span>
              <span className="w-1/2 text-xs ss:text-md ss:w-full">
                Total number of meeting minutes
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center flex-grow w-3/4 px-2 ">
            <span className="text-2xl text-primary-1">{nextMeeting}</span>
            <span className="text-xs ss:text-md">Upcoming Meeting</span>
          </div>
        </div>
      </div>
      <div className="ss:ml-2 sm:w-2/12">
        <Button variant="primary">Contact</Button>
      </div>
    </div>
  );
};

export default UpcomingMeetingCard;
