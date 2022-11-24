import { useContext, useEffect, useState } from 'react';
import Layout from '../../src/components/Layout';
import DisplayMentorShipContainer from '../../src/components/mentorDashboard/display-mentorship-requests';
import UpcomingAvailabilityContainer from '../../src/components/mentorDashboard/display-upcoming-availability';
import Meeting from '../../src/interface/meeting.interface';
import MentorshipRequest from '../../src/interface/mentorship-request';
import MockMentorDB from '../../src/tempData/MockMentorDB';
import getRandomInt from '../../src/util/random-int';
import fetchMentorshipRequests from '../../src/components/mentorDashboard/api/fetch-mentorship-requests';
import { MentorshipRequestsContext } from '../../state-management/ReactContext/MentorshipRequestsContext';


//! check whether a user is authenticated as a mentor, otherwise user is redirected to /auth/login
export default function MentorDashboard() {
  const { setMentorshipRequests } = useContext(MentorshipRequestsContext)
  let [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(
    () => {
      const fetchData = async () => {
        let mentorshipRequestDataWithMenteeInfo= 
          await fetchMentorshipRequests();
        
        setMentorshipRequests(mentorshipRequestDataWithMenteeInfo);
      };

      for (let i = 1; i < 6; i++) {
        let mentor = MockMentorDB.getByID(i);

        let newMeeting: Meeting = {
          avatar: mentor.profile_path,
          name: `${mentor.first_name} ${mentor.last_name}`,
          nextMeeting: new Date().toDateString(),
          numberOfMeetings: {
            individual: getRandomInt(4) + 1,
            totalMins: getRandomInt(120),
          },
        };

        setMeetings((oldMeetings) => [...oldMeetings, newMeeting]);
      }

      fetchData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Layout headTitle="Mentor Dashboard" background="none">
      <DisplayMentorShipContainer />
      <hr className="my-6" />
      <UpcomingAvailabilityContainer meetings={meetings} />
    </Layout>
  );
}
