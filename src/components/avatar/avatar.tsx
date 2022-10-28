import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { AvatarSizing } from '../../enum/avatarSizing.enum';

interface ImagePath {
  imgLocation: StaticImageData | string;
  displaySize: 'large' | 'mediumLarge' | 'medium' | 'egg' | 'small';
  personsName: string;
}

interface IImageQualities {
  height: string;
  width: string;
  borderRadius: string;
}

const Avatar: FC<ImagePath> = ({
  imgLocation,
  displaySize,
  personsName,
}: ImagePath) => {
  const altText: string = 'A picture of ' + personsName;

  const largeSizing: IImageQualities = {
    // for the profile page
    height: '290px',
    width: '267px',
    borderRadius: 'rounded-lg',
  };
  const mediumLargeSizing: IImageQualities = {
    height: '180px',
    width: '158px',
    borderRadius: 'rounded-3xl',
  };
  const mediumSizing: IImageQualities = {
    height: '150px',
    width: '140px',
    borderRadius: 'rounded-3xl',
  };
  const eggSizing: IImageQualities = {
    height: '190px',
    width: '160px',
    borderRadius: 'rounded-full',
  };
  const smallSizing: IImageQualities = {
    // for the "find a mentor" cards
    height: '148px',
    width: '148px',
    borderRadius: 'rounded-lg',
  };

  function chooseSizing(choice: string): IImageQualities {
    if (choice === AvatarSizing.large) {
      return largeSizing;
    } else if (choice === AvatarSizing.mediumLarge) {
      return mediumLargeSizing;
    } else if (choice === AvatarSizing.medium) {
      return mediumSizing;
    } else if (choice === AvatarSizing.egg) {
      return eggSizing;
    } else {
      return smallSizing;
    }
  }

  return (
    <Image
      src={imgLocation}
      alt={altText}
      className={`${chooseSizing(displaySize).borderRadius}`}
      height={chooseSizing(displaySize).height}
      width={chooseSizing(displaySize).width}
    />
  );
};

export default Avatar;
