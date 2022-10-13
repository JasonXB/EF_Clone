import type { NextPage } from 'next';
import Head from 'next/head';
import MentorCard from '../../src/components/MentorCard';

const testMentorCard: NextPage = ({}) => {
  return (
    <div>
      <MentorCard
        id={1}
        firstName="Elon"
        fullName="Elon Musk"
        location="Canada"
        job="Founder, CEO at SpaceX"
        skills={[
          ['Management', 90],
          ['Communication', 90],
        ]}
        tags={['management', 'design']}
        aboutMentor="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
      />
    </div>
  );
};

export default testMentorCard;
