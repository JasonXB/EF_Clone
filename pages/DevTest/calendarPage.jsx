// import { mentorsData } from '../../src/util/mentors.json';
import { fetchMentorPics } from '../../src/util/mentor-pics';
import mentorsData from '../../src/util/mentors.json';
import Link from 'next/link';

//JSON file for list of mentors that the mentee applied to
/*

*npm install must be ran before testing to install the Unsplash dependency

To test this branch, please refer to:
- DevTest/calendarPage.jsx

The files that this branch is working on: 
- Calendar Component
- DateSlot Component
- TimeSlot Component
- Calendar Page
- Book Meeting Context

Once the testing is all good you may delete the following before merging:
- uninstall unsplash JS dependency in the package.json
- DevTest/calendarPage.jsx
- src/util/mentor-pics.js
- src/util/mentors.json
- the module exports line for unsplash in next.config.js
*/

export async function getStaticProps(context) {
  //get an array of random image url from unsplash API
  const mentorPics = await fetchMentorPics();
  //add the image URL from mentorPics to the json data of mentors data
  const mentors = mentorsData.map((m, index) => {
    return { ...m, imgUrl: mentorPics[index] };
  });
  //mentors will be the json data used to test the calendar page
  return {
    props: { mentors: mentors },
  };
}

const calendarPage = (props) => {
  console.log(props.mentors);
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
