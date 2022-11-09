import { useContext, useState, useEffect, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { format, setDay, formatISO, parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import Calendar from '../../../src/components/calendar/Calendar';
import TimeSlots from '../../../src/components/timeSlots/TimeSlots';
import TimeZonesDropdown from '../../../src/components/timezonesDropdown/TimeZonesDropdown';
import Button from '../../../src/components/buttons/reusable-buttons';
import Layout from '../../../src/components/Layout';
import Avatar from '../../../src/components/avatar/avatar';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { mentorsData } from '../../../src/tempData/dummyMentorsForCalendar';
import { Mentor } from '../../../src/interface/book-meeting/book-with-mentor.interface';

/*
  IMPROVEMENT TO FEATURES: 
  - center the avaiable time slots
  - gears background
  - recurring day feature
  - API for mentor availabilities
  - API for mentor's meetings (to be used in the recurring feature)
    - if mentor already has a meeting on the particular date of the recurring timeslot, 
    - we must omit that one
*/

const BookMeeting = () => {
  const router = useRouter();
  const mentorId = router.query.mentorId;
  const [thisMentor, setThisMentor] = useState({} as Mentor);

  useEffect(() => {
    if (router.isReady) {
      let mentorFound = mentorsData.find(
        (mentor) => mentor.mentor_id.toString() === mentorId
      );
      //place holder for demo
      if (!mentorFound) {
        mentorFound = mentorsData.find(
          (mentor) => mentor.mentor_id.toString() === '122'
        );
      }
      setThisMentor(mentorFound as SetStateAction<Mentor>);
    } else {
      console.log('loading');
    }
  }, [router.isReady, mentorId]);

  const { firstName, lastName, position, company, imgUrl, meeting_availability } = thisMentor;
  
  const fullName = firstName + ' ' + lastName
  const { selectedTimeSlot, IANACounterpart } = useContext(TimezoneContext);
  const startTime = parseISO(selectedTimeSlot.startDatetime)
  const endTime = parseISO(selectedTimeSlot.endDatetime)

  //used for the item 3 review meeting information
  let timeReview = '';

  //checks if the user has selected a time
  const hasSelectedATime = JSON.stringify(selectedTimeSlot) !== `{"startDatetime":"","endDatetime":""}`

  if (hasSelectedATime) {
    //Nov 15th Tuesday 07:30 PM - 
    const start = formatInTimeZone(startTime, IANACounterpart as unknown as string, 'LLL do EEEE hh:mm a - ')
    // 05:00 PM (CST)
    const end = formatInTimeZone(endTime, IANACounterpart as unknown as string, 'hh:mm a (zzz)')
    //Nov 15th Tuesday 07:30 PM - 05:00 PM (CST)
    timeReview = start + end    
  }

  //pass data to next page
  //variable for passing data to next page
  let meetingDetails = {};

  if (hasSelectedATime) {
    meetingDetails = {
      mentorFirstName: 'Sarah',
      mentorLastName: 'Geronimo',
      mentorImg: imgUrl,
      meetingStartDatetime: startTime,
      meetingEndDatetime: endTime,
      meetingMethod: 'Google Meet',
    };
  }

  const postMeeting = async () => {
    try {
      const meeting = {
        mentorID: thisMentor.mentor_id,
        menteeID: 999,
        date: formatISO(startTime, {
          representation: 'date',
        }), //type to be fixed
        time: formatISO(startTime, {
          representation: 'date',
        }), //type to be fixed
        meetingMethod: 'Google Meeting',
      };


      //accessToken from AuthContext will be used
      //placeholder token
      let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjljZTNhNDkzYzE3NTNiN2UxZGU5MCIsImlhdCI6MTY2Nzg3ODYzMywiZXhwIjoxNjY3OTY1MDMzfQ.0nTpLZgcz3CmirJRSoa1Z2vG7VRQTxmOLoIWYhD94-k"

      const response = await fetch(
        'https://efback.azurewebsites.net/api/meeting/auth/set_meeting/',
        {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            // Authorization: "Bearer " + token,
        },
          body: JSON.stringify(meeting),
        }
      );
      const data = await response.json()
      console.log('meeting',meeting);
      console.log('data',data);
    } catch (err: any) {
      //type to be fixed
      console.log('POST error: ', err.message);
    }
  };

  const [needToChooseTime, setNeedToChooseTime] = useState(false)

  const bookMeeting = () => {
    if (JSON.stringify(meetingDetails) === '{}') {
      setNeedToChooseTime(true)
    } else {
      postMeeting();
    }
  };

  return (
    <Layout background="none">
      {meeting_availability?.specific && (
        <div className="flex flex-row bg-smoke-5 m-[-2rem]">
          {/* left side with basic info */}
          <div className="flex flex-col items-center w-1/5 h-full">
            {/* basic info block*/}
            <div className="absolute flex flex-col items-center top-1/3">
              <Avatar
                imgLocation={
                  imgUrl ||
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzIyMTJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljfGVufDB8fHx8MTY2NjA2NTM1Nw&ixlib=rb-1.2.1&q=80&w=400'
                }
                displaySize="large"
                personsName={fullName}
              />
              <h5 className="mt-2 font-medium text-primary-1">{fullName}</h5>
              <p className="text-sm">
                {position} at {company}
              </p>
            </div>
            {/* --- */}
          </div>
          {/* --- */}

          {/* right side with meeting questions */}
          <div className="w-4/5 h-full px-16 bg-white py-28">
            <h4 className="mb-16 font-semibold text-primary-1">
              Schedule your Meeting with {firstName}
            </h4>
            <div className="space-y-20">
              {/* ITEM 1: Choosing the meeting schedule---------------------------------- */}
              <div>
                <h5 className="font-medium">1. Select Date And Time</h5>
                {needToChooseTime && 
                  <div className="bg-red-100 rounded-lg py-5 px-6 my-6 text-base text-red-700 font-medium inline-flex items-center w-full" role="alert">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                    </svg>
                    <p>Please select the date and time for the meeting</p>
                  </div>
                }
                {/* style to separate the calendar and timeslot blocks in its own grids */}
                <div className="md:grid md:grid-cols-3">
                  <div className="col-span-2">
                    <Calendar meeting_availability={meeting_availability} />
                  </div>

                  {/* available time slots block */}
                  <div className="pt-1 mt-12 md:mt-0 md:pl-14 place-items-center">
                    {/* -- AVAILABILITY HEADER -- */}
                    <div className="items-center justify-center py-10 border-t border-primary-1">
                      <div className="flex">
                        {/* -- clock icon -- */}
                        <div className="px-2 text-primary-1">
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
                <div className="flex flex-row p-4 space-x-4">
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
                <div className="flex flex-row justify-between w-11/12 p-4">
                  <div className="flex flex-row space-x-2 font-medium">
                    <p>Meeting with </p>
                    <p className="font-bold">{fullName}</p>
                  </div>
                  <div className="flex flex-row space-x-2 font-medium">
                    <p>Time: </p>
                    {hasSelectedATime ? (
                      <p className="font-bold">{timeReview}</p>
                    ) : (
                      <p className="font-bold">None</p>
                    )}
                  </div>
                  <div className="flex flex-row space-x-2 font-medium">
                    <p>Meeting Method:</p>
                    <p className="font-bold">Google Meet</p>
                  </div>
                </div>
              </div>
              {/* ^ end of item 3 div */}
              {/* SUBMIT BUTTON------------------------------------------------- /meeting/confirmedMeeting*/}
              <Link
                href={{
                  pathname:
                    JSON.stringify(meetingDetails) !== '{}'
                      ? '/mentee/meeting/confirmedMeeting'
                      : '#',
                  query: meetingDetails,
                }}
              >
                <div>
                  <Button variant="primary" clickHandler={bookMeeting}>
                    Book Meeting
                  </Button>
                </div>
              </Link>
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
