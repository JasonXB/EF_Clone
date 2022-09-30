import { SearchResultProps } from "../interface/search-result-props.interface";

// Temporary component used to test SearchInput component
// Displays a component for every returned search result from a given set of data; renders in SearchResults component
const SearchResult = ({ category, name, id }: SearchResultProps) => {

  return (
    <>
    <div>
        {category} {id}: {`${name.charAt(0).toUpperCase() + name.slice(1)}`} 
     
    </div>
    <br/>
    </>
  );
};

export default SearchResult;
