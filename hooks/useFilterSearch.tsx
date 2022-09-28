import React, { useEffect, useState } from 'react';
import { Data } from '../interface/data.interface';
import { dummyMentors } from '../components/temporary/dummyMentors';

// Custom hook written to filter data based on a search value and set it to a state variable.
// Written to be reused in multiple scenarios. Currently very basic; search only by 'name' string.
const useFilterSearch = () => {
  // State variable to display current filtered data on UI. Default data from dummyMentors object.
  const [currentFilteredData, setCurrentFilteredData] =
    useState<any[]>(dummyMentors);

  // Function which takes a) an array of objects (data) and b) a searchValue as parameters.
  // In the end, sets the currentFilteredData state to the data filtered by what is entered in SearchForm.
  const filterSearch = (data: Array<Data>, searchValue: string) => {
    let filteredData: Array<Data> = data
      .map((item) => {
        const { name, id, category } = item;
        return { name: name.toLowerCase(), id: id, category: category };
      })
      .filter((item) => {
        if (item) {
          return item.name.startsWith(searchValue.toLowerCase());
        } else {
          return false;
        }
      });
    setCurrentFilteredData(filteredData);
  };

  return {
    currentFilteredData,
    filterSearch,
  };
};

export default useFilterSearch;
