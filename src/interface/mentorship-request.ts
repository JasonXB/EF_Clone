import Mentee from './mentee.interface';

interface MentorshipRequest {
  mentee: string;
  date: string;
  goal: string;
  status: string;
  id: string;
  menteeInfo: Mentee;
  mentor: string;
  // numberOfRequests: number;
}

export default MentorshipRequest;
