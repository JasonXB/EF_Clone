import { FilterSection } from '../interface/filter-section.interface';

export const filterSectionInputs: FilterSection[] = [
  {
    title: 'Gender',
    options: [{ text: 'Male' }, { text: 'Female' }],
  },
  {
    title: 'Skills',
    options: [
      { text: 'Design' },
      { text: 'Business' },
      { text: 'Management' },
      { text: 'Other' },
    ],
  },
  {
    title: 'Goals',
    options: [
      { text: 'Job Advancement' },
      { text: 'Job Search Help' },
      { text: 'Networking' },
      { text: 'Other' },
    ],
  },
  {
    title: 'Geographic Location',
    options: [{ text: 'Canada' }, { text: 'United States' }, { text: 'Other' }],
  },
  {
    title: 'Company',
    options: [
      { text: 'Microsoft' },
      { text: 'Google' },
      { text: 'Netflix' },
      { text: 'Salesforce' },
    ],
  },
];
