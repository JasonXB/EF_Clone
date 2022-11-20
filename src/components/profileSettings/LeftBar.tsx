import type { NextPage } from 'next';

//this page will need to be adjusted further for updated designs.
const LeftBar: NextPage = ({}) => {
  const nav = ['Profile', 'Communications', 'Password'];
  return (
    <div className="flex ">
      <ul className="h-full -mt-8 -ml-8 text-gray-900 bg-gray-300 border-gray-200 bg-opacity-20 w-72 pt-7 ">
        {nav.map((section, i) => {
          return (
            <li
              key={i}
              className="w-10/12 px-6 py-3 mb-5 ml-5 text-base bg-white rounded-2xl hover:shadow-lg"
            >
              <div className="pl-3 hover:border-l-4 hover:border-primary-2 hover:pl-2 text-md">
                <a href="#">{section}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftBar;
