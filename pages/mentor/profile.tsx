import type { NextPage } from 'next';
import MentorProfileSection from '../../src/components/mentorProfile/MentorProfileMain';
import Layout from '../../src/components/Layout';

//! Requires getServerSideProps to check whether a user is authenticated as a mentor
//! otherwise user is redirected to /auth/login
const mentorProfile: NextPage = () => {
  return (
    <Layout>
      {/* Specific mentor data will eventually be dynamically rendered based on which mentor was clicked */}
      <MentorProfileSection />

      {/* Similar Mentors Component */}
    </Layout>
  );
};

export default mentorProfile;
