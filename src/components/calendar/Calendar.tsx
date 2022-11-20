import { useContext } from 'react';
import { add, format, isPast } from 'date-fns';
import DateSlot from './DateSlot';
import DateBracket from './DateBracket';
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { v4 as uuidv4 } from 'uuid';
import { MeetingAvailabilityProps, CALENDAR_TYPE_CLASSES } from '../../interface/book-meeting/book-with-mentor.interface'
import useWindowDimensions  from '../../../src/hooks/useWindowDimensions'
import ScheduleModal from './ScheduleModal';


export default function Calendar({ calendarType }: MeetingAvailabilityProps) {
  const screen = useWindowDimensions()

  const responsiveDay = (dayWord: string) => {
    switch(screen) {
      case 'xs':
      case 'ss':
        return dayWord.charAt(0) 
      default:
        return dayWord
    }
  }

  const { setCurrentMonth, firstDayCurrentMonth, days } =
    useContext(CalendarContext);

  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };
  

  let monthFormat = '';
  if(calendarType == CALENDAR_TYPE_CLASSES.medium){
    monthFormat = 'MMM yyyy'
  } else if (calendarType == CALENDAR_TYPE_CLASSES.large){
    monthFormat = 'MMMM yyyy'
  }

  return (
    <div className="pt-1 my-2 relative">
      {/* SCHEDULE MODAL - used only for CALENDAR_TYPE_CLASSES.large */}
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-1/3'>
        <ScheduleModal/>
      </div>
      <div className='z-10'>
      {/* make the calendar responsive in different devices */}
      {/* <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 lg:px-0 bg-red-100"> */}
      {/* style for navigation header of calendar */}
      <div className="flex justify-between border border-primary-1 rounded-md lg:px-6 lg:py-6 px-4 py-2">
        {/* -- LEFT ARROW -- */}
        {!isPast(firstDayCurrentMonth) ? (<button
          className="hover:text-gray-500"
          type="button"
          onClick={previousMonth}
        >
          <span className="sr-only">Previous month</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>) : <div className="px-5"/>}
        {/* -- */}
        {/* -- CALENDAR MONTH -- */}
        <h4 className="font-medium text-2xl lg:text-3xl xl:text-4xl mt-1 lg:mt-0">
          {format(firstDayCurrentMonth, monthFormat)}
        </h4>
        {/* -- */}

        {/* -- RIGHT ARROW -- */}
        <button
          className="hover:text-gray-500"
          type="button"
          onClick={nextMonth}
        >
          <span className="sr-only">Next month</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        {/* -- */}
      </div>
      {/* -- DAYS -- */}
      <div className="grid grid-cols-7 lg:py-8 py-4 text-center font-medium border-b border-primary-1">
        <h5 className='text-xl lg:text-2xl xl:text-3xl'>{responsiveDay('MON')}</h5>
        <h5 className='text-xl lg:text-2xl xl:text-3xl'>{responsiveDay('TUE')}</h5>
        <h5 className='text-xl lg:text-2xl xl:text-3xl'>{responsiveDay('WED')}</h5>
        <h5 className='text-xl lg:text-2xl xl:text-3xl'>{responsiveDay('THU')}</h5>
        <h5 className='text-xl lg:text-2xl xl:text-3xl'>{responsiveDay('FRI')}</h5>
        <h5 className='text-xl lg:text-2xl xl:text-3xl'>{responsiveDay('SAT')}</h5>
        <h5 className='text-xl lg:text-2xl xl:text-3xl'>{responsiveDay('SUN')}</h5>
      </div>
      {/* -- */}
      {/* -- DATE SLOTS -- */}
      <div className="grid grid-cols-7 grid-rows-6 my-2 text-xl md:text-2xl">
        {days.map((day, dayIdx) => {
          if(calendarType == CALENDAR_TYPE_CLASSES.medium){
            return <DateSlot
            key={uuidv4()}
            day={day}
            dayIndex={dayIdx}
            />
          } else if (calendarType == CALENDAR_TYPE_CLASSES.large){
            return <DateBracket
            key={uuidv4()}
            day={day}
            dayIndex={dayIdx}
            />
          }
        })}
        {/* -- */}
      </div>
      </div>
    </div>
  );
}
