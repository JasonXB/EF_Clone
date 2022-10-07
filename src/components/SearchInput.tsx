import React, { useEffect, useState, useRef } from 'react';
import { Data } from '../../interface/data.interface';
import { SearchInputProps } from '../../interface/search-input-props.interface';
import { useSearchContext } from '../../context/SearchContext';

const SearchInput = ({ data }: SearchInputProps) => {
  const { filterSearch } = useSearchContext();

  // sets up reference with variable currentSearchValue
  const currentSearchValue = useRef<HTMLInputElement>(null!);

  const onType = () => {
    filterSearch(data, currentSearchValue.current.value.toLowerCase());
  }

<<<<<<< HEAD
=======
  // when boolean state set to true, call searchItem --> update currentFilteredData state.
  useEffect(() => {
  // function takes data (arr of obj) and value (currentSearchValue) as arguments; resets boolean to false
  // Note: function defined inside useEffect in order to deal with eslint warning.
    const searchItem = (data: Array<Data>, value: string) => {
      filterSearch(data, value);
      setTriggerFilterSearch(false);
    };
    searchItem(data, currentSearchValue.current.value.toLowerCase());
  }, [triggerFilterSearch, data]); // eslint-disable-line

  // render search form - currentSearchValue referenced in input. When input value changes, call searchItem to update state with current ref'd value.
  //  styling is rough/temporary.
>>>>>>> 7e476c87463ef9bffaafad7301c578cf166ec5c2
  return (
    <>
      <div>
        <div className="items-center justify-center p-5 bg-white flex-column">
          <h1>Search for a Mentor by Name</h1>
          <div className="relative flex items-stretch w-1/4 p-1 mb-4 border-2 border-gray-300 border-solid shadow-sm rounded-2xl input-group">
            <input
              type="search"
              className="relative flex-auto block w-full min-w-0 px-3 py-0 m-1 text-xl transition ease-in-out text-lggray-700 text-font-normal form-control focus:ring-0 focus:text-gray-700 focus:bg-white"
              aria-label="Search"
              aria-describedby="button-addon2"
              placeholder="Skills, Mentor name or Industries"
              ref={currentSearchValue}
              onChange={onType}
            />
            <button
              className="flex items-center px-4 py-0 text-xs font-medium leading-tight text-black uppercase bg-white rounded btn focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
