import { mentorsData } from '../../src/tempData/dummyMentorsForCalendar';
import Link from 'next/link';
import { useContext } from 'react';
import { TimezoneContext } from '../../state-management/ReactContext/TimezoneContext';

//JSON file for list of mentors that the mentee applied to
/*

*npm install must be ran before testing to install the Unsplash dependency

To test this branch, please refer to:
- DevTest/calendarPage.jsx

The files that this branch is working on: 
- book-meeting/[id].jsx
- Calendar Component
- DateSlot Component
- TimeSlots Component
- TimeSlot Component
- TimeZones Dropdown Component
- Timezone Component
- Timezone Context
- Calendar Context

Once the testing is all good you may delete the following before merging:
- uninstall unsplash JS dependency in the package.json
- DevTest/calendarPage.jsx
- src/util/mentor-pics.js
- src/util/mentors.json
- the module exports line for unsplash in next.config.js
*/

export async function getStaticProps(context) {
  return {
    props: { mentors: mentorsData },
  };
}

const calendarPage = (props) => {
  const { selectedTimeSlot } = useContext(TimezoneContext);
  console.log(JSON.stringify(selectedTimeSlot));
  return (
    <>
      <div>This is the calendar page tester</div>
      <div>
        {props.mentors.map((mentor) => (
          <Link
            href={`/book-meeting/${mentor.mentor_id}`}
            key={mentor.mentor_id}
          >
            <button className="border-2 border-orange-300 mx-1">
              {mentor.name}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default calendarPage;
