import EfLogo from '../../../src/components/header/EfLogo';

// There are two props for the EfLogo component, which are alt attribute and className attribute for the logo image.
// Since the source of the image is not a prop and imported inside the EfLogo component, it cannot be seen in the component testing.
// There is a problem with images in the component testing, since they are used with next/images module, they cannot be seen in the cypress testing environment.

// The below test eventually fails on the Cypress. The error originated from the test code, not from Cypress. I could not find a solution for this.

describe('EfLogo.cy.tsx', () => {
  it('mounts', () => {
    cy.viewport(1920, 1080);
    cy.mount(<EfLogo alt={'Empowered Futures Logo'} />);
  });
});
