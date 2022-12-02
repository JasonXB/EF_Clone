import { useContext } from 'react';
import TimeSlot from './TimeSlot';
import { v4 as uuidv4 } from 'uuid';
import { TIMESLOTS_TYPE_CLASSES } from '../../enum/calendar/calendar.enum';
import { Availability, TimeSlotsProps } from '../../interface/book-meeting/book-with-mentor.interface'
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { classNames } from '../../util/class-names';
import { selectedDayAvailability } from '../../util/calendar/selected-day-availability'

import useWindowDimensions  from '../../hooks/useWindowDimensions'

const TimeSlots = ({ timeSlotsType, day }: TimeSlotsProps ) => {
  const { schedule, selectedDay } = useContext(CalendarContext);
  const { IANACounterpart } = useContext(TimezoneContext);
  const screen = useWindowDimensions()

  let daySetting: Date;
  let meetingsOnSelectedDay;

  /*
    If timeSlotsType is a list mainly used in DateBracket, it will refer to the day
    If timeSlotsType is a picker mainly used in Dateslot, it will refer to the selectedDay
  */
  if(timeSlotsType == TIMESLOTS_TYPE_CLASSES.list){
    daySetting = day as Date
    meetingsOnSelectedDay = schedule && selectedDayAvailability(schedule.specific, daySetting, IANACounterpart)
  } else if(timeSlotsType == TIMESLOTS_TYPE_CLASSES.picker){
    daySetting = selectedDay
    meetingsOnSelectedDay = schedule && selectedDayAvailability(schedule.specific, daySetting, IANACounterpart)
  }
  
  const noTimeSlotMessage = timeSlotsType == TIMESLOTS_TYPE_CLASSES.picker ? "No time slot available" : ''

  return (
    <div className={classNames(
      "lg:mt-4 space-y-3 text-sm xl:overflow-y-scroll scrollBar", 
      timeSlotsType == TIMESLOTS_TYPE_CLASSES.picker && "max-h-96",
      timeSlotsType == TIMESLOTS_TYPE_CLASSES.list && "max-h-28"
      )}>
      {/* first condition - if there is availability in this date, show availabilities, otherwise show empty */}
      {/* second condition - if the screen is xl, show timeslot list, otherwise show a dot */}
      {meetingsOnSelectedDay && meetingsOnSelectedDay.length > 0 ? 
        screen == 'xl' ? (
          meetingsOnSelectedDay.map((availability: Availability) => (
            <TimeSlot key={uuidv4()} timeSlotsType={timeSlotsType} meeting={availability}  />
          ))
        ) : (
          <div className='w-full flex flex-col items-center'>
            <svg height="20" width="20">
              <circle cx="10" cy="10" r="6" className='fill-primary-1' />
            </svg>
          </div>
      ) : (
        <p>{noTimeSlotMessage}</p>
      )}
    </div>
  );
};

export default TimeSlots;
