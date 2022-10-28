import { useContext } from 'react';
import {
  format,
  getDay,
  isEqual,
  isSameDay,
  isToday,
  parseISO,
} from 'date-fns';
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

function classNames(...classes) {
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

const DateSlot = ({ day, dayIndex, availabilities }) => {
  const { selectedDay, setSelectedDay } = useContext(CalendarContext);
  const { setSelectedTimeSlot } = useContext(TimezoneContext);

  //check if there is availability in a date by referring to the availabilities prop
  let isAvailable = availabilities.some((availability) =>
    isSameDay(parseISO(availability.startDatetime), day)
  );

  //select date event handler-----------------
  const selectDate = () => {
    setSelectedDay(day);
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
          isEqual(day, selectedDay) && 'bg-primary-5 border-4 border-primary-1',
          //not the selected day
          !isEqual(day, selectedDay) && 'hover:bg-gray-200',
          // ----- TEXT CONDITIONS -----------
          //today
          isToday(day) && 'font-semibold',
          //has availability
          isAvailable && 'text-black',
          //has no availability
          !isAvailable && 'text-smoke-1 line-through',
          // ----- DEFAULT CLASS -------------
          'mx-auto flex h-8 w-8 items-center justify-center rounded py-9 px-9'
        )}
      >
        <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
      </button>
    </div>
  );
};

export default DateSlot;
