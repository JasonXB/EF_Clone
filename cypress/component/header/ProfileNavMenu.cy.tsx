import ProfileNavMenu from '../../../src/components/header/ProfileNavMenu';

// There is no prop to check in the ProfileNavMenu, since all the content of this component is hardcoded.
// Only mounting of the component is tested.

describe('ProfileNavMenu.cy.tsx', () => {
  it('mounts', () => {
    cy.viewport(1920, 1080);
    cy.mount(<ProfileNavMenu />);
  });
});
