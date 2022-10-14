import type { NextPage } from 'next';
import MentorProfileSection from '../src/components/mentorProfile/MentorProfileMain';
import Layout from '../src/components/Layout';
import { linkedInIcon } from '../src/components/mentorProfile/ProfileIcons';
import { twitterIcon } from '../src/components/mentorProfile/ProfileIcons';
import hiba from '../src/components/assets/hiba.png'


/* Since the style of SM icons in the Social Media Links component did not match those in the Adobe XD, 
I pulled different ones temporarily from Bootstrap icons. However, can easily switch to those already 
found in the component. :) 
*/
const dummyMentors = [
  {
    id: 1,
    name: 'Hiba Badran',
    title: 'Founder of Empowered Futures',
    // Change this 
    avatar: hiba,
    socialMediaIcons: [
      {svg: linkedInIcon, url: 'http://linkedin.com' },
      {svg: twitterIcon, url: 'http://twitter.com' }
    ], 
    location: 'Calgary, Canada',
    responseTime: 'Usually responds within 1 day',
    skills: ['Entrepeneurship', 'Management', 'Problem Solving'],
    percentBarSkills: [
      {name: 'Grow a Business', percentage: 90 }, 
      {name: 'Adobe XD', percentage: 20 },
      {name: 'Networking', percentage: 40 },
      {name: 'Mindset Coaching', percentage: 70 },
      {name: 'Figma', percentage: 100 },
    ],
    about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut voluptatibus, corrupti in placeat libero necessitatibus numquam architecto corporis? Quo nulla nisi aperiam maiores explicabo inventore ex quaerat voluptates dolor?'
  }
]

// Temporarily displaying dummyMentor data (from above)
const {id, name, title, avatar, socialMediaIcons,  location, responseTime, skills, about, percentBarSkills} = dummyMentors[0]

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