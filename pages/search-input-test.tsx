import type { NextPage } from 'next';
import SearchResults from '../src/components/SearchResults';
import SearchForm from '../src/components/SearchInput';
import { dummyMentors } from '../temporary/dummyMentors';

const SearchInputTest: NextPage = ({}) => {
  return (
    <div>
          {/* Search form and (currently) Mentor search results */}
          <br/>
          <SearchForm data={dummyMentors} />
          <br/>
          <SearchResults />
          </div>
  );
};

export default SearchInputTest;
