import type { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../src/components/Layout';
import Image from 'next/image';
import fireworks from '../../src/components/assets/fireworks.png';
import Button from '../../src/components/buttons/reusable-buttons';
import { ReactEventHandler } from 'react';

const congratulationsMentee: NextPage = ({}) => {
  const clickHandler: ReactEventHandler = () => {
    Router.push('/');
  };
  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
        <div className="object-contain max-w-[600px] flex justify-center items-center md:py-18">
          <Image alt="illustration of fireworks" src={fireworks} />
        </div>
        <div className=" font-mainFont flex flex-col justify-center items-center text-center w-ss px-3 md:py-20">
          <div className="font-bold text-primary-1 text-3xl sm:text-4xl lg:text-5xl ss:w-[500px] md:w-full">
            CONGRATULATIONS ON BECOMING A MENTEE!
          </div>
          <p className=" text-lg lg:text-2xl py-8 w-[330px] xs:w-[430px] lg:w-[600px]">
            Your Mentorship request has been sent to the selected Mentor! <br />
            <br />
            Check your emails for if the Mentor has accepted your mentorship
            request.
            <br /> Once the Mentor has accepted your request, your can book a
            meeting with them.
          </p>
          <Link href="/">
            <Button
              variant="primary"
              clickHandler={clickHandler}
              disabled={false}
            >
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default congratulationsMentee;
