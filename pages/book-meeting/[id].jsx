import { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { format, isSameDay, parseISO } from 'date-fns';
import mentorsData from '../../src/util/mentors.json';
import Calendar from '../../src/components/calendar/Calendar';
import TimeSlot from '../../src/components/TimeSlot';

import { CalendarContext } from '../../state-management/ReactContext/CalendarContext';

//find the json data of the mentor selected and store it in the props
export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      mentor: mentorsData.find(
        (mentor) => mentor.mentor_id.toString() === params.id
      ),
    },
  };
}

export async function getStaticPaths() {
  const paths = mentorsData.map((mentor) => {
    return {
      params: {
        id: mentor.mentor_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const bookMeeting = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  const { name, imgUrl, meeting_availability } = props.mentor;

  const { selectedDay } = useContext(CalendarContext);

  //find if the mentor has availabilities on the selected date by comparing the date selected and the date in the json data
  const selectedDayAvailability = (availabilities) =>
    availabilities.filter((availability) =>
      isSameDay(parseISO(availability.startDatetime), selectedDay)
    );

  return (
    <>
      <div>this is book meeting page</div>
      <div>Welcome! {name}</div>
      <Image
        src={imgUrl || 'https://ibb.co/M2Df9nq'}
        width={300}
        height={360}
        alt={name}
      />
      <Calendar availability={meeting_availability} />

      <section className="mt-12 md:mt-0 md:pl-14">
        {/* -- AVAILABILITY HEADER -- */}
        <h4 className="font-semibold text-gray-900">Available Time Slot</h4>
        {/* -- */}
        {/* -- DISPLAY AVAILABILTIES -- */}
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {selectedDayAvailability(meeting_availability.specific).length > 0 ? (
            selectedDayAvailability(meeting_availability.specific).map(
              (availability) => (
                <TimeSlot meeting={availability} key={availability.id} />
              )
            )
          ) : (
            <p>Disable the date</p>
          )}
        </ol>
        {/* -- */}
      </section>
    </>
  );
};

export default bookMeeting;
