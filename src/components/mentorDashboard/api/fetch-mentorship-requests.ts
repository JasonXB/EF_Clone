import MentorshipRequest from '../../../interface/mentorship-request';
import {
  getCredentialsFromLocalStorage,
  getProfileIdInLocalStorage,
} from '../../../api/localStorage';

export default async function fetchMentorshipRequests() {
  const accessToken = getCredentialsFromLocalStorage();
  const profileId = getProfileIdInLocalStorage();

  try {
    // Fetch request to get all mentor requests for the logged in mentor and related mentee information
    const res = await fetch(
      `https://efback.azurewebsites.net/api/mentorRequests/auth/mymentees/${profileId}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    );

    const mentorshipRequestData: MentorshipRequest[] = await res.json();
    return mentorshipRequestData;
  } catch (error) {
    // This can be changed with a customized error message.
    console.error(error);
  }
}
