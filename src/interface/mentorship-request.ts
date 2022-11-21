import Mentee from './mentee.interface';

interface MentorshipRequest {
  mentee: string;
  date: string;
  goal: string;
  status: string;
  _id: string;
  menteeInfo: Mentee;
  mentor: string;
}

export default MentorshipRequest;
