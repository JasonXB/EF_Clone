import removableTagStyles from '../styles/RemovableTag.module.css';
import RemovableTag from './RemovableTag';
import React from 'react';

interface Tags {
  tags: string[],
  removeTag: (index: number) => void
}

//component mainly used for the survey pages

const RemovableTags = ({ tags, removeTag }: Tags) => {
  
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
