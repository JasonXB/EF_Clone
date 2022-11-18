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

          <div className="flex flex-col justify-center mt-10 ml-40">
            <div className="flex flex-col items-center">
              <p className="flex justify-center mb-5 text-2xl font-bold text-primary-1">
                Profile Settings
              </p>

              <p className="text-xs font-semibold mb-7">
                Complete your profile to achieve protégé status.
              </p>

              <span className="inline-block mb-5 overflow-hidden bg-gray-100 border-black h-14 w-15 rounded-lg-full">
                <svg
                  className="w-full h-full mb-5 text-gray-300 border-black"
                  fill="currentColor"
                  viewBox="0 0 23 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>

              <p className="mb-12 text-xs font-semibold">
                Add a public profile picture
              </p>
            </div>
            <h4 className="mb-4 text-2xl text-primary-2 ">
              General Information
            </h4>
            <InputSection />

            <div>
              <h5 className="mb-4 text-2xl text-primary-2">Main Goal</h5>
              <br></br>
              <label
                htmlFor="about"
                className="block font-medium text-hue-700 text-md"
              >
                Please provide a short summary of your professional goals that
                will be visible to potential mentors
              </label>
              <div className="w-full mt-1 border-hue-700">
                <textarea
                  rows={6}
                  className="block w-full px-4 mt-1 ml-2 border-2 border-gray-300 rounded-lg shadow-sm rounded-lg-md focus:border-indigo-100 focus:ring-indigo-500 sm:text-md"
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
