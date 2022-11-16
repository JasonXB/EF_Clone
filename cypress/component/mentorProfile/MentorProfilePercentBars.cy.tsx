import MentorProfilePercentBars from '../../../src/components/mentorProfile/MentorProfilePercentBars';

// Below line is placed in the tests in order to see the component on the Cypress testing environment. (browser)
// cy.get('body');

// Dummy percentBarSkills data
const percentBarSkills = [
  { name: 'Grow a Business', percentage: 90 },
  { name: 'Adobe XD', percentage: 20 },
  { name: 'Networking', percentage: 40 },
  { name: 'Mindset Coaching', percentage: 70 },
  { name: 'Figma', percentage: 100 },
];

describe('MentorProfilePercentBars.cy.tsx', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.mount(<MentorProfilePercentBars skills={percentBarSkills} />);
  });

  it('mounts', () => {
    cy.get('body');
  });

  it('check one example skill name from the list for test, Networking', () => {
    cy.get('p').eq(2).should('have.text', 'Networking');
  });

  it('check all the skill names are presented in the percentBars', () => {
    cy.get('p')
      .should('have.length', percentBarSkills.length)
      .each((item, index) => {
        cy.wrap(item).should('have.text', percentBarSkills[index].name);
      });
  });

  // There is no need to check for percentage bars, since they are already tested in their own components.
});
