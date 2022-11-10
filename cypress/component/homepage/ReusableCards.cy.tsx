import ReusableCards from '../../../src/components/homepage/ReusableCards';
import mentorGraphic from '../../../public/assets/mentorImageHomePage.png';

// Dummy ReusableCard data
const ReusableCardData = {
  title: 'Mentee',
  paragraph:
    'Join us: Share who you are and show mentors what you need help with.',
  buttonText: 'Learn More',
  buttonLink: '/',
  img: mentorGraphic,
  imgAlt: 'two people chatting in speech bubbles',
};

describe('ReusableCards.cy.tsx', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.mount(
      <ReusableCards
        title={ReusableCardData.title}
        paragraph={ReusableCardData.paragraph}
        buttonText={ReusableCardData.buttonText}
        buttonLink={ReusableCardData.buttonLink}
        img={ReusableCardData.img}
        imgAlt={ReusableCardData.imgAlt}
      />
    );
  });

  it('mounts', () => {});

  it('check the title prop', () => {
    cy.get('h4').should('have.text', ReusableCardData.title);
  });

  it('check the paragraph prop, description of card', () => {
    cy.get('p').should('have.text', ReusableCardData.paragraph);
  });

  it('check the button text prop', () => {
    cy.get('a').should('have.text', ReusableCardData.buttonText);
  });

  it('check the button link prop', () => {
    cy.get('a').should('have.attr', 'href', ReusableCardData.buttonLink);
  });

  it('check the image prop and its alt attribute', () => {
    // Finding the DOM <img> element with an alt attribute containing 'two people chatting in speech bubbles', if it cannot be find, test fails. Then checks for its visibility.
    // There is a problem with images in the component testing, since they are used with next/images module, they cannot be seen in the cypress testing environment.
    // Such as the actual link for the image is in localhost:3000 (nextjs port) and the image searched in the testing environment is in localhost:8080 (cypress port).
    // Although the below test does not fail, in the testing browser, the image cannot be seen. I could not find a solution for this.
    cy.get('img[alt*="two people chatting in speech bubbles"]').should(
      'be.visible'
    );
  });
});
