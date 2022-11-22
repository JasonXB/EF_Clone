import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { startOfDay, formatISO } from 'date-fns';
import { TentativeTime } from '../../src/interface/book-meeting/book-with-mentor.interface'

const defaultNullTime = formatISO(startOfDay(new Date()))
const nullMeeting = {startDatetime: defaultNullTime, endDatetime: defaultNullTime, isNull: true}

export const ScheduleModalContext = createContext({
  defaultNullMeeting: nullMeeting,
  showScheduleModal: false,
  setShowScheduleModal: (() => {}) as Dispatch<SetStateAction<boolean>>,
  tentativeTimes: [nullMeeting] as TentativeTime[],
  setTentativeTimes: (() => {}) as Dispatch<SetStateAction<TentativeTime[]>>,
  addNewTentativeTimes: () => {},
  removeFromTentativeTimes: (index: number) => {},
  updateTentativeTime: (index: number, newTime: TentativeTime) => {},
});

interface Children {
  children: ReactNode
}

export const ScheduleModalProvider = ({ children }: Children) => {

  const defaultNullMeeting = nullMeeting

  //used for the onClick event of DateBracket to show the modal
  const [showScheduleModal, setShowScheduleModal] = useState(false); 
  const [tentativeTimes, setTentativeTimes] = useState([defaultNullMeeting])

  //add new null startEndTime object in tentative times array
  const addNewTentativeTimes = () => {
    setTentativeTimes(tentativeTimes => [...tentativeTimes, defaultNullMeeting])
  }

  const removeFromTentativeTimes = (index: number) => {
    const filteredTentativeTimes = tentativeTimes.filter((time, i) =>  i !== index)
    setTentativeTimes(filteredTentativeTimes)
  }

  const updateTentativeTime = (index: number, newTime: TentativeTime) => {
    tentativeTimes[index] = newTime
  }

  console.log(tentativeTimes);
  
  const value = {
    defaultNullMeeting,
    showScheduleModal, 
    setShowScheduleModal,
    tentativeTimes, 
    setTentativeTimes,
    addNewTentativeTimes,
    removeFromTentativeTimes,
    updateTentativeTime
  };

  return (
    <ScheduleModalContext.Provider value={value}>
      {children}
    </ScheduleModalContext.Provider>
  );
};
