import { useContext } from 'react';
import { format, startOfDay } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import Button from '../buttons/reusable-buttons';
import { TENTATIVE_MEETINGS_TYPE_CLASSES } from '../../enum/calendar/calendar.enum';
import { TentativeTime } from '../../interface/book-meeting/book-with-mentor.interface'
import { CalendarContext } from '../../../state-management/ReactContext/CalendarContext';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { ScheduleModalContext } from '../../../state-management/ReactContext/ScheduleModalContext';
import TimeSlotSetter from '../timeSlots/timeSlotsSetter/TimeSlotSetter';
import { v4 as uuidv4 } from 'uuid';

const ScheduleModal = () => {
    const { 
        getDefaultNullMeeting,
        showScheduleModal, 
        setShowScheduleModal, 
        addToNewTimes, 
        newTimes,
        setNewTimes,
        existingTimes,
        setExistingTimes
    } = useContext(ScheduleModalContext);
    const { selectedDay } = useContext(CalendarContext);
    const { IANACounterpart } = useContext(TimezoneContext);

    let dateHeader = format(selectedDay, 'yyyy LLLL do EEEE')

    let nullMeetingDefault = getDefaultNullMeeting(IANACounterpart)

    const closeModal = () => {
        setShowScheduleModal(false)
        //reset tentativeTimes when closing the modal
        //handle undefined return of promise
        if(nullMeetingDefault !== undefined) {
            setNewTimes([nullMeetingDefault])
        }
        setExistingTimes([])
    }

    const saveAvailabilities = () => {
        setShowScheduleModal(false)
        //reset tentativeTimes clicking save
        if(nullMeetingDefault !== undefined) {
            setNewTimes([nullMeetingDefault])
        }
        setExistingTimes([])
    }

    return (
        <div>
            {showScheduleModal ? (
            <div className="flex justify-center items-center flex-col w-full rounded-lg drop-shadow-[0_20px_20px_rgba(0,0,0,.30)] h-full border-2 border-smoke-3 bg-white space-y-6 xl:space-y-7 pb-10">
                {/* HEADER with icon, date and close button */}
                <div className='flex justify-between bg-blue-100 w-full rounded-t-lg py-2 lg:py-4 xl:py-8 pl-10 pr-7'>
                    <div className='flex space-x-4'>
                        {/* calendar icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        {/* date in header */}
                        <h5 className='font-semibold mt-1 text-base lg:text-xl xl:text-3xl'>{dateHeader}</h5>
                    </div>
                    {/* close icon */}
                    <svg 
                        onClick={closeModal} 
                        className="w-8 h-8 hover:cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {/* MY AVAILABLE TIME */}
                <div className='w-full px-4 ss:px-10 xl:px-10 xl:space-y-4'>
                    {/* my available time header */}
                    <div className='flex space-x-4 p-2 border-b-2 border-primary-1'>
                        {/* clock icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='font-bold text-base xl:text-lg'>My Available Time</p>
                    </div>
                    {/* my available time body */}
                    <div className='flex flex-row justify-between'>
                        <div className="mt-4 space-y-3 text-sm w-11/12 overflow-y-scroll scrollBar max-h-80">
                            {existingTimes.map((existingTime: TentativeTime, index) => (
                                <TimeSlotSetter key={uuidv4()} meeting={existingTime} meetingType={TENTATIVE_MEETINGS_TYPE_CLASSES.existing} index={index}/>
                            ))}
                            {newTimes.map((newTime: TentativeTime, index) => (
                                <TimeSlotSetter key={uuidv4()} meeting={newTime} meetingType={TENTATIVE_MEETINGS_TYPE_CLASSES.new} index={index}/>
                            ))}
                        </div>
                        {/* add timeSlotSetter icon */}
                        <svg onClick={() => addToNewTimes(IANACounterpart)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </div>
                {/* NOTES */}
                <div className='w-full px-4 ss:px-10 xl:px-10 xl:space-y-4'>
                    {/* notes header */}
                    <div className='flex space-x-4 p-2'>
                        {/* notes icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                        <p className='font-bold text-base xl:text-lg'>Notes</p>
                    </div>
                    <textarea 
                        className="block p-2.5 w-full text:base xl:text-lg text-smoke-1 bg-smoke-5 rounded-lg border border-gray-300" 
                        rows={4} 
                        placeholder="Add Notes..." 
                    />
                </div>
                {/* SAVE BUTTON */}
                <Button variant="primary" clickHandler={saveAvailabilities}>Save</Button>
            </div>
            ) : null}
        </div>
    )
}

export default ScheduleModal