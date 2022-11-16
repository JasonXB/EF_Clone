import LoginSignup from '../../../src/components/header/LoginSignupButton';

// There is no prop to check in the LoginSignup, since all the content of this component is hardcoded.
// Only mounting of the component is tested.

describe('LoginSignup.cy.tsx', () => {
  it('mounts', () => {
    cy.viewport(1920, 1080);
    cy.mount(<LoginSignup />);
  });
});
