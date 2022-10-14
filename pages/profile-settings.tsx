import type { NextPage } from 'next';
import Head from 'next/head';

const ProfileSettings: NextPage = ({}) => {
  return (
    <>
      <div className=" sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-red-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h4 className="text-sky-400 font-semibold mb-5">Profile Settings</h4>
        <br></br>
      </div>
      <div className="flex justify-center mb-5">
        <h6>Complete your profile to achieve Protege status.</h6>
      </div>
      <div className="flex justify-center">
        
      <span className="inline-block h-14 w-15 overflow-hidden mb-5 rounded-full bg-gray-100">
        <svg
          className="h-full w-full text-gray-300 mb-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        
      </span>
      </div>
    <div className='flex justify-center mb-8' > <p>Add a public profile picture</p></div>
     <div className='flex justify-center'>
      <h4 className='text-pink-400 text-2xl '>General Information</h4>
     </div>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            First Name
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-1
        
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
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
        block
        w-full
        px-12
        py-1.5
        ml-6
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleEmail0"
            placeholder="Smith"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="
        form-control
        block
        w-full
        px-12
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleEmail0"
            placeholder="Johnsmith@gmail.com"
          />
        </div>
        <div className="mb-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            LinkedIn
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-12
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleEmail0"
            placeholder="LinkedIn.ca"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            Add your title
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-12
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleEmail0"
            placeholder="student"
          />
        </div>
        <div className="mb-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            First Name
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-12
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleEmail0"
            placeholder="Calgary,Alberta"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Primary Language
          </label>
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="mt-1 mb-12 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option>English(Canada)</option>
            <option>Franch(Canada)</option>
            <option>English(US)</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <h5 style={{ color: 'pink' }}>Main Goal</h5>
          <br></br>
          <label
            htmlFor="about"
            className="block text-md font-medium text-gray-700"
          >
            Please provide a short summary of your professional goals that will
            be visible to potential mentors
          </label>
          <div className="mt-1">
            <textarea
              id="about"
              name="about"
              rows={6}
              className="mt-1 ml-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
              placeholder="Getting a job,career pivot, career advancement,etc"
              defaultValue={''}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
