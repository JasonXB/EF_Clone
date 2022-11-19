import { useContext, useState, useEffect, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { format, formatISO } from 'date-fns';
import Calendar from '../../../../src/components/calendar/Calendar';
import TimeSlots from '../../../../src/components/timeSlots/TimeSlots';
import TimeZonesDropdown from '../../../../src/components/timezonesDropdown/TimeZonesDropdown';
import Button from '../../../../src/components/buttons/reusable-buttons';
import Layout from '../../../../src/components/Layout';
import Avatar from '../../../../src/components/avatar/avatar';
import { TimezoneContext } from '../../../../state-management/ReactContext/TimezoneContext';
import { mentorsData } from '../../../../src/tempData/dummyMentorsForCalendar';
import { Mentor } from '../../../../src/interface/book-meeting/book-with-mentor.interface';

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

  const { name, position, company, imgUrl, meeting_availability } = thisMentor;

  const { selectedTimeSlot } = useContext(TimezoneContext);

  let timeReview = '';

  if (
    JSON.stringify(selectedTimeSlot) !== '{"startDatetime":{},"endDatetime":{}}'
  ) {
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
    )?.value;
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

  // console.log('JSON',JSON.stringify(selectedTimeSlot.startDatetime) === '{}');

  //pass data to next page

  //placeholder for passing data to next page
  let meetingDetails = {};

  if (
    JSON.stringify(selectedTimeSlot.startDatetime) !== '{}' &&
    JSON.stringify(selectedTimeSlot.endDatetime) !== '{}'
  ) {
    meetingDetails = {
      mentorFirstName: 'Sarah', // fix to work with first name
      mentorLastName: 'Geronimo', // fix to work with first name
      mentorImg: imgUrl,
      meetingStartDatetime: formatISO(selectedTimeSlot.startDatetime),
      meetingEndDatetime: formatISO(selectedTimeSlot.endDatetime),
      meetingMethod: 'Google Meet',
    };
  }

  const postMeeting = async () => {
    try {
      const meeting = {
        mentorID: thisMentor.mentor_id,
        menteeID: 11,
        date: formatISO(selectedTimeSlot.startDatetime, {
          representation: 'date',
        }), //type to be fixed
        time: formatISO(selectedTimeSlot.startDatetime, {
          representation: 'date',
        }), //type to be fixed
        meetingMethod: 'Google Meeting',
      };
      const response = await fetch(
        'https://efback.azurewebsites.net/api/meeting/auth/set_meeting/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(meeting),
        }
      );
      // const data = await response.json()
      // console.log('meeting',meeting);
      // console.log('data',data);
    } catch (err: any) {
      //type to be fixed
      console.log('POST error: ', err.message);
    }
  };

  const bookMeeting = () => {
    if (JSON.stringify(meetingDetails) === '{}') {
      alert('Please select the date and time for the meeting');
    } else {
      postMeeting();
    }
  };

  return (
    <Layout background="none">
      {meeting_availability?.specific && (
        <div className="flex flex-row bg-hue-300 m-[-2rem]">
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
                personsName={name}
              />
              <h5 className="mt-2 font-medium text-primary-1">{name}</h5>
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
              Schedule your Meeting with {name}
            </h4>
            <div className="space-y-20">
              {/* ITEM 1: Choosing the meeting schedule---------------------------------- */}
              <div>
                <h5 className="font-medium">1. Select Date And Time</h5>

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
                    className={`w-64 flex items-center py-3 group rounded-2xl focus-within:bg-gray-100 hover:bg-gray-100 border-primary-1 border-4 bg-secondary-1 font-bold`}
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
                    <p className="font-bold">{name}</p>
                  </div>
                  <div className="flex flex-row space-x-2 font-medium">
                    <p>Time: </p>
                    {JSON.stringify(selectedTimeSlot) === '{}' ? (
                      <p className="font-bold">None</p>
                    ) : (
                      <p className="font-bold">{timeReview}</p>
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
                      ? '/mentee/meeting/confirmed'
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
