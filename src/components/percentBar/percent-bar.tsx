import React, { FC } from 'react';

interface PercentBarProps {
  percentage: number;
  color: 'pink' | 'blue'; // arguably should be an enum
  showPercentageText?: boolean;
}

const PercentageBar: FC<PercentBarProps> = ({
  percentage,
  color,
  showPercentageText,
}: PercentBarProps) => {
  const progressStyle = {
    width: percentage > 6 ? `${percentage}%` : '6%',
  };

  return (
    <div className="relative h-6 border-2 border-gray-300 w-52 rounded-xl">
      <div
        style={progressStyle}
        className={`w-3/5 h-full rounded-xl absolute ${
          color === 'pink' ? 'bg-secondary-1' : 'bg-primary-1'
        }`}
      ></div>
      {showPercentageText ? (
        <div className="absolute flex items-center justify-center w-full text-white">
          <span className="flex items-center justify-center h-5">{`${percentage}%`}</span>
        </div>
      ) : null}
    </div>
  );
};

export default PercentageBar;
