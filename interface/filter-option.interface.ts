import { OptionStatus } from './option-status.interface';

export interface FilterOption {
  title: string;
  options: OptionStatus[];
  toggleFilter?: Function;
}
