import Layout from '../src/components/Layout';
import Button from '../src/components/buttons/reusable-buttons';
// import SearchInput from '../src/components/SearchInput';

const questionnaire = ({}) => {
  return (
    <Layout>
      <div className={`text-center py-[20%]`}>
        <div className="">
          <h3 className="font-semibold text-primary-1">
            Search for the perfect mentor for you!
          </h3>

          <div className="flex justify-center items-center py-[30px] relative mr-[50px]">
            <input
              className=" border-2 rounded-[23px] h-[45px] w-[231px] sm:w-[350px] md:w-[500px] md:text-center drop-shadow-md text-[10px] sm:text-[16px] pl-[22px]"
              placeholder="Skills, Mentor name, or Industries"
              type="search"
              name="searchBar"
              required
              autoFocus
            />
            <div className="absolute ml-20 sm:ml-48 md:ml-80">
              <svg
                className="w-8 h-8 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <circle cx="10" cy="10" r="7" />{' '}
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </div>
            <Button
              variant="primary"
              type="submit"
              clickHandler={() =>
                console.log(
                  'SEARCH BUTTON will be updated to make a request function'
                )
              }
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default questionnaire;
