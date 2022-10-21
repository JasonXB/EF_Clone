import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import Button from '../src/components/buttons/reusable-buttons';

const questionnaire: NextPage = ({}) => {
  return (
    <Layout>
      <div
        className={`bg-[url(../src/assets/Beckground-for-homepage2.png)] bg-cover bg-opacity-[50%] text-center py-[200px]`}
      >
        <div className="">
          <span className="font-semibold text-primary-1 text-[24px] font-semibold">
            Search for the perfect mentor for you!
          </span>

          <div className="flex justify-center items-center py-[30px]">
            <input
              className="border-2 rounded-[23px] h-[36px] w-1/2 sm:w-[350px] md:w-[500px] drop-shadow-md text-[10px] ss:text-[16px] text-center"
              placeholder="Skills, Mentor name, or Industries"
              type="text"
              name="searchBar"
              required
              autoFocus
            ></input>
            <svg
              className="h-8 w-8 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <circle cx="10" cy="10" r="7" />{' '}
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>

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
