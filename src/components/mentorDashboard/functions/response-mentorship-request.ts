export default async function responseMentorshipRequest(
  urlPart: string,
  mentorId: string,
  menteeId: string,
  accessToken: string
) {
  const details = {
    mentor: mentorId,
    mentee: menteeId,
  };

  const apiUrl = `https://efback.azurewebsites.net/api/mentorRequests/${urlPart}`;

  const response = await fetch(apiUrl, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
    body: JSON.stringify(details),
  });
}
