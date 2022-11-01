import React from 'react';
import { ReactNode, useState, createContext, useContext } from 'react';
import { Data } from '../../src/interface/data.interface';
import { dummyMentors } from '../../src/temporary/dummyMentors';
import { dummySimilarMentorProfiles } from '../../src/components/mentorProfile/similarMentors/dummySimilarMentorProfiles';
import { MiniCardProps } from '../../src/components/mentorProfile/similarMentors/SimilarMentorsCarousel';

type contextType = {
  selectedSimilarMentor: MiniCardProps | null;
  selectSimilarMentor: (i: number | null) => void;
};

// default data set to dummyMentors for the time being.
const similarMentorsContextDefaultValues: contextType = {
  selectedSimilarMentor: null,
  selectSimilarMentor: () => {},
};

const SimilarMentorsContext = createContext<contextType>(similarMentorsContextDefaultValues);

export function useSimilarMentorsContext() {
  return useContext(SimilarMentorsContext);
}

type Props = {
  children: ReactNode;
};

// currently, only one generic state variable defined for currentFilteredData
// as more use cases for SearchInput components become apparent, more variables can be defined to handle different kinds of state

export function SimilarMentorsProvider({ children }: Props) {
  // Context for similar mentors carousel  -- fix 'any' soon
  const [selectedSimilarMentor, setSelectedSimilarMentor] = useState<any>(null);

  // sets selectedSimilarMentor to the mentor object with the same id as the clicked profile card
  const selectSimilarMentor = (i: number | null) => {
    i !== null
      ? setSelectedSimilarMentor(dummySimilarMentorProfiles[i])
      : setSelectedSimilarMentor(i);

  };


  const value = {
    selectedSimilarMentor,
    selectSimilarMentor,
  };

  return (
    <>
      <SimilarMentorsContext.Provider value={value}>
        <>{children}</>
      </SimilarMentorsContext.Provider>
    </>
  );
}
