import React from 'react';
import Layout from '../../src/components/Layout';
import Image from 'next/image';
import Button from '../../src/components/buttons/reusable-buttons';
// import gradientPercentBar from '../../src/components/percentBar/gradient-percent-bar';

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
        // profilePicture: (
        //   <Image
        //     src="/src/components/temp-assets/elon-profile.jpg"
        //     alt="elon musk pfp"
        //     width={'500px'}
        //     height={'500px'}
        //   />
        // ),
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
      <h3 className="text-center">Welcome back {mock.username}</h3>
      <section className="grid grid-cols-2 divide-x ">
        <div className="">
          <h4>My Applications</h4>
          <Button>Book Meeting</Button>
          <OutlinedButton text="See all applications" onClick={() => {}} />
        </div>
        <div className="">
          <h4>Upcoming Meetings</h4>
          <ul>
            <li className="grid grid-cols-[50%,_30%,_20%] divide-x items-center w-full shadowVariant1 rounded-2xl px-[26px] py-[16px]">
              <div className="flex flex-row pr-4 border-l-[0px] divide-x-0">
                <div className="rounded-[5px] overflow-hidden w-[62px] h-[62px] pr-4 flex align-middle">
                  <Image
                    src="/temp-assets/elon-profile.jpg"
                    alt="elon musk pfp"
                    // layout="fill"
                    // objectFit="cover"
                    width={62}
                    height={62}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl">{mock.meetings[0].mentorName}</p>
                  <span className="text-[0.6875rem]">
                    {mock.meetings[0].position}
                  </span>
                </div>
              </div>
              <div className="pl-4 pr-4 h-full flex flex-col justify-center">
                <p className="text-xl text-center">{mock.meetings[0].date}</p>
                <p className="text-[0.6875rem] text-center">
                  {mock.meetings[0].time}
                </p>
              </div>
              <div className="pl-4 h-full flex flex-col justify-center">
                <button
                  type="button"
                  className="inline-block px-6 py-2 border-2 m-0 h-[2rem] border-[#FF0A0A] text-[#FF0A0A] font-medium text-xs leading-tight uppercase rounded-[25px]"
                >
                  Contact
                </button>
              </div>
            </li>
          </ul>
          {/* <OutlinedButton text="See all meetings" onClick={() => {}} /> */}
        </div>
      </section>
    </Layout>
  );
}

function OutlinedButton(props: { text: string; onClick: Function }) {
  return (
    <button
      type="button"
      className="inline-block text-lg px-8 py-2 border-2 border-[#ff7474] text-gray-800 font-medium leading-tight uppercase rounded-full"
    >
      {props.text}
    </button>
  );
}
