import React from 'react';
import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import { buttonVariants } from '../src/components/buttons/reusable-buttons';
import Image from 'next/image';
import bannerImg from '../public/assets/mentorRequestsForm.png';
import OptionForm from '../src/components/optionForm/OptionForm';
import { DescribesOptions } from '../src/enum/formOptions/describesOptions.enum';
import { TimelineOptions } from '../src/enum/formOptions/timelineOptions.enum';

const MentorRequests: NextPage = () => {
  const { d1, d2, d3, d4, d5, d6 } = DescribesOptions;
  const describesOptionList: string[] = [d1, d2, d3, d4, d5, d6];

  const { t1, t2, t3, t4 } = TimelineOptions;
  const timelineOptionList: string[] = [t1, t2, t3, t4];

  return (
    <Layout headTitle="Mentor Requests" background="none">
      <div className="flex justify-center items-center w-full">
        <div className="relative w-3/4 bg-white rounded-2xl drop-shadow-lg p-8">
          <h1 className="text-4xl text-primary-1 my-8">
            Apply For Hiba Barden
          </h1>
          <form className="mt-16">
            <OptionForm
              name="description"
              label="Which describes you the best?"
              options={describesOptionList}
            />

            <label htmlFor="achieve" className="block mt-16">
              Describe to Hiba what you hope to achieve from her mentorship?
            </label>
            <textarea
              id="achieve"
              name="achieve"
              rows={5}
              className="mt-2 mb-16 p-1 border rounded-md border-smoke-2 w-full"
            />

            <OptionForm
              name="timeline"
              label="What is your timeline in mind for when you would like to achieve
              your goal?"
              options={timelineOptionList}
            />

            <div className="flex justify-between mx-8 my-16">
              <button className={`${buttonVariants.secondary} px-24`}>
                Back
              </button>
              <button
                type="submit"
                className={`${buttonVariants.primary} px-24`}
              >
                Submit
              </button>
            </div>
          </form>
          <div className="absolute top-8 right-8">
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
