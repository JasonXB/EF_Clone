import { useContext } from 'react';
import {
  format,
  getDay,
  isSameDay,
  isToday,
} from 'date-fns';
import TimeSlots from '../../../src/components/timeSlots/TimeSlots';
import { TIMESLOTS_TYPE_CLASSES } from '../../enum/calendar/calendar.enum';
import { DateBoxProps } from '../../interface/book-meeting/book-with-mentor.interface'
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { ScheduleModalContext } from '../../../state-management/ReactContext/ScheduleModalContext';
import { selectedDayAvailability } from '../../util/calendar/selected-day-availability'


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

const DateBracket = ({ day, dayIndex }: DateBoxProps) => {
  const { showScheduleModal, setShowScheduleModal, setNewTimes, defaultNullMeeting, setExistingTimes } = useContext(ScheduleModalContext);
  const { schedule, selectedDay, setSelectedDay } = useContext(CalendarContext);
  const { setSelectedTimeSlot, IANACounterpart } = useContext(TimezoneContext);

  const availabilitiesOnSelectedDay = schedule && selectedDayAvailability(schedule.specific, day, IANACounterpart)
  /*
    availabilitiesOnSelectedDay converted to an array (tentativeAvailabilities) that has 
    added property which is 'isNull'. this property is used to handle null timeslots like
    adding a new timeslot which has its text grayed out
  */
  const existingAvailabilities = availabilitiesOnSelectedDay && availabilitiesOnSelectedDay.map((availability) => {
    return {...availability, isUpdated: false }
  })


  //select date event handler-----------------
  const selectDate = () => {
    setSelectedDay(day);    
    setExistingTimes(existingAvailabilities)
    setNewTimes([defaultNullMeeting])
    setShowScheduleModal(true)
  };

  return (
    <div
      key={day.toString()}
      className={classNames(dayIndex === 0 && colStartClasses[getDay(day)], 'border-[.5px] border-primary-5 p-0 h-20 xl:h-52')}
    >
      <button
        type="button"
        disabled={showScheduleModal}
        onClick={selectDate}
        className={classNames(
          // ----- BACKGROUND CONDITIONS -----
          //selected day is today
          isSameDay(day, selectedDay) &&
            'border-4 border-primary-1 mt-[-4px]',
          // ----- TEXT CONDITIONS -----------
          //today
          isToday(day) && 'font-semibold',
          // ----- DEFAULT CLASS -------------
          'mx-auto flex items-center justify-center w-full h-full hover:bg-gray-100'
        )}
      >
        <div className='w-full h-full'>
          {/* date bracket header */}
          <h4 className='bg-primary-5 py-2 lg:pt-1 lg:pb-0 xl:py-3 text-xl xl:text-4xl'>
            <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
          </h4>
          {/* timeslots in bracket */}
          <div>
            <TimeSlots timeSlotsType={TIMESLOTS_TYPE_CLASSES.list} day={day}/>
          </div>
        </div>
      </button>
    </div>
  );
};

export default DateBracket;
