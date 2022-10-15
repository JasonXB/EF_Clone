import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Layout from '../src/components/Layout';
import Button from '../src/components/buttons/reusable-buttons';

// I used Jason's basic layout from the become-a-mentor page as this page is quite similar in structure. Thanks, Jason!

// Statically renders page and sets props equal to an empty object
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

const termsAndConditions: NextPage = (props) => {
  // Will map over this content to generate JSX in order to avoid retyping classes

  const content = {
    definitions: {
      headerText: 'Definitions',
      blurb:
        '‘Empowered Futures’ is an innovative Canadian non-profit organization supporting emerging adults as they transition into adulthood.',
      bullets: [
        '‘Mentor’ means (i) if you have agreed to mentor a Empowered Futures member, you; or (ii) if you are a Mentee, any person who mentors you as a result of the Empowered Futures mentoring programme.',
        '‘Mentee’ means (i) if you have asked to be mentored through the Empowered Futures mentoring programme, you; or (ii) if you are a Mentor, any person who you mentor as a result of the Empowered Futures mentoring programme.',
      ],
    },
    numberedPoints: [
      {
        headerText: `1. The Empowered Futures Mentoring Programme`,
        bullets: [
          {
            num: '1.1',
            text: "'Empowered Futures' involvement in the mentoring programme is limited to identifying the Mentor and Mentee from a pool of volunteers and introducing the Mentor to the Mentee. Empowered Futures will do this at its discretion and may decline to do so for any reason.",
          },
          {
            text: "Empowered Futures will have no other role in the operation of the programme, except it may decide, at its sole discretion, to seek feedback from the Mentors and Mentees. Empowered Futures has not checked or verified the skills, experience, character, circumstances or other attributes of any Mentor or Mentee.'",
          },
          {
            num: '1.2',
            text: 'The expectation is that the mentoring programme will consist of meetings and/or phone calls and/or email or other communications between the Mentor and the Mentee from time to time, the content, frequency and duration of which will be as agreed between the Mentor and the Mentee. It will be the responsibility of the Mentor and the Mentee to manage the relationship as they consider appropriate.',
          },
          {
            num: '1.3',
            text: 'The Mentor shall not at any time be obliged to provide or continue to provide any mentoring services to the Mentee, but if and to the extent that it does so, such services will be provided free of charge.',
          },
          {
            num: '1.4',
            text: 'The Mentee shall not at any time be obliged to request or receive mentoring services from the Mentor.',
          },
        ],
      },
      {
        headerText: `2. Liability`,
        bullets: [
          {
            num: '2.1',
            text: 'The Mentee shall not at any time be obliged to act on any information, suggestion, advice or guidance given by the Mentor as part of the mentoring programme, but if and to the extent that it does so, it shall do so at its own risk.',
          },
          {
            num: '2.2',
            text: 'The Mentee is advised to take independent financial, legal or other appropriate professional (if relevant) before acting on any information, suggestion, advice or guidance given by the Mentor.',
          },
          {
            num: '2.3',
            text: 'The Mentee acknowledges that any services provided by Empowered Futures and the Mentor are provided free of charge and in good faith.',
          },
          {
            num: '2.4',
            text: 'Empowered Futures is not liable to the Mentor, Mentee or to any third party for any loss, damage, costs or liabilities suffered as a result of this agreement, the existence of the relationships between the parties, the services provided or the act or omissions of the Mentor or Mentee. Nothing in this clause shall limit or exclude any liability of death or personal injury, or which results from fraud.',
          },
        ],
      },
      {
        headerText: `3. Term`,
        bullets: [
          {
            num: '3.1',
            text: 'Whilst the Mentor and the Mentee remain engaged in the mentoring programme (whether such engagement exists to be determined by Empowered Futures acting reasonably), these Terms and Conditions will continue in force.',
          },
        ],
      },
      {
        headerText: `4. Confidentiality`,
        bullets: [
          {
            num: '4.1',
            text: 'The Mentee and Mentor will keep in strict confidence all and any information of a confidential nature which it obtains about either of the other parties as a result of the arrangements contemplated by this agreement. This clause shall not apply in relation to any information that is already available in the public domain other than as a result of a breach of this clause by any party.',
          },
        ],
      },
      {
        headerText: `5. Private Policy`,
        bullets: [
          {
            num: '5.1',
            text: 'By participating in the mentoring programme, the Mentor and the Mentee agree they have been directed to the Empowered Futures Privacy Policy, details of which can be found here:',
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <div className="grid grid-cols-[1fr_auto_1fr] mx-[10%] sm:mx-[20%]">
        <section className="col-start-2 col-end-3 mt-16 mb-8 ">
          {/* Titles section */}
          <div>
            <h1 className="mb-10 text-5xl font-extrabold sm:text-6xl text-primary-1 xl:mb-16">
              Terms and Conditions
            </h1>
            <h2 className="mb-4 text-3xl font-semibold text-primary-1 xl:mb-0">
              Empowered Futures Mentoring Program
            </h2>
            <br />
            <h2 className="mb-20 text-3xl font-semibold text-primary-1 xl:mb-16">
              Last Revised: October 15, 2022
            </h2>
          </div>
          
          {/* Definitions section 
          I left in slicing here as I felt it was easier for these very specific lines of text. */}
          <h2 className="mt-12 mb-8 text-3xl font-medium">
                {content.definitions.headerText}
          </h2>
          <span className="text-lg font-bold text-primary-1">
            {content.definitions.blurb.slice(0, 19)}
          </span>
          <span className='text-lg'>{content.definitions.blurb.slice(19)}</span>
          
          {/* Definitions - bullet points */}
          {content.definitions.bullets.map((bullet, i) => {
            return (
              <div key={i} className="flex flex-col mt-6 mb-6 text-lg xl:pl-12 xl:flex-row">
                <span className="flex">
                •
                <span className="ml-2 font-bold xl:ml-6 text-primary-1">
                  {bullet.slice(0, 9)}
                  
                  <span className="font-light text-dark ">
                    {bullet.slice(9)}
                  </span>
                  </span>
                </span>
              </div>
            );
          })}
        </section>

        {/* Numbered points section */}
        {content.numberedPoints.map((section, i) => {
          return (
            <section key={i} className="col-start-2 col-end-3 mt-6 mb-0">
              <h2 className="mb-8 text-3xl font-medium">
                {section.headerText}
              </h2>
              <ul className="mb-4">
                {section.bullets.map((bullet, i) => {
                  return (
                    <li key={i} className={'text-lg mb-6'}>
                      <div className="flex flex-col font-bold ss:flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row ">
                        {/* min width set to ensure consistent indentation */}
                        <span className="min-w-[30px] text-primary-1">
                          {bullet.num}
                        </span>
                        {/* White space rather than num for the 2nd paragraph of bullet 1.1 */}
                        {!bullet.num && <span></span>}
                        <span className="font-light text-dark ss:pl-6 sm:pl-10 md:pl-10 lg:pl-12 xl:pl-12">
                          {bullet.text}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
      
      {/* Accept/Decline buttons */}
      <div className="flex items-center justify-center mt-10 mb-10 xl:mt-28 xl:w-full xl:justify-evenly">
        <Button
          variant="secondary"
          className="flex items-center justify-center w-56 h-16 text-dark"
        >
          Decline
        </Button>
        {/* Empty div to create more space between buttons */}
        <div className='w-10 xl:w-90'></div>
        <Button className="w-56 h-16">Accept</Button>
      </div>
    </Layout>
  );
};

export default termsAndConditions;
