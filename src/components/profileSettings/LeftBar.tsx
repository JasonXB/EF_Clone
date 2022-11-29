import type { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { NavBar } from '../../util/left-bar';
import LeftBarIcons from './left-bar-icons';

type Props = {
  visible: boolean | undefined;
  userType: string | undefined;
};

const LeftBar = ({ visible, userType }: Props) => {
  const [settingModal, setSettingModal] = useState(false);

  const modalToggle = useCallback(() => {
    setSettingModal((prev) => !prev);
  }, []);

  return (
    <div
      className={`flex relative top-0 left-0 bg-hue-200 w-80 pt-7 ${
        !visible && 'hidden'
      }`}
    >
      <ul className="w-full flex flex-col items-center gap-6 text-gray-900  border-gray-200 bg-opacity-20">
        {(userType === 'mentor' ? NavBar.mentor : NavBar.mentee).map(
          (section, i) => (
            <>
              {section.title !== 'Settings' ? (
                <li
                  key={section.title}
                  className="w-10/12 px-2 py-3 text-md bg-white rounded-lg hover:shadow-lg cursor-pointer flex items-center gap-2 pl-3 hover:text-primary-2 hover:font-medium"
                >
                  <LeftBarIcons name={section.title} />
                  <Link href={`${section.path}`}>{section.title}</Link>
                </li>
              ) : (
                <li
                  key={section.title}
                  className="w-10/12 px-2 py-3 bg-white rounded-lg hover:shadow-lg pl-3 text-md hover:font-medium"
                  onMouseEnter={modalToggle}
                  onMouseLeave={modalToggle}
                >
                  <div className="flex items-center gap-2">
                    <LeftBarIcons name={section.title} />
                    <p>{section.title}</p>
                  </div>
                  {settingModal && (
                    <ul className="border-l border-black ml-6 pl-2 flex flex-col gap-3 mt-4">
                      {section.options?.map((option, index) => (
                        <li
                          key={`${option.name}-${index}`}
                          className="text-sm flex items-center gap-2 cursor-pointer hover:text-primary-2"
                        >
                          <LeftBarIcons name={option.name} />
                          <Link href={`${option.path}`}>{option.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )}
            </>
          )
        )}
      </ul>
    </div>
  );
};

export default LeftBar;
