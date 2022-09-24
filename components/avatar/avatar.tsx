import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './avatar.module.css';

interface ImagePath {
  imgLocation: StaticImageData | string;
  displaySize: 'large' | 'medium';
  personsName: string;
}

const Avatar: FC<ImagePath> = ({
  imgLocation,
  displaySize,
  personsName,
}: ImagePath) => {
  const altText = 'A picture of ' + personsName;

  const selectedClass =
    displaySize === 'large' ? styles.largeAvatar : styles.mediumAvatar;

  return (
    <div className={`${selectedClass}`}>
      <Image src={imgLocation} alt={altText} />
    </div>
  );
};

export default Avatar;
