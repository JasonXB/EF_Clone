import type { NextPage } from 'next';
import Head from 'next/head';

import CheckboxFilter from '../components/checkboxFilter/checkbox-filter';
import { FilterOption } from '../components/checkboxFilter/filter-option.interface';

const Home: NextPage = ({}) => {
  const sections: FilterOption[] = [
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
      options: [
        { text: 'Canada' },
        { text: 'United States' },
        { text: 'Other' },
      ],
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
  return (
    <div>
      <Head>
        <title>Empowered Futures</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home Page - Hello world!</h1>
      <div>
        <CheckboxFilter sections={sections} />
      </div>
    </div>
  );
};

export default Home;
