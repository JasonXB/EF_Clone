import PercentageBar from '../../../src/components/percentBar/percent-bar';

// Below line is placed in the tests in order to see the component on the Cypress testing environment. (browser)
// cy.get('body');

describe('percent-bar.cy.tsx', () => {
  it('mounts', () => {
    cy.mount(
      <PercentageBar percentage={50} color="blue" showPercentageText={false} />
    );
    cy.get('body');
  });

  it('check the percentage is shown correctly on the bar', () => {
    const percentage = 60;
    cy.mount(
      <PercentageBar
        percentage={percentage}
        color="blue"
        showPercentageText={true}
      />
    );
    // There is a problem with the showPercentageText, both the text color and bgcolor are white, if the bar is not expanding enough, the text cannot be seen.
    cy.get('span').should('have.text', '60%');
  });

  it('check background color for blue', () => {
    const bgColor = 'blue';
    cy.mount(
      <PercentageBar
        percentage={20}
        color={bgColor}
        showPercentageText={false}
      />
    );

    cy.get('div')
      .find('div')
      .find('div')
      .should('have.attr', 'class')
      .and('match', /bg-primary-1/);
  });

  it('check background color for pink', () => {
    const bgColor = 'pink';
    cy.mount(
      <PercentageBar
        percentage={20}
        color={bgColor}
        showPercentageText={false}
      />
    );

    cy.get('div')
      .find('div')
      .find('div')
      .should('have.attr', 'class')
      .and('match', /bg-secondary-1/);
  });
});
