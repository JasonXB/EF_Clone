import { useContext } from 'react';
import { add, format, isPast } from 'date-fns';
import DateSlot from './DateSlot';
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { v4 as uuidv4 } from 'uuid';
import { MeetingAvailabilityProps } from '../../interface/book-meeting/book-with-mentor.interface'
import useWindowDimensions  from '../../../src/hooks/useWindowDimensions'

export default function Calendar({ meeting_availability }: MeetingAvailabilityProps) {
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
  

  return (
    <div className="pt-1 my-2">
      {/* style for navigation header of calendar */}
      <div className="flex justify-between border border-primary-1 rounded-md lg:px-6 lg:py-6 xs:px-4 xs:py-2">
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
        <h4 className="font-medium xs:text-2xl lg:text-3xl xs:mt-1 lg:mt-0">
          {format(firstDayCurrentMonth, 'MMM yyyy')}
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
      <div className="grid grid-cols-7 lg:py-8 xs:py-4 text-center font-medium border-b border-primary-1">
        <h5 className='xs:text-xl lg:text:2xl'>{responsiveDay('MON')}</h5>
        <h5 className='xs:text-xl lg:text:2xl'>{responsiveDay('TUE')}</h5>
        <h5 className='xs:text-xl lg:text:2xl'>{responsiveDay('WED')}</h5>
        <h5 className='xs:text-xl lg:text:2xl'>{responsiveDay('THU')}</h5>
        <h5 className='xs:text-xl lg:text:2xl'>{responsiveDay('FRI')}</h5>
        <h5 className='xs:text-xl lg:text:2xl'>{responsiveDay('SAT')}</h5>
        <h5 className='xs:text-xl lg:text:2xl'>{responsiveDay('SUN')}</h5>
      </div>
      {/* -- */}
      {/* -- DATE SLOTS -- */}
      <div className="grid grid-cols-7 grid-rows-6 my-2 sx:text-xl md:text-2xl ">
        {days.map((day, dayIdx) => (
          <DateSlot
            key={uuidv4()}
            day={day}
            dayIndex={dayIdx}
            availabilities={meeting_availability.specific}
          />
        ))}
        {/* -- */}
      </div>
    </div>
  );
}
