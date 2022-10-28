import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Calendar from '../../src/components/calendar/Calendar';
import TimeSlots from '../../src/components/timeSlots/TimeSlots';
import TimeZonesDropdown from '../../src/components/timezonesDropdown/TimeZonesDropdown';
import Button from '../../src/components/buttons/reusable-buttons';
import Layout from '../../src/components/Layout';
import Avatar from '../../src/components/avatar/avatar';
import { TimezoneContext } from '../../state-management/ReactContext/TimezoneContext';

import mentorsData from '../../src/tempData/dummyMentorsForCalendar';

const BookMeeting = () => {
  const router = useRouter();
  const mentorId = router.query.mentorId;
  const [thisMentor, setThisMentor] = useState({});

  useEffect(() => {
    if (router.isReady) {
      const findMentor = mentorsData.find(
        (mentor) => mentor.mentor_id.toString() === mentorId
      );
      setThisMentor(findMentor);
    } else {
      console.log('loading');
    }
  }, [router.isReady, mentorId]);

  const { name, position, company, imgUrl, meeting_availability } = thisMentor;

  const { selectedTimeSlot } = useContext(TimezoneContext);

  let timeReview = '';

  if (JSON.stringify(selectedTimeSlot) !== '{}') {
    let formatteddateAndDay = format(
      selectedTimeSlot.startDatetime,
      'LLL do EEEE'
    ); //Sep 17th Saturday
    let formattedStartTime = format(selectedTimeSlot.startDatetime, 'hh:mm a'); //09:00 AM
    let formattedEndTime = format(selectedTimeSlot.endDatetime, 'hh:mm a'); //11:30 AM

    //array of formatted date splitted into parts. this is used to get the timezone 'e.g PDT'
    const dateInParts = new Intl.DateTimeFormat('default', {
      timeZoneName: 'short',
    }).formatToParts(selectedTimeSlot.startDatetime);

    // 'PDT'
    const timeZoneShort = dateInParts.find(
      (element) => element.type === 'timeZoneName'
    ).value;
    //Sep 17th Saturday 05:00 PM - 06:30 PM (EST)
    timeReview =
      formatteddateAndDay +
      ' ' +
      formattedStartTime +
      ' - ' +
      formattedEndTime +
      ' (' +
      timeZoneShort +
      ')';
  }

  return (
    <Layout>
      {meeting_availability?.specific && (
        <div className="flex flex-row bg-smoke-5 m-[-2rem]">
          {/* left side with basic info */}
          <div className="w-1/5 flex flex-col items-center h-full">
            {/* basic info block*/}
            <div className="absolute top-1/3 flex flex-col items-center">
              <Avatar
                imgLocation={
                  imgUrl ||
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzIyMTJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljfGVufDB8fHx8MTY2NjA2NTM1Nw&ixlib=rb-1.2.1&q=80&w=400'
                }
                displaySize="large"
                personsName={name}
              />
              <h5 className="text-primary-1 font-medium mt-2">{name}</h5>
              <p className="text-sm">
                {position} at {company}
              </p>
            </div>
            {/* --- */}
          </div>
          {/* --- */}

          {/* right side with meeting questions */}
          <div className="w-4/5 h-full px-16 py-28 bg-white">
            <h4 className="text-primary-1 font-semibold mb-16">
              Schedule your Meeting with {name}
            </h4>
            <div className="space-y-20">
              {/* ITEM 1: Choosing the meeting schedule---------------------------------- */}
              <div>
                <h5 className="font-medium">1. Select Date And Time</h5>

                {/* style to separate the calendar and timeslot blocks in its own grids */}
                <div className="md:grid md:grid-cols-3">
                  <div className="col-span-2">
                    <Calendar availability={meeting_availability} />
                  </div>

                  {/* available time slots block */}
                  <div className="mt-12 md:mt-0 md:pl-14 pt-1 place-items-center">
                    {/* -- AVAILABILITY HEADER -- */}
                    <div className="py-10 border-t border-primary-1 items-center justify-center">
                      <div className="flex">
                        {/* -- clock icon -- */}
                        <div className="text-primary-1 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        {/* -- */}
                        <p className="font-bold">Available Time Slot</p>
                      </div>
                      {/* dropdown for timezone */}
                      <TimeZonesDropdown />
                      {/* -- */}
                    </div>
                    {/* -- */}
                    {/* -- DISPLAY AVAILABILTIES -- */}
                    <TimeSlots meeting_availability={meeting_availability} />
                    {/* -- */}
                  </div>
                </div>
              </div>
              {/* ITEM 2: Choosing meeting method---------------------------------- */}
              <div>
                <h5 className="font-medium">2. Choose Meeting Method</h5>
                <div className="p-4 flex flex-row space-x-4">
                  <button
                    className={`w-64 flex items-center py-3 group rounded-2xl focus-within:bg-gray-100 hover:bg-gray-100 border-primary-1 border-4 bg-primary-5 font-bold`}
                  >
                    <div className="flex-auto">
                      <p>Google Meet</p>
                    </div>
                  </button>
                  <button
                    className={`w-64 flex items-center py-3 group rounded-2xl focus-within:bg-gray-100 hover:bg-gray-100 border-primary-1 border font-medium`}
                  >
                    <div className="flex-auto">
                      <p>Arrange with Mentor</p>
                    </div>
                  </button>
                </div>
              </div>
              {/* ITEM 3: Review meeting information---------------------------------- */}
              <div>
                <h5 className="font-medium">3. Review Meeting Information</h5>
                <div className="p-4 flex flex-row justify-between w-11/12">
                  <div className="font-medium flex flex-row space-x-2">
                    <p>Meeting with </p>
                    <p className="font-bold">{name}</p>
                  </div>
                  <div className="font-medium flex flex-row space-x-2">
                    <p>Time: </p>
                    {JSON.stringify(selectedTimeSlot) === '{}' ? (
                      <p className="font-bold">None</p>
                    ) : (
                      <p className="font-bold">{timeReview}</p>
                    )}
                  </div>
                  <div className="font-medium flex flex-row space-x-2">
                    <p>Meeting Method:</p>
                    <p className="font-bold">Google Meet</p>
                  </div>
                </div>
              </div>
              {/* ^ end of item 3 div */}
              {/* SUBMIT BUTTON------------------------------------------------- */}
              <Button variant="primary">Book Meeting</Button>
            </div>
            {/* ^ end of div that cover the items */}
          </div>
          {/* --- */}
        </div>
      )}
    </Layout>
  );
};

export default BookMeeting;
