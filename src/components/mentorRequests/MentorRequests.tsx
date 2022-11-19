import React, { useState } from 'react';
import { buttonVariants } from '..//buttons/reusable-buttons';
import Image from 'next/image';
import bannerImg from '../../../public/assets/mentorRequestsForm.png';
import OptionForm from '../optionForm/OptionForm';
import { DescriptionOptions } from '../../enum/formOptions/descriptionOptions.enum';
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

  const { d1, d2, d3, d4, d5, d6 } = DescriptionOptions;
  const descriptionOptionList: string[] = [d1, d2, d3, d4, d5, d6];

  const { t1, t2, t3, t4 } = TimelineOptions;
  const timelineOptionList: string[] = [t1, t2, t3, t4];

  const [userDescription, setUserDescription] = useState<undefined | string>();
  const [userAchievement, setUserAchievement] = useState<undefined | string>();
  const [userTimeline, setUserTimeline] = useState<undefined | string>();

  // const [blankWarning, setBlankWarning] = useState(false);
  const [blankDescription, setBlankDescription] = useState(false);
  const [blankAchievement, setBlankAchievement] = useState(false);
  const [blankTimeline, setBlankTimeline] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (userDescription === undefined || userDescription.length <= 0) {
      setBlankDescription(true);
      setBlankAchievement(false);
      setBlankTimeline(false);
    } else if (userAchievement === undefined || userAchievement.length <= 0) {
      setBlankAchievement(true);
      setBlankDescription(false);
      setBlankTimeline(false);
    } else if (userTimeline === undefined || userTimeline.length <= 0) {
      setBlankTimeline(true);
      setBlankDescription(false);
      setBlankAchievement(false);
    } else {
      setBlankDescription(false);
      setBlankAchievement(false);
      setBlankTimeline(false);
      const requestInfo = {
        mentor: full_name,
        describe: userDescription,
        achieve: userAchievement,
        timeline: userTimeline,
      };

      //connect with backend (endpoint needed)
      await axios
        .post('', requestInfo)
        .then((res) => {
          console.log(res);
          //jump to confirmation page
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full xs:w-3/4 bg-white rounded-2xl drop-shadow-lg p-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-primary-1 my-4 md:my-8">
          Apply For {full_name}
        </h1>
        {/* <div className={`w-2/3 sm:w-1/2 p-2 text-tertiary-1 bg-red-500 rounded-md ${
            !blankWarning && 'hidden'
          }`}
        >
          Please fill out this form.
        </div> */}

        <form onSubmit={submitHandler}>
          <OptionForm
            name="describe"
            label="Which describes you the best?"
            options={descriptionOptionList}
            status={setUserDescription}
            blankDescription={blankDescription}
          />

          <label htmlFor="achieve" className="block mt-16">
            Describe to {first_name} what you hope to achieve from her
            mentorship?
          </label>
          {blankAchievement && (
            <p className="text-xs text-red-500">
              Please fill out this section.
            </p>
          )}
          <textarea
            id="achieve"
            name="achieve"
            rows={5}
            className={`relative mt-2 p-1 border rounded-md w-full ${
              blankAchievement ? 'border-red-500' : 'border-smoke-2'
            }`}
            onChange={(e: any) => setUserAchievement(e.target.value)}
          />

          <OptionForm
            name="timeline"
            label="What is your timeline in mind for when you would like to achieve
              your goal?"
            options={timelineOptionList}
            status={setUserTimeline}
            blankTimeline={blankTimeline}
          />

          <div className="flex justify-between items-center ss:mx-8 my-16">
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
