import removableTagStyles from '../styles/RemovableTag.module.css';
import RemovableTag from './RemovableTag';
import React from 'react';

interface Tags {
  tags: string[],
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}

//component mainly used for the survey pages

const RemovableTags = ({ tags, setList }: Tags) => {

  const removeTag = (index: number) => {
    const newArr = tags.filter((tag, i) => i !== index);
    setList(newArr);
  };
  
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
