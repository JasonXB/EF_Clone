import Mentee from '../../../interface/mentee.interface';
import MentorshipRequest from '../../../interface/mentorship-request';

export default async function fetchMentorshipRequests(
  accessToken: string,
  profileId: string
) {
  const res = await fetch(
    `https://efback.azurewebsites.net/api/mentorRequests/mymentees/${profileId}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    }
  );

  const mentorshipRequestData = await res.json();

  const mentorshipRequestDataWithMenteeInfo: MentorshipRequest[] = [];

  for (let i = 0; i < mentorshipRequestData.length; i++) {
    let menteeData = await fetch(
      `https://efback.azurewebsites.net/api/mentee/${mentorshipRequestData[i].mentee}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    );

    let response = await menteeData.json();
    let menteeInfo: Mentee = response.mentee;

    mentorshipRequestData[i] = {
      ...mentorshipRequestData[i],
      menteeInfo,
    };

    let temp = mentorshipRequestData[i];

    mentorshipRequestDataWithMenteeInfo.push(temp);
  }

  return mentorshipRequestDataWithMenteeInfo;
}
