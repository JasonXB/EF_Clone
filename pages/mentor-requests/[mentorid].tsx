import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import Mentor from '../../src/interface/mentor.interface';
import MockMentorDB from '../../src/tempData/MockMentorDB';
import MentorRequests from '../../src/components/mentorRequests/MentorRequests';

const RequestsForm: NextPage = () => {
  const router = useRouter();
  const { mentorid } = router.query;
  const [mentor, setMentor] = useState<Mentor>();

  useEffect(() => {
    setMentor(MockMentorDB.getByID(parseInt(`${mentorid}`)));
  }, [mentorid]);

  return (
    <Layout headTitle="Mentor Requests" background="none">
      {mentor && <MentorRequests mentor={mentor} />}
    </Layout>
  );
};

export default RequestsForm;
