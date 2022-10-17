import type { NextPage } from 'next';

import Layout from '../../src/components/Layout';

import DisplayMentorShipContainer from '../../src/components/mentorDashboard/display-mentorship-requests';
import DisplayUpcomingAvailabilityContainer from '../../src/components/mentorDashboard/display-upcoming-availability';

const MentorDashboard: NextPage = ({}) => {
  return (
    <Layout headTitle="Mentor Dashboard">
      <DisplayMentorShipContainer />
      <hr className="my-6" />
      <DisplayUpcomingAvailabilityContainer />
    </Layout>
  );
};

export default MentorDashboard;
