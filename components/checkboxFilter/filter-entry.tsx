import React, { FC } from 'react';

import { OptionStatus } from '../../interface/option-status.interface';

import styles from './filter-section.module.css';

interface FilterEntryProps {
  option: OptionStatus;
  toggleFilter: Function;
}

const FilterEntry: FC<FilterEntryProps> = ({
  option,
  toggleFilter,
}: FilterEntryProps) => {
  // note: "checked" is indicated by "bg-black" for now. It could be improved with a fast animation.
  // function reportClick(target: OptionStatus) {
  //   toggleFilter(target);
  // }

  return (
    <div>
      <label
        onClick={() => {
          toggleFilter(option);
        }}
        className="mr-4 flex items-center text-2xl font-light"
      >
        <span
          className={`${styles.checkmark} mr-3 ${
            option.isChecked ? 'bg-black' : ''
          }`}
        ></span>
        <input type="checkbox" className={`${styles.hideRealCheckbox}`} />
        <span>{option.text}</span>
      </label>
    </div>
  );
};

export default FilterEntry;
