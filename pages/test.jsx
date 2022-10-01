import BubbleTags from '../components/BubbleTags';
import { BUBBLE_TAG_TYPE_CLASSES } from '../components/BubbleTag';

const arr = [
  'tomato',
  'cheese',
  'racecar',
  'lettuce',
  'pineapple',
  'cheese',
  'racecar',
  'lettuce',
  'pineapple',
];

const test = () => {
  return (
    <div>
      <p>tags in mini profile card component</p>
      <BubbleTags tags={arr} bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.pink} />
      <p>tags in find a mentor page</p>
      <BubbleTags
        tags={arr}
        bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.blue}
        index={0}
        alternativeTagType={BUBBLE_TAG_TYPE_CLASSES.shadedBlue}
      />
      <p>tags in notes page</p>
      <BubbleTags tags={arr} bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.black} />
      <BubbleTags tags={arr} bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.grey} />
      <p>tags in similar mentors</p>
      <BubbleTags
        tags={arr}
        bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.pinkShadedBlue}
      />
    </div>
  );
};

export default test;
