import { getCredentialsFromLocalStorage } from '../../../api/localStorage';

export default async function responseMentorshipRequest(
  urlPart: string,
  mentorId: string,
  menteeId: string
) {
  const details = {
    mentor: mentorId,
    mentee: menteeId,
  };

  const accessToken = getCredentialsFromLocalStorage();
  const apiUrl = `https://efback.azurewebsites.net/api/mentorRequests/${urlPart}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify(details),
    });
    return response;
  } catch (error) {
    // This can be changed with a customized error message.
    console.error(error);
  }
}
