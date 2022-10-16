import type { NextPage } from 'next';

import Layout from '../src/components/Layout';
import MentorshipRequestCard from '../src/components/mentorDashboard/mentorship-request-card';
import UpcomingMeetingCard from '../src/components/mentorDashboard/upcoming-meetings-card';

import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

/** Logic needed to add
 Carousel option, only show arrows if there is more then 3
 
 */

// Still to do TypeScript interface, remove Any

// Placeholder data, delete in future//////
const placeholderDataForRequest = [
  {
    name: 'Johanna Lave',
    position: 'product manager',
    avatar: 'image src dynamic',
    age: '31',
    email: 'fakeemail@email.com',
    status: 'Pending',
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
    status: 'Pending',
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
    status: 'Pending',
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
////

const DisplayMentorShipContainer = () => (
  <>
    <h1 className="py-4 text-4xl text-center md:text-5xl text-primary-1">
      Mentorship Requests
    </h1>
    {/* logic if there are no requests */}
    {placeholderDataForRequest.length === 0 ? (
      <div className="w-1/2 mx-auto mt-[10%]">
        <p className="font-bold text-center text-smoke-2">
          No new mentorship requests <br /> Check back later.
        </p>
      </div>
    ) : (
      <div className="flex flex-col sm:flex-row md:max-w-[1000px] md:mx-auto sm:space-x-4 md:space-x-10">
        {/* logic needs to be added to carousel more then 3 */}
        {placeholderDataForRequest.map((each, i) => (
          <MentorshipRequestCard key={i} props={each} numberOfRequests={3} />
        ))}
      </div>
    )}
  </>
);

const DisplayUpcomingAvailabilityContainer = () => {
  const toggleClasses = (isSelected: boolean) => {
    const classes = {
      selected: 'bg-primary-5 text-primary-1 rounded-2xl ',
      unselected: 'text-black',
    };
    return `${
      isSelected ? classes.selected : classes.unselected
    } py-2 px-10 w-1/2 `;
  };

  return (
    <div className="mt-16">
      <Tab.Group>
        <Tab.List className=" border-[1px] border-smoke-1 rounded-2xl w-11/12 ss:w-1/2  mx-auto display-flex">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={toggleClasses(selected)}>
                Upcoming Meetings
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={toggleClasses(selected)}>Availability</button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {/* Upcoming meeting/availability   toggle */}
            <div className="space-y-4">
              {/* logic to check if there are any upcoming meetings */}
              {placeholderDataForMeetings.length === 0 ? (
                <div className="w-1/2 mx-auto mt-[10%]">
                  <p className="font-bold text-center text-smoke-2">
                    Sorry no upcoming meetings! <br /> Check back later.
                  </p>
                </div>
              ) : (
                placeholderDataForMeetings.map((each, i) => (
                  <UpcomingMeetingCard
                    key={i}
                    props={each}
                    upcomingMeetingAmount={placeholderDataForMeetings.length}
                  />
                ))
              )}
            </div>
          </Tab.Panel>
          <Tab.Panel className="h-[30vw]">
            <h4 className="mt-[15%] text-smoke-4 text-center">
              Calendar coming soon
            </h4>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

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
