import type { NextPage } from 'next';
import Head from 'next/head';
import MiniProfileCard from '../../src/components/MiniProfileCard';

const testMiniProfile: NextPage = ({}) => {
  return (
    <div>
      <MiniProfileCard
        name="Kelsey"
        location="canada"
        job="Developer"
        compatibilityPercent={63}
        tags={['management', 'design']}
      />
    </div>
  );
};

export default testMiniProfile;
