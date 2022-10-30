import AdminPanelDashboard from '../../../pages/admin-panel';

import { placeholderDataForRequest as dummyMentors } from '../../../src/tempData/temp-data-mentor';

describe('adminPanel.cy.tsx', () => {
  const testText = 'foo bar baz';
  it('should mount', () => {
    cy.mount(<AdminPanelDashboard />);
  });
  it('should load one entry for each dummy mentor', () => {
    cy.mount(<AdminPanelDashboard />);
    cy.get('#applicantList')
      .children()
      .should('have.length', dummyMentors.length);
  });
  it('should have one applicantName div for each dummy, with the applicants name', () => {
    cy.mount(<AdminPanelDashboard />);
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
