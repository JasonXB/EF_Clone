import Navbar from '../../../src/components/header/Navbar';

// There is no prop to check in the Navbar, since all the content of this component is hardcoded.
// Only mounting of the component is tested.

describe('Navbar.cy.tsx', () => {
  it('mounts', () => {
    cy.viewport(1920, 1080);
    cy.mount(<Navbar />);
  });
});
