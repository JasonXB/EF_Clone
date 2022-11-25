import { useState, useContext, ChangeEvent } from 'react';
import { format, formatISO, startOfDay } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { TENTATIVE_MEETINGS_TYPE_CLASSES } from '../../../enum/calendar/calendar.enum';
import { TentativeTime, TimeTextFieldProps } from "../../../interface/book-meeting/book-with-mentor.interface";

import { classNames } from '../../../util/class-names'
import { TimezoneContext } from '../../../../state-management/ReactContext/TimezoneContext';
import { ScheduleModalContext } from '../../../../state-management/ReactContext/ScheduleModalContext';

const determineTimePart = (whichTime: string, meeting: TentativeTime): string => {
    //condition to handle start or end time
    if(whichTime == "start"){
        return meeting.startDatetime
    } else if (whichTime == "end"){
        return meeting.endDatetime
    }
    return ''
}

const determineZonedTime = (meetingType: TENTATIVE_MEETINGS_TYPE_CLASSES, meeting: TentativeTime, timePart: string, IANACounterpart: Promise<string>) => {
    //condition to handle null time slots
    if(meetingType == TENTATIVE_MEETINGS_TYPE_CLASSES.new && meeting.isNull == true){
        return startOfDay(new Date())
    } else {
        //converted timezones by referring to the useState variable IANACounterpart-------------
        return utcToZonedTime(timePart, IANACounterpart as unknown as string);
    }
}

//checks if meeting type is new or existing. If existing, always return false. If new, we must rely on meeting.isNull property
const determineTimeNull = (meetingType: TENTATIVE_MEETINGS_TYPE_CLASSES, meeting: TentativeTime) => {
    if(meetingType == TENTATIVE_MEETINGS_TYPE_CLASSES.new){
        return meeting.isNull
    } else {
        return false;
    }
}

//if meeting type is existing, return formatted zonedTime, if not, ignore zonedTime because start of day with timezone doesn't always return 00:00
const determineTimeString = (meetingType: TENTATIVE_MEETINGS_TYPE_CLASSES, zonedTime: Date) => {
    if(meetingType == TENTATIVE_MEETINGS_TYPE_CLASSES.existing){
        return format(zonedTime, 'HH:mm')
    } else {
        return '00:00';
    }
}

const TimeTextField = ({ meeting, meetingType, whichTime, index }: TimeTextFieldProps) => {
    const { IANACounterpart } = useContext(TimezoneContext);
    const { updateExistingTime, updateNewTime } = useContext(ScheduleModalContext);

    let timePart: string = determineTimePart(whichTime, meeting);
    let zonedTime: Date = determineZonedTime(meetingType, meeting, timePart, IANACounterpart)
    const timeString = determineTimeString(meetingType, zonedTime)
    
    const initialTimeNull = determineTimeNull(meetingType, meeting)

    const [timeInput, setTimeInput] = useState(timeString)
    //variable used to set the text color of the time to gray if it is null
    const [isFieldNull, setIsFieldNull] = useState(initialTimeNull) 

    const editTimeString = (meetingTime: string, newTime: string) => {        
        const tCharIndex = meetingTime.indexOf("T");
        //2022-11-15T
        const datePart = meetingTime.substring(0, tCharIndex + 1)
        //:00-08:00
        const lastPart = meetingTime.substring(tCharIndex + 6, meetingTime.length)
        
        return datePart +  newTime + lastPart
    }

    //event handler when changing time
    const changeTime = (event: ChangeEvent<HTMLInputElement>) => {
        const timeInput = (event.target as HTMLInputElement).value
        const editedDateTime = editTimeString(timePart, timeInput)
        let newMeeting = {} as TentativeTime

        //four conditions which handle startTime vs. endTime and existingTime vs. newTime
        if(whichTime == "start"){
            //startTime and existingTime
            if(meetingType == TENTATIVE_MEETINGS_TYPE_CLASSES.existing){
                newMeeting = {...meeting, startDatetime: editedDateTime, isUpdated: true }
                updateExistingTime(index, newMeeting)
            //startTime and newTime
            } else if (meetingType == TENTATIVE_MEETINGS_TYPE_CLASSES.new) {
                newMeeting = {...meeting, startDatetime: editedDateTime, isNull: false }
                updateNewTime(index, newMeeting)
            }
        } else if (whichTime == "end"){
            //endTime and existingTime
            if(meetingType == TENTATIVE_MEETINGS_TYPE_CLASSES.existing){
                newMeeting = {...meeting, endDatetime: editedDateTime, isUpdated: true }
                updateExistingTime(index, newMeeting)
            //endTime and newTime
            } else if (meetingType == TENTATIVE_MEETINGS_TYPE_CLASSES.new) {
                newMeeting = {...meeting, endDatetime: editedDateTime, isNull: false }
                updateNewTime(index, newMeeting)
            }
        }

        setTimeInput((event.target as HTMLInputElement).value)
        setIsFieldNull(false)
    }
    
    return (
        <div>
            <input 
                onChange={changeTime} 
                className={classNames(
                    "bg-red-100 border-2 border-primary-1 rounded-lg text-[11px] sm:text-sm md:text-base xl:text-lg font-bold p-1 xl:p-2 w-24 sm:w-32 xl:w-40",
                    (isFieldNull as boolean) && "text-hue-400"
                    )} 
                type="time" min="00:00" max="24:00" value={timeInput}
            />
        </div>
    )
}

export default TimeTextField