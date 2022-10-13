import bubbleTagStyles from '../styles/BubbleTag.module.css';

interface Tag {
  tag: string;
  bubbleTagType: BUBBLE_TAG_TYPE_CLASSES;
}

export enum BUBBLE_TAG_TYPE_CLASSES {
  blue = 'blue',
  shadedBlue = 'shadedBlue',
  pink = 'pink',
  red = 'red',
  black = 'black',
  grey = 'grey',
  pinkShadedBlue = 'pinkShadedBlue',
}

const getBubbleTag = (
  bubbleTagType = BUBBLE_TAG_TYPE_CLASSES.blue
): typeof bubbleTagStyles.blue =>
  ({
    [BUBBLE_TAG_TYPE_CLASSES.blue]: bubbleTagStyles.blue,
    [BUBBLE_TAG_TYPE_CLASSES.shadedBlue]: bubbleTagStyles.shadedBlue,
    [BUBBLE_TAG_TYPE_CLASSES.pink]: bubbleTagStyles.pink,
    [BUBBLE_TAG_TYPE_CLASSES.red]: bubbleTagStyles.red,
    [BUBBLE_TAG_TYPE_CLASSES.black]: bubbleTagStyles.black,
    [BUBBLE_TAG_TYPE_CLASSES.grey]: bubbleTagStyles.grey,
    [BUBBLE_TAG_TYPE_CLASSES.pinkShadedBlue]: bubbleTagStyles.pinkShadedBlue,
  }[bubbleTagType]);

const BubbleTag = ({ tag, bubbleTagType }: Tag) => {
  const bubbleTagStyle = getBubbleTag(bubbleTagType);
  return <span className={bubbleTagStyle}>{tag}</span>;
};

export default BubbleTag;
