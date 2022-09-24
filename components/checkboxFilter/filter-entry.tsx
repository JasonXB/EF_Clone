import React, { FC } from 'react';

import { OptionStatus } from '../../interface/option-status.interface';

import styles from './filter-section.module.css';

interface FilterEntryProps {
  option: OptionStatus;
  toggleFilter: Function | undefined;
}

const FilterEntry: FC<FilterEntryProps> = ({
  option,
  toggleFilter,
}: FilterEntryProps) => {
  // note: "checked" is indicated by "bg-black" for now. It could be improved with a fast animation.

  return (
    <div className="mr-4 flex items-center text-2xl font-light">
      <span
        className={`${styles.checkmark} mr-3 ${
          option.isChecked ? 'bg-black' : ''
        }`}
        onClick={() => {
          if (toggleFilter) {
            toggleFilter(option);
          }
        }}
      ></span>
      <span
        onClick={() => {
          if (toggleFilter) {
            toggleFilter(option);
          }
        }}
      >
        {option.text}
      </span>
    </div>
  );
};

export default FilterEntry;
