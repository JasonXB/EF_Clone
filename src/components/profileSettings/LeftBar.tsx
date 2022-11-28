import type { NextPage } from 'next';
import Link from 'next/link';
import { NavBar } from '../../util/left-bar';
import LeftBarIcons from './left-bar-icons';

//this page will need to be adjusted further for updated designs.
const LeftBar: NextPage = ({}) => {
  const nav = NavBar.mentor;
  return (
    <div className="flex relative top-0 left-0 bg-hue-200 w-72 pt-7">
      <ul className="w-full flex flex-col items-center gap-6 text-gray-900  border-gray-200 bg-opacity-20">
        {nav.map((section, i) => {
          return (
            <li
              key={i}
              className="w-10/12 px-2 py-3 text-base bg-white rounded-lg hover:shadow-lg cursor-pointer"
            >
              {section.title !== 'Settings' ? (
                <div className="flex items-center gap-2 pl-3 hover:border-l-4 hover:border-primary-2 hover:pl-2 text-md">
                  <LeftBarIcons name={section.title} />
                  <Link href={`${section.path}`}>{section.title}</Link>
                </div>
              ) : (
                <div className="flex items-center gap-2 pl-3 hover:border-l-4 hover:border-primary-2 hover:pl-2 text-md">
                  <LeftBarIcons name={section.title} />
                  <p>{section.title}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftBar;
