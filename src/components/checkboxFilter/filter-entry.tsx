import React, { FC } from 'react';
import { OptionStatus } from '../../interface/option-status.interface';
import styles from './filter-section.module.css';

interface FilterEntryProps {
  sectionTitle: string;
  option: OptionStatus;
  toggleFilter: Function | undefined;
}

const FilterEntry: FC<FilterEntryProps> = ({
  sectionTitle, // passed down and up so the state change function can distinguish between selections titled "other"
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
            toggleFilter(option, sectionTitle);
          }
        }}
      ></span>
      <span
        onClick={() => {
          if (toggleFilter) {
            toggleFilter(option, sectionTitle);
          }
        }}
      >
        {option.text}
      </span>
    </div>
  );
};

export default FilterEntry;
