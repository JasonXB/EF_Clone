import React from 'react';
import { ReactNode, useState, createContext, useContext } from 'react';
import { Data } from '../interface/data.interface';
import { dummyMentors } from '../components/temporary/dummyMentors';

 type searchContextType = {
  currentFilteredData: Array<Data> ;
  filterSearch: (data: Array<Data>, searchValue: string) => void;
};

// default data set to dummyMentors for the time being.
const searchContextDefaultValues: searchContextType = {
  currentFilteredData: dummyMentors,
  filterSearch: () => {},
};

const SearchContext = createContext<searchContextType>(
  searchContextDefaultValues
);

export function useSearchContext() {
    return useContext(SearchContext);
  }
  
type Props = {
  children: ReactNode;
};

// currently, only one generic state variable defined for currentFilteredData
// as more use cases for SearchInput components become apparent, more variables can be defined to handle different kinds of state

  export function SearchProvider({ children }: Props) {
  // State variable to display current filtered data on UI
  const [currentFilteredData, setCurrentFilteredData] = useState(
    searchContextDefaultValues.currentFilteredData
  );

  // Function which takes a) an array of objects (data) and b) a searchValue as parameters.
  // In the end, sets the currentFilteredData state to the data filtered by what is entered in SearchForm.
  const filterSearch = (data: Array<Data>, searchValue: string) => {
    let filteredData: Array<Data> = data
      .map((item) => {
        const { name, id, category } = item;
        return {
          name: name.toLowerCase(),
          id: id,
          category: category,
          
        };
      })
      .filter((item) => {
        let containsName = item.name.startsWith(searchValue.toLowerCase());
        if (containsName) {
          return item.name.startsWith(searchValue.toLowerCase())
        } else {
          return false;
        }
      });
    setCurrentFilteredData(filteredData);
  };
  
  const value = {
    currentFilteredData,
    filterSearch,
  };

  return (
    <>
      <SearchContext.Provider value={value}>
        <>
        {children}
        </>
        </SearchContext.Provider>
    </>
  );
}
