import AchievementCircle from '../../../src/components/achievementCircle/achievement-circle';
import Cat from '../../../public/assets/cat.jpeg';

describe('achievementCircle.cy.tsx', () => {
  const testText = 'foo bar baz';
  it('should load with text when the text prop is supplied', () => {
    cy.mount(<AchievementCircle text={testText} progress={50} image={Cat} />);
    cy.get('.CircularProgressbar-text').should('have.text', testText);
  });
});
