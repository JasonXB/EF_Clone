import { useContext } from 'react';
import TimeSlot from './TimeSlot';

import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';

import { v4 as uuidv4 } from 'uuid';
import { isSameDay, parseISO } from 'date-fns';

const TimeSlots = ({ meeting_availability }) => {
  const { selectedDay } = useContext(CalendarContext);

  //find if the mentor has availabilities on the selected date by comparing the date selected and the date in the json data
  const selectedDayAvailability = (availabilities) =>
    availabilities.filter((availability) =>
      isSameDay(parseISO(availability.startDatetime), selectedDay)
    );

  return (
    <div className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
      {selectedDayAvailability(meeting_availability.specific).length > 0 ? (
        selectedDayAvailability(meeting_availability.specific).map(
          (availability) => <TimeSlot key={uuidv4()} meeting={availability} />
        )
      ) : (
        <p>No time slot available</p>
      )}
    </div>
  );
};

export default TimeSlots;
