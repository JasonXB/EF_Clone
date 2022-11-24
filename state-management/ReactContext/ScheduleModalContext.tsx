import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { startOfDay, formatISO } from 'date-fns';
import { TentativeTime } from '../../src/interface/book-meeting/book-with-mentor.interface'

const defaultNullTime = formatISO(startOfDay(new Date()))
const nullMeeting = {startDatetime: defaultNullTime, endDatetime: defaultNullTime, isNull: true}

export const ScheduleModalContext = createContext({
  defaultNullMeeting: nullMeeting,
  showScheduleModal: false,
  setShowScheduleModal: (() => {}) as Dispatch<SetStateAction<boolean>>,
  existingTimes: [] as TentativeTime[],
  setExistingTimes: (() => {}) as Dispatch<SetStateAction<TentativeTime[]>>,
  newTimes: [] as TentativeTime[],
  setNewTimes: (() => {}) as Dispatch<SetStateAction<TentativeTime[]>>,
  addToNewTimes: () => {},
  removeFromExistingTimes: (index: number) => {},
  removeFromNewTimes: (index: number) => {},
  updateExistingTime: (index: number, newTime: TentativeTime) => {},
});

interface Children {
  children: ReactNode
}

export const ScheduleModalProvider = ({ children }: Children) => {
  const defaultNullMeeting = nullMeeting
  //used for the onClick event of DateBracket to show the modal
  const [showScheduleModal, setShowScheduleModal] = useState(false); 
  const [existingTimes, setExistingTimes] = useState<TentativeTime[]>([])
  const [newTimes, setNewTimes] = useState<TentativeTime[]>([])

  const addToNewTimes = () => {
    setNewTimes(newTimes => [...newTimes, defaultNullMeeting])
  }

  const removeFromExistingTimes = (index: number) => {
    const filteredExistingTimes = existingTimes.filter((time, i) =>  i !== index)
    setExistingTimes(filteredExistingTimes)
  }
  const removeFromNewTimes = (index: number) => {
    const filteredNewTimes = newTimes.filter((time, i) =>  i !== index)
    setNewTimes(filteredNewTimes)
  }

  const updateExistingTime = (index: number, updatedTime: TentativeTime) => {
    existingTimes[index] = updatedTime
    console.log(existingTimes);
    
  }
  
  const value = {
    defaultNullMeeting,
    showScheduleModal, 
    setShowScheduleModal,
    existingTimes, 
    setExistingTimes,
    newTimes, 
    setNewTimes,
    addToNewTimes,
    removeFromExistingTimes,
    removeFromNewTimes,
    updateExistingTime
  };

  return (
    <ScheduleModalContext.Provider value={value}>
      {children}
    </ScheduleModalContext.Provider>
  );
};
