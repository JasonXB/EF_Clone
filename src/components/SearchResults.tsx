import { useGlobalContext } from '../../state-management/ReactContext/Context';
import SearchResult from './SearchResult';

// Temporary component used to test SearchInput component
// maps currentFilteredData and returns a SearchResult component for each result
const SearchResults = () => {
  const { currentFilteredData } = useGlobalContext();

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
