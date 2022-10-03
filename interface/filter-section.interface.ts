import { OptionStatus } from './option-status.interface';

export interface FilterSection {
  title: string;
  options: OptionStatus[];
  toggleFilter?: Function;
}
