type MentorSkill = [string, number];

export interface Mentor {
  id: number;
  first_name: string;
  last_name: string;
  location: string;
  gender: string;
  profile_path: string;
  job: string;
  bio: string;
  email: string;
  tags: string[];
  skills: MentorSkill[];
}

export default Mentor;
