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

  //variable used to adjust the timeslot available based on the timezone
  const timeZonedAvailabilities = meeting_availability.specific.map(
    (availability) => {
      return {
        startDatetime: utcToZonedTime(
          availability.startDatetime,
          IANACounterpart as unknown as string
        ),
        endDatetime: utcToZonedTime(availability.endDatetime, IANACounterpart as unknown as string),
      };
    }
  );

  //find if the mentor has availabilities on the selected date by comparing the date selected and the date in the json data
  const selectedDayAvailability = (availabilities: ZonedAvailability[]) =>
    availabilities.filter(
      (availability) =>
        isSameDay(parseISO(availability.startDatetime as unknown as string), selectedDay) ||
        isSameDay(availability.startDatetime, selectedDay)
    );

  return (
    <div className="mt-4 space-y-3 text-sm">
      {selectedDayAvailability(timeZonedAvailabilities).length > 0 ? (
        selectedDayAvailability(timeZonedAvailabilities).map((availability) => (
          <TimeSlot key={uuidv4()} meeting={availability} />
        ))
      ) : (
        <p>No time slot available</p>
      )}
    </div>
  );
};

export default TimeSlots;