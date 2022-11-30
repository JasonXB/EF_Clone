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
  location: { country: 'Canada', province: 'ON', city: 'Toronto' },
  gender: 'Female',
  profile_path:
    'https://robohash.org/providentnumquampossimus.png?size=200x200&set=set1',
  job: 'Account Coordinator',
  bio: lorem,
  email: 'afeld0@independent.co.uk',
  tags: ['Synergy', 'Intuitive'],
  skills: [
    { skill: 'Workforce', proficiency: 74 },
    { skill: 'Portal', proficiency: 66 },
    { skill: 'Enhanced', proficiency: 85 },
    { skill: 'stable', proficiency: 60 },
    { skill: 'open system', proficiency: 66 },
  ],
};

describe('MentorProfileMain.cy.tsx', () => {
  it('mounts', () => {
    cy.viewport(1920, 1080);
    cy.mount(<MentorProfileMain mentor={mentorDummyData} />);
    cy.get('body');
  });
});
