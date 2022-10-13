import { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import styles from './achievement-circle.module.css';

interface AchievementCircleProps {
  progress: number;
  image: StaticImageData;
  text: string;
}

const AchievementCircle = ({
  progress,
  image,
  text,
}: AchievementCircleProps) => {
  return (
    <div className="h-32 w-32">
      <CircularProgressbarWithChildren value={progress}>
        {/* Note: text can be passed to the "text" property of CircularProgressbar  */}
        <Image
          src={image}
          alt="achievement image"
          height="90px"
          width={'90px'}
          className="rounded-full"
        />
      </CircularProgressbarWithChildren>
      ; ;
    </div>
  );
};

export default AchievementCircle;
