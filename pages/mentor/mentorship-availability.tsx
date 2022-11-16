import { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import calendarImg from '../../public/assets/vectorCalendar.png';
import { mentorsData } from '../../src/tempData/dummyMentorsForCalendar';
import Calendar from '../../src/components/calendar/Calendar';
import TimeZonesDropdown from '../../src/components/timezonesDropdown/TimeZonesDropdown';
import Button from '../../src/components/buttons/reusable-buttons';
import { Mentor, CALENDAR_TYPE_CLASSES } from '../../src/interface/book-meeting/book-with-mentor.interface';
import { CalendarContext } from '../../state-management/ReactContext/CalendarContext';


const MentorshipAvailability: NextPage = () => {
    const { setSchedule } = useContext(CalendarContext);

    let thisMentor = mentorsData.find(
        (mentor) => mentor.mentor_id.toString() === '122'
    ) as Mentor

    const { meeting_availability } = thisMentor;

    useEffect(() => {
        setSchedule(meeting_availability)
    }, [thisMentor]);

    return (
        <Layout background="none">
            {/* div for whole page to handle spacing between children*/}
            <div className='space-y-20 pt-14 pb-24'>
                {/* div for heading */}
                <div>
                    <h3 className="font-bold text-primary-1">Mentorship Availability</h3>
                    <Image
                    src={calendarImg}
                    alt="calendar image"
                    width={200}
                    height={130}
                    />
                    <TimeZonesDropdown />
                </div>
                {/* mentorship status */}
                <h4 className="font-bold text-primary-1">Mentor Status</h4>
                {/* div for calendar */}
                <div>
                    <h4 className="font-bold text-primary-1">Set Available Meeting Time</h4>
                    <Calendar calendarType={CALENDAR_TYPE_CLASSES.large} />
                </div>
                {/* div for duration */}
                <div>
                    <div className="border-b border-primary-1 py-5">
                        <h4 className="font-bold text-primary-1">Duration For Each Mentorship Session</h4>
                    </div>
                    <div>options</div>
                </div>
                {/* div for session per day */}
                <div>
                    <div className="border-b border-primary-1 py-5">
                        <h4 className="font-bold text-primary-1">Maximum Number Of Mentorship Sessions Per Day</h4>
                    </div>
                    <div>input</div>
                </div>
                {/* div for meeting method */}
                <div>
                    <div>Meeting Method</div>
                </div>
                {/* save button */}
                <Link
                    href={{pathname: '/mentor'}}
                >
                    <div>
                    <Button variant="primary">Save</Button>
                    </div>
                </Link>
            </div>
        </Layout>
    );
};

export default MentorshipAvailability;
