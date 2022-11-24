import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { startOfDay, formatISO } from 'date-fns';
import { TentativeTime, ExistingTime } from '../../src/interface/book-meeting/book-with-mentor.interface'

const defaultNullTime = formatISO(startOfDay(new Date()))
const nullMeeting = {startDatetime: defaultNullTime, endDatetime: defaultNullTime, isNull: true}

export const ScheduleModalContext = createContext({
  defaultNullMeeting: nullMeeting,
  showScheduleModal: false,
  setShowScheduleModal: (() => {}) as Dispatch<SetStateAction<boolean>>,
  existingTimes: [] as ExistingTime[],
  setExistingTimes: (() => {}) as Dispatch<SetStateAction<ExistingTime[]>>,
  // newTimes: [] as NewTime[],
  // setNewTimes: (() => {}) as Dispatch<SetStateAction<NewTime[]>>,
  tentativeTimes: [nullMeeting] as TentativeTime[],
  setTentativeTimes: (() => {}) as Dispatch<SetStateAction<TentativeTime[]>>,
  addNewTentativeTimes: () => {},
  removeFromExistingTimes: (index: number) => {},
  updateExistingTime: (index: number, newTime: ExistingTime) => {},
});

interface Children {
  children: ReactNode
}

export const ScheduleModalProvider = ({ children }: Children) => {

  const defaultNullMeeting = nullMeeting

  //used for the onClick event of DateBracket to show the modal
  const [showScheduleModal, setShowScheduleModal] = useState(false); 
  const [tentativeTimes, setTentativeTimes] = useState([defaultNullMeeting])
  const [existingTimes, setExistingTimes] = useState<ExistingTime[]>([])
  // const [newTimes, setNewTimes] = useState<NewTime[]>([])

  //add new null startEndTime object in tentative times array
  const addNewTentativeTimes = () => {
    setTentativeTimes(tentativeTimes => [...tentativeTimes, defaultNullMeeting])
  }

  const removeFromExistingTimes = (index: number) => {
    const filteredExistingTimes = existingTimes.filter((time, i) =>  i !== index)
    setExistingTimes(filteredExistingTimes)
  }
  // const removeFromNewTimes = (index: number) => {
  //   const filteredNewTimes = newTimes.filter((time, i) =>  i !== index)
  //   setNewTimes(filteredNewTimes)
  // }

  const updateExistingTime = (index: number, updatedTime: ExistingTime) => {
    existingTimes[index] = updatedTime
  }
  
  const value = {
    defaultNullMeeting,
    showScheduleModal, 
    setShowScheduleModal,
    existingTimes, 
    setExistingTimes,
    tentativeTimes, 
    setTentativeTimes,
    addNewTentativeTimes,
    removeFromExistingTimes,
    updateExistingTime
  };

  return (
    <ScheduleModalContext.Provider value={value}>
      {children}
    </ScheduleModalContext.Provider>
  );
};
