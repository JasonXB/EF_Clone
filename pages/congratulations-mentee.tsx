import type { NextPage } from 'next';
import Link from 'next/link'

import Layout from '../src/components/Layout';
import style from '../styles/congratulations-mentee.module.css';
import Image from 'next/image';
import fireworks from '../src/components/assets/fireworks.png';
import Button from '../src/components/buttons/reusable-buttons';

const congratulationsMentee: NextPage = ({}) => {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="max-w-12">
          <Image alt="illustration of fireworks" src={fireworks} />
        </div>
        <div className=" font-mainFont text-center w-ss px-3">
          <div className="font-bold text-primary-1 text-3xl sm:text-4xl md:text-5xl ">
            CONGRATULATIONS ON BECOMING A MENTEE!
          </div>
          <p className="text-2xl py-8">
            Your Mentorship request has been sent to the selected Mentor! <br />
            <br />
            Check your emails for if the Mentor has accepted your mentorship
            request.
            <br /> Once the Mentor has accepted your request, your can book a
            meeting with them.
          </p>
          <Link href={"/"}><Button variant="primary" disabled={false}>Go to Homepage</Button></Link>
        </div>
      </div>
    </Layout>
  );
};

export default congratulationsMentee;
