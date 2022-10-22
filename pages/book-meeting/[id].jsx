import { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { isSameDay, parseISO } from 'date-fns';
import mentorsData from '../../src/util/mentors.json';
import Calendar from '../../src/components/calendar/Calendar';
import TimeSlot from '../../src/components/TimeSlot';
import TimeZonesDropdown from '../../src/components/timezonesDropdown/TimeZonesDropdown';
import { v4 as uuidv4 } from 'uuid';

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

  const { name, position, company, imgUrl, meeting_availability } =
    props.mentor;

  const { selectedDay } = useContext(CalendarContext);

  //find if the mentor has availabilities on the selected date by comparing the date selected and the date in the json data
  const selectedDayAvailability = (availabilities) =>
    availabilities.filter((availability) =>
      isSameDay(parseISO(availability.startDatetime), selectedDay)
    );

  return (
    <>
      {/* left side with basic info */}
      <div className="bg-smoke-5 w-1/5 float-left h-screen flex flex-col items-center">
        {/* basic info block*/}
        <div className="absolute top-28 flex flex-col items-center">
          <Image
            className="rounded-md "
            src={imgUrl || 'https://ibb.co/M2Df9nq'}
            width={200}
            height={220}
            alt={name}
          />
          <h5 className="text-primary-1 font-medium mt-2">{name}</h5>
          <p className="text-sm">
            {position} at {company}
          </p>
        </div>
        {/* --- */}
      </div>
      {/* --- */}

      {/* right side with meeting questions */}
      <div className="bg-green-100 w-4/5 float-right h-screen px-16 py-28">
        <h4 className="text-primary-1 font-semibold mb-16">
          Schedule your Meeting with {name}
        </h4>
        <h5 className="font-medium">1. Select Date And Time</h5>

        {/* style to separate the calendar and timeslot blocks in its own grids */}
        <div className="md:grid md:grid-cols-3">
          <div className="col-span-2">
            <Calendar availability={meeting_availability} />
          </div>

          {/* available time slots block */}
          <div className="mt-12 md:mt-0 md:pl-14 pt-1">
            {/* -- AVAILABILITY HEADER -- */}
            <div className="py-10 border-t border-primary-1">
              {/* -- clock icon -- */}
              <div className="text-primary-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              {/* -- */}
              <p className="font-bold">Available Time Slot</p>
              {/* dropdown for timezone */}
              <TimeZonesDropdown />
              {/* -- */}
            </div>
            {/* -- */}
            {/* -- DISPLAY AVAILABILTIES -- */}
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayAvailability(meeting_availability.specific).length >
              0 ? (
                selectedDayAvailability(meeting_availability.specific).map(
                  (availability) => (
                    <TimeSlot key={uuidv4()} meeting={availability} />
                  )
                )
              ) : (
                <p>No time slot available</p>
              )}
            </ol>
            {/* -- */}
          </div>
        </div>
      </div>
      {/* --- */}
    </>
  );
};

export default bookMeeting;
