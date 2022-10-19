import Image from 'next/image';
import { GetStaticProps } from 'next';

import Layout from '../../src/components/Layout';

import Cat from '../../src/components/assets/cat.jpeg';
import Avatar from '../../src/components/avatar/avatar';
import Button from '../../src/components/buttons/reusable-buttons';

// This function gets called at build time
export async function getStaticProps() {
  const dateAndTime = new Date().toString();
  const place = 'Google Meets';
  console.log(dateAndTime, '18rm');
  // attempting to pass a Date object thru here gives:
  // `object` ("[object Date]") cannot be serialized as JSON.
  // Hence it is converted to a string first, and converted back into a Date object in the component.
  return {
    props: {
      dateAsString: dateAndTime,
      place: place,
    },
  };
}

interface ConfirmedMeetingProps {
  dateAsString: string;
  place: string;
}

const ConfirmedMeeting = ({ dateAsString, place }: ConfirmedMeetingProps) => {
  const name = 'Captain Placeholder';

  function getMMDDYYFromDate(dateAsString: string): string {
    const d = new Date(Date.parse(dateAsString));
    const adjustmentFromZeroIndexedMonth = 1;
    const calendarFormatting =
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
  //   const date = 't';
  //   const time = 't';

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="mt-40 w-4/5 flex flex-col justify-center ">
          <div>
            <div className="flex flex-col items-center">
              <Avatar
                imgLocation={Cat}
                displaySize={'small'}
                // todo: give avatar a "rounded: 50%" setting
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
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-2xl">
                <span className="text-primary-3">Date:</span>{' '}
                <span>{date}</span>
              </p>
            </div>
            <div>
              <p className="text-2xl">
                <span className="text-primary-3">Time:</span>{' '}
                <span>{time}</span>
              </p>
            </div>
            <div>
              <p className="text-2xl">
                <span className="text-primary-3">Meeting Method:</span>{' '}
                <span>{place}</span>
              </p>
            </div>
          </div>
          <div>
            <div className="h-12 w-12">
              <Button variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ConfirmedMeeting;
