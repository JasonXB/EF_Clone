import { useContext } from 'react';
import {
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
} from 'date-fns';

import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];

const DateSlot = ({ day, dayIndex, meetings }) => {
  const { selectedDay, setSelectedDay, firstDayCurrentMonth } =
    useContext(CalendarContext);

  return (
    <div
      key={day.toString()}
      className={classNames(
        dayIndex === 0 && colStartClasses[getDay(day)],
        'py-1.5'
      )}
    >
      <button
        type="button"
        onClick={() => setSelectedDay(day)}
        className={classNames(
          isEqual(day, selectedDay) && 'text-white',
          !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
          !isEqual(day, selectedDay) &&
            !isToday(day) &&
            isSameMonth(day, firstDayCurrentMonth) &&
            'text-gray-900',
          !isEqual(day, selectedDay) &&
            !isToday(day) &&
            !isSameMonth(day, firstDayCurrentMonth) &&
            'text-gray-400',
          isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
          isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
          !isEqual(day, selectedDay) && 'hover:bg-gray-200',
          (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
          'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
        )}
      >
        <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
      </button>

      <div className="w-1 h-1 mx-auto mt-1">
        {meetings.some((meeting) =>
          isSameDay(parseISO(meeting.startDatetime), day)
        ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
      </div>
    </div>
  );
};

export default DateSlot;
