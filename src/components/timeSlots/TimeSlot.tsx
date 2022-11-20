/*
    component that is so far only used in the BookMeeting page. please refer to the link below:
    https://xd.adobe.com/view/748b20f6-3f12-4c04-a128-f3ecbec94ef2-21d8/screen/962caf43-9fe9-44ed-93c5-e08de2342056/?hints=off
*/
import { useContext } from 'react';
import { format, isEqual, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { MeetingProps } from '../../interface/book-meeting/book-with-mentor.interface';

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

  const convertedEndTime = utcToZonedTime(
    meeting.endDatetime,
    IANACounterpart as unknown as string
  );

  const selectTimeSlot = () => {
    setSelectedTimeSlot({
      startDatetime: meeting.startDatetime,
      endDatetime: meeting.endDatetime,
    });
  };

  const isTimeSlotSelected = () => {
    return (
      isEqual(parseISO(meeting.startDatetime), parseISO(selectedTimeSlot.startDatetime)) &&
      isEqual(parseISO(meeting.endDatetime), parseISO(selectedTimeSlot.endDatetime))
    );
  };

  return (
    <button
      className={classNames(
        isTimeSlotSelected() && 'border-4 bg-secondary-1 font-bold',
        !isTimeSlotSelected() && 'border font-medium hover:bg-gray-100',
        `flex items-center group rounded-xl focus-within:bg-gray-100 border-primary-1 w-full py-2 sm:py-4 lg:py-6`
      )}
      onClick={selectTimeSlot}
    >
      <div className="flex-auto">
        <p className='text-xs sm:text-base lg:text-lg'>
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
