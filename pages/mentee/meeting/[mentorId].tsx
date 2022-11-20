import { useContext, useState, useEffect, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { formatISO, parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
//data
import { mentorsData } from '../../../src/tempData/dummyMentorsForCalendar';
//types
import { Mentor, CALENDAR_TYPE_CLASSES } from '../../../src/interface/book-meeting/book-with-mentor.interface';
//hooks
import { useAuth } from '../../../state-management/ReactContext/AuthContext';
import useWindowDimensions  from '../../../src/hooks/useWindowDimensions'
//context
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
//components
import Button from '../../../src/components/buttons/reusable-buttons';
import Layout from '../../../src/components/Layout';
import Avatar from '../../../src/components/avatar/avatar';
import ScheduleSection from '../../../src/components/menteeMeeting/ScheduleSection';
import MeetingMethodSection from '../../../src/components/menteeMeeting/MeetingMethodSection';
import ReviewMeetingInfoSection from '../../../src/components/menteeMeeting/ReviewMeetingInfoSection';
//helper functions
import { determineAvatarSize } from '../../../src/helperFunctions/determine-avatar-size';
import { getCredentialsFromLocalStorage } from '../../../src/api/localStorage';
//endpoints
import { postMeeting } from '../../../src/endpoints/meetings/post-meeting'

/*
  AREAS OF IMPROVEMENT IN THE FEATURES: 
  - gears background
  - recurring day feature
  - API for mentor availabilities
  - API for mentor's meetings (to be used in the recurring feature)
    - if mentor already has a meeting on the particular date of the recurring timeslot, 
    - we must omit that one
*/

const BookMeeting = () => {
  //token used for the accessing the APIs
  const { accessToken, profileID } = useAuth();
  const [thisMentor, setThisMentor] = useState({} as Mentor);
  const [needToChooseTime, setNeedToChooseTime] = useState(false)
  const router = useRouter();
  const mentorId = router.query.mentorId;

  const screen = useWindowDimensions()

  // console.log('getCredentialsFromLocalStorage', getCredentialsFromLocalStorage());
  console.log( "accessToken -- > ", accessToken )
  console.log( "profileID -- > ", profileID )

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
  const { selectedTimeSlot, hasSelectedATime, IANACounterpart } = useContext(TimezoneContext);
  const startTime = parseISO(selectedTimeSlot.startDatetime)
  const endTime = parseISO(selectedTimeSlot.endDatetime)

  //used for the item 3 review meeting information
  let timeReview = '';

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
      mentorFirstName: firstName,
      mentorLastName: lastName,
      mentorImg: imgUrl,
      meetingStartDatetime: startTime,
      meetingEndDatetime: endTime,
      meetingMethod: 'Google Meets',
    };
  }

  // console.log("---  ", getCredentialsFromLocalStorage());
  

  const bookMeeting = () => {
    if (JSON.stringify(meetingDetails) === '{}') {
      setNeedToChooseTime(true)
    } else {
      let meeting = {
        mentorID: thisMentor.mentor_id,
        menteeID: profileID,
        date: formatISO(startTime),
        time: formatISO(startTime),
        meetingMethod: 'Google Meets',
      };
      postMeeting(meeting, accessToken as string);
    }
  };

  return (
    <Layout background="none">
      {meeting_availability?.specific && (
        <div className="flex lg:flex-row lg:bg-hue-300 m-[-2rem] flex-col">
          {/* div for profile picure and with basic info */}
          <div className="flex lg:flex-col lg:items-center lg:w-1/5 lg:h-full pt-5 pl-5 lg:px-4 bg-hue-300 pb-6 lg:pt-40">
            {/* basic info block*/}
            <div className="flex items-center lg:flex-col flex-row space-x-10 lg:space-x-0">
              <Avatar
                imgLocation={
                  imgUrl ||
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzIyMTJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljfGVufDB8fHx8MTY2NjA2NTM1Nw&ixlib=rb-1.2.1&q=80&w=400'
                }
                displaySize={determineAvatarSize(screen)}
                personsName={fullName}
              />
              {/* name and title */}
              <div className='flex flex-col items-center lg:mr-10 lg:w-full'>
                <h5 className="text-center mt-2 font-medium text-primary-1 text-xl md:text-3xl lg:text-xl xl:text-3xl">{fullName}</h5>
                <p className="text-sm xl:text-xl">
                  {position} at {company}
                </p>
              </div>
            </div>
            {/* --- */}
          </div>
          {/* --- */}

          {/* right side with meeting questions */}
          <div className="lg:w-4/5 h-full px-10 xl:px-16 bg-white py-28 pt-10">
            <h4 className="mb-10 lg:mb-10 xl:mb-16 xl:mt-10 font-semibold text-primary-1 text-2xl md:text-3xl xl:text-4xl">
              Schedule your Meeting with {firstName}
            </h4>
            <div className="space-y-20">
              {/* ITEM 1: Choosing the meeting schedule */}
              <ScheduleSection needToChooseTime={needToChooseTime} meeting_availability={meeting_availability} />
              {/* ITEM 2: Choosing meeting method */}
              <MeetingMethodSection />
              {/* ITEM 3: Review meeting information */}
              <ReviewMeetingInfoSection fullName={fullName} timeReview={timeReview} hasSelectedATime={hasSelectedATime} />
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
                <div className='xs:w-44'>
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
