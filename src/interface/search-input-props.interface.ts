import { Data } from './data.interface';

// generic interface for the Props passed to the SearchInput component (a unique set of data e.g. Mentors, Countries etc.)
export interface SearchInputProps {
  data: Array<Data>;
}
