import type { NextPage } from 'next';
import Layout from '../../src/components/Layout';
import DisplayMentorShipContainer from '../../src/components/mentorDashboard/display-mentorship-requests';
import DisplayUpcomingAvailabilityContainer from '../../src/components/mentorDashboard/display-upcoming-availability';
import {
  placeholderDataForRequest,
  placeholderDataForMeetings,
} from '../../src/tempData/temp-data-mentor';

//! check whether a user is authenticated as a mentor, otherwise user is redirected to /auth/login
const MentorDashboard: NextPage = ({}) => {
  return (
    <Layout headTitle="Mentor Dashboard" background="none">
      <DisplayMentorShipContainer data={placeholderDataForRequest} />
      <hr className="my-6" />
      <DisplayUpcomingAvailabilityContainer data={placeholderDataForMeetings} />
    </Layout>
  );
};

export default MentorDashboard;
