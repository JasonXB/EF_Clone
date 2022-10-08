import React, { FC } from 'react';

import FilterEntry from './filter-entry';

import { FilterSection as FilterSectionProps } from '../../interface/filter-section.interface';

const FilterSection: FC<FilterSectionProps> = ({
  title,
  options,
  toggleFilter,
}: FilterSectionProps) => {
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
