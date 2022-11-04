import Avatar from '../../../src/components/avatar/avatar';

import Cat from '../../../public/assets/cat.jpeg';

describe('avatar.cy.tsx', () => {
  const name = 'Elon Musk';
  it('should mount', () => {
    cy.mount(
      <Avatar imgLocation={Cat} personsName={name} displaySize={'large'} />
    );
  });
  it('should display a caption in the alt prop with the input name', () => {
    cy.mount(
      <Avatar
        imgLocation={Cat}
        personsName={name}
        displaySize={'mediumLarge'}
      />
    );
    cy.get('img').should('exist');
    cy.get(`[alt="A picture of ${name}"]`).should('exist');
  });
  it('should be a certain height for the given sizing', () => {
    cy.mount(
      <Avatar
        imgLocation={Cat}
        personsName={name}
        displaySize={'mediumLarge'}
      />
    );
    cy.get('img').invoke('outerWidth').should('be.eq', 158);
  });
});
