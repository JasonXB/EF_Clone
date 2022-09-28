import removableTagStyles from '../styles/RemovableTag.module.css';
import React from 'react';

interface Tag {
  tag: string,
  removeTag: React.MouseEventHandler<HTMLButtonElement>
}

const RemovableTag = ({ tag, removeTag }: Tag) => {
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
