import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import { GetStaticProps } from 'next';

// Statically renders page and sets props equal to an empty object
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

const becomeAMentor: NextPage = (props) => {
  // Will map over this list to generate JSX in order to avoid retyping classes
  const content = [
    {
      headerText: 'Description of Role',
      bullets: [
        `Hosting introductory events geared at meeting your mentees`,
        `Situating your mentees by informing them of our institute's procedural norms and initiatives`,
        `Alerting your mentees to potential adjustment-related obstacles and issuing them with suitable resources to help negate these`,
        `Scheduling follow-ups to gauge your mentees' progress`,
        `Encouraging participation in mentor-mentee bonding initiatives to facilitate mentees' social orientation`,
        `Supporting mentees during stretches of psychosocial and medical hardship`,
        `Attending mentorship meetings to share headway, concerns, and details regarding upcoming mentorship events`,
        `Reporting all pressing concerns for in-depth review`,
      ],
    },
    {
      headerText: `What's in it for you?`,
      bullets: [
        `Empowering emerging adults with their growth and development`,
        `Innovating the movement towards mental wellness`,
        `Collaboration with multi-disciplinary senior board members`,
        `Growing your professional network`,
        `Room for advancement and growth within the organization to serve as a board member`,
      ],
    },
    {
      headerText: `Prerequisite Requirements`,
      bullets: [
        `Able to work remotely`,
        `Ambitious and dedicated`,
        `Someone who embodies our core values and represents the organization in their manner and personality`,
        `Someone who is approachable and makes the mentee feel comfortable`,
        `Should be well aware and knowledgeable to help out the mentee`,
        `Gives reassurance, is respectful and makes the mentee feel safe`,
        `Demonstrable experience as a mentor`,
        `Capacity to actualize all personal commitments`,
        `Ability to perceive psychosocial, medical, and similar difficulties`,
      ],
    },
  ];

  return (
    <Layout headTitle="Become a Mentor">
      <div className="px-4 sm:px-8 xl:px-0 grid grid-cols-[1fr_auto_1fr]">
        {content.map((section, i) => {
          return (
            <section key={i} className="col-start-2 col-end-3 mt-12">
              {i === 0 && (
                <h1 className="font-extrabold text-5xl sm:text-6xl leading-[4rem] text-primary-1 mb-10 xl:mb-28">
                  Empowered Futures
                  <br />
                  Mentorship
                </h1>
              )}
              <h2 className="mb-4 text-3xl font-semibold">
                {section.headerText}
              </h2>
              <ul className="list-disc list-inside">
                {section.bullets.map((text, i) => {
                  return (
                    <li key={i} className="text-lg">
                      {text}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </Layout>
  );
};

export default becomeAMentor;
