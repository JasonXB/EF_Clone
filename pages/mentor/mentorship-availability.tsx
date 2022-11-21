import { useContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import calendarImg from '../../public/assets/vectorCalendar.png';
import { mentorsData } from '../../src/tempData/dummyMentorsForCalendar';
import Calendar from '../../src/components/calendar/Calendar';
import TimeZonesDropdown from '../../src/components/timezonesDropdown/TimeZonesDropdown';
import Button from '../../src/components/buttons/reusable-buttons';
import { Mentor, CALENDAR_TYPE_CLASSES, TIMEZONESDROPDOWN_TYPE_CLASSES } from '../../src/interface/book-meeting/book-with-mentor.interface';
import { CalendarContext } from '../../state-management/ReactContext/CalendarContext';

/*
  AREAS OF IMPROVEMENT IN THE FEATURES: 
  - mentor status feature
  - duration for mentorship feature
  - sessions per day feature
  - add design for meeting method
*/

const MentorshipAvailability: NextPage = () => {
    const { setSchedule } = useContext(CalendarContext);
    const [ mentor, setMentor ] = useState({} as Mentor)

    //fetch the mentor
    useEffect(() => {
        let foundMentor = mentorsData.find(
            (mentor) => mentor.mentor_id.toString() === '122'
        ) as Mentor

        setMentor(foundMentor)
    }, []);

    //set the schedule after fetching mentor
    useEffect(() => {
        const { meeting_availability } = mentor;
        setSchedule(meeting_availability)
    }, [mentor]);

    return (
        <Layout background="none">
            {/* div for whole page to handle spacing between children*/}
            <div className='space-y-20 pt-14 pb-24'>
                {/* div for heading */}
                <div className='flex flex-col items-center space-y-4'>
                    <h3 className="font-bold text-primary-1">Mentorship Availability</h3>
                    {/* calendar image */}
                    <div>
                        <Image
                            src={calendarImg}
                            alt="calendar image"
                            width={200}
                            height={130}
                        />
                    </div>
                    {/* timezone dropdown div */}
                    <div className='flex z-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                        </svg>
                        <TimeZonesDropdown timezonesDropdownType={TIMEZONESDROPDOWN_TYPE_CLASSES.bold}/>
                    </div>
                </div>
                {/* mentorship status */}
                {/* <h4 className="font-bold text-primary-1">Mentor Status</h4> */}
                {/* div for calendar */}
                <div>
                    <h4 className="font-bold text-primary-1">Set Available Meeting Time</h4>
                    <Calendar calendarType={CALENDAR_TYPE_CLASSES.large} />
                </div>
                {/* div for duration */}
                {/* <div>
                    <div className="border-b border-primary-1 py-5">
                        <h4 className="font-bold text-primary-1">Duration For Each Mentorship Session</h4>
                    </div>
                    <div>options</div>
                </div> */}
                {/* div for session per day */}
                {/* <div>
                    <div className="border-b border-primary-1 py-5">
                        <h4 className="font-bold text-primary-1">Maximum Number Of Mentorship Sessions Per Day</h4>
                    </div>
                    <div>input</div>
                </div> */}
                {/* div for meeting method */}
                {/* <div>
                    <div>Meeting Method</div>
                </div> */}
                {/* save button */}
                {/* <Link
                    href={{pathname: '/mentor'}}
                >
                    <div>
                    <Button variant="primary">Save</Button>
                    </div>
                </Link> */}
            </div>
        </Layout>
    );
};

export default MentorshipAvailability;
