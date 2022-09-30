import RemovableTags from '../components/RemovableTags';
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

  const removeTag = (index: number) => {
    const newArr = list.filter((tag, i) => i !== index);
    setList(newArr);
  };

  return (
    <div>
      <RemovableTags tags={list} removeTag={removeTag} />
    </div>
  );
};

export default test;
