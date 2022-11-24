import { useContext } from 'react';
import { TimeSlotSetterProps, TIMESLOTSETTER_TYPE_CLASSES } from "../../../interface/book-meeting/book-with-mentor.interface";
import { ScheduleModalContext } from '../../../../state-management/ReactContext/ScheduleModalContext';
import TimeTextField from './TimeTextField';

const TimeSlotSetter = ({ meeting, meetingType, index }: TimeSlotSetterProps) => {
    const { removeFromExistingTimes } = useContext(ScheduleModalContext);

    const removeTime = () => {
        if(meetingType == TIMESLOTSETTER_TYPE_CLASSES.existing){
            removeFromExistingTimes(index as number)
        } else if(meetingType == TIMESLOTSETTER_TYPE_CLASSES.new){
            //removeFromNewTimes(index as number)
        }
    }

    return (
        <div className="flex flex-row">
            {/* start time */}
            <TimeTextField meeting={meeting} whichTime={"start"} index={index}/>
            {/* dash icon */}
            <svg height="20" width="30" className='w-4 md:w-7 xl:w-7 stroke-primary-1 ml-1 mr-2 md:ml-2 md:mr-4 mt-2 xl:mt-4'>
                <path className="top-10" strokeWidth="2" d="M5 10 l215 0" />
            </svg>
            {/* end time */}
            <TimeTextField meeting={meeting} whichTime={"end"} index={index}/>
            {/* delete button */}
            <svg onClick={removeTime} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 w-5 md:w-6 md:h-6 xl:w-7 xl:h-7 ml-2 xl:ml-5 md:mt-2 xl:mt-3">
                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
            </svg>
        </div>
    );
};

export default TimeSlotSetter;
