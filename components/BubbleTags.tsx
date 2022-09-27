import BubbleTag, { BUBBLE_TAG_TYPE_CLASSES } from './BubbleTag';
import bubbleTagStyles from '../styles/BubbleTag.module.css';

interface Tags {
  tags: string[]
}

const BubbleTags = ({ tags }: Tags) => {
  return (
    <div className={bubbleTagStyles.container}>
      {tags.map((tag: string) => (
        <BubbleTag tag={tag} bubbleTagType={BUBBLE_TAG_TYPE_CLASSES.blue} />
      ))}
    </div>
  );
};

export default BubbleTags;
