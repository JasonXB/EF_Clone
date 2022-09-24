import React, { FC } from 'react';

import FilterEntry from './filter-entry';

import { FilterOption } from '../../interface/filter-option.interface';

const FilterSection: FC<FilterOption> = ({
  title,
  options,
  toggleFilter,
}: FilterOption) => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-4xl">{title}</h2>
      </div>
      <div>
        {options.map((option, i) => {
          return (
            <div key={i} className="mb-4 flex">
              <FilterEntry
                sectionTitle={title}
                option={option}
                toggleFilter={toggleFilter}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
