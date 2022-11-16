import HomePageBanner from '../../../src/components/homepage/HomePageBanner';

// There is no prop to check in the HomePageBanner, since all the content of this component is hardcoded.
// Only mounting of the component is tested.

describe('HomePageBanner.cy.tsx', () => {
  it('mounts', () => {
    cy.viewport(1920, 1080);
    cy.mount(<HomePageBanner />);
  });
});
