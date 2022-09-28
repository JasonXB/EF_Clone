// temporary interface to set types for SearchResult props
interface SearchResultProps {
  category: string;
  name: string;
  id: number;
  key: number;
}

// Temporary component used to test SearchInput component/useFilterSearch
// Displays a component for every returned search result from a given set of data
const SearchResult = ({ category, name, id }: SearchResultProps) => {
  return (
    <div>
      <h1>
        {category} {id}: {`${name.charAt(0).toUpperCase() + name.slice(1)}`}
      </h1>
    </div>
  );
};

export default SearchResult;
