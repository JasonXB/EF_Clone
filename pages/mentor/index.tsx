import type { NextPage } from 'next';

import Layout from '../../src/components/Layout';

import DisplayMentorShipContainer from '../../src/components/mentorDashboard/display-mentorship-requests';
import DisplayUpcomingAvailabilityContainer from '../../src/components/mentorDashboard/display-upcoming-availability';
import {
  placeholderDataForRequest,
  placeholderDataForMeetings,
} from '../../src/tempData/temp-data-mentor';

const MentorDashboard: NextPage = ({}) => {
  return (
    <Layout headTitle="Mentor Dashboard">
      <DisplayMentorShipContainer data={placeholderDataForRequest} />
      <hr className="my-6" />
      <DisplayUpcomingAvailabilityContainer data={placeholderDataForMeetings} />
    </Layout>
  );
};

export default MentorDashboard;
