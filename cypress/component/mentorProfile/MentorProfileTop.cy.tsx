import MentorProfileTop from '../../../src/components/mentorProfile/MentorProfileTop';
import hiba from '../../../public/assets/hiba.png';
import { linkedInIcon } from '../../../src/components/mentorProfile/ProfileIcons';
import { twitterIcon } from '../../../src/components/mentorProfile/ProfileIcons';

// Below line is placed in the tests in order to see the component on the Cypress testing environment. (browser)
// cy.get('body');

// Temporarily displaying dummyMentor data
const dummyMentorData = {
  name: 'Hiba Badran',
  title: 'Founder of Empowered Futures',
  avatar: hiba,
  socialMediaIcons: [
    { svg: linkedInIcon, url: 'http://linkedin.com' },
    { svg: twitterIcon, url: 'http://twitter.com' },
  ],
  location: 'Calgary, Canada',
  responseTime: 'Usually responds within 1 day',
};

describe('MentorProfileTop.cy.tsx', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.mount(
      <MentorProfileTop
        name={dummyMentorData.name}
        title={dummyMentorData.title}
        socialMediaIcons={dummyMentorData.socialMediaIcons}
        location={dummyMentorData.location}
        responseTime={dummyMentorData.responseTime}
        avatar={dummyMentorData.avatar}
      />
    );
  });

  it('mounts', () => {
    cy.get('body');
  });

  it('check the name prop', () => {
    cy.get('h1').should('have.text', 'Hiba Badran');
  });

  it('check the title prop', () => {
    cy.get('h2').eq(0).should('have.text', 'Founder of Empowered Futures');
  });

  it('check the location prop', () => {
    cy.get('h2').eq(1).should('contain', 'Calgary, Canada');
  });

  it('check the responseTime prop', () => {
    cy.get('h2').eq(2).should('contain', 'Usually responds within 1 day');
  });

  it('check social media icons correctness and their respective hrefs', () => {
    cy.get('a').each((item, index) => {
      // create a 'linkedin' and 'twitter' string in order to use in a regex. then it will look svg classes for the matching names.
      const socialMediaNames = ['linkedin', 'twitter'];
      let regex = new RegExp(socialMediaNames[index]);
      cy.wrap(item)
        .should(
          'have.attr',
          'href',
          dummyMentorData.socialMediaIcons[index].url
        )
        .find('svg')
        .should('have.attr', 'class')
        .and('match', regex);
    });
  });

  it('check the avatar prop and image', () => {
    // Finding the DOM <img> element with an alt attribute containing 'Hiba Badran', if it cannot be find, test fails. Then checks for its visibility.
    // There is a problem with images in the component testing, since they are used with next/images module, they cannot be seen in the cypress testing environment.
    // Such as the actual link for the image is in localhost:3000 (nextjs port) and the image searched in the testing environment is in localhost:8080 (cypress port).
    // Although the below test does not fail, in the testing browser, the image cannot be seen. I could not find a solution for this.
    cy.get('img[alt*="Hiba Badran"]').should('be.visible');
  });
});
