import React, { FC } from 'react';

interface PercentBarProps {
  percentage: number;
  color: 'pink' | 'blue';
}

const PercentageBar: FC<PercentBarProps> = ({
  percentage,
  color,
}: PercentBarProps) => {
  return (
    <div className="w-80 h-6 border-gray-300 border-2 rounded-xl">
      <div className="w-full h-full bg-namelessBlue rounded-xl"></div>
    </div>
  );
};

export default PercentageBar;
