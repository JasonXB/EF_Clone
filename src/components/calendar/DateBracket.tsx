import { useContext } from 'react';
import {
  format,
  getDay,
  isSameDay,
  isToday,
  isFuture,
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

  //select date event handler-----------------
  const selectDate = () => {
    setSelectedDay(day);
    setSelectedTimeSlot({ startDatetime: '', endDatetime: ''}); //reset the selected time slot whenever a date is clicked so that there is no time slot selected by default
  };

  return (
    <div
      key={day.toString()}
      className={classNames(dayIndex === 0 && colStartClasses[getDay(day)], 'bg-red-100 border-[.5px] border-primary-1')}
    >
      <button
        type="button"
        onClick={selectDate}
        className={classNames(
          // ----- BACKGROUND CONDITIONS -----
          //selected day is today
          isSameDay(day, selectedDay) &&
            'bg-primary-5 border-4 border-primary-1 py-9',
          //not the selected day
          !isSameDay(day, selectedDay) && 'hover:bg-gray-100 px-10',
          // ----- TEXT CONDITIONS -----------
          //today
          isToday(day) && 'font-semibold',
          // ----- DEFAULT CLASS -------------
          'mx-auto flex items-center justify-center py-10 px-9'
        )}
      >
        <div>
          <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
          <div> - My Time</div>
        </div>
      </button>
    </div>
  );
};

export default DateSlot;
