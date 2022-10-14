import React from 'react';
import BubbleTags from '../../src/components/BubbleTags';
import { BUBBLE_TAG_TYPE_CLASSES } from '../../src/components/BubbleTag';

const arr = ['tomato', 'lettuce', 'cat', 'tomato', 'lettuce', 'cat'];

const test = () => {
  return (
    <>
      <p>first test</p>
      <BubbleTags
        tags={arr}
        bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryLight}
        index={0}
        alternativeTagType={BUBBLE_TAG_TYPE_CLASSES.primaryShaded}
      />
      <p>second test</p>
      <BubbleTags
        tags={arr}
        bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.primaryLight}
      />
    </>
  );
};

export default test;
