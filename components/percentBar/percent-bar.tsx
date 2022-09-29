import React, { FC } from 'react';

interface PercentBarProps {
  percentage: number;
  color: 'pink' | 'blue'; // arguably should be an enum
}

interface SomeOtherPropsThatAreWrong {
  percentage: number;
  ingredients: string[];
}

const PercentageBar: FC<PercentBarProps> = ({
  percentage,
  color,
}: PercentBarProps) => {
  const progressStyle = {
    width: percentage > 6 ? `${percentage}%` : '6%',
  };

  return (
    <div className="w-80 h-6 border-gray-300 border-2 rounded-xl">
      <div
        style={progressStyle}
        className={`w-3/5 h-full rounded-xl ${
          color === 'pink' ? 'bg-fuchsia' : 'bg-namelessBlue'
        }`}
      ></div>
    </div>
  );
};

export default PercentageBar;
