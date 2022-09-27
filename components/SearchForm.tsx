import React, { useEffect, useState, useRef } from 'react';

import useFilterSearch from '../hooks/useFilterSearch';

const SearchForm = () => {
  const { currentFiltered, filterSearch } = useFilterSearch();

  interface Mentors {
    name: string;
  }

  const dummyMentors: Array<Mentors> = [{ name: 'Tommy' }, { name: 'Albert' }];

  // sets up reference with variable currentSearchValue - initial state is an empty string
  const currentSearchValue = useRef<HTMLInputElement>(null!);

  const searchProduct = (value: string) => {
    filterSearch(dummyMentors, value);
    console.log(value);
    setBoolean(false);
  };

  // Boolean state variable used to trigger immediate call of searchProduct function --> update currentFiltered state.
  const [boolean, setBoolean] = useState(false);

  // on page render, focus on the search input
  useEffect(() => {
    searchProduct(currentSearchValue.current.value);
  }, [boolean]);

  // render search form - currentSearchValue referenced in input. When input value changes, call searchProduct to update state with current ref'd value.
  return (
    <div className="search-form">
      <form action="input">
        <>
          <input
            type="text"
            placeholder="search"
            id="name"
            ref={currentSearchValue}
            onChange={() => setBoolean(true)}
          />
        </>
      </form>
    </div>
  );
};

export default SearchForm;
