import React, { useEffect } from 'react';
import { ReactNode, useState, createContext, useContext } from 'react';
import { Data } from '../../src/interface/data.interface';
import { dummyMentors } from '../../src/temporary/dummyMentors';
import { dummySimilarMentorProfiles } from '../../src/components/mentorProfile/similarMentors/dummySimilarMentorProfiles';
import { MiniCardProps } from '../../src/components/mentorProfile/similarMentors/SimilarMentorsCarousel';

type contextType = {
  currentFilteredData: Array<Data>;
  filterSearch: (data: Array<Data>, searchValue: string) => void;
  selectedSimilarMentor: MiniCardProps | null;
  selectSimilarMentor: (i: number | null) => void;
};

// default data set to dummyMentors for the time being.
const contextDefaultValues: contextType = {
  currentFilteredData: dummyMentors,
  filterSearch: () => {},
  selectedSimilarMentor: null,
  selectSimilarMentor: () => {},
};

const GlobalContext = createContext<contextType>(contextDefaultValues);

export function useGlobalContext() {
  return useContext(GlobalContext);
}

type Props = {
  children: ReactNode;
};

// currently, only one generic state variable defined for currentFilteredData
// as more use cases for SearchInput components become apparent, more variables can be defined to handle different kinds of state

export function ContextProvider({ children }: Props) {
  // State variable to display current filtered data on UI
  const [currentFilteredData, setCurrentFilteredData] = useState(
    contextDefaultValues.currentFilteredData
  );

  // Context for similar mentors carousel  -- fix 'any' soon
  const [selectedSimilarMentor, setSelectedSimilarMentor] = useState<any>(null);

  // sets selectedSimilarMentor to the mentor object with the same id as the clicked profile card
  const selectSimilarMentor = (i: number | null) => {
    i !== null
      ? setSelectedSimilarMentor(dummySimilarMentorProfiles[i])
      : setSelectedSimilarMentor(i);

  };

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
          return item.name.startsWith(searchValue.toLowerCase());
        } else {
          return false;
        }
      });
    setCurrentFilteredData(filteredData);
  };

  const value = {
    currentFilteredData,
    filterSearch,
    selectedSimilarMentor,
    selectSimilarMentor,
  };

  return (
    <>
      <GlobalContext.Provider value={value}>
        <>{children}</>
      </GlobalContext.Provider>
    </>
  );
}
