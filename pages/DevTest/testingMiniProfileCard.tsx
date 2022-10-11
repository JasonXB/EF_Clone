import type { NextPage } from 'next';
import Head from 'next/head';
import MiniProfileCard from '../../src/components/MiniProfileCard';

const testMiniProfile: NextPage = ({}) => {
  return (
    <div>
      <MiniProfileCard name="Kelsey" location="canada" job="Developer" />
    </div>
  );
};

export default testMiniProfile;
