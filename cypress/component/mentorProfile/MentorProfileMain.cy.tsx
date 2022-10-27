import MentorProfileMain from '../../../src/components/mentorProfile/MentorProfileMain';
import { dummyMentorProfiles } from '../../../src/components/mentorProfile/dummyMentorProfiles';

// Below line is placed in the tests in order to see the component on the Cypress testing environment. (browser)
// cy.get('body');

describe('MentorProfileMain.cy.tsx', () => {
  it('mounts', () => {
    cy.viewport(1920, 1080);
    cy.mount(<MentorProfileMain />);
    cy.get('body');
  });
});
