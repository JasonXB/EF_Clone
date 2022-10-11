import { OptionStatus } from '../interface/option-status.interface';
import { FilterSection } from '../interface/filter-section.interface';

export function getCheckedFilters(checkboxState: FilterSection[]): string[] {
  const acceptedValues = checkboxState
    .map((section: FilterSection) => {
      return section.options
        .filter((status: OptionStatus) => status.isChecked)
        .map((remaining) => remaining.text);
    })
    .flat();
  return acceptedValues;
}

export function getFilteredResults(
  rawInputs: string[],
  acceptedValues: string[]
): string[] {
  if (acceptedValues.length === 0) return rawInputs;
  return rawInputs.filter((i) => acceptedValues.includes(i));
}
