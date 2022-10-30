import MentorProfileBottom from '../../../src/components/mentorProfile/MentorProfileBottom';

// Below line is placed in the tests in order to see the component on the Cypress testing environment. (browser)
// cy.get('body');

// Dummy mentor data
const dummyMentorData = {
  name: 'Hiba Badran',
  skills: ['Entrepeneurship', 'Management', 'Problem Solving'],
  about: 'This is the about section.',
  availability: 'This is the availability section.',
};

describe('MentorProfileBottom.cy.tsx', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.mount(
      <MentorProfileBottom
        name={dummyMentorData.name}
        about={dummyMentorData.about}
        skills={dummyMentorData.skills}
        availability={dummyMentorData.availability}
      />
    );
  });

  it('mounts', () => {
    cy.get('body');
  });

  it('check the name in About and Availability section', () => {
    cy.get('h2').each((item, index) => {
      cy.wrap(item).should('contain', 'Hiba Badran');
    });
  });

  it('check the about prop text is shown correctly', () => {
    cy.get('p:first').should('have.text', 'This is the about section.');
  });

  it('check the availability prop text is shown correctly', () => {
    cy.get('p').eq(1).should('have.text', 'This is the availability section.');
  });

  it('check all the skills props are shown correctly in their respective BubbleTags', () => {
    cy.get('span')
      .children()
      .children()
      .each((item, index) => {
        cy.wrap(item).should('have.text', dummyMentorData.skills[index]);
      });
  });
});
