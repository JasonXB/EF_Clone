//this will have to be updated when api props are sent down
export interface MentorshipRequestCardProps {
  name: string;
  position: string;
  avatar: string;
  age: string;
  email: string;
  date: string;
  status: string;
  goalOfMeeting: string;
  numberOfRequest?: number;
}

export interface UpcomingMeetingCardProps {
  name: string;
  avatar: string;
  numberOfMeetings: { individual: number; totalMins: number };
  nextMeeting: string;
}
