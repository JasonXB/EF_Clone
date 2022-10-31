import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../src/components/Layout';
import MentorCard from '../../src/components/MentorCard'; // using MentorCard until full user profile is complete
import { Mentor } from '../../src/interface/mentor.interface';
import { TempMentorDB } from '../../src/tempData/TempMentorDB';

export default function MentorProfile() {
  let router = useRouter();
  let { id } = router.query;
  let [mentor, setMentor] = useState<Mentor>();
  useEffect(() => {
    setMentor(TempMentorDB.getByID(parseInt(`${id}`)));
  }, []);
  return (
    <>
      <Layout>
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            {mentor && <MentorCard mentor={mentor} />}
          </div>
        </div>
      </Layout>
    </>
  );
}
