import type { NextPage } from 'next';

import Layout from '../src/components/Layout';
import MentorshipRequestCard from '../src/components/mentorDashboard/mentorship-request-card';
const placeholderData = [
  {
    name: 'Johanna Lave',
    position: 'product manager',
    age: '31',
    email: 'fakeemail@email.com',
    status: 'pending',
    date: '5th September',
    goalOfMeeting:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lafibore sed diam nonumy eirmod tempor',
  },
  {
    name: 'Johanna Lave',
    position: 'product manager',
    age: '31',
    email: 'fakeemail@email.com',
    status: 'pending',
    date: '5th September',
    goalOfMeeting:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lafibore sed diam nonumy eirmod tempor',
  },
  {
    name: 'Johanna Lave',
    position: 'product manager',
    age: '31',
    email: 'fakeemail@email.com',
    status: 'pending',
    date: '5th September',
    goalOfMeeting:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lafibore sed diam nonumy eirmod tempor',
  },
];

const MentorDashboard: NextPage = ({}) => {
  return (
    <Layout headTitle="Mentor Dashboard">
      <div className="flex flex-col sm:flex-row sm:max-w-[80%] sm:mx-auto sm:space-x-4 md:space-x-10">
        {/* logic needs to be added to carousel more then 3 */}
        {placeholderData.map((each, i) => (
          <MentorshipRequestCard key={i} props={each} />
        ))}
      </div>
    </Layout>
  );
};

export default MentorDashboard;
