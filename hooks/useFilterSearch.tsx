import React, { useEffect, useState } from 'react';

// Custom hook written to filter data based on a search value and set it to a state variable.
// Written to be reused in multiple scenarios. Currently very basic; search only by 'name' string.
const useFilterSearch = () => {
  interface Data {
    name: string;
  }

  // State variable to display current filtered data on UI.
  const [currentFiltered, setCurrentFiltered] = useState(Array<Data>);

  // Function which takes a) an array of objects (data) and b) a searchValue as parameters. 
  // In the end, sets the currentFiltered state to the data filtered by what is searched in SearchForm.
  const filterSearch = (data: Array<Data>, searchValue: string) => {
    let filtered: Array<Data> = data
      .map((item) => {
        const { name } = item;
        return { name: name.toLowerCase() };
      })
      .filter((item) => {
        if (item) {
          return item.name.includes(searchValue.toLowerCase());
        } else {
          return item;
        }
      });
    setCurrentFiltered(filtered);
    console.log(currentFiltered);
  };

  return {
    currentFiltered,
    filterSearch,
  };
};

export default useFilterSearch;
