import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../src/components/Layout';
import MentorProfileMain from '../../src/components/mentorProfile/MentorProfileMain';
import Mentor from '../../src/interface/mentor.interface';
import MockMentorDB from '../../src/tempData/MockMentorDB';

export default function MentorProfile() {
  let router = useRouter();
  let { id } = router.query;
  let [mentor, setMentor] = useState<Mentor>();
  useEffect(() => {
    setMentor(MockMentorDB.getByID(parseInt(`${id}`)));
  }, []);
  return (
    <>
      <Layout headTitle="Mentor">
        {mentor && <MentorProfileMain mentor={mentor} />}
      </Layout>
    </>
  );
}
