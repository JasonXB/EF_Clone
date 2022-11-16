import type { NextPage } from 'next';
import InputSection from '../../src/components/profileSettings/InputSection';
import LeftBar from '../../src/components/profileSettings/LeftBar';
import Layout from '../../src/components/Layout';

const ProfileSettings: NextPage = ({}) => {
  return (
    <>
    <Layout>
      <div className="flex">
        <LeftBar />

        <div className="flex flex-col justify-center ml-40 mt-10">
          <div className="flex flex-col items-center">
            <p
              className="flex justify-center text-2xl font-bold mb-5"
              style={{ color: '#006abc' }}
            >
              Profile Settings
            </p>

            <p className="mb-7 font-semibold text-xs">
              Complete your profile to achieve protégé status.
            </p>

            <span className="inline-block border-black h-14 w-15 overflow-hidden mb-5 rounded-lg-full bg-gray-100">
              <svg
                className="h-full w-full border-black text-gray-300 mb-5"
                fill="currentColor"
                viewBox="0 0 23 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>

            <p className="mb-12 font-semibold text-xs">
              Add a public profile picture
            </p>
          </div>
          <h4 className="text-pink-600 text-2xl mb-4 ">General Information</h4>
          <InputSection />

          <div>
            <h5 className="text-pink-600 text-2xl mb-4">Main Goal</h5>
            <br></br>
            <label
              htmlFor="about"
              className="block text-md font-medium text-gray-700"
            >
              Please provide a short summary of your professional goals that
              will be visible to potential mentors
            </label>
            <div className="mt-1 w-full border-gray-700">
              <textarea
                rows={6}
                className="mt-1 ml-2 rounded-lg px-4 border-2 block w-full rounded-lg-md border-gray-300 shadow-sm focus:border-indigo-100 focus:ring-indigo-500 sm:text-md"
                placeholder="Getting a job,career pivot, career advancement,etc"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
    
  );
};

export default ProfileSettings;
