import React, { FC } from 'react';

import { FilterOption } from './filter-option.interface';

import styles from './filter-section.module.css';

const FilterSection: FC<FilterOption> = ({ title, options }: FilterOption) => {
  return (
    <div className="border-red-900 border-2">
      <div className="mb-4">
        <h2 className="text-4xl">{title}</h2>
      </div>
      <div>
        {options.map((text, i) => {
          return (
            <div key={i} className="mb-4 flex">
              <div className="mx-2 flex flex-col justify-center items-center">
                <label>
                  <input
                    type="checkbox"
                    className={`${styles.hideRealCheckbox}`}
                  />
                  {text}
                </label>
              </div>
              {/* <div>
                <p className="text-2xl font-light">{text}</p>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
