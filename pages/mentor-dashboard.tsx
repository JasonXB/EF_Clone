import type { NextPage } from 'next';

import Layout from '../src/components/Layout';
import MentorshipRequestCard from '../src/components/mentorDashboard/mentorship-request-card';
import UpcomingMeetingCard from '../src/components/mentorDashboard/upcoming-meetings-card';
const placeholderDataForRequest = [
  {
    name: 'Johanna Lave',
    position: 'product manager',
    avatar: 'image src dynamic',
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
    avatar: 'image src dynamic',
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
    avatar: 'image src dynamic',
    age: '31',
    email: 'fakeemail@email.com',
    status: 'pending',
    date: '5th September',
    goalOfMeeting:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut lafibore sed diam nonumy eirmod tempor',
  },
];
const placeholderDataForMeetings = [
  {
    name: 'Johanna Lave',
    avatar: 'image src dynamic',
    nextMeeting: 'September 6th,2022',
    numberOfMeetings: {
      individual: 3,
      totalMins: 120,
    },
  },
  {
    name: 'Johanna Lave',
    avatar: 'image src dynamic',
    nextMeeting: 'August 26th,2022',
    numberOfMeetings: {
      individual: 2,
      totalMins: 60,
    },
  },
  {
    name: 'Johanna Lave',
    avatar: 'image src dynamic',
    nextMeeting: 'August 23rd, 2022',
    numberOfMeetings: {
      individual: 3,
      totalMins: 120,
    },
  },
];

const MentorDashboard: NextPage = ({}) => {
  return (
    <Layout headTitle="Mentor Dashboard">
      <div className="flex flex-col sm:flex-row sm:max-w-[80%] sm:mx-auto sm:space-x-4 md:space-x-10">
        {/* logic needs to be added to carousel more then 3 */}
        {placeholderDataForRequest.map((each, i) => (
          <MentorshipRequestCard key={i} props={each} />
        ))}
      </div>
      <div>
        {placeholderDataForMeetings.map((each, i) => (
          <UpcomingMeetingCard key={i} props={each} />
        ))}
      </div>
    </Layout>
  );
};

export default MentorDashboard;
