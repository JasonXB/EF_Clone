import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImagePath {
  imgLocation: StaticImageData | string;
  displaySize: 'large' | 'mediumLarge' | 'medium' | 'small';
  personsName: string;
}

interface IImageDimensions {
  height: string;
  width: string;
}

const Avatar: FC<ImagePath> = ({
  imgLocation,
  displaySize,
  personsName,
}: ImagePath) => {
  const altText: string = 'A picture of ' + personsName;

  const largeSizing: IImageDimensions = {
    height: '357px',
    width: '334px',
  };
  const mediumLargeSizing: IImageDimensions = {
    height: '180px',
    width: '158px',
  };
  const mediumSizing: IImageDimensions = {
    height: '150px',
    width: '140px',
  };
  const smallSizing: IImageDimensions = {
    height: '148px',
    width: '148px',
  };

  function chooseSizing(choice: string): IImageDimensions {
    if (choice === 'large') {
      return largeSizing;
    } else if (choice === 'mediumLarge') {
      return mediumLargeSizing;
    } else if (choice === 'medium') {
      return mediumSizing;
    } else {
      return smallSizing;
    }
  }

  return (
    <Image
      src={imgLocation}
      alt={altText}
      height={chooseSizing(displaySize).height}
      width={chooseSizing(displaySize).width}
    />
  );
};

export default Avatar;
