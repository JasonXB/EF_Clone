import Mentee from '../../../interface/mentee.interface';
import MentorshipRequest from '../../../interface/mentorship-request';
import { useAuth } from '../../../../state-management/ReactContext/AuthContext';

export default async function fetchMentorshipRequests(accessToken: string) {
  const res = await fetch(
    'https://efback.azurewebsites.net/api/mentorRequests/mymentees/9',
    {
      method: 'GET',
    }
  );

  const mentorshipRequestData = await res.json();

  //   console.log(mentorshipRequestData);

  const menteeList: Mentee[] = [];

  for (let i = 0; i < mentorshipRequestData.length; i++) {
    let menteeInfo = await fetch(
      `https://efback.azurewebsites.net/api/mentee/${mentorshipRequestData[i].mentee}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    );

    let menteeDataObject = await menteeInfo.json();

    menteeList.push(menteeDataObject);

    console.log(menteeList);

    return menteeList;
  }
}
