import React from 'react';
import BubbleTags from '../src/components/BubbleTags';
import { BUBBLE_TAG_TYPE_CLASSES } from '../src/components/BubbleTag';

import tailwind from '../tailwind.config';

const arr = ['tomato', 'lettuce', 'cat', 'tomato', 'lettuce', 'cat'];

const test = () => {
  console.log(tailwind.theme.extend.colors);
  return (
    <BubbleTags
      tags={arr}
      bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryLight}
      index={0}
      alternativeTagType={BUBBLE_TAG_TYPE_CLASSES.primaryShaded}
    />
  );
};

export default test;
