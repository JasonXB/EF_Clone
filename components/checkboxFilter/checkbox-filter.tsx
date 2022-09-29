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
  function updateCheckedStatus(
    target: OptionStatus,
    targetSectionTitle: string
  ): void {
    const newStatus = target.isChecked ? false : true;
    const updatedTarget: OptionStatus = {
      text: target.text,
      isChecked: newStatus,
    };
    const updatedSections = [...sections];
    for (let i = 0; i < updatedSections.length; i++) {
      const section = updatedSections[i];
      const isTargetSection = updatedSections[i].title === targetSectionTitle;
      if (isTargetSection) {
        for (let j = 0; j < section.options.length; j++) {
          if (section.options[j].text === target.text) {
            updatedSections[i].options[j] = updatedTarget;
          }
        }
        break;
      }
    }
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
