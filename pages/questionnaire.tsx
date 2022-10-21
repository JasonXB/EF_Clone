import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
// import Image from 'next/image';
// import background from '../src/assets/Beckground-for-homepage2.png';
import Button from '../src/components/buttons/reusable-buttons';

const questionnaire: NextPage = ({}) => {
  return (
    <Layout>
      {/* <Image className="border-2" src={img} alt="background"/> */}
      {/* <div
        className="text-center py-[200px]"
        style={{ backgroundImage: `url(${background})` }}
      > */}

      <div className="bg-[url{'../src/assets/Beckground-for-homepage2.png'}]">
        <span className="text-primary-1 text-[24px] font-semibold">
          Search for the perfect mentor for you!
        </span>

        <div className='flex justify-center items-center py-[30px]'>
        <input
          className="border-2 rounded-[23px] h-[36px] w-1/2 sm:w-[350px] md:w-[500px] drop-shadow-md text-[10px] ss:text-[16px] text-center"
          placeholder="Skills, Mentor name, or Industries"
          type="text"
          name="searchBar"
          required
          autoFocus
        />
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
    </Layout>
  );
};

export default questionnaire;
