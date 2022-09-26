import BubbleTag from './BubbleTag';
import bubbleTagStyles from '../styles/BubbleTag.module.css';

const BubbleTags = ({ tags }) => {
  return (
    <div className={bubbleTagStyles.container}>
      {tags.map((tag, index) => (
        <BubbleTag tag={tag} index={index} />
      ))}
    </div>
  );
};

export default BubbleTags;
