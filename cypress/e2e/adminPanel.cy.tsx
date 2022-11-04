import { placeholderDataForRequest as dummyMentors } from '../../src/tempData/temp-data-mentor';

describe('adminPanel.cy.tsx', () => {
  beforeEach(()=>{
    cy.visit(`http://localhost:3000/admin/panel`)
  })
  it('should load one entry for each dummy mentor', () => {
    cy.get('#applicantList')
      .children()
      .should('have.length', dummyMentors.length);
  });
  it('should have one applicantName div for each dummy, with the applicants name', () => {
    cy.get('#applicantList')
      .children()
      .each((element, index) => {
        cy.wrap(element).within(() => {
          cy.get('.applicantName').should(
            'have.text',
            dummyMentors[index].name
          );
        });
      });
  });
});
