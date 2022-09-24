import React, { FC } from 'react';

import { FilterOption } from './filter-option.interface';
import FilterSection from './filter-section';

interface CheckboxFilterTypes {
  sections: FilterOption[];
}

const CheckboxFilter: FC<CheckboxFilterTypes> = ({
  sections,
}: CheckboxFilterTypes) => {
  return (
    <div className="w-90 py-7 px-6 border-green-900 border-4">
      {sections.map((section, index) => (
        <FilterSection
          key={index}
          title={section.title}
          options={section.options}
        />
      ))}
    </div>
  );
};

export default CheckboxFilter;
