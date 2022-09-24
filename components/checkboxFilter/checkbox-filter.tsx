import React, { FC } from 'react';

import { FilterOption } from '../../interface/filter-option.interface';
import { OptionStatus } from '../../interface/option-status.interface';
import FilterSection from './filter-section';

interface CheckboxFilterProps {
  sections: FilterOption[];
  reportToState: Function;
}

const CheckboxFilter: FC<CheckboxFilterProps> = ({
  sections,
  reportToState,
}: CheckboxFilterProps) => {
  function updateCheckedStatus(target: OptionStatus) {
    let newStatus = target.isChecked ? false : true;
    const updatedTarget: OptionStatus = {
      text: target.text,
      isChecked: newStatus,
    };
    const updatedSections: FilterOption[] = sections.map(
      (section: FilterOption) => {
        const updated: FilterOption = {
          title: section.title,
          options: section.options.map((originalOption, index) => {
            if (originalOption.text === target.text) {
              return updatedTarget;
            } else {
              return originalOption;
            }
          }),
        };
        return updated;
      }
    );
    reportToState(updatedSections);
  }
  return (
    <div className="w-90 py-7 px-6 border-green-900 border-4">
      <div>
        {sections.map((section, index) => (
          <FilterSection
            key={index}
            title={section.title}
            options={section.options}
            toggleFilter={updateCheckedStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilter;
