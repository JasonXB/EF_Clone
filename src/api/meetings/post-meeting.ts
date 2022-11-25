import axios from 'axios';
import { MeetingData } from '../../interface/endpoints/post-meeting'
import { getCredentialsFromLocalStorage } from '../../api/localStorage';

export async function postMeeting (meeting: MeetingData) {
  
  const accessToken = getCredentialsFromLocalStorage();

  const config = {
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}` }
  };

  await axios.post(
      'https://efback.azurewebsites.net/api/meeting/auth/set_meeting/',
      meeting,
      config
  ).catch((err)=> {
    console.error(err);
  })

  //need to delete the meeting time which is booked from availability and update data (DELETE - availability, if a specific date)

  };