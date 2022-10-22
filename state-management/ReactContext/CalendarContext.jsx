import { createContext, useState } from 'react';

import {
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
} from 'date-fns';

export const CalendarContext = createContext({
  today: new Date(),
  selectedDay: new Date(),
  setSelectedDay: () => {},
  currentMonth: new Date(),
  setCurrentMonth: () => {},
  firstDayCurrentMonth: new Date(),
  days: [],
});

export const CalendarProvider = ({ children }) => {
  const today = startOfToday();
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
