import Image from 'next/image';
import { GetStaticProps } from 'next';

import Layout from '../../src/components/Layout';

import Avatar from '../../src/components/avatar/avatar';
import Button from '../../src/components/buttons/reusable-buttons';

import Cat from '../../src/assets/cat.jpeg';
import Calendar from '../../src/assets/icons8-calendar-week-64.png';
import Clock from '../../src/assets/icons8-clock-48.png';
import Monitor from '../../src/assets/icons8-pro-display-xdr-80.png';
import MeetingDetail from './meetingDetail';

export const getStaticProps: GetStaticProps = async () => {
  const dateAndTime = new Date().toString();
  const place = 'Google Meets';
  // attempting to pass a Date object thru here gives:
  // `object` ("[object Date]") cannot be serialized as JSON.
  // Hence it is converted to a string first, and converted back into a Date object in the component.
  return {
    props: {
      dateAsString: dateAndTime,
      name: 'Captain Placeholder',
      place: place,
    },
  };
};

interface ConfirmedMeetingProps {
  dateAsString: string;
  name: string;
  place: string;
}

const ConfirmedMeeting = ({
  dateAsString,
  name,
  place,
}: ConfirmedMeetingProps) => {
  function getMMDDYYFromDate(dateAsString: string): string {
    const d = new Date(Date.parse(dateAsString));
    const adjustmentFromZeroIndexedMonth = 1;
    const calendarFormatting = // todoRM: fix this calendar formatting & time formatting
      d.getFullYear().toString() +
      '-' +
      (d.getMonth() + adjustmentFromZeroIndexedMonth).toString() +
      '-' +
      d.getDate().toString();
    return calendarFormatting;
  }

  function getHHMMFromDate(dateAsString: string): string {
    const d = new Date(dateAsString);
    const timeFormatting =
      d.getHours().toString() +
      ':' +
      d.getMinutes().toString() +
      ':' +
      d.getSeconds().toString();
    return timeFormatting;
  }

  const date = getMMDDYYFromDate(dateAsString);
  const time = getHHMMFromDate(dateAsString);

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="mt-40 w-4/5 flex flex-col justify-center ">
          <div>
            <div className="flex flex-col items-center">
              <Avatar
                imgLocation={Cat}
                displaySize={'egg'}
                personsName={name}
              />
              <p>{name}</p>
            </div>
          </div>
          <div>
            <div className="mt-10 mb-8">
              <h4 className="font-semibold text-primary-1 text-5xl text-center">
                Confirmed
              </h4>
            </div>
            <div>
              <p className="text-3xl text-center">
                Thank you for applying for the mentorship program with Empowered
                Futures. We are pleased to confirm your meeting with {name}.
              </p>
            </div>
          </div>
          <div className="mt-14 flex justify-between mt-4">
            <MeetingDetail
              type="date"
              detailInfo={date}
              imgLocation={Calendar}
            />
            <MeetingDetail type="time" detailInfo={time} imgLocation={Clock} />
            <MeetingDetail
              type="place"
              detailInfo={place}
              imgLocation={Monitor}
            />
          </div>
          <div>
            <div className="h-12 w-full mt-14 flex justify-center">
              {/* // todoRM: fix button */}
              <Button variant={'secondary'}>Back To My Account</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ConfirmedMeeting;
