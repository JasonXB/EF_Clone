import AdminPanelDashboard from '../../../pages/admin-panel';
import Cat from '../../../public/assets/cat.jpeg';

describe('adminPanel.cy.tsx', () => {
  const testText = 'foo bar baz';
  it('should mount', () => {
    cy.mount(<AdminPanelDashboard />);
  });
});
