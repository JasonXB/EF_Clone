import type { NextPage } from 'next';


const LeftBar: NextPage = ({}) => {
  const nav = ['Profile','Communications','Password'];
  return (
    <div className="flex ">
    <ul className="bg-gray-300 bg-opacity-20 border border-gray-200 w-64 text-gray-900 ">
      {nav.map((section, i) => {
        return (
          <li className="px-6 py-3 w-10/12 bg-white rounded-2xl ml-5 mb-5 text-base hover:shadow-lg">
            <div className="pl-3 hover:border-l-4 hover:border-pink-600 hover:pl-2 text-md">
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