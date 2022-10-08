import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout from '../src/components/Layout';

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
       "• 'Mentor' means (i) if you have agreed to mentor an Empowered Futures member, you; or (ii) if you are a Mentee, any person who mentors you as a result of the Empowered Futures mentoring programme.",
       "• 'Mentee' means (i) if you have asked to be mentored through the Empowered Futures mentoring programme, you; or (ii) if you are a Mentor, any person who you mentor as a result of the Empowered Futures mentoring programme."
      ],
    },
    {
      headerText: `1. The Empowered Futures Mentoring Programme`,
      bullets: [
        '1.1',
        '1.2',
        '1.3',
        '1.4',
      ],
    },
    {
      headerText: `2. Liability`,
      bullets: [
        '2.1',
        '2.2',
        '2.3',
        '2.4',
      ],
    },
    {
        headerText: `3. Term`,
        bullets: [
            '3.1     asdasdasdasd',
          ],
      },
      {
        headerText: `4. Confidentiality`,
        bullets: [
            '4.1     asdasdasdasd',
          ],
      },
      {
        headerText: `5. Private Policy`,
        bullets: [
            '5.1     asdasdasdasd',
          ],
      },
  ];

  return (
    <Layout>
      <div className=" w-full px-4 sm:px-8 xl:px-0 grid grid-cols-[1fr_auto_1fr]">
        {content.map((section, i) => {
          return (
            <section key={i} className="col-start-2 col-end-3 mt-16 mb-10 px-80">
              {i === 0 && (
                <div>
                <h1 className="font-extrabold text-5xl sm:text-6xl leading-[4rem] text-blue mb-10 xl:mb-20">
                    Terms and Conditions
                </h1>
             
                <h2 className="mb-4 text-3xl font-semibold text-blue xl:mb-2">
                    Empowered Futures Mentoring Program
              </h2>
              <br/>
              <h2 className="mb-4 text-3xl font-semibold text-blue xl:mb-16">
                    Last Revised: October 15, 2022.
              </h2>
              </div>
              
              )}
              <h2 className="mb-4 text-3xl font-medium">
                {section.headerText}
              </h2>
              <ul className="mb-4">
                {section.bullets.map((text, i) => {
                  return (
                    <li key={i} className={text.includes('Mentor')  ? "text-lg pl-8" : 
                    "text-lg" }>
                        {/* If this string found, colour it blue */}

                        {text.includes("'Empowered Futures' is") && section.headerText === 'Definitions' ?
                        <div>
                            <span className='font-bold text-blue'>{text.slice(0,19)}</span>
                            <span>{text.slice(19)}</span>
                            </div> : null}
                        {/* If either of these strings are found, colour them blue */}
                        {text.includes('Mentor') || text.includes('Mentee') ?
                         <div>
                            <span className='font-bold text-blue'>{text.slice(0,10)}</span>
                            <span>{text.slice(10)}</span>
                            </div>: null}

                        {text.charAt(0) == '1' || text.charAt(0) == '2' || text.charAt(0) == '3' || text.charAt(0) == '4' || text.charAt(0) == '5'  ?  <div>
                            <span className='mr-10 font-bold text-blue'>{text.slice(0,4)}</span>
                            <span>{text.slice(4)}</span>
                            </div> : null}
                    </li>
                  );
                })}
              </ul>

            </section>
          );
        })}
      </div>
      <div>Buttons go here</div>

    </Layout>
  );
};

export default termsAndConditions;