import MentorshipRequest from '../../../interface/mentorship-request';
import {
  getCredentialsFromLocalStorage,
  getProfileIdInLocalStorage,
} from '../../../api/localStorage';

export default async function fetchMentorshipRequests() {
  const mentorshipRequestDataWithMenteeInfo: MentorshipRequest[] = [];

  const accessToken = getCredentialsFromLocalStorage();
  const profileId = getProfileIdInLocalStorage();

  try {
    // First fetch request to get all mentor requests for the logged in mentor
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

    // This for loop fetch requests are to get the mentee information in the related mentor requests.
    // Doing multiple fetch requests in the loop might not be good for performance. Maybe backend can merge these two data with a single end point?
    for (let i = 0; i < mentorshipRequestData.length; i++) {
      const menteeData = await fetch(
        `https://efback.azurewebsites.net/api/mentee/${mentorshipRequestData[i].mentee}`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );

      const response = await menteeData.json();

      const menteeInfo = response.mentee;

      mentorshipRequestData[i] = {
        ...mentorshipRequestData[i],
        menteeInfo,
      };

      mentorshipRequestDataWithMenteeInfo.push(mentorshipRequestData[i]);
    }
  } catch (error) {
    // This can be changed with a customized error message.
    console.error(error);
  } finally {
    return mentorshipRequestDataWithMenteeInfo;
  }
}
