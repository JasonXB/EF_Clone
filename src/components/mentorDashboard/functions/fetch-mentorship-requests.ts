import MentorshipRequest from '../../../interface/mentorship-request';

export default async function fetchMentorshipRequests() {
  const res = await fetch(
    'https://efback.azurewebsites.net/api/mentorRequests/mymentees/9',
    {
      method: 'GET',
    }
  );

  const mentorshipRequestData = await res.json();

  //   console.log(mentorshipRequestData);

  const menteeList = [];

  for (let i = 0; i < mentorshipRequestData.length; i++) {
    let menteeInfo = await fetch(
      `https://efback.azurewebsites.net/api/mentee/${mentorshipRequestData[i].mentee}`,
      {
        method: 'GET',
      }
    );

    let menteeDataObject = await menteeInfo.json();

    menteeList.push(menteeDataObject.mentee);

    console.log(menteeList);

    return menteeList;
  }
}
