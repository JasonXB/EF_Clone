import RemovableTags from '../components/RemovableTag/RemovableTags';
import { useState } from 'react';

const arr = [
  'lettuce',
  'racecar',
  'tomato',
  'pinapple',
  'cars',
  'racecar',
  'tomato',
  'pinapple',
  'cars',
  'racecar',
  'tomato',
  'pinapple',
  'cars',
];

const test = () => {
  const [list, setList] = useState(arr);

  return (
    <div>
      <RemovableTags tags={list} setList={setList} />
    </div>
  );
};

export default test;
