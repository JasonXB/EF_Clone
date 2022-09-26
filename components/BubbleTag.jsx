import bubbleTagStyles from '../styles/BubbleTag.module.css';

const BubbleTag = ({ tag, index }) => {
  return (
    <span className={index == 0 ? bubbleTagStyles.dark : bubbleTagStyles.light}>
      {tag}
    </span>
  );
};

export default BubbleTag;
