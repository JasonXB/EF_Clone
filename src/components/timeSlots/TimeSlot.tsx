/*
    component that is so far only used in the BookMeeting page. please refer to the link below:
    https://xd.adobe.com/view/748b20f6-3f12-4c04-a128-f3ecbec94ef2-21d8/screen/962caf43-9fe9-44ed-93c5-e08de2342056/?hints=off
*/
import { useContext } from 'react';
import { format, isEqual } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { MeetingProps } from '../../interface/book-meeting/book-with-mentor.interface'

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

const TimeSlot = ({ meeting }: MeetingProps) => {
  const { selectedTimeSlot, setSelectedTimeSlot, IANACounterpart } =
    useContext(TimezoneContext);

  //converted timezones by referring to the useState variable IANACounterpart-------------
  const convertedStartTime = utcToZonedTime(
    meeting.startDatetime,
    IANACounterpart as unknown as string
  );

  const convertedEndTime = utcToZonedTime(meeting.endDatetime, IANACounterpart as unknown as string);

  const selectTimeSlot = () => {
    setSelectedTimeSlot({
      startDatetime: meeting.startDatetime,
      endDatetime: meeting.endDatetime,
    });
  };

  const isTimeSlotSelected = () => {
    return (
      isEqual(meeting.startDatetime, selectedTimeSlot.startDatetime) &&
      isEqual(meeting.endDatetime, selectedTimeSlot.endDatetime)
    );
  };

  return (
    <button
      className={classNames(
        isTimeSlotSelected() && 'border-4 bg-primary-5 font-bold',
        !isTimeSlotSelected() && 'border font-medium hover:bg-gray-100',
        `flex items-center px-6 py-6 space-x-4 group rounded-xl focus-within:bg-gray-100  border-primary-1 w-full`
      )}
      onClick={selectTimeSlot}
    >
      <div className="flex-auto">
        <p>
          <time dateTime={format(convertedStartTime, 'hh:mm a')}>
            {format(convertedStartTime, 'hh:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={format(convertedEndTime, 'hh:mm a')}>
            {format(convertedEndTime, 'hh:mm a')}
          </time>
        </p>
      </div>
    </button>
  );
};

export default TimeSlot;
