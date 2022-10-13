import type { NextPage } from 'next';
import HomePageBanner from '../src/components/homepage/ HomePageBanner';
import ReusableCards from '../src/components/homepage/ReusableCards';

import Layout from '../src/components/Layout';

const ReusableCardData = [
  //links and img need to be added once we receive assets and where these link to.
  {
    title: 'Mentee',
    paragraph:
      'Join us: Share who you are and show mentors what you need help with.',
    buttonText: 'Learn More',
    buttonLink: '/',
    img: '',
    imgAlt: 'two people chatting in speech bubbles',
  },
  {
    title: 'Mentor',
    paragraph:
      'Join us: share who you are and show young adults what you can help them with.',
    buttonText: 'Learn More',
    buttonLink: '/',
    img: '',
    imgAlt: 'two people connected puzzle pieces together.',
  },
];

const Home: NextPage = ({}) => {
  return (
    <Layout>
      <HomePageBanner />
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8">
        {ReusableCardData.map((each, i) => (
          <ReusableCards
            key={i}
            title={each.title}
            paragraph={each.paragraph}
            buttonText={each.buttonText}
            buttonLink={each.buttonLink}
            img={each.img}
            imgAlt={each.imgAlt}
          />
        ))}
      </div>
      {/** video component -future */}
      {/** testimonials component -future  */}
      {/** blog component-future  */}
    </Layout>
  );
};

export default Home;
