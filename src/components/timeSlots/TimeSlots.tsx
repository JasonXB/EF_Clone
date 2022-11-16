import { useContext } from 'react';
import TimeSlot from './TimeSlot';
import { utcToZonedTime } from 'date-fns-tz';
import { v4 as uuidv4 } from 'uuid';
import { isSameDay } from 'date-fns';
import { Availability } from '../../interface/book-meeting/book-with-mentor.interface'
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

const TimeSlots = () => {
  const { schedule, selectedDay } = useContext(CalendarContext);
  const { IANACounterpart } = useContext(TimezoneContext);

  //find if the mentor has availabilities on the selected date by comparing the date selected and the date in the json data
  const selectedDayAvailability = (availabilities: Availability[]) => {
    return availabilities.filter((availability: Availability)=>{
      const zonedStartTime = utcToZonedTime(
        availability.startDatetime,
        IANACounterpart as unknown as string
      )
      return isSameDay(zonedStartTime, selectedDay)
    })
  }

  const meetingsOnSelectedDay = schedule.specific && selectedDayAvailability(schedule.specific)

  return (
    <div className="mt-4 space-y-3 text-sm">
      {meetingsOnSelectedDay && meetingsOnSelectedDay.length > 0 ? (
        meetingsOnSelectedDay.map((availability: Availability) => (
          <TimeSlot key={uuidv4()} meeting={availability} />
        ))
      ) : (
        <p>No time slot available</p>
      )}
    </div>
  );
};

export default TimeSlots;
