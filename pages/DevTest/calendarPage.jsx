// import { mentorsData } from '../../src/util/mentors.json';
import { fetchMentorPics } from '../../src/util/mentor-pics';
import mentorsData from '../../src/util/mentors.json';

//JSON file for list of mentors that the mentee applied to
/*
Once the testing is all good you may delete the following before merging:
- uninstall unsplash JS dependency in the package.json
- DevTest/calendarPage.jsx
- src/util/mentor-pics.js
- src/util/mentors.json

The files that this branch is working on: 
- Calender Component
- Date Component
- TimeSlots Component
- Time Slot Component
- Calendar Page
- Book Meeting Context

To test this branch, please refer to:
- DevTest/calendarPage.jsx
*/

export async function getStaticProps(context) {
  const mentorPics = await fetchMentorPics();
  return {
    props: { mentorPics: mentorsData },
  };
}

const calendarPage = (props) => {
  // console.log('mentorsData', mentorsData);
  console.log(props.mentorPics[0]);
  console.log(mentorsData);
  return <div>This is the calendar page tester</div>;
};

export default calendarPage;
