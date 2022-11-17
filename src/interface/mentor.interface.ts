type MentorSkill = [string, number];

interface Mentor {
  id: number;
  first_name: string;
  last_name: string;
  // location: {
  //   city: string
  // }
  gender: string;
  profile_path: string;
  job: string;
  bio: string;
  email: string;
  tags: string[];
  skills: MentorSkill[];
}

export default Mentor;
