import { useState, useContext, ChangeEvent } from 'react';
import { format, startOfDay } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { TENTATIVE_MEETINGS_TYPE_CLASSES } from '../../../enum/calendar/calendar.enum';
import { TentativeTime, TimeTextFieldProps } from "../../../interface/book-meeting/book-with-mentor.interface";

import { classNames } from '../../../util/class-names'
import { TimezoneContext } from '../../../../state-management/ReactContext/TimezoneContext';
import { ScheduleModalContext } from '../../../../state-management/ReactContext/ScheduleModalContext';

const TimeTextField = ({ meeting, meetingType, whichTime, index }: TimeTextFieldProps) => {
    const { IANACounterpart } = useContext(TimezoneContext);
    const { updateExistingTime } = useContext(ScheduleModalContext);

    let timePart: string = '';
    let zonedTime: Date = new Date()

    //condition to handle start or end time
    if(whichTime == "start"){
        timePart = meeting.startDatetime
    } else if (whichTime == "end"){
        timePart = meeting.endDatetime
    }
    
    //condition to handle null time slots
    if(meetingType == TENTATIVE_MEETINGS_TYPE_CLASSES.new && meeting.isNull == true){
        zonedTime = startOfDay(new Date())
    } else {
        //converted timezones by referring to the useState variable IANACounterpart-------------
        zonedTime = utcToZonedTime(timePart, IANACounterpart as unknown as string);
    }

    const timeString = format(zonedTime, 'HH:mm')

    const [timeInput, setTimeInput] = useState(timeString)
    //variable used to set the text color of the time to gray if it is null
    const [isFieldNull, setIsFieldNull] = useState(meeting.isNull) 

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
        if(whichTime == "start"){
            newMeeting = {...meeting, startDatetime: editedDateTime }
        } else if (whichTime == "end"){
            newMeeting = {...meeting, endDatetime: editedDateTime }
        }

        updateExistingTime(index, newMeeting)
        setTimeInput((event.target as HTMLInputElement).value)
        setIsFieldNull(false)
    }
    
    return (
        <div>
            <input 
                onChange={changeTime} 
                className={classNames(
                    "border-2 border-primary-1 rounded-lg text-xs sm:text-sm md:text-base xl:text-lg font-bold p-1 xl:p-2 w-28 sm:w-32 xl:w-40",
                    (isFieldNull as boolean) && "text-hue-400"
                    )} 
                type="time" min="00:00" max="24:00" value={timeInput}
            />
        </div>
    )
}

export default TimeTextField