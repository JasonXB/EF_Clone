import React from 'react';
import Button from '../../src/components/buttons/reusable-buttons';
import Layout from '../../src/components/Layout';
import ApplicationListItem from '../../src/components/menteeHome/ApplicationListItem';
import MeetingListItem from '../../src/components/menteeHome/MeetingListItem';
import OutlinedButton from '../../src/components/menteeHome/OutlinedButton';
import SimilarMentors from '../../src/components/menteeHome/SimilarMentors';
import { MockData } from '../../src/interface/mentee/homepage';

export default function Index() {
  // Mock data all grouped in the following objects
  const mock: MockData = {
    username: 'Chris Hill',
    meetings: [
      {
        mentorName: 'Elon Musk',
        mentorPosition: 'CEO at SpaceX',
        date: 'Sept 10th 2022',
        time: '10:00am to 11:00am EST',
      },
      {
        mentorName: 'Samantha Philipopulous',
        mentorPosition: 'CEO at SpaceX',
        date: 'Oct 10th 2022',
        time: '10:00am to 11:00am EST',
      },
      {
        mentorName: 'Lucas Gerrard',
        mentorPosition: 'Frontend Lead at Empowered Futures Encorporated',
        date: 'May 1st 2022',
        time: '10:00am to 11:00am EST',
      },
      {
        mentorName: 'Kane Hill',
        mentorPosition: 'IT services at UOIT',
        date: 'Feb 29th 2022',
        time: '10:00am to 11:00am EST',
      },
    ],
    applications: [
      { mentorName: 'Darra Wittney', status: 'Approved' },
      { mentorName: 'Elon Musk', status: 'Viewed' },
      { mentorName: 'Jack Atlas', status: 'Sent' },
      { mentorName: 'Ebrahim Merchant', status: 'Sent' },
    ],
    similarMentors: [
      {
        mentorName: 'Darra Whitney',
        location: 'USA',
        mentorPosition: 'Project Manager at EF',
        bubbleTag1: 'Entrepeneurship',
        bubbleTag2: 'Management',
        image: '/temp-assets/Emilio-lg.jpg',
      },
      {
        mentorName: 'Darra Whitney',
        location: 'USA',
        mentorPosition: 'Project Manager at EF',
        bubbleTag1: 'Entrepeneurship',
        bubbleTag2: 'Management',
        image: '/temp-assets/Emilio-lg.jpg',
      },
      {
        mentorName: 'Darra Whitney',
        location: 'USA',
        mentorPosition: 'Project Manager at EF',
        bubbleTag1: 'Entrepeneurship',
        bubbleTag2: 'Management',
        image: '/temp-assets/Emilio-lg.jpg',
      },
      {
        mentorName: 'Darra Whitney',
        location: 'USA',
        mentorPosition: 'Project Manager at EF',
        bubbleTag1: 'Entrepeneurship',
        bubbleTag2: 'Management',
        image: '/temp-assets/Emilio-lg.jpg',
      },
    ],
  };

  return (
    <Layout
      noBottomPadding={true}
      background="none"
      onLeftNavbar={true}
      userType="mentee"
    >
      <h3 className="mt-10 font-semibold text-center text-primary-1">
        Welcome back
        <br className="sm:hidden" /> {mock.username}
      </h3>
      <section className="flex flex-col lg:flex-row">
        <div className="mt-10 flex-1 flex flex-col justify-between lg:pr-5">
          <h4 className="mb-6 font-bold text-center text-primary-1">
            My Applications
          </h4>
          <ul className="flex flex-col gap-3">
            {mock.applications.length > 0 ? (
              mock.applications.map((el, i: number) => {
                if (i > 2) return; // render a max of 3
                return (
                  <ApplicationListItem
                    key={i}
                    mentorName={el.mentorName}
                    status={el.status}
                  />
                );
              })
            ) : (
              <h6 className="mt-10 text-center">No applications!</h6>
            )}
          </ul>
          {mock.applications.length > 3 && (
            <div className="w-full flex justify-center mt-4">
              <Button variant="secondary" className="mx-auto">
                See all applications
              </Button>
            </div>
          )}
        </div>
        <div className="mt-10 flex-1 flex flex-col justify-between border-l border-black lg:pl-5">
          <h4 className="mb-6 font-bold text-center text-primary-1">
            Upcoming Meetings
          </h4>
          <ul className="flex flex-col gap-3">
            {mock.meetings.length > 0 ? (
              mock.meetings.map((el, i: number) => {
                if (i > 2) return; // render a max of 3
                return (
                  <MeetingListItem
                    key={i}
                    mentorName={el.mentorName}
                    mentorPosition={el.mentorPosition}
                    date={el.date}
                    time={el.time}
                  />
                );
              })
            ) : (
              <h6 className="mt-10 text-center">No meetings planned!</h6>
            )}
          </ul>
          {mock.meetings.length > 3 && (
            <div className="w-full flex justify-center mt-4">
              <Button variant="secondary" className="mx-auto">
                See all meetings
              </Button>
            </div>
          )}
        </div>
      </section>
      <SimilarMentors data={mock.similarMentors} />
    </Layout>
  );
}
