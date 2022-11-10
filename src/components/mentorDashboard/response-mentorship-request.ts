export default async function responseMentorshipRequest(
  e: React.MouseEvent<HTMLElement>,
  mentorId: string,
  menteeId: string
) {
  const details = {
    mentor: mentorId,
    mentee: menteeId,
  };

  const buttonText = e.currentTarget.innerText;

  const apiUrl = `https://efback.azurewebsites.net/api/mentorRequests/${buttonText.toLowerCase()}`;

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
