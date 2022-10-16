import React from 'react';
import Layout from '../../src/components/Layout';
import Image from 'next/image';
import Button from '../../src/components/buttons/reusable-buttons';
import gradientPercentBar from '../../src/components/percentBar/gradient-percent-bar';

/* ASSUMPTION MADE (affects logic in this webpage)
There are 3 possible status values for application status
1) Application Approved (shown on adobe)
2) Application Viewed (shown on adobe)
3) Application Sent (Assumption**)
If this assumption is incorrect, contact Jason B for a hotfix
*/
export default function index() {
  //! The number of applications must range from 0 to 3max
  //! Render a visual for no applications or meetings yet (test out)
  // Mock data all grouped in the following objects
  const mock = {
    username: 'Chris Hill',
    meetings: [
      {
        mentorName: 'Darra Wittney',
        position: 'CEO at SpaceX',
        profilePicture: (
          <Image
            src="/src/components/temp-assets/elon-profile.jpg"
            alt="elon musk pfp"
          />
        ),
        date: '10th Oct 2022',
        time: '10:00am to 11:00am EST',
      },
      {
        mentorName: 'Darra Wittney',
        position: 'CEO at SpaceX',
        profilePicture: (
          <Image
            src="/src/components/temp-assets/elon-profile.jpg"
            alt="elon musk pfp"
          />
        ),
        date: '10th Oct 2022',
        time: '10:00am to 11:00am EST',
      },
    ],
    applications: [
      {
        mentorName: 'Darra Wittney',
        status: 'Application Approved',
        percentage: function () {
          if (this.status === 'Application Approved') return 100;
          else if ('Application Viewed') return 33;
          else return 0;
        },
      },
      {
        mentorName: 'Elon Musk',
        status: 'Application Viewed',
        percentage: function () {
          if (this.status === 'Application Approved') return 100;
          else if ('Application Viewed') return 33;
          else return 0;
        },
      },
    ],
  };

  return (
    <Layout>
      <h3>Welcome back {mock.username}</h3>
      <section className="flex flex-row">
        <div>
          <h4>My Applications</h4>
          <Button>Book Meeting</Button>
          <button
            type="button"
            className="inline-block text-lg px-8 py-2 border-2 border-[#ff7474] text-gray-800 font-medium leading-tight uppercase rounded-full"
          >
            See all applications
          </button>
        </div>
        <div>
          <h4>Upcoming Meetings</h4>
        </div>
      </section>
    </Layout>
  );
}
