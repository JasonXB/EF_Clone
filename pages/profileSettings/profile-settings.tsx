import type { NextPage } from 'next';
import Head from 'next/head';

const ProfileSettings: NextPage = ({}) => {
  return (
    <>
      <div className="flex">
        <div className="flex ">
          <ul className="bg-gray-300 bg-opacity-20 border border-gray-200 w-64 text-gray-900 ">
            <li className=" mt-11 px-6 text-base py-3 w-10/12 bg-white rounded-2xl ml-5 mb-5 mr-5 hover:shadow-lg ">
              <div className="pl-3 hover:border-l-4 hover:border-pink-600 hover:pl-2 text-md">
                <a href="#">Profile</a>
              </div>
            </li>
            <li className="px-6 px-6 py-3 w-10/12 bg-white rounded-2xl ml-5 mb-5 text-base hover:shadow-lg">
            <div className="pl-3 hover:border-l-4 hover:border-pink-600 hover:pl-2 text-md">
              <a href="#">
                Communications
              </a>
              </div>
            </li>
            <li className="px-6 px-6 py-3 w-10/12 bg-white rounded-2xl ml-5 text-base hover:shadow-lg">
            <div className="pl-3 hover:border-l-4 hover:border-pink-600 hover:pl-2 text-md">
              <a href="#">Password</a>
              </div>
            </li>
          </ul>
        </div>

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
          <div className="flex">
            <div className="mb-3 xl:w-96 mr-4 ">
              <label className="form-label inline-block mb-2 text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="
        form-control
        block
        w-80
        px-2.5
        
        py-1.5
        text-base
        font-normal
        text-gray-300
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        transition
        ease-in-out
        m-0
        
      "
                id="exampleEmail0"
                placeholder="John"
              />
            </div>
            <div className="mb-3 xl:w-96">
              <label className="form-label inline-block mb-2 text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="
        form-control
        placeholder-shown:border-gray-300
        block
        
        w-80
        px-2.5
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        transition
        ease-in-out
        m-0
      "
                id="exampleEmail0"
                placeholder="Smith"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-3 xl:w-96 mr-4">
              <label className="form-label inline-block mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="
        form-control
        block
        w-80
        px-2.5
        
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        
        m-0
      "
                placeholder="johnsmith@gmail.com"
              />
            </div>
            <div className="mb-3 xl:w-96">
              <label className="form-label inline-block mb-2 text-gray-700">
                Linkedin
              </label>
              <input
                type="text"
                className="
        form-control
        placeholder-shown:border-gray-300
        block
        
        w-80
        px-2.5
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
       
        m-0
        
      "
                placeholder="Linedin.ca"
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-3 xl:w-96 mr-4">
              <label className="form-label inline-block mb-2 text-gray-700">
                Add your title
              </label>
              <input
                type="text"
                className="
        form-control
        block
        w-80
        px-2.5
        
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        m-0
      "
                placeholder="Student"
              />
            </div>
            <div className="mb-3 xl:w-96 mr-4">
              <label className="form-label inline-block mb-2 text-gray-700">
                Location
              </label>
              <input
                type="text"
                className="
        form-control
        block
        w-80
        px-2.5
        
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        m-0
       
      "
                placeholder="Calgary,Alberta"
              />
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3 ">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700"
            >
              Primary Language
            </label>
            <select
              name="language"
              className="mt-1  mb-12 rounded-lg block w-full text-gray-400 rounded-lg-md border border-gray-300 bg-white py-2 px-3 shadow-sm sm:text-sm  w-80
            "
            >
              <option>English(Canada)</option>
              <option>Franch(Canada)</option>
              <option>English(US)</option>
            </select>
          </div>

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
    </>
  );
};

export default ProfileSettings;
