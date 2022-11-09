import React from 'react';
import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import { buttonVariants } from '../src/components/buttons/reusable-buttons';
import Image from 'next/image';
import bannerImg from '../public/assets/mentorRequestsForm.png';

const MentorRequests: NextPage = () => {
  return (
    <Layout headTitle="Mentor Requests" background="none">
      <div className="flex justify-center items-center w-full">
        <div className='relative w-3/4 bg-white rounded-2xl drop-shadow-lg p-8'>
          <h1 className='text-4xl text-primary-1 my-8'>Apply For Hiba Barden</h1>
          <form className='mt-16'>
            <label htmlFor="describes" className="block text-base">
              Which describes you the best?
            </label>
            <select id="describes" className='my-2 p-1 border rounded-md border-smoke-2 w-1/2 cursor-pointer'>
              <option value="">Select...</option>
              <option value="student">Student</option>
              <option value="career start">Career Start</option>
              <option value="career change">Career Change</option>
              <option value="enhance skills">Enhance Skills</option>
              <option value="would not like to say">
                Would not like to say
              </option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="achieve" className="block mt-16">
              Describe to Hiba what you hope to achieve from her mentorship?
            </label>
            <textarea id="achieve" name="achieve" rows={5} className='my-2 p-1 border rounded-md border-smoke-2 w-full'/>

            <label htmlFor="timeline" className="block mt-16">
              What is your timeline in mind for when you would like to achieve
              your goal?
            </label>
            <select id="timeline" className='my-2 p-1 border rounded-md border-smoke-2 w-1/2 cursor-pointer'>
              <option value="">Select...</option>
              <option value="0-4 months">0-4 months</option>
              <option value="4-8 months">4-8 months</option>
              <option value="8-12 months">8-12 months</option>
              <option value="1+ years">1+ years</option>
            </select>

            <div className="flex justify-between mx-8 mt-16">
              <button className={`${buttonVariants.secondary} px-16`}>Back</button>
              <button type="submit" className={`${buttonVariants.primary} px-16`}>
                Submit
              </button>
            </div>
          </form>
          <div className='absolute top-8 right-8'>
            <Image
          src={bannerImg}
          alt="graphic of people filling the form"
          width={330}
          height={280}
        />
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default MentorRequests;
