import React from 'react';
import Layout from '../../src/components/Layout';
import ApplicationListItem from '../../src/components/menteeHome/ApplicationListItem';
import MeetingListItem from '../../src/components/menteeHome/MeetingListItem';
import OutlinedButton from '../../src/components/menteeHome/OutlinedButton';
import { MockData } from '../../src/interface/mentee/homepage';

export default function index() {
  //! The number of applications must range from 0 to 3max
  //! Responsive until viewport width of 650px
  //! Need UI team mobile layout before continuing (or else many assumptions will be required)
  // Mock data all grouped in the following objects
  const mock: MockData = {
    username: 'Chris Hill',
    meetings: [
      {
        mentorName: 'Elon Tusk',
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
    ],
    applications: [
      { mentorName: 'Darra Wittney', status: 'approved' },
      { mentorName: 'Elon Musk', status: 'viewed' },
      { mentorName: 'Jack Atlas', status: 'sent' },
    ],
  };

  return (
    <Layout>
      <h3 className="text-center mt-10 text-primary-1">
        Welcome back {mock.username}
      </h3>
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x">
        <div className="lg:pr-5 mt-10">
          <h4 className="text-center mb-6 text-primary-1">My Applications</h4>
          {mock.applications.length > 0 ? (
            mock.applications.map((el, i: number) => {
              return (
                <ApplicationListItem
                  key={i}
                  mentorName={el.mentorName}
                  status={el.status}
                />
              );
            })
          ) : (
            <h6 className="text-center mt-10">No applications!</h6>
          )}
          <OutlinedButton text="See all applications" onClick={() => {}} />
        </div>
        <div className="lg:pl-5 mt-10">
          <h4 className="text-center mb-6 text-primary-1">Upcoming Meetings</h4>
          <ul>
            {mock.meetings.length > 0 ? (
              mock.meetings.map((el, i: number) => {
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
              <h6 className="text-center mt-10">No meetings planned!</h6>
            )}
          </ul>
          <OutlinedButton text="See all meetings" onClick={() => {}} />
        </div>
      </section>
      <section className="bg-[#F2F2F2] mt-10">
        <h4 className="text-center">
          We think these mentors are a good match for you
        </h4>
        <h6 className="text-center">
          Waiting for reusable carousel component from Mentor Dashboard ticket
        </h6>
      </section>
    </Layout>
  );
}
