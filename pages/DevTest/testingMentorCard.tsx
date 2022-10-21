import type { NextPage } from 'next';
import Head from 'next/head';
import MentorCard, {MentorsInfoProps} from '../../src/components/MentorCard';
import DataType from '../../src/components/MentorCard'

const testMentorCard: NextPage = ({}) => {
  const mockData: MentorsInfoProps = {
    mentorsInfo: {
      id: 1,
      firstName: 'Elon',
      fullName: 'Elon Musk',
      location: 'Canada',
      job: 'Founder, CEO at SpaceX',
      //Should only show the first 2 skills on the card.
      skills: [
        ['Management', 90],
        ['Communication', 90],
        ['Design', 45],
      ],
      tags: ['management', 'design'],
      aboutMentor:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
    },
  };

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <MentorCard mentorsInfo={mockData.mentorsInfo}/>
    </div>
  );
};

export default testMentorCard;
