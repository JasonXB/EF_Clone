import Mentee from './mentee.interface';

interface MentorshipRequest {
  mentee: string;
  date: string;
  goal: string;
  status: string;
  _id: string;
  menteeDetails: Mentee;
  mentor: string;
}

export default MentorshipRequest;
