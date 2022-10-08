import { useSearchContext } from '../../context/SearchContext';
import SearchResult from './SearchResult';

// Temporary component used to test SearchInput component
// maps currentFilteredData and returns a SearchResult component for each result
const SearchResults = () => {
  const { currentFilteredData } = useSearchContext();
  
  return (
    <>
      {currentFilteredData[0] ? (
        currentFilteredData.map((item) => {
          const { category, id, name } = item;
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

export default SearchResults;
