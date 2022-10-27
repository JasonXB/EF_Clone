import MentorProfileBottom from '../../../src/components/mentorProfile/MentorProfileBottom';
import { dummyMentorProfiles } from '../../../src/components/mentorProfile/dummyMentorProfiles';

// Temporarily displaying dummyMentor data
const {
  name,
  title,
  avatar,
  socialMediaIcons,
  location,
  responseTime,
  skills,
  about,
  percentBarSkills,
  availability,
} = dummyMentorProfiles[0];

// Below line is placed in the tests in order to see the component on the Cypress testing environment. (browser)
// cy.get('body');

describe('MentorProfileBottom.cy.tsx', () => {
  it('mounts', () => {
    cy.viewport(1920, 1080);
    cy.mount(
      <MentorProfileBottom
        name={name}
        about={about}
        skills={skills}
        availability={availability}
      />
    );
    cy.get('body');
  });
});
