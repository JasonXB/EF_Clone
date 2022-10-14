import type { NextPage } from 'next';
import MentorProfileSection from '../src/components/mentorProfile/MentorProfileMain';
import Layout from '../src/components/Layout';
import { dummyMentorProfiles } from '../src/components/mentorProfile/dummyMentorProfiles'

// Temporarily displaying dummyMentor data (from above)
const {id, name, title, avatar, socialMediaIcons,  location, responseTime, skills, about, percentBarSkills} = dummyMentorProfiles[0]

const mentorProfile: NextPage = () => {
  return (
<Layout>

{/* Specific mentor data will eventually be dynamically rendered based on which mentor was clicked */}
<MentorProfileSection id={id}  name={name} title={title} avatar={avatar} socialMediaIcons={socialMediaIcons} location={location} responseTime={responseTime} skills={skills} percentBarSkills={percentBarSkills} about={about} />

{/* Similar Mentors Component */}

</Layout>
  );
};

export default mentorProfile;