interface Meeting {
  name: string;
  avatar: string;
  numberOfMeetings: { individual: number; totalMins: number };
  nextMeeting: string;
}

export default Meeting;
