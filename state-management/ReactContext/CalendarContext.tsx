import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
} from 'date-fns';

const today = startOfToday();

export const CalendarContext = createContext({
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
  const [selectedDay, setSelectedDay] = useState(today); //Mon Oct 17 2022 00:00:00 GMT-0700 (Pacific Daylight Time)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy')); //Oct-2022
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date()); //Sat Oct 01 2022 00:00:00 GMT-0700 (Pacific Daylight Time)

  //get the the array of days of the current month selected
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const value = {
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
