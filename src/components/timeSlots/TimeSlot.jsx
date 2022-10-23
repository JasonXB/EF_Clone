/*
    component that is so far only used in the BookMeeting page. please refer to the link below:
    https://xd.adobe.com/view/748b20f6-3f12-4c04-a128-f3ecbec94ef2-21d8/screen/962caf43-9fe9-44ed-93c5-e08de2342056/?hints=off
*/

import { format, parseISO } from 'date-fns';

const TimeSlot = ({ meeting, isSelected, setIsSelected }) => {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  const selectEventHandler = () => {
    setIsSelected(true);
  };

  let selectedStyle = '';

  if (isSelected) {
    selectedStyle = 'bg-primary-5 border-4 border-primary-1';
  } else if (!isSelected) {
    selectedStyle = '';
  }

  return (
    <button
      className={`flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 ${selectedStyle}`}
      onClick={selectEventHandler}
    >
      <img
        src={meeting.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </div>
    </button>
  );
};

export default TimeSlot;
