import React, { useState } from 'react';
import Button, { buttonVariants } from '..//buttons/reusable-buttons';
import Image from 'next/image';
import bannerImg from '../../../public/assets/mentorRequestsForm.png';
import OptionForm from '../optionForm/OptionForm';
import { DescribesOptions } from '../../enum/formOptions/describesOptions.enum';
import { TimelineOptions } from '../../enum/formOptions/timelineOptions.enum';
import axios from 'axios';
import Link from 'next/link';
import Mentor from '../../interface/mentor.interface';

interface MentorProfileProps {
  mentor: Mentor;
}

const MentorRequests = ({ mentor }: MentorProfileProps) => {
  const { id, first_name, last_name } = mentor;
  const full_name = `${first_name} ${last_name}`;

  const { d1, d2, d3, d4, d5, d6 } = DescribesOptions;
  const describesOptionList: string[] = [d1, d2, d3, d4, d5, d6];

  const { t1, t2, t3, t4 } = TimelineOptions;
  const timelineOptionList: string[] = [t1, t2, t3, t4];

  const [userDescribe, setUserDescribe] = useState<undefined | string>();
  const [userAchieve, setUserAchieve] = useState<undefined | string>();
  const [userTimeline, setUserTimeline] = useState<undefined | string>();

  const [blankWarn, setBlankWarn] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (userDescribe === undefined || userDescribe.length <= 0) {
      setBlankWarn(true);
    } else if (userAchieve === undefined || userAchieve.length <= 0) {
      setBlankWarn(true);
    } else if (userTimeline === undefined || userTimeline.length <= 0) {
      setBlankWarn(true);
    } else {
      setBlankWarn(false);
      const requestInfo = {
        mentor: full_name,
        describe: userDescribe,
        achieve: userAchieve,
        timeline: userTimeline,
      };

      //connect with backend (endpoint needed)
      await axios
        .post('', requestInfo)
        .then((res) => {
          console.log(res);
          //will be needed to show confirmation message?
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-3/4 bg-white rounded-2xl drop-shadow-lg p-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-primary-1 my-4 md:my-8">
          Apply For {full_name}
        </h1>
        <div
          className={`w-2/3 sm:w-1/2 p-2 text-tertiary-1 bg-tertiary-6 rounded-md ${
            !blankWarn && 'hidden'
          }`}
        >
          Please fill out this form.
        </div>

        <form onSubmit={submitHandler}>
          <OptionForm
            name="describe"
            label="Which describes you the best?"
            options={describesOptionList}
            status={setUserDescribe}
          />

          <label htmlFor="achieve" className="block mt-16">
            Describe to {first_name} what you hope to achieve from her
            mentorship?
          </label>
          <textarea
            id="achieve"
            name="achieve"
            rows={5}
            className="relative mt-2 p-1 border rounded-md border-smoke-2 w-full"
            onChange={(e: any) => setUserAchieve(e.target.value)}
          />

          <OptionForm
            name="timeline"
            label="What is your timeline in mind for when you would like to achieve
              your goal?"
            options={timelineOptionList}
            status={setUserTimeline}
          />

          <div className="flex justify-between items-center mx-8 my-16">
            <Link href={`/mentor/${id}`}>
              <button
                className={`${buttonVariants.secondary} md:px-16 font-light hover:shadow-md`}
              >
                Back
              </button>
            </Link>
            {/* jump to where? */}
            {/* <Link href=""> */}
            <button
              type="submit"
              className={`${buttonVariants.primary} md:px-16 font-light hover:shadow-md`}
            >
              Submit
            </button>
            {/* </Link> */}
          </div>
        </form>
        
        <div className="invisible md:visible absolute top-8 right-8">
          <Image
            src={bannerImg}
            alt="graphic of people filling the form"
            width={330}
            height={280}
          />
        </div>
      </div>
    </div>
  );
};

export default MentorRequests;
