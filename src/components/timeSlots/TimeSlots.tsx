import { useContext } from 'react';
import TimeSlot from './TimeSlot';
import { utcToZonedTime } from 'date-fns-tz';
import { v4 as uuidv4 } from 'uuid';
import { isSameDay, parseISO } from 'date-fns';
import { MeetingAvailabilityProps, ZonedAvailability } from '../../interface/book-meeting/book-with-mentor.interface'
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

const TimeSlots = ({ meeting_availability }: MeetingAvailabilityProps) => {
  const { selectedDay } = useContext(CalendarContext);
  const { IANACounterpart } = useContext(TimezoneContext);

  //find if the mentor has availabilities on the selected date by comparing the date selected and the date in the json data
  const selectedDayAvailability = (availabilities: any) => {
    return availabilities.filter((availability: any)=>{
      let zonedStartTime = utcToZonedTime(
        availability.startDatetime,
        IANACounterpart as unknown as string
      )
      return isSameDay(zonedStartTime, selectedDay)
    })
  }

  let meetingsOnSelectedDay = selectedDayAvailability(meeting_availability.specific)

  return (
    <div className="mt-4 space-y-3 text-sm">
      {meetingsOnSelectedDay.length > 0 ? (
        meetingsOnSelectedDay.map((availability: any) => (
          <TimeSlot key={uuidv4()} meeting={availability} />
        ))
      ) : (
        <p>No time slot available</p>
      )}
    </div>
  );
};

export default TimeSlots;
