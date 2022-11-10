import MentorProfileMain from '../../../src/components/mentorProfile/MentorProfileMain';
import Mentor from '../../../src/interface/mentor.interface';

// Below line is placed in the tests in order to see the component on the Cypress testing environment. (browser)
// cy.get('body');

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores incidunt praesentium animi hic officiis delectus beatae, alias ea aut iusto, omnis totam, ullam assumenda odio eos rerum nam. Voluptatum, ipsam?';

const mentorDummyData: Mentor = {
  id: 1,
  first_name: 'Cordy',
  last_name: 'Beardsworth',
  location: 'Cambodia',
  gender: 'Female',
  profile_path:
    'https://robohash.org/providentnumquampossimus.png?size=200x200&set=set1',
  job: 'Account Coordinator',
  bio: lorem,
  email: 'afeld0@independent.co.uk',
  tags: ['Synergy', 'Intuitive'],
  skills: [
    ['Workforce', 74],
    ['Portal', 66],
    ['Enhanced', 85],
    ['stable', 60],
    ['open system', 66],
  ],
};

describe('MentorProfileMain.cy.tsx', () => {
  it('mounts', () => {
    cy.viewport(1920, 1080);
    cy.mount(<MentorProfileMain mentor={mentorDummyData} />);
    cy.get('body');
  });
});
