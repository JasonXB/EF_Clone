import React, { FC } from 'react';

import { FilterSection as FilterSectionProps } from '../../interface/filter-section.interface';
import { OptionStatus } from '../../interface/option-status.interface';
import FilterSection from './filter-section';

interface CheckboxFilterProps {
  sections: FilterSectionProps[];
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
    // the updated OptionStatus has the same target text, but the new status, because we are flipping the value of the prior entry.
    const updatedTarget: OptionStatus = {
      text: target.text,
      isChecked: newStatus,
    };
    // start new array so we aren't directly modifying the old one
    const updatedSections = [...sections];
    for (let i = 0; i < updatedSections.length; i++) {
      const section = updatedSections[i];
      // we are trying to modify the section that matches targetSectionTitle
      const isTargetSection = updatedSections[i].title === targetSectionTitle;
      if (isTargetSection) {
        for (let j = 0; j < section.options.length; j++) {
          const isOptionToModify = section.options[j].text === target.text;
          if (isOptionToModify) {
            updatedSections[i].options[j] = updatedTarget;
          }
        }
        break; // once the correct entry has been discovered and modified, we don't need the loop anymore
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
