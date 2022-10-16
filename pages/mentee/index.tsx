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
interface meetingLi { mentorName: string; mentorPosition: string; date: string; time: string; } // prettier-ignore
export default function index() {
  //! The number of applications must range from 0 to 3max
  //! Render a visual for no applications or meetings yet (test out)
  // Mock data all grouped in the following objects
  const mock = {
    username: 'Chris Hill',
    meetings: [
      {
        mentorName: 'Elon Tusk',
        mentorPosition: 'CEO at SpaceX',
        date: '10th Oct 2022',
        time: '10:00am to 11:00am EST',
      },
      {
        mentorName: 'Samantha Philipopulous',
        mentorPosition: 'CEO at SpaceX',
        date: '10th Oct 2022',
        time: '10:00am to 11:00am EST',
      },
      {
        mentorName: 'Lucas Gerrard',
        mentorPosition: 'Frontend Lead at Empowered Futures Encorporated',
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
      <h3 className="text-center mb-10">Welcome back {mock.username}</h3>
      <section className="grid grid-cols-2 divide-x">
        <div className="pr-5">
          <h4 className="text-center mb-6">My Applications</h4>
          <li className="grid grid-cols-[70%,_30%] gap-5">
            <div className="grid grid-cols-[70%,_30%] divide-x items-center w-full shadowVariant1 rounded-2xl px-[26px] py-[16px]"></div>
            <Button>Book Meeting</Button>
          </li>
          {/* <OutlinedButton text="See all applications" onClick={() => {}} /> */}
        </div>
        <div className="pl-5">
          <h4 className="text-center mb-6">Upcoming Meetings</h4>
          <ul>
            {mock.meetings.length > 0 ? (
              mock.meetings.map((el: meetingLi, i: number) => {
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
              <h6 className="text-center mb-5">No meetings planned!</h6>
            )}
          </ul>
          <OutlinedButton text="See all meetings" onClick={() => {}} />
        </div>
      </section>
    </Layout>
  );
}

function OutlinedButton(props: { text: string; onClick: Function }) {
  return (
    <button
      type="button"
      className="block mx-auto text-lg px-8 py-2 border-2 border-[#ff7474] text-gray-800 font-medium leading-tight rounded-full"
    >
      {props.text}
    </button>
  );
}

function MeetingListItem(props: meetingLi) {
  return (
    <li className="grid grid-cols-[50%,_30%,_20%] divide-x items-center mb-4 w-full shadowVariant1 rounded-2xl px-[26px] py-[16px] h-[5.875rem]">
      <div className="flex flex-row pr-4 divide-x-0">
        <div className="relative rounded-[5px] overflow-hidden w-[62px] h-[62px] pr-4 flex align-middle">
          <Image
            src="/temp-assets/elon-profile.jpg"
            alt="elon musk pfp"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-center ml-4 truncate">
          <p className="text-xl trailingDots">{props.mentorName}</p>
          <p className="text-[0.6875rem] trailingDots">
            {props.mentorPosition}
          </p>
        </div>
      </div>
      <div className="pl-4 pr-4 h-full flex flex-col justify-center truncate">
        <p className="text-xl text-center trailingDots">{props.date}</p>
        <p className="text-[0.6875rem] text-center trailingDots">
          {props.time}
        </p>
      </div>
      <div className="pl-4 h-full flex flex-col justify-center">
        <button
          type="button"
          className="inline-block px-4 py-2 border-2 m-0 h-[2rem] border-[#FF0A0A] text-[#FF0A0A] font-medium text-xs leading-tight uppercase rounded-[25px]"
        >
          Contact
        </button>
      </div>
    </li>
  );
}

function ApplicationListItem(props: { status: string; mentorName: string }) {
  return (
    <li className="grid grid-cols-[70%,_30%] h-[5.875rem]">
      
      <div className="grid grid-cols-[70%,_30%] divide-x items-center mb-4 w-full shadowVariant1 rounded-2xl px-[26px] py-[16px] h-[5.875rem]">
      </div>
      {/* <Button clickHandler={() => {}}>Book Meeting</Button> */}
    </li>
  );
}
