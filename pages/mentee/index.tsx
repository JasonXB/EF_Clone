import React from 'react';
import Layout from '../../src/components/Layout';
import Image from 'next/image';
import Button from '../../src/components/buttons/reusable-buttons';

interface meetingLi { mentorName: string; mentorPosition: string; date: string; time: string; } // prettier-ignore
interface mentorLi { mentorName: string; status: string; } // prettier-ignore
export default function index() {
  //! The number of applications must range from 0 to 3max
  //! Responsive until viewport width of 650px
  //! Need UI team mobile layout before continuing (or else many assumptions will be required)
  // Mock data all grouped in the following objects
  const mock = {
    username: 'Chris Hill',
    meetings: [
      {
        mentorName: 'Elon Tusk',
        mentorPosition: 'CEO at SpaceX',
        date: '10th Sept 2022',
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
      { mentorName: 'Darra Wittney', status: 'Approved' },
      { mentorName: 'Elon Musk', status: 'Viewed' },
      { mentorName: 'Jack Atlas', status: 'Sent' },
    ],
  };

  return (
    <Layout>
      <h3 className="text-center mt-10">Welcome back {mock.username}</h3>
      <section className="grid grid-cols-1 lgr:grid-cols-2 lgr:divide-x">
        <div className="lgr:pr-5 mt-10">
          <h4 className="text-center mb-6">My Applications</h4>
          {mock.applications.length > 0 ? (
            mock.applications.map((el: mentorLi, i: number) => {
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
        <div className="lgr:pl-5 mt-10">
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
// REUSABLE COMPONENTS EXCLUSIVE TO THIS WEBPAGE
function OutlinedButton(props: { text: string; onClick: Function }) {
  return (
    <button
      type="button"
      className="block mx-auto text-lg px-8 py-2 border-2 border-[#ff7474] text-gray-800 font-medium leading-tight rounded-full mt-12"
    >
      {props.text}
    </button>
  );
}

function MeetingListItem(props: meetingLi) {
  return (
    <li className="grid grid-cols-[45%,_35%,_20%] divide-x items-center mb-4 w-full shadowVariant1 rounded-2xl px-[26px] py-[16px] h-[5.875rem]">
      <div className="flex flex-row pr-4 divide-x-0">
        <div className="relative rounded-[5px] overflow-hidden w-[47px] h-[47px] pr-4 my-auto">
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
      <div className="pl-4 h-full flex flex-col justify-center items-center">
        <button
          type="button"
          className="block px-4 py-2 border-2 m-0 h-[2rem] max-w-[12rem] border-[#FF0A0A] text-[#FF0A0A] font-medium text-xs leading-tight uppercase rounded-[25px]"
        >
          Contact
        </button>
      </div>
    </li>
  );
}

function ApplicationListItem(props: { status: string; mentorName: string }) {
  return (
    <li className="grid grid-cols-[7fr,_3fr] h-[5.875rem] gap-6 mb-4">
      <div className="grid grid-cols-[3fr,_7fr] divide-x items-center w-full shadowVariant1 rounded-2xl px-[26px] py-[16px] h-[5.875rem]">
        <div className="flex flex-col pr-4">
          <div className="relative rounded-[5px] overflow-hidden w-[40px] h-[40px] flex flex-col mx-auto">
            <Image
              src="/temp-assets/elon-profile.jpg"
              alt="picture not found"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="truncate mx-auto">
            <span className="text-[12px] text-ellipsis overflow-hidden whitespace-nowrap">
              {props.mentorName}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center pl-4 m-auto">
          <p className="mb-2">
            <span>Status:</span> {props.status}
          </p>
          <GradientPercentBar status={props.status} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button clickHandler={() => {}} className={'max-w-[14rem] noMargins'}>
          Book Meeting
        </Button>
      </div>
    </li>
  );
}

function GradientPercentBar(props: { status: string }) {
  if (props.status === 'Viewed') {
    return (
      <div className="w-full h-5 rounded-full bg-[#DAECFA]">
        <div className="bg-gradient-to-r from-[#8DC3ED] to-[#0B066E] h-5 w-3/5 rounded-full"></div>
      </div>
    );
  }
  if (props.status === 'Approved') {
    return (
      <div className="w-full h-5 rounded-full bg-[#DAECFA]">
        <div className="bg-gradient-to-r from-[#E1589A] to-[#CE1982] h-5 w-full rounded-full"></div>
      </div>
    );
  }
  if (props.status === 'Sent') {
    return (
      <div className="w-full h-5 rounded-full bg-[#e5e7eb]">
        <div className="h-5 w-3/5 rounded-full"></div>
      </div>
    );
  }
  return null;
}
