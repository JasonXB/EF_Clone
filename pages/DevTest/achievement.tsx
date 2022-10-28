import React from 'react';

import AchievementCircle from '../../src/components/achievementCircle/achievement-circle';

import Cat from '../../public/assets/cat.jpeg';

export default function achievement() {
  const testText = 'some string';

  return (
    <div>
      {/* <h5 className='mb-4'>Theme colors set in tailwind.config.js</h5> */}
      <div className="flex flex-row gap-8 flex-wrap mb-4"></div>
      <AchievementCircle text={testText} progress={50} image={Cat} />
    </div>
  );
}
