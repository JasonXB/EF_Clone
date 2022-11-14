interface Tag {
  tag: string;
  bubbleTagType: BUBBLE_TAG_TYPE_CLASSES;
}

export enum BUBBLE_TAG_TYPE_CLASSES {
  primaryLight = 'primaryLight',
  primaryShaded = 'primaryShaded',
}

const getBubbleTag = (
  bubbleTagType = BUBBLE_TAG_TYPE_CLASSES.primaryLight
): string =>
  ({
    [BUBBLE_TAG_TYPE_CLASSES.primaryLight]:
      'border border-primary-1 text-primary-1',
    [BUBBLE_TAG_TYPE_CLASSES.primaryShaded]: 'bg-blue-100 text-primary-2',
  }[bubbleTagType]);

const BubbleTag = ({ tag, bubbleTagType }: Tag) => {
  const bubbleTagStyle = getBubbleTag(bubbleTagType);
  return (
    <span
      className={`inline-block px-4 py-1 mx-1 font-bold text-sm text-center capitalize leading-4 sm:max-w-[10rem] ss:max-w-[10rem] xs:max-w-[10rem] rounded-full ${bubbleTagStyle}`}
    >
      {tag}
    </span>
  );
};

export default BubbleTag;
