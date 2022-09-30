import React, { useEffect, useState, useRef } from 'react';
import { Data } from '../interface/data.interface';
import { SearchInputProps } from '../interface/search-input-props.interface';
import { useSearchContext } from "../context/SearchContext";


const SearchInput = ({ data }: SearchInputProps) => {
  const { filterSearch } = useSearchContext();

  // sets up reference with variable currentSearchValue - initial state is an empty string
  const currentSearchValue = useRef<HTMLInputElement>(null!);

  // Boolean state variable used to trigger immediate call of searchItem function
  const [triggerFilterSearch, setTriggerFilterSearch] = useState(false);

  // function takes data (arr of obj) and value (currentSearchValue) as arguments; resets boolean to false
  const searchItem = (data: Array<Data>, value: string) => {
    filterSearch(data, value);
    setTriggerFilterSearch(false);
  };

  // when boolean state set to true, call searchItem --> update currentFilteredData state.
  useEffect(() => {
    searchItem(data, currentSearchValue.current.value.toLowerCase());
  }, [triggerFilterSearch]);

  // render search form - currentSearchValue referenced in input. When input value changes, call searchItem to update state with current ref'd value.
  return (
    <>
      <div>
        <form action="input">
          <input
            type="text"
            placeholder="Search for an item by name"
            ref={currentSearchValue}
            onChange={() => setTriggerFilterSearch(true)}
          />
        </form>
      </div>
     
    </>
  );
};

export default SearchInput;
