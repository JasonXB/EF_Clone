import removableTagStyles from '../styles/RemovableTag.module.css';

const RemovableTag = ({ tag, removeTag }) => {
  return (
    <span className={removableTagStyles.black}>
      {tag}
      <button className={removableTagStyles.remove} onClick={removeTag}>
        x
      </button>
    </span>
  );
};

export default RemovableTag;
