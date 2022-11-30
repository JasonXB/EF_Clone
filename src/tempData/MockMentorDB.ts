import Mentor from '../interface/mentor.interface';

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores incidunt praesentium animi hic officiis delectus beatae, alias ea aut iusto, omnis totam, ullam assumenda odio eos rerum nam. Voluptatum, ipsam?';

// mock data from https://www.mockaroo.com/
const Mentors: Mentor[] = [
  {
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
  },
  {
    id: 2,
    first_name: 'Roseanne',
    last_name: 'Nourse',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },
    gender: 'Female',
    profile_path:
      'https://robohash.org/sequiadipisciet.png?size=200x200&set=set1',
    job: 'Human Resources Manager',
    bio: lorem,
    email: 'smainson1@amazonaws.com',
    tags: ['Multimedia', 'Strategy'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 3,
    first_name: 'Nolly',
    last_name: 'Jackett',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },  
    gender: 'Male',
    profile_path:
      'https://robohash.org/isterecusandaenihil.png?size=200x200&set=set1',
    job: 'Editor',
    bio: lorem,
    email: 'scaldwall2@topsy.com',
    tags: ['4th Generation', 'Oriented'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 4,
    first_name: 'Carma',
    last_name: 'Dearnaley',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },   
    gender: 'Female',
    profile_path:
      'https://robohash.org/animirerumsapiente.png?size=200x200&set=set1',
    job: 'Analyst Programmer',
    bio: lorem,
    email: 'bwrathmell3@amazon.com',
    tags: ['Moderator', 'Analyzer'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 5,
    first_name: 'Amandi',
    last_name: 'Crust',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },
    gender: 'Female',
    profile_path:
      'https://robohash.org/officiaveritatisautem.png?size=200x200&set=set1',
    job: 'Quality Engineer',
    bio: lorem,
    email: 'tcallway4@studiopress.com',
    tags: ['Profit-Focused', 'Ergonomic'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 6,
    first_name: 'Merralee',
    last_name: 'Gorham',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },
    gender: 'Female',
    profile_path: 'https://robohash.org/eaquequisid.png?size=200x200&set=set1',
    job: 'Automation Specialist I',
    bio: lorem,
    email: 'rsolan5@usgs.gov',
    tags: ['Installation', 'Archive'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 7,
    first_name: 'Jules',
    last_name: 'Savidge',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },
    gender: 'Male',
    profile_path:
      'https://robohash.org/quasicorruptiducimus.png?size=200x200&set=set1',
    job: 'Account Representative I',
    bio: lorem,
    email: 'esanten6@businessweek.com',
    tags: ['Public-Key', 'Installation'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 8,
    first_name: 'Rosco',
    last_name: 'Lethby',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },
    gender: 'Male',
    profile_path:
      'https://robohash.org/voluptasautoccaecati.png?size=200x200&set=set1',
    job: 'Structural Analysis Engineer',
    bio: lorem,
    email: 'cmeech7@discuz.net',
    tags: ['Framework', 'Neutral'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 9,
    first_name: 'Jermaine',
    last_name: 'Tynemouth',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },   
    gender: 'Male',
    profile_path:
      'https://robohash.org/asperioressintpraesentium.png?size=200x200&set=set1',
    job: 'Project Manager',
    bio: lorem,
    email: 'mgrattan8@godaddy.com',
    tags: ['Function', 'Moratorium'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 10,
    first_name: 'Jackelyn',
    last_name: 'Hissie',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },   
    gender: 'Female',
    profile_path:
      'https://robohash.org/cupiditatesintea.png?size=200x200&set=set1',
    job: 'Engineer IV',
    bio: lorem,
    email: 'alimb9@photobucket.com',
    tags: ['Optimized', 'Holistic'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 11,
    first_name: 'Clevie',
    last_name: 'Mapston',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },    
    gender: 'Male',
    profile_path:
      'https://robohash.org/repellendusaliquidsaepe.png?size=200x200&set=set1',
    job: 'Administrative Assistant II',
    bio: lorem,
    email: 'rbellsona@wired.com',
    tags: ['Managed', 'Proactive'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 12,
    first_name: 'Joan',
    last_name: 'Janic',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },   
    gender: 'Female',
    profile_path:
      'https://robohash.org/estofficiisdolor.png?size=200x200&set=set1',
    job: 'Budget/Accounting Analyst IV',
    bio: lorem,
    email: 'dfisbyb@shinystat.com',
    tags: ['Foreground', 'Critical'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 13,
    first_name: 'Joly',
    last_name: 'Hartil',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },
    gender: 'Female',
    profile_path:
      'https://robohash.org/nulladistinctiodolor.png?size=200x200&set=set1',
    job: 'Help Desk Technician',
    bio: lorem,
    email: 'gpattinsonc@barnesandnoble.com',
    tags: ['Framework', 'Sevens'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 14,
    first_name: 'Malcolm',
    last_name: 'Casement',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },    
    gender: 'Male',
    profile_path:
      'https://robohash.org/saepeetaliquam.png?size=200x200&set=set1',
    job: 'VP Sales',
    bio: lorem,
    email: 'xmiched@topsy.com',
    tags: ['Up-sized', 'productivity'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 15,
    first_name: 'Tamma',
    last_name: 'McCart',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },
    gender: 'Female',
    profile_path: 'https://robohash.org/autquiaqui.png?size=200x200&set=set1',
    job: 'Actuary',
    bio: lorem,
    email: 'kvasileviche@eventbrite.com',
    tags: ['Web-Enabled', 'Architected'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 16,
    first_name: 'Gilbert',
    last_name: 'Kiggel',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },
    gender: 'Male',
    profile_path:
      'https://robohash.org/magnisuscipithic.png?size=200x200&set=set1',
    job: 'Clinical Specialist',
    bio: lorem,
    email: 'gshieldsf@soup.io',
    tags: ['Demand-Driven', 'Worthy'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 17,
    first_name: 'Ammamaria',
    last_name: 'Benninger',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },    
    gender: 'Female',
    profile_path:
      'https://robohash.org/quisquamearumeligendi.png?size=200x200&set=set1',
    job: 'VP Product Management',
    bio: lorem,
    email: 'rlacaseg@paginegialle.it',
    tags: ['System Engine', 'Transitional'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 18,
    first_name: 'Sari',
    last_name: 'Casburn',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },    
    gender: 'Female',
    profile_path:
      'https://robohash.org/atlaudantiumcommodi.png?size=200x200&set=set1',
    job: 'Health Coach',
    bio: lorem,
    email: 'mlorrowayh@bizjournals.com',
    tags: ['Multi-Channelled', 'Oriented'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 19,
    first_name: 'Elston',
    last_name: 'Shayes',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },    
    gender: 'Male',
    profile_path: 'https://robohash.org/autsintsunt.png?size=200x200&set=set1',
    job: 'Environmental Tech',
    bio: lorem,
    email: 'skitleyi@theguardian.com',
    tags: ['Horizontal', 'Support'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
  {
    id: 20,
    first_name: 'Alysia',
    last_name: 'Pomeroy',
    location: { country: 'Canada', province: 'ON', city: 'Toronto' },   
    gender: 'Female',
    profile_path:
      'https://robohash.org/quivoluptatesdeserunt.png?size=200x200&set=set1',
    job: 'Geological Engineer',
    bio: lorem,
    email: 'cfeareyj@issuu.com',
    tags: ['Future-Proofed', 'Operative'],
    skills: [
      { skill: 'Workforce', proficiency: 74 },
      { skill: 'Portal', proficiency: 66 },
      { skill: 'Enhanced', proficiency: 85 },
      { skill: 'stable', proficiency: 60 },
      { skill: 'open system', proficiency: 66 },
    ],
  },
];

const MockMentorDB = {
  getAll: () => {
    return Mentors;
  },
  getByID: (id: number) => {
    return Mentors.find((mentor) => mentor.id === id) || Mentors[0];
  },
};

export default MockMentorDB;
