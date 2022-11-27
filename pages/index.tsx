import type { NextPage } from 'next';
import HomePageBanner from '../src/components/homepage/HomePageBanner';
import ReusableCards from '../src/components/homepage/ReusableCards';
import mentorGraphic from '../public/assets/mentorImageHomePage.png';
import menteeGraphic from '../public/assets/menteeImageHomePage.png';
import Layout from '../src/components/Layout';
import Testimonials from '../src/components/homepage/testimonials/Testimonials';
import LatestBlogs from '../src/components/homepage/latestBlogs/LatestBlogs';
import { AuthProvider } from '../state-management/ReactContext/AuthContext';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} }; // Statically renders page and sets props equal to an empty object
};

const ReusableCardData = [
  //links and img need to be added once we receive assets and where these link to.
  {
    title: 'Mentee',
    paragraph:
      'Join us: Share who you are and show mentors what you need help with.',
    buttonText: 'Learn More',
    buttonLink: '/',
    img: menteeGraphic,
    imgAlt: 'two people chatting in speech bubbles',
  },
  {
    title: 'Mentor',
    paragraph:
      'Join us: share who you are and show young adults what you can help them with.',
    buttonText: 'Learn More',
    buttonLink: '/',
    img: mentorGraphic,
    imgAlt: 'two people connected puzzle pieces together.',
  },
];

const Home: NextPage = ({}) => {
  return (
    <AuthProvider>
      <Layout headTitle="Home">
        <HomePageBanner />
        <div className="flex flex-col mx-auto space-y-6 w-fit md:space-y-0 md:flex-row md:space-x-8 lg:space-x-20">
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
        <div className="my-20 lg:my-40">
          <h2 className="text-5xl text-center text-primary-1">Testimonials</h2>
          <Testimonials />
        </div>
        {/* Hide for MVP */}
        {/* <div className="my-20 lg:my-40 ">
          <h2 className="text-5xl text-center text-primary-1">Latest Blogs</h2>
          <LatestBlogs />
        </div> */}
      </Layout>
    </AuthProvider>
  );
};

export default Home;
