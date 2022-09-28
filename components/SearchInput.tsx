import React, { useEffect, useState, useRef } from 'react';
import useFilterSearch from '../hooks/useFilterSearch';

import { Data } from '../interface/data.interface';

import SearchResult from './temporary/SearchResult';
import { SearchInputProps } from '../interface/search-input-props.interface';

const SearchInput = ({ data }: SearchInputProps) => {
  const { currentFilteredData, filterSearch } = useFilterSearch();

  // sets up reference with variable currentSearchValue - initial state is an empty string
  const currentSearchValue = useRef<HTMLInputElement>(null!);

  // Boolean state variable used to trigger immediate call of searchItem function
  const [boolean, setBoolean] = useState(false);

  // function takes data (arr of obj) and value (currentSearchValue) as arguments; resets boolean to false
  const searchItem = (data: Array<Data>, value: string) => {
    filterSearch(data, value);
    setBoolean(false);
  };

  // when boolean state set to true, call searchItem --> update currentFilteredData state.
  useEffect(() => {
    searchItem(data, currentSearchValue.current.value.toLowerCase());
  }, [boolean]);

  // render search form - currentSearchValue referenced in input. When input value changes, call searchItem to update state with current ref'd value.
  return (
    <>
      <div>
        <form action="input">
          <input
            type="text"
            placeholder="Search for an item by name"
            ref={currentSearchValue}
            onChange={() => setBoolean(true)}
          />
        </form>
      </div>
      {/* Currently returning the SearchResult component here as the state is easily
     accessible from the useFilterSearch hook. This will be changed shortly. */}
      {currentFilteredData[0] ? (
        currentFilteredData.map((item) => {
          const { category, id, name, key } = item;
          return (
            <SearchResult category={category} key={id} id={id} name={name} />
          );
        })
      ) : (
        <div>No results found!</div>
      )}
    </>
  );
};

export default SearchInput;
