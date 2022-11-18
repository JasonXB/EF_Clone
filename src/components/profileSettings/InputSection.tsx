import type { NextPage } from 'next';

const InputSection: NextPage = ({}) => {
  return (
    <>
      <div className="flex">
        <div className="mb-3 mr-4 xl:w-96 ">
          <label className="inline-block mb-2 text-gray-700 form-label">
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
          <label className="inline-block mb-2 text-gray-700 form-label">
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
        <div className="mb-3 mr-4 xl:w-96">
          <label className="inline-block mb-2 text-gray-700 form-label">
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
          <label className="inline-block mb-2 text-gray-700 form-label">
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
        <div className="mb-3 mr-4 xl:w-96">
          <label className="inline-block mb-2 text-gray-700 form-label">
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
        <div className="mb-3 mr-4 xl:w-96">
          <label className="inline-block mb-2 text-gray-700 form-label">
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
          className="block px-3 py-2 mt-1 mb-12 text-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm rounded-lg-md sm:text-sm w-80 "
        >
          <option>English(Canada)</option>
          <option>Franch(Canada)</option>
          <option>English(US)</option>
        </select>
      </div>
    </>
  );
};

export default InputSection;
