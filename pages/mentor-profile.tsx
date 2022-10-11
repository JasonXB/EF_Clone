import type { NextPage } from 'next';
import ProfileLayout from '../src/components/ProfileLayout';
import MentorProfileSection from '../src/components/MentorProfileSection';

const dummyMentors = [
  {
    id: 1,
    name: 'Hiba',
    title: 'Empowered Futures Founder',
    avatar: '',
    socialMediaIcons: 'LinkedIn',
    location: 'Calgary, Canada',
    responseTime: 'Usually responds within 1 day',
    skills: ['Entrepeneurship', 'Management', 'Problem Solving'],
    about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut voluptatibus, corrupti in placeat libero necessitatibus numquam architecto corporis? Quo nulla nisi aperiam maiores explicabo inventore ex quaerat voluptates dolor?'
  }
]

// Temporarily displaying dummyMentor data (from above)
const {id, name, title,  socialMediaIcons, location, responseTime, skills, about} = dummyMentors[0]

const mentorProfile: NextPage = () => {

  return (
<ProfileLayout>

{/* Specific mentor data will eventually be dynamically rendered based on which mentor was clicked */}
<MentorProfileSection id={id} name={name} title={title} socialMediaIcons={socialMediaIcons} location={location} responseTime={responseTime} skills={skills} about={about} />

{/* Similar Mentors Component */}

</ProfileLayout>

    

  );
};

export default mentorProfile;