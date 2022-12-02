/*
    component that is so far only used in the BookMeeting page. please refer to the link below:
    https://xd.adobe.com/view/748b20f6-3f12-4c04-a128-f3ecbec94ef2-21d8/screen/962caf43-9fe9-44ed-93c5-e08de2342056/?hints=off
*/
import { useContext } from 'react';
import { format, isEqual, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { TIMESLOTS_TYPE_CLASSES } from '../../enum/calendar/calendar.enum';
import { MeetingProps } from '../../interface/book-meeting/book-with-mentor.interface'
import { classNames } from '../../util/class-names'

const TimeSlot = ({ meeting, timeSlotsType }: MeetingProps) => {
  const { selectedTimeSlot, setSelectedTimeSlot, IANACounterpart } = useContext(TimezoneContext);

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

  let timeSlotDesign = '';

  /*
    If timeSlotsType is a list mainly used in DateBracket, it will refer to the day
    If timeSlotsType is a picker mainly used in Dateslot, it will refer to the selectedDay
   */
  if(timeSlotsType == TIMESLOTS_TYPE_CLASSES.list){
    timeSlotDesign = 'text-dark flex items-start pl-5'
  } else if(timeSlotsType == TIMESLOTS_TYPE_CLASSES.picker){
    timeSlotDesign = classNames(
      isTimeSlotSelected() && 'border-4 bg-secondary-1 font-bold',
      !isTimeSlotSelected() && 'border font-medium hover:bg-gray-100',
      `flex items-center group rounded-xl focus-within:bg-gray-100 border-primary-1 w-full py-2 sm:py-4 lg:py-6`
    )
  }

  return (
    <div
      className={timeSlotDesign}
      onClick={timeSlotsType == TIMESLOTS_TYPE_CLASSES.picker ? selectTimeSlot : undefined}
    >
      <div className={classNames(
        "flex-auto", 
        //text is not on center if it is TIMESLOTS_TYPE_CLASSES.list
        timeSlotsType == TIMESLOTS_TYPE_CLASSES.list && "flex")}>
        {timeSlotsType == TIMESLOTS_TYPE_CLASSES.list && 
          <svg height="20" width="20">
            <circle cx="10" cy="10" r="6" className='fill-primary-1' />
          </svg>
        }
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
    </div>
  );
};

export default TimeSlot;
