import { useContext } from 'react';
import {
  format,
  getDay,
  isSameDay,
  isToday,
  isFuture,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { DateBoxProps } from '../../interface/book-meeting/book-with-mentor.interface'
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { classNames } from '../../util/class-names'

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
/*
  IMPROVEMENT TO FEATURES: 
  the current code has a missing feature to align the day selected when the timezone is changed.
  this would apply for a selected time which is when converted, would be a different date
  you may use the variable below as a starting point to fix this feature.
  const zonedSelectedTime = utcToZonedTime(selectedTimeSlot.startDatetime, IANACounterpart as unknown as string);
 */
const DateSlot = ({ day, dayIndex }: DateBoxProps) => {
  const { schedule, selectedDay, setSelectedDay } = useContext(CalendarContext);
  const { setSelectedTimeSlot, IANACounterpart, selectedTimeSlot } = useContext(TimezoneContext);

  //variable used to adjust the date available based on the timezone
  const timeZonedAvailabilities = schedule && schedule.specific.map((availability) => {
    return {
      startDatetime: utcToZonedTime(
        availability.startDatetime,
        IANACounterpart as unknown as string
      ),
      endDatetime: utcToZonedTime(
        availability.endDatetime,
        IANACounterpart as unknown as string
      ),
    };
  });


  //predicate function to check the array if it has any future start dates
  const hasFuture = () => {
    let startTime 
    if(timeZonedAvailabilities){
      for (let i = 0; i < timeZonedAvailabilities.length; i++) {
        startTime = timeZonedAvailabilities[i].startDatetime
        if (isSameDay(startTime, day) && isFuture(startTime)) {
          const zonedSelectedTime = utcToZonedTime(selectedTimeSlot.startDatetime, IANACounterpart as unknown as string);
            return true
        }
      }
    }
    return false
  } 

  //select date event handler-----------------
  const selectDate = () => {
    setSelectedDay(day);
    setSelectedTimeSlot({ startDatetime: '', endDatetime: ''}); //reset the selected time slot whenever a date is clicked so that there is no time slot selected by default
  };

  return (
    <div
      key={day.toString()}
      className={classNames(dayIndex === 0 && colStartClasses[getDay(day)])}
    >
      <button
        type="button"
        disabled={!hasFuture()}
        onClick={selectDate}
        className={classNames(
          // ----- BACKGROUND CONDITIONS -----
          //selected day is today
          isSameDay(day, selectedDay) &&
            'bg-primary-5 border-4 border-primary-1 py-5 sm:py-7 lg:py-9',
          //not the selected day
          !isSameDay(day, selectedDay) && 'hover:bg-gray-100 py-6 sm:py-8 lg:px-10',
          // ----- TEXT CONDITIONS -----------
          //today
          isToday(day) && 'font-semibold',
          //has availability in the future
          hasFuture() && 'text-black',
          //has no availability in the future
          !hasFuture() && 'text-hue-400 line-through',
          // ----- DEFAULT CLASS -------------
          'mx-auto flex items-center justify-center rounded h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 py-6 px-6 sm:py-8 sm:px-8 lg:py-10 lg:px-9'
        )}
      >
        <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
      </button>
    </div>
  );
};

export default DateSlot;
