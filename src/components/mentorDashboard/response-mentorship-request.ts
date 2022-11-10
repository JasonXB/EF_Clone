export default async function responseMentorshipRequest(
  urlPart: string,
  mentorId: string,
  menteeId: string
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
    },
    body: JSON.stringify(details),
  });

  const responseData = await response.json();
  console.log(responseData, '29rm');
  // todo: check shape of resp data
  if (responseData._id) return true;
  return false;
}
