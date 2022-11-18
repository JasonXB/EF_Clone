import { useContext } from 'react';
import TimeSlot from './TimeSlot';
import { utcToZonedTime } from 'date-fns-tz';
import { v4 as uuidv4 } from 'uuid';
import { isSameDay } from 'date-fns';
import { MeetingAvailabilityProps, Availability } from '../../interface/book-meeting/book-with-mentor.interface'
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

const TimeSlots = ({ meeting_availability }: MeetingAvailabilityProps) => {
  const { selectedDay } = useContext(CalendarContext);
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

  const meetingsOnSelectedDay = selectedDayAvailability(meeting_availability.specific)

  return (
    <div className="lg:mt-4 xs:space-y-3">
      {meetingsOnSelectedDay.length > 0 ? (
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
