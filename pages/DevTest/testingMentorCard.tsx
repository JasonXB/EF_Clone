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
    location: 'Canada',
    job: 'Founder, CEO at SpaceX',
    // Should only show the first 2 skills on the card.
    skills: [
      ['Management', 90],
      ['Communication', 90],
      ['Design', 45],
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
