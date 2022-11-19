import NavbarLink from '../../../src/components/header/NavbarLink';

describe('NavbarLink.cy.tsx', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.mount(<NavbarLink url={'/become-a-mentor'} name={'Become a Mentor'} />);
  });

  it('mounts', () => {});

  it('check the button name prop', () => {
    cy.get('a').should('have.text', 'Become a Mentor');
  });

  it('check the button url prop', () => {
    cy.get('a').should('have.attr', 'href', '/become-a-mentor');
  });
});
