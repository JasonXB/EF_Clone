import { useContext } from 'react';
import TimeSlot from './TimeSlot';
import { utcToZonedTime } from 'date-fns-tz';
import { v4 as uuidv4 } from 'uuid';
import { isSameDay } from 'date-fns';
import { Availability, TimeSlotsProps, TIMESLOTS_TYPE_CLASSES } from '../../interface/book-meeting/book-with-mentor.interface'
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { classNames } from '../../helperFunctions/class-names';

const TimeSlots = ({ timeSlotsType, day }: TimeSlotsProps ) => {
  const { schedule, selectedDay } = useContext(CalendarContext);
  const { IANACounterpart } = useContext(TimezoneContext);

  let daySetting: Date;

  /*
    If timeSlotsType is a list mainly used in DateBracket, it will refer to the day
    If timeSlotsType is a picker mainly used in Dateslot, it will refer to the selectedDay
   */
  if(timeSlotsType == TIMESLOTS_TYPE_CLASSES.list){
    daySetting = day as Date
  } else if(timeSlotsType == TIMESLOTS_TYPE_CLASSES.picker){
    daySetting = selectedDay
  }

  //find if the mentor has availabilities on the selected date by comparing the date selected and the date in the json data
  const selectedDayAvailability = (availabilities: Availability[]) => {
    return availabilities && availabilities.filter((availability: Availability)=>{
      const zonedStartTime = utcToZonedTime(
        availability.startDatetime,
        IANACounterpart as unknown as string
      )
      return isSameDay(zonedStartTime, daySetting)
    })
  }

  const meetingsOnSelectedDay = schedule && selectedDayAvailability(schedule.specific)

  const noTimeSlotMessage = timeSlotsType == TIMESLOTS_TYPE_CLASSES.picker ? "No time slot available" : ''

  return (
    <div className={classNames(
      "lg:mt-4 space-y-3 text-sm overflow-y-scroll scrollBar", 
      timeSlotsType == TIMESLOTS_TYPE_CLASSES.picker && "max-h-96",
      timeSlotsType == TIMESLOTS_TYPE_CLASSES.list && "max-h-28"
      )}>
      {meetingsOnSelectedDay && meetingsOnSelectedDay.length > 0 ? (
        meetingsOnSelectedDay.map((availability: Availability) => (
          <TimeSlot key={uuidv4()} timeSlotsType={timeSlotsType} meeting={availability}  />
        ))
      ) : (
        <p>{noTimeSlotMessage}</p>
      )}
    </div>
  );
};

export default TimeSlots;
