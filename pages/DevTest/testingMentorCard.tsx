import type { NextPage } from 'next';
import Head from 'next/head';
import MentorCard from '../../src/components/MentorCard';
import DataType from '../../src/components/MentorCard';
import { Mentor } from '../../src/interface/mentor.interface';

const testMentorCard: NextPage = ({}) => {
  const mockData: Mentor = {
    id: 1,
    first_name: 'Elon',
    last_name: 'Musk',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },
    job: 'Founder, CEO at SpaceX',
    // Should only show the first 2 skills on the card.
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
    tags: ['management', 'design'],
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    gender: 'male',
    email: 'musk@gmail.com',
    profile_path: '/',
  };

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <MentorCard mentor={mockData} />
    </div>
  );
};

export default testMentorCard;
