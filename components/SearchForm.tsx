import React, { useEffect, useState, useRef } from 'react';
import useFilterSearch from '../hooks/useFilterSearch';

import { Data } from '../interface/data.interface';
import { dummyMentors } from '../dummyMentors';

import Mentor from './Mentor';

const SearchForm = () => {
  const { currentFiltered, filterSearch } = useFilterSearch();

  // sets up reference with variable currentSearchValue - initial state is an empty string
  const currentSearchValue = useRef<HTMLInputElement>(null!);

  const searchProduct = (data: Array<Data>, value: string) => {
    filterSearch(data, value);
    setBoolean(false);
  };

  // Boolean state variable used to trigger immediate call of searchProduct function
  const [boolean, setBoolean] = useState(false);

  // when boolean state becomes true, call searchProduct --> update currentFiltered state.
  useEffect(() => {
    searchProduct(dummyMentors, currentSearchValue.current.value.toLowerCase());
  }, [boolean]);

  // render search form - currentSearchValue referenced in input. When input value changes, call searchProduct to update state with current ref'd value.
  return (
    <>
      <div>
        <form action="input">
          <input
            type="text"
            placeholder="Search for a mentor by name"
            ref={currentSearchValue}
            onChange={() => setBoolean(true)}
          />
        </form>
      </div>
      {/* Currently returning the Mentor component here as the state is easily
     accessible from the useFilterSearch hook. This will be changed. */}
      {currentFiltered.map((mentor) => {
        return <Mentor key={mentor.id} id={mentor.id} name={mentor.name} />;
      })}
    </>
  );
};

export default SearchForm;
