import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Layout from '../src/components/Layout';
import Button from '../src/components/buttons/reusable-buttons'

// I used Jason's basic layout from the become-a-mentor page as this page is quite similar in structure. Thanks, Jason!

// Statically renders page and sets props equal to an empty object
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

const termsAndConditions: NextPage = (props) => {
  // Will map over this list to generate JSX in order to avoid retyping classes
  const content = [
    {
      headerText: 'Definitions',
      bullets: [
        "'Empowered Futures' is an innovative Canadian non-profit organization supporting emerging adults as they transition into adulthood.",
        "'Mentor' means (i) if you have agreed to mentor an Empowered Futures member, you; or (ii) if you are a Mentee, any person who mentors you as a result of the Empowered Futures mentoring programme.",
        "'Mentee' means (i) if you have asked to be mentored through the Empowered Futures mentoring programme, you; or (ii) if you are a Mentor, any person who you mentor as a result of the Empowered Futures mentoring programme.",
      ],
    },
    {
      headerText: `1. The Empowered Futures Mentoring Programme`,
      bullets: [
        "1.1 Empowered Futures' involvement in the mentoring programme is limited to identifying the Mentor and Mentee from a pool of volunteers and introducing the Mentor to the Mentee. Empowered Futures will do this at its discretion and may decline to do so for any reason.",
        'Empowered Futures will have no other role in the operation of the programme, except it may decide, at its sole discretion, to seek feedback from the Mentors and Mentees. Empowered Futures has not checked or verified the skills, experience, character, circumstances or other attributes of any Mentor or Mentee.',
        '1.2 The expectation is that the mentoring programme will consist of meetings and/or phone calls and/or email or other communications between the Mentor and the Mentee from time to time, the content, frequency and duration of which will be as agreed between the Mentor and the Mentee. It will be the responsibility of the Mentor and the Mentee to manage the relationship as they consider appropriate.',
        '1.3 The Mentor shall not at any time be obliged to provide or continue to provide any mentoring services to the Mentee, but if and to the extent that it does so, such services will be provided free of charge.',
        '1.4 The Mentee shall not at any time be obliged to request or receive mentoring services from the Mentor.',
      ],
    },
    {
      headerText: `2. Liability`,
      bullets: [
        '2.1 The Mentee shall not at any time be obliged to act on any information, suggestion, advice or guidance given by the Mentor as part of the mentoring programme, but if and to the extent that it does so, it shall do so at its own risk.',
        '2.2 The Mentee is advised to take independent financial, legal or other appropriate professional (if relevant) before acting on any information, suggestion, advice or guidance given by the Mentor.',
        '2.3 The Mentee acknowledges that any services provided by Empowered Futures and the Mentor are provided free of charge and in good faith.',
        '2.4 Empowered Futures is not liable to the Mentor, Mentee or to any third party for any loss, damage, costs or liabilities suffered as a result of this agreement, the existence of the relationships between the parties, the services provided or the act or omissions of the Mentor or Mentee. Nothing in this clause shall limit or exclude any liability of death or personal injury, or which results from fraud.',
      ],
    },
    {
      headerText: `3. Term`,
      bullets: [
        '3.1 Whilst the Mentor and the Mentee remain engaged in the mentoring programme (whether such engagement exists to be determined by Empowered Futures acting reasonably), these Terms and Conditions will continue in force.',
      ],
    },
    {
      headerText: `4. Confidentiality`,
      bullets: [
        '4.1 The Mentee and Mentor will keep in strict confidence all and any information of a confidential nature which it obtains about either of the other parties as a result of the arrangements contemplated by this agreement. This clause shall not apply in relation to any information that is already available in the public domain other than as a result of a breach of this clause by any party.',
      ],
    },
    {
      headerText: `5. Private Policy`,
      bullets: [
        '5.1 By participating in the mentoring programme, the Mentor and the Mentee agree they have been directed to the Empowered Futures Privacy Policy, details of which can be found here:',
      ],
    },
  ];

  return (
    <Layout>
      <div className="px-4 sm:px-8 xl:px-0 grid grid-cols-[1fr_auto_1fr]">
        {content.map((section, i) => {
          return (
            <section key={i} className="col-start-2 col-end-3 mt-16 mb-8 px-80">
              {i === 0 && (
                <div>
                  <h1 className="font-extrabold text-5xl sm:text-6xl leading-[4rem] text-primary-3 mb-10 xl:mb-20">
                    Terms and Conditions
                  </h1>

                  <h2 className="mb-4 text-3xl font-semibold text-primary-3 xl:mb-2">
                    Empowered Futures Mentoring Program
                  </h2>
                  <br />
                  <h2 className="mb-20 text-3xl font-semibold text-primary-3 xl:mb-16">
                    Last Revised: October 15, 2022
                  </h2>
                </div>
              )}
              <h2 className="mb-8 text-3xl font-medium">
                {section.headerText}
              </h2>
              <ul className="mb-4">
                {section.bullets.map((text, i) => {
                  return (
                    <li
                      key={i}
                      // If one of the two bullet points, indent
                      className={'text-lg mb-6'}
                    >
                      {/* If this string found, colour it primary-3 */}
                      {text.includes("'Empowered Futures'") ? (
                        <div>
                          <span className="font-bold text-primary-3">
                            {text.slice(0, 19)}
                          </span>
                          <span>{text.slice(19)}</span>
                        </div>
                      ) : null}
                      
                      {/* If either of these strings are found (the two bullet ('•') points), colour them primary-3 */}
                      {text.includes("'Mentor'") ||
                      text.includes("'Mentee'") ? (
                        <div className="flex flex-col mb-6 text-lg xl:pl-12 xl:flex-row">
                          {/* Hide '•' when in mobile view */}
                          <span className="hidden lg:block xl:block">•</span>
                          <span className="font-bold xl:ml-6 text-primary-3">
                            {text.slice(0, 9)}
                            <span className="font-light text-black ">
                              {text.slice(9)}
                            </span>
                          </span>
                        </div>
                      ) : null}
                      
                      {/* If there is a '.' at index 1 (all numbered points), colour them in primary-3 and indent corresponding paragraph */}
                      {text.charAt(1) === '.' ? (
                        <div>
                          <span className="flex flex-col font-bold xl:flex-row text-primary-3">
                            {text.slice(0, 4)}
                            <span className="font-light text-black xl:ml-12">
                              {text.slice(4)}
                            </span>
                          </span>
                        </div>
                      ) : null}
                      
                      {/* If string begins with E (2nd par of 1.1), only indent corresponding paragraph */}
                      {text.charAt(0) === 'E' && (
                        <div>
                          <span className="flex flex-row">
                            <span className="xl:pl-20">{text}</span>
                          </span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
      {/* Decline/Accept buttons */}
      <div className="flex items-center justify-center mt-32 mb-10 xl:w-full xl:justify-evenly">
        <Button
          variant="secondary"
          className="flex items-center justify-center w-56 h-16 text-black"
        >
          Decline
        </Button>
        {/* Empty div to create more space between buttons */}
        <div></div>
        <Button className="w-56 h-16">Accept</Button>
      </div>
    </Layout>
  );
};

export default termsAndConditions;
