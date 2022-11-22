import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
} from 'date-fns';
import { Availability, Schedule } from '../../src/interface/book-meeting/book-with-mentor.interface'

const today = startOfToday();

export const CalendarContext = createContext({
  schedule: {} as Schedule,
  setSchedule: (() => {}) as Dispatch<SetStateAction<Schedule>>,
  selectedDay: new Date(),
  setSelectedDay: (() => {}) as Dispatch<SetStateAction<Date>>,
  currentMonth: '',
  setCurrentMonth: (() => {}) as Dispatch<SetStateAction<string>>,
  firstDayCurrentMonth: new Date(),
  days: [] as Date[],
});

interface Children {
  children: ReactNode
}

export const CalendarProvider = ({ children }: Children) => {
  //variable used to avoid passing the mentor availability or meetings down the component tree
  const [schedule, setSchedule] = useState({} as Schedule); 
  const [selectedDay, setSelectedDay] = useState(today); //Mon Oct 17 2022 00:00:00 GMT-0700 (Pacific Daylight Time)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy')); //Oct-2022
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date()); //Sat Oct 01 2022 00:00:00 GMT-0700 (Pacific Daylight Time)

  //get the the array of days of the current month selected
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const value = {
    schedule, 
    setSchedule,
    selectedDay,
    setSelectedDay,
    currentMonth,
    setCurrentMonth,
    firstDayCurrentMonth,
    days,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
