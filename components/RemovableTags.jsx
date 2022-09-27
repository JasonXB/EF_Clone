import removableTagStyles from '../styles/RemovableTag.module.css';
import RemovableTag from './RemovableTag';

const RemovableTags = ({ tags, removeTag }) => {
  return (
    <div className={removableTagStyles.container}>
      {tags.map((tag, index) => (
        <RemovableTag
          key={index}
          tag={tag}
          removeTag={() => {
            return removeTag(index);
          }}
        />
      ))}
    </div>
  );
};

export default RemovableTags;
