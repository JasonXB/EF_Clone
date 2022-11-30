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
import { useAuth } from '../../../state-management/ReactContext/AuthContext';

interface MentorProfileProps {
  mentor: Mentor;
}

const MentorRequests = ({ mentor }: MentorProfileProps) => {
  const { id, first_name, last_name } = mentor;
  const full_name = `${first_name} ${last_name}`;

  const { d1, d2, d3, d4 } = DescriptionOptions;
  const descriptionOptionList: string[] = [d1, d2, d3, d4];

  const { t1, t2, t3, t4 } = TimelineOptions;
  const timelineOptionList: string[] = [t1, t2, t3, t4];

  const [userDescription, setUserDescription] = useState<undefined | string>();
  const [userAchievement, setUserAchievement] = useState<undefined | string>();
  const [userTimeline, setUserTimeline] = useState<undefined | string>();
  const [descDetails, setDescDetails] = useState<undefined | string>();

  const [blankDescription, setBlankDescription] = useState(false);
  const [blankAchievement, setBlankAchievement] = useState(false);
  const [blankTimeline, setBlankTimeline] = useState(false);
  const [blankDetails, setBlankDetails] = useState(false);

  const { accessToken, profileId } = useAuth();

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (userDescription === undefined || userDescription.length <= 0) {
      setBlankDescription(true);
      setBlankAchievement(false);
      setBlankTimeline(false);
      setBlankDetails(false)
    } else if(userDescription === 'Other' && descDetails === undefined){
      setBlankDetails(true)
      setBlankDescription(false);
      setBlankAchievement(false);
      setBlankTimeline(false);
    } else if (userAchievement === undefined || userAchievement.length <= 0) {
      setBlankAchievement(true);
      setBlankDescription(false);
      setBlankTimeline(false);
      setBlankDetails(false)
    } else if (userTimeline === undefined || userTimeline.length <= 0) {
      setBlankTimeline(true);
      setBlankDescription(false);
      setBlankAchievement(false);
      setBlankDetails(false)
    } else {
      setBlankDescription(false);
      setBlankAchievement(false);
      setBlankTimeline(false);
      setBlankDetails(false);

      const requestInfo = {
        mentor: id.toString(),
        mentee: profileId,
        goal: userAchievement,
        hopeFromMentorship: userDescription,
        timeline: userTimeline,
      };

      //   //connect with backend
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'include'
      };
      
        await axios
        .post(
          'https://efback.azurewebsites.net/api/mentorRequests/auth/create',
          requestInfo,
          config,
        )
        .then((res) => {
          console.log(res);
          console.log('success');
          //jump to confirmation page
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const changeValue = (e: any) => {
    e.preventDefault();
    setUserDescription(e.target.value);
    setDescDetails(e.target.value)
  };

  const [descriptionDetails, setDescriptionDetails] = useState(false);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full xs:w-3/4 bg-white rounded-2xl drop-shadow-lg p-8">
        <div className="my-4 md:my-8 md:w-1/2">
          <p className="font-bold text-md sm:text-lg md:text-2xl text-primary-1">
            Apply For
          </p>
          <h1 className="text-xl sm:text-2xl md:text-4xl text-primary-1">
            {full_name}
          </h1>
        </div>

        <form onSubmit={submitHandler}>
          <OptionForm
            name="describe"
            label="Which describes your status is the best?"
            options={descriptionOptionList}
            status={setUserDescription}
            blank={blankDescription}
            details={setDescriptionDetails}
          />

            <>
              <label
                htmlFor="descriptionDetails"
                className="block text-base mt-4 md:w-1/2 mb-2"
              >
                If you answer &ldquo;Other&rdquo; in the above question, please
                give us your status here.
              </label>
              {blankDetails && (
                <p className="text-xs text-red-500">
                  Please fill out this section.
                </p>
              )}
              <input
                type="text"
                disabled={!descriptionDetails}
                className={`w-full p-2 ss:w-1/2 border-2 rounded-md shadow-sm outline-none h-10 overflow-scroll focus:border-primary-1 focus:border-2 ${
                  blankDetails
                    ? 'border-red-500'
                    : 'border-smoke-2'
                }`}
                onChange={changeValue}
              />
            </>

          <label htmlFor="achieve" className="block mt-16">
            Describe to {first_name} your goals and what you hope to achieve
            from her mentorship?
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
            className={`relative mt-2 p-1 border-2 rounded-md w-full h-32 overflow-y-scroll ${
              blankAchievement ? 'border-red-500' : 'border-smoke-2'
            } outline-primary-1 outline-border-2`}
            onChange={(e: any) => setUserAchievement(e.target.value)}
          />

          <OptionForm
            name="timeline"
            label="What is your timeline in mind for when you would like to achieve
              your goal?"
            options={timelineOptionList}
            status={setUserTimeline}
            blank={blankTimeline}
          />

          <div className="flex justify-between items-center ss:mx-8 my-16">
            <Link href={`/mentor/${id}`}>
              <button
                className={`${buttonVariants.secondary} md:px-16 font-light hover:shadow-md`}
              >
                Back
              </button>
            </Link>
            <button
              type="submit"
              className={`${buttonVariants.primary} md:px-16 font-light hover:shadow-md`}
            >
              Submit
            </button>
          </div>
        </form>

        <div className="absolute top-8 right-8 invisible md:visible sm:w-52 md:w-56 lg:w-80 flex items-center">
          <Image src={bannerImg} alt="graphic of people filling the form" />
        </div>
      </div>
    </div>
  );
};

export default MentorRequests;
