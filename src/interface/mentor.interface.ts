type MentorSkill = [string, number];

export type Mentor = {
  id: number;
  first_name: string;
  last_name: string;
  location: string;
  gender: string;
  profile_path: string;
  job: string;
  bio: string;
  tags: string[];
  skills: MentorSkill[];
};
