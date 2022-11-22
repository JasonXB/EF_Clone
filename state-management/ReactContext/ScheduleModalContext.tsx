import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { TentativeTime } from '../../src/interface/book-meeting/book-with-mentor.interface'



export const ScheduleModalContext = createContext({
  showScheduleModal: false,
  setShowScheduleModal: (() => {}) as Dispatch<SetStateAction<boolean>>,
  tentativeTimes: [{startDatetime: '', endDatetime: '', isNull: true}] as TentativeTime[],
  setTentativeTimes: (() => {}) as Dispatch<SetStateAction<TentativeTime[]>>,
  addNewTentativeTimes: () => {},
  removeFromTentativeTimes: (index: number) => {}
});

interface Children {
  children: ReactNode
}

export const ScheduleModalProvider = ({ children }: Children) => {

  //used for the onClick event of DateBracket to show the modal
  const [showScheduleModal, setShowScheduleModal] = useState(false); 
  const [tentativeTimes, setTentativeTimes] = useState([{startDatetime: '', endDatetime: '', isNull: true}])

  //add new null startEndTime object in tentative times array
  const addNewTentativeTimes = () => {
    setTentativeTimes(tentativeTimes => [...tentativeTimes, {startDatetime: '', endDatetime: '', isNull: true}])
  }

  //add new null startEndTime object in tentative times array
  const removeFromTentativeTimes = (index: number) => {
    const filteredTentativeTimes = tentativeTimes.filter((time, i) =>  i !== index)
    setTentativeTimes(filteredTentativeTimes)
  }

  const value = {
    showScheduleModal, 
    setShowScheduleModal,
    tentativeTimes, 
    setTentativeTimes,
    addNewTentativeTimes,
    removeFromTentativeTimes
  };

  return (
    <ScheduleModalContext.Provider value={value}>
      {children}
    </ScheduleModalContext.Provider>
  );
};
