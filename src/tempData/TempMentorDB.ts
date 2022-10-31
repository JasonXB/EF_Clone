import { Mentor } from '../interface/mentor.interface';

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores incidunt praesentium animi hic officiis delectus beatae, alias ea aut iusto, omnis totam, ullam assumenda odio eos rerum nam. Voluptatum, ipsam?';

// mock data from https://www.mockaroo.com/
const Mentors: Mentor[] = [
  {
    id: 1,
    first_name: 'Cordy',
    last_name: 'Beardsworth',
    location: 'Cambodia',
    gender: 'Female',
    profile_path:
      'https://robohash.org/providentnumquampossimus.png?size=200x200&set=set1',
    job: 'Account Coordinator',
    bio: lorem,
    tags: ['Synergy', 'Intuitive'],
    skills: [
      ['Workforce', 74],
      ['Portal', 66],
    ],
  },
  {
    id: 2,
    first_name: 'Roseanne',
    last_name: 'Nourse',
    location: 'Slovenia',
    gender: 'Female',
    profile_path:
      'https://robohash.org/sequiadipisciet.png?size=200x200&set=set1',
    job: 'Human Resources Manager',
    bio: lorem,
    tags: ['Multimedia', 'Strategy'],
    skills: [
      ['Help-Desk', 72],
      ['Visionary', 87],
    ],
  },
  {
    id: 3,
    first_name: 'Nolly',
    last_name: 'Jackett',
    location: 'Peru',
    gender: 'Male',
    profile_path:
      'https://robohash.org/isterecusandaenihil.png?size=200x200&set=set1',
    job: 'Editor',
    bio: lorem,
    tags: ['4th Generation', 'Oriented'],
    skills: [
      ['Zero Defect', 93],
      ['Alliance', 78],
    ],
  },
  {
    id: 4,
    first_name: 'Carma',
    last_name: 'Dearnaley',
    location: 'China',
    gender: 'Female',
    profile_path:
      'https://robohash.org/animirerumsapiente.png?size=200x200&set=set1',
    job: 'Analyst Programmer',
    bio: lorem,
    tags: ['Moderator', 'Analyzer'],
    skills: [
      ['Optional', 68],
      ['Synergized', 68],
    ],
  },
  {
    id: 5,
    first_name: 'Amandi',
    last_name: 'Crust',
    location: 'Venezuela',
    gender: 'Female',
    profile_path:
      'https://robohash.org/officiaveritatisautem.png?size=200x200&set=set1',
    job: 'Quality Engineer',
    bio: lorem,
    tags: ['Profit-Focused', 'Ergonomic'],
    skills: [
      ['Needs-Based', 67],
      ['Benchmark', 87],
    ],
  },
  {
    id: 6,
    first_name: 'Merralee',
    last_name: 'Gorham',
    location: 'Morocco',
    gender: 'Female',
    profile_path: 'https://robohash.org/eaquequisid.png?size=200x200&set=set1',
    job: 'Automation Specialist I',
    bio: lorem,
    tags: ['Installation', 'Archive'],
    skills: [
      ['Multi-Lateral', 60],
      ['Future-Proofed', 59],
    ],
  },
  {
    id: 7,
    first_name: 'Jules',
    last_name: 'Savidge',
    location: 'United States',
    gender: 'Male',
    profile_path:
      'https://robohash.org/quasicorruptiducimus.png?size=200x200&set=set1',
    job: 'Account Representative I',
    bio: lorem,
    tags: ['Public-Key', 'Installation'],
    skills: [
      ['Robust', 83],
      ['Hub', 65],
    ],
  },
  {
    id: 8,
    first_name: 'Rosco',
    last_name: 'Lethby',
    location: 'Nigeria',
    gender: 'Male',
    profile_path:
      'https://robohash.org/voluptasautoccaecati.png?size=200x200&set=set1',
    job: 'Structural Analysis Engineer',
    bio: lorem,
    tags: ['Framework', 'Neutral'],
    skills: [
      ['Contextually-Based', 53],
      ['Re-Contextualized', 87],
    ],
  },
  {
    id: 9,
    first_name: 'Jermaine',
    last_name: 'Tynemouth',
    location: 'China',
    gender: 'Male',
    profile_path:
      'https://robohash.org/asperioressintpraesentium.png?size=200x200&set=set1',
    job: 'Project Manager',
    bio: lorem,
    tags: ['Function', 'Moratorium'],
    skills: [
      ['Infrastructure', 95],
      ['Function', 65],
    ],
  },
  {
    id: 10,
    first_name: 'Jackelyn',
    last_name: 'Hissie',
    location: 'China',
    gender: 'Female',
    profile_path:
      'https://robohash.org/cupiditatesintea.png?size=200x200&set=set1',
    job: 'Engineer IV',
    bio: lorem,
    tags: ['Optimized', 'Holistic'],
    skills: [
      ['Middleware', 61],
      ['Client-Server', 54],
    ],
  },
  {
    id: 11,
    first_name: 'Clevie',
    last_name: 'Mapston',
    location: 'Russia',
    gender: 'Male',
    profile_path:
      'https://robohash.org/repellendusaliquidsaepe.png?size=200x200&set=set1',
    job: 'Administrative Assistant II',
    bio: lorem,
    tags: ['Managed', 'Proactive'],
    skills: [
      ['Impactful', 62],
      ['Organized', 58],
    ],
  },
  {
    id: 12,
    first_name: 'Joan',
    last_name: 'Janic',
    location: 'China',
    gender: 'Female',
    profile_path:
      'https://robohash.org/estofficiisdolor.png?size=200x200&set=set1',
    job: 'Budget/Accounting Analyst IV',
    bio: lorem,
    tags: ['Foreground', 'Critical'],
    skills: [
      ['Enterprise-Wide', 90],
      ['Systemic', 53],
    ],
  },
  {
    id: 13,
    first_name: 'Joly',
    last_name: 'Hartil',
    location: 'Colombia',
    gender: 'Female',
    profile_path:
      'https://robohash.org/nulladistinctiodolor.png?size=200x200&set=set1',
    job: 'Help Desk Technician',
    bio: lorem,
    tags: ['Framework', 'Sevens'],
    skills: [
      ['Demand-Driven', 68],
      ['Reciprocal', 72],
    ],
  },
  {
    id: 14,
    first_name: 'Malcolm',
    last_name: 'Casement',
    location: 'Russia',
    gender: 'Male',
    profile_path:
      'https://robohash.org/saepeetaliquam.png?size=200x200&set=set1',
    job: 'VP Sales',
    bio: lorem,
    tags: ['Up-sized', 'productivity'],
    skills: [
      ['Multi-layered', 74],
      ['Dynamic', 84],
    ],
  },
  {
    id: 15,
    first_name: 'Tamma',
    last_name: 'McCart',
    location: 'Indonesia',
    gender: 'Female',
    profile_path: 'https://robohash.org/autquiaqui.png?size=200x200&set=set1',
    job: 'Actuary',
    bio: lorem,
    tags: ['Web-Enabled', 'Architected'],
    skills: [
      ['Reactive', 53],
      ['Needs-Based', 78],
    ],
  },
  {
    id: 16,
    first_name: 'Gilbert',
    last_name: 'Kiggel',
    location: 'Ukraine',
    gender: 'Male',
    profile_path:
      'https://robohash.org/magnisuscipithic.png?size=200x200&set=set1',
    job: 'Clinical Specialist',
    bio: lorem,
    tags: ['Demand-Driven', 'Worthy'],
    skills: [
      ['Right-Sized', 74],
      ['Pricing Structur', 57],
    ],
  },
  {
    id: 17,
    first_name: 'Ammamaria',
    last_name: 'Benninger',
    location: 'Brazil',
    gender: 'Female',
    profile_path:
      'https://robohash.org/quisquamearumeligendi.png?size=200x200&set=set1',
    job: 'VP Product Management',
    bio: lorem,
    tags: ['System Engine', 'Transitional'],
    skills: [
      ['Decentralized', 83],
      ['Cross-Platform', 91],
    ],
  },
  {
    id: 18,
    first_name: 'Sari',
    last_name: 'Casburn',
    location: 'Brazil',
    gender: 'Female',
    profile_path:
      'https://robohash.org/atlaudantiumcommodi.png?size=200x200&set=set1',
    job: 'Health Coach',
    bio: lorem,
    tags: ['Multi-Channelled', 'Oriented'],
    skills: [
      ['Visionary', 55],
      ['Regional', 85],
    ],
  },
  {
    id: 19,
    first_name: 'Elston',
    last_name: 'Shayes',
    location: 'France',
    gender: 'Male',
    profile_path: 'https://robohash.org/autsintsunt.png?size=200x200&set=set1',
    job: 'Environmental Tech',
    bio: lorem,
    tags: ['Horizontal', 'Support'],
    skills: [
      ['Alliance', 65],
      ['Systematic', 89],
    ],
  },
  {
    id: 20,
    first_name: 'Alysia',
    last_name: 'Pomeroy',
    location: 'China',
    gender: 'Female',
    profile_path:
      'https://robohash.org/quivoluptatesdeserunt.png?size=200x200&set=set1',
    job: 'Geological Engineer',
    bio: lorem,
    tags: ['Future-Proofed', 'Operative'],
    skills: [
      ['Optimizing', 67],
      ['Time-Frame', 78],
    ],
  },
];

export const TempMentorDB = {
  getAll: () => {
    return Mentors;
  },
  getByID: (id: number) => {
    return Mentors.find((mentor) => mentor.id === id);
  },
};
