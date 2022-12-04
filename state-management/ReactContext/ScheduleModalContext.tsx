import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { startOfDay, formatISO, format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { TentativeTime } from '../../src/interface/book-meeting/book-with-mentor.interface'

export const ScheduleModalContext = createContext({
  getDefaultNullMeeting: (IANACounterpart: Promise<string>) => { return {} as TentativeTime } ,
  showScheduleModal: false,
  setShowScheduleModal: (() => {}) as Dispatch<SetStateAction<boolean>>,
  existingTimes: [] as TentativeTime[],
  setExistingTimes: (() => {}) as Dispatch<SetStateAction<TentativeTime[]>>,
  newTimes: [] as TentativeTime[],
  setNewTimes: (() => {}) as Dispatch<SetStateAction<TentativeTime[]>>,
  addToNewTimes: (IANACounterpart: Promise<string>) => {},
  removeFromExistingTimes: (index: number) => {},
  removeFromNewTimes: (index: number) => {},
  updateExistingTime: (index: number, newTime: TentativeTime) => {},
  updateNewTime: (index: number, newTime: TentativeTime) => {},
});

interface Children {
  children: ReactNode
}

export const ScheduleModalProvider = ({ children }: Children) => {
  //used for the onClick event of DateBracket to show the modal
  const [showScheduleModal, setShowScheduleModal] = useState(false); 
  const [existingTimes, setExistingTimes] = useState<TentativeTime[]>([])
  const [newTimes, setNewTimes] = useState<TentativeTime[]>([])

  const getDefaultNullMeeting = (IANACounterpart: Promise<string>): TentativeTime => {
    let zonedNullMeeting;
    if (typeof IANACounterpart == 'string') {
        //Thu Nov 24 2022 18:00:00 GMT-0800 (Pacific Standard Time)
        const dayStart = startOfDay(new Date())
        const timezonePart = formatInTimeZone(dayStart, IANACounterpart, 'XXX') // -04:00
        const datePart = format(new Date(), 'yyyy-MM-dd')
        const nullDate = datePart + 'T00:00:00' + timezonePart
        
        zonedNullMeeting = {startDatetime: nullDate, endDatetime: nullDate, isNull: true}
    }
    return zonedNullMeeting as TentativeTime
  }

  const addToNewTimes = (IANACounterpart: Promise<string>) => {
    let nullMeetingDefault = getDefaultNullMeeting(IANACounterpart)
    //handle undefined return of promise
    if(nullMeetingDefault !== undefined) {
      setNewTimes(newTimes => [...newTimes, nullMeetingDefault])
    }    
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
  }
  const updateNewTime = (index: number, updatedTime: TentativeTime) => {
    newTimes[index] = updatedTime
  }
  
  const value = {
    getDefaultNullMeeting,
    showScheduleModal, 
    setShowScheduleModal,
    existingTimes, 
    setExistingTimes,
    newTimes, 
    setNewTimes,
    addToNewTimes,
    removeFromExistingTimes,
    removeFromNewTimes,
    updateExistingTime,
    updateNewTime
  };

  return (
    <ScheduleModalContext.Provider value={value}>
      {children}
    </ScheduleModalContext.Provider>
  );
};