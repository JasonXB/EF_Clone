import { useEffect, useState } from 'react';
import Layout from '../../src/components/Layout';
import DisplayMentorShipContainer from '../../src/components/mentorDashboard/display-mentorship-requests';
import UpcomingAvailabilityContainer from '../../src/components/mentorDashboard/display-upcoming-availability';
import Meeting from '../../src/interface/meeting.interface';
import MentorshipRequest from '../../src/interface/mentorship-request';
import MockMentorDB from '../../src/tempData/MockMentorDB';
import getRandomInt from '../../src/util/random-int';

//! check whether a user is authenticated as a mentor, otherwise user is redirected to /auth/login
export default function MentorDashboard() {
  let [mentorshipRequests, setMentorshipRequests] = useState<
    MentorshipRequest[]
  >([]);
  let [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      let mentor = MockMentorDB.getByID(i);

      let newMentorshipRequest: MentorshipRequest = {
        mentor,
        numberOfRequests: getRandomInt(4) + 1,
      };

      setMentorshipRequests((oldMentorshipReqs) => [
        ...oldMentorshipReqs,
        newMentorshipRequest,
      ]);

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
  }, []);

  return (
    <Layout headTitle="Mentor Dashboard" background="none">
      <DisplayMentorShipContainer data={placeholderDataForRequest} />
      <hr className="my-6" />
      <UpcomingAvailabilityContainer meetings={meetings} />
    </Layout>
  );
}
