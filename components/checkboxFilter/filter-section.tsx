import React, { FC } from 'react';

import { FilterOption } from './filter-option.interface';

import styles from './filter-section.module.css';

const FilterSection: FC<FilterOption> = ({ title, options }: FilterOption) => {
  // note: "checked" is "bg-black" for now
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-4xl">{title}</h2>
      </div>
      <div>
        {options.map((text, i) => {
          return (
            <div key={i} className="mb-4 flex">
              <div>
                <label className="mr-4 flex items-center text-2xl font-light">
                  <span className={`${styles.checkmark} mr-3`}></span>
                  <input
                    type="checkbox"
                    className={`${styles.hideRealCheckbox}`}
                  />
                  {text}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
