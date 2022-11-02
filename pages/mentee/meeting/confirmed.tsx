import Image from 'next/image';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../../src/components/Layout';
import Avatar from '../../../src/components/avatar/avatar';
import Button from '../../../src/components/buttons/reusable-buttons';

// import Cat from '../../src/assets/cat.jpeg';
import Calendar from '../../../src/assets/icons8-calendar-week-64.png';
import Clock from '../../../src/assets/icons8-clock-48.png';
import Monitor from '../../../src/assets/icons8-pro-display-xdr-80.png';
import MeetingDetail from './details';
import { useEffect, useState } from 'react';
import { MeetingDetailType } from '../../../src/enum/meetingDetailType.enum';

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
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const router = useRouter();
  const meetingDetails = router.query;
  const {
    mentorFirstName,
    mentorLastName,
    mentorImg,
    meetingStartDatetime,
    meetingEndDatetime,
    meetingMethod,
  } = meetingDetails;
  const mentorFullName = mentorFirstName + ' ' + mentorLastName;

  function getMMDDYYFromDate(dateAsString: string): string {
    const d: Date = new Date(Date.parse(dateAsString));
    return d.toDateString();
  }

  function getHHMMFromDate(dateAsString: string): string {
    const dStart: Date = new Date(dateAsString);
    const dEnd: Date = new Date(dateAsString);
    const oneSecondInMilliseconds = 1000;
    const sixtySecondsPerMinute = 60;
    const sixtyMinutes = 60;
    const oneHour =
      oneSecondInMilliseconds * sixtySecondsPerMinute * sixtyMinutes;
    const oneHourInTheFuture = dStart.getTime() + oneHour;
    dEnd.setTime(oneHourInTheFuture);

    const hhmmStart = dStart
      .toLocaleString()
      .split(' ')[1]
      .split(':')
      .slice(0, 2)
      .join(':');
    const hhmmEnd = dEnd
      .toLocaleString()
      .split(' ')[1]
      .split(':')
      .slice(0, 2)
      .join(':');

    return hhmmStart + ' - ' + hhmmEnd;
  }

  useEffect(() => {
    setDate(getMMDDYYFromDate(dateAsString));
    setTime(getHHMMFromDate(dateAsString));
  }, [dateAsString]);

  return (
    <Layout isConfirmedMeetingPg={true}>
      <div className="h-[1100px] flex justify-center relative z-20">
        <div className="flex flex-col justify-start w-5/6 mt-40">
          <div>
            <div className="flex flex-col items-center">
              <Avatar
                imgLocation={mentorImg as any} //type error to be fixed
                displaySize={'egg'}
                personsName={mentorFullName}
              />
              <p className="mt-6 text-xl font-medium">{mentorFullName}</p>
            </div>
          </div>
          <div>
            <div className="mt-10 mb-8">
              <h4 className="text-5xl font-semibold text-center text-primary-1">
                Confirmed
              </h4>
            </div>
            <div>
              <p className="text-3xl text-center">
                Thank you for applying for the mentorship program with Empowered
                Futures. We are pleased to confirm your meeting with{' '}
                {mentorFullName}.
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-14">
            <MeetingDetail
              type={MeetingDetailType.date}
              detailInfo={date}
              imgLocation={Calendar}
            />
            <MeetingDetail
              type={MeetingDetailType.time}
              detailInfo={time}
              imgLocation={Clock}
            />
            <MeetingDetail
              type={MeetingDetailType.place}
              detailInfo={meetingMethod as any} //type error to be fixed
              imgLocation={Monitor}
            />
          </div>
          <div>
            <div className="flex justify-center w-full h-12 mt-14">
              <Button variant={'secondary'}>Back To My Account</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ConfirmedMeeting;
