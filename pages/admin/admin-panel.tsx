import type { NextPage } from 'next';
import Head from 'next/head';
import { dummyMentors } from './dummyMentor';
import MentorList from './mentor-list';

const adminPanel: NextPage = ({}) => {
  return (
    <div>
      <Head>
        <title>Empowered Futures - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="bg-smoke-4 w-full h-60 absolute top-0 left-0 z-0"></div>
        <div className="bg-light w-2/3 h-5/6 m-auto z-50 rounded-md p-4 drop-shadow-lg">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="flex gap-4 mt-2">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-60 h-20 rounded-sm flex items-center justify-center cursor-pointer">
              <h2 className="text-xl text-light">10 Mentors</h2>
            </div>
            <div className="bg-gradient-to-r from-teal-400 to-green-500 w-60 h-20 rounded-sm flex items-center justify-center cursor-pointer">
              <h2 className="text-xl text-light">6 Online</h2>
            </div>
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-60 h-20 rounded-sm flex items-center justify-center cursor-pointer">
              <h2 className="text-xl text-light">4 Offline</h2>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-between bg-smoke-4 p-4">
                <h4 className="text-xl">Mentor Details</h4>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search bg-white h-full p-2 w-8"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search mentor"
                    className="outline-none"
                  />
                </div>
              </div>
              <ul className="grid grid-cols-6 border-b-slate-700 border-b p-2 font-semibold">
                <li className="col-span-2">Name</li>
                <li className="col-span-3">Email</li>
                <li className="col-span-1">Status</li>
              </ul>

              {dummyMentors.map((mentor, index) => (
                <MentorList
                  name={mentor.name}
                  key={mentor.name}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default adminPanel;
