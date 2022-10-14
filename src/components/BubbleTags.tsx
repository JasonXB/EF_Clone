import BubbleTag, { BUBBLE_TAG_TYPE_CLASSES } from './BubbleTag';
import bubbleTagStyles from '../../styles/BubbleTag.module.css';
import { v4 as uuidv4 } from 'uuid';

interface Tags {
  tags: string[];
  bubbleTagType: BUBBLE_TAG_TYPE_CLASSES;
  index?: number;
  alternativeTagType?: BUBBLE_TAG_TYPE_CLASSES;
}

/*
  BubbleTags component's main use is to take in an array and display all of its element as a tag

  To use this component in different pages, BUBBLE_TAG_TYPE_CLASSES must 
  also be imported together with this component since bubbleTagType prop 
  takes in a BUBBLE_TAG_TYPE_CLASSES

  index and alternativeType props are optional and are used to select a 
  single element and change its color to the alternative one 
*/
const BubbleTags = ({
  tags,
  bubbleTagType,
  index,
  alternativeTagType,
}: Tags) => {
  let selectedTagType;
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row padding-[10px]">
      {tags.map((tag: string, i: number) => {
        //condition to handle cases if the component involves the index prop
        if (i == index) {
          selectedTagType = alternativeTagType;
        } else {
          selectedTagType = bubbleTagType;
        }

        return (
          <BubbleTag key={uuidv4()} tag={tag} bubbleTagType={selectedTagType} />
        );
      })}
    </div>
  );
};

export default BubbleTags;
