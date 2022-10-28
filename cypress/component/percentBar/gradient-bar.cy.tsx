import GradientBar from '../../../src/components/percentBar/gradient-bar';

// Below line is placed in the tests in order to see the component on the Cypress testing environment. (browser)
// cy.get('body');

describe('gradient-bar.cy.tsx', () => {
  it('Status: Sent', () => {
    cy.mount(<GradientBar status="Sent" />);
    cy.get('body');
  });

  it('Status: Viewed', () => {
    cy.mount(<GradientBar status="Viewed" />);
    cy.get('body');
  });

  it('Status: Approved', () => {
    cy.mount(<GradientBar status="Approved" />);
    cy.get('body');
  });
});
