import { useContext } from 'react';
import {
  format,
  getDay,
  isSameDay,
  isToday,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { DateSlotProps } from '../../interface/book-meeting/book-with-mentor.interface'
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}
//grid styling used to align the date with the days
let colStartClasses = [
  '',
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
];



const DateSlot = ({ day, dayIndex, availabilities }: DateSlotProps) => {
  const { selectedDay, setSelectedDay } = useContext(CalendarContext);
  const { setSelectedTimeSlot, IANACounterpart } = useContext(TimezoneContext);
  //checkpoint!---------->fixing bug..when changing the timezone, the date with the blueborder must be changed as well
  const zonedDay = utcToZonedTime(day, IANACounterpart as unknown as string);

  //variable used to adjust the date available based on the timezone
  const timeZonedAvailabilities = availabilities.map((availability) => {
    return {
      startDatetime: utcToZonedTime(
        availability.startDatetime,
        IANACounterpart as unknown as string
      ),
      endDatetime: utcToZonedTime(availability.endDatetime, IANACounterpart as unknown as string),
    };
  });

  //check if there is availability in a date by referring to the availabilities prop
  const isAvailable = timeZonedAvailabilities.some(
    (availability) =>
      isSameDay(parseISO(availability.startDatetime as unknown as string), day) ||
      isSameDay(availability.startDatetime, day)
  );

  //select date event handler-----------------
  const selectDate = () => {
    setSelectedDay(zonedDay);
    setSelectedTimeSlot({}); //reset the selected time slot whenever a date is clicked so that there is no time slot selected by default
  };

  return (
    <div
      key={day.toString()}
      className={classNames(dayIndex === 0 && colStartClasses[getDay(day)])}
    >
      <button
        type="button"
        onClick={selectDate}
        className={classNames(
          // ----- BACKGROUND CONDITIONS -----
          //selected day is today
          isSameDay(zonedDay, selectedDay) &&
            'bg-primary-5 border-4 border-primary-1 py-9',
          //not the selected day
          !isSameDay(zonedDay, selectedDay) && 'hover:bg-gray-200 px-10',
          // ----- TEXT CONDITIONS -----------
          //today
          isToday(day) && 'font-semibold',
          //has availability
          isAvailable && 'text-black',
          //has no availability
          !isAvailable && 'text-smoke-1 line-through',
          // ----- DEFAULT CLASS -------------
          'mx-auto flex h-8 w-8 items-center justify-center rounded py-10 px-9'
        )}
      >
        <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
      </button>
    </div>
  );
};

export default DateSlot;
