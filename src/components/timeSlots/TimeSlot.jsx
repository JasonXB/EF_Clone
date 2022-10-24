/*
    component that is so far only used in the BookMeeting page. please refer to the link below:
    https://xd.adobe.com/view/748b20f6-3f12-4c04-a128-f3ecbec94ef2-21d8/screen/962caf43-9fe9-44ed-93c5-e08de2342056/?hints=off
*/
import { useContext } from 'react';

import { format, parseISO } from 'date-fns';

import { utcToZonedTime } from 'date-fns-tz';

import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

const TimeSlot = ({ meeting }) => {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  //store the selected timeSlot in the useContext variables--------------------
  const { selectedTimeSlot, setSelectedTimeSlot, IANACounterpart } =
    useContext(TimezoneContext);

  const convertedTime = utcToZonedTime(meeting.endDatetime, IANACounterpart);

  console.log(convertedTime); //to be continued...

  const selectTimeSlot = () => {
    setSelectedTimeSlot({
      startDatetime: meeting.startDatetime,
      endDatetime: meeting.endDatetime,
    });

    console.log(selectedTimeSlot);
  };

  //handle the styling condition for showing the border
  let selectedStyle = 'bg-primary-5 border-4 border-primary-1';

  const dateMatcher = {
    startDatetime: meeting.startDatetime,
    endDatetime: meeting.endDatetime,
  };

  // console.log(
  //   dateMatcher.startDatetime === selectedTimeSlot.startDatetime &&
  //     dateMatcher.endDatetime === selectedTimeSlot.endDatetime
  // );

  return (
    <button
      className={`flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 ${selectedStyle}`}
      onClick={selectTimeSlot}
    >
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
