import Link from 'next/link';

import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';

import { Fragment } from 'react';

//temp profile image, to be deleted in future and swapped on for personalize photos associated to account
import tempProfile from './temp-delete-infuture/tempProfileImage.jpeg';

const UserProfileIcon = () => (
  <Image
    className="rounded-full hover:opacity-60"
    src={tempProfile}
    alt="users profile icon link"
    width={30}
    height={30}
  />
);
//error with dropdown, fix
const ProfileMenu = () => (
  <>
    {/* Profile dropdown */}
    <span className="sr-only">View notifications</span>
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Open user menu</span>
          <UserProfileIcon />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-secondary-1 ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-secondary-1"
            >
              Your Profile
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-secondary-1"
            >
              Sign out
            </a>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  </>
);

const ProfileNavMenu = () => (
  <div className="flex space-x-2">
    {/* temp svg solution*/}
    {/* chat*/}
    <Link href="/">
      <a className="hover:text-magenta ">
        {' '}
        {/*temp color will swap when design shows */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          fill="currentColor"
          className="bi bi-chat-left-text"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
        </svg>
      </a>
    </Link>

    <Link href="/">
      <a className="hover:text-magenta">
        {/*temp color will swap when design shows */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          fill="currentColor"
          className="bi bi-bell"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
        </svg>
      </a>
    </Link>

    <ProfileMenu />
  </div>
);

export default ProfileNavMenu;
