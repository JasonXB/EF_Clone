import React, { useEffect, useState } from 'react';
import { dummyMentors } from './dummyMentor';
import MentorList from './mentor-list';

interface MentorType {
  name: string;
  title: string;
  email: string;
  avatar: any;
  socialMediaIcons: {
    svg: JSX.Element;
    url: string;
  }[];
  location: string;
  responseTime: string;
  skills: string[];
  percentBarSkills: {}[];
  about: string;
  availability: string;
  status: boolean;
}

const AdminPanelMain = () => {
  const [sortBy, setSortBy] = useState<string>('all');

  const [searchedBy, setSearchedBy] = useState<string>('');

  // sort by search engine
  const SetSearchFilter = (e: any) => {
    setSortBy('apply');
    setSearchedBy(e.target.value);
  };

  // should set useEffect to fetch data(mentor information) from mongoDB when rendered page
  const [onlineMentors, setOnlineMentors] = useState<MentorType[]>(
    [] as MentorType[]
  );
  const [offlineMentors, setOfflineMentors] = useState<MentorType[]>(
    [] as MentorType[]
  );

  useEffect(() => {
    setOnlineMentors(dummyMentors.filter((mentor) => mentor.status === true));
    setOfflineMentors(dummyMentors.filter((mentor) => mentor.status === false));
  }, [onlineMentors, offlineMentors]); //adjust when connected mongoDB

  // const updateStatusList = () => {
  //create function for sort automatically when you update mentor status
  // }

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="bg-smoke-4 w-full h-60 absolute top-0 left-0 z-0"></div>
      <div className="bg-light w-2/3 h-5/6 m-auto z-50 rounded-md p-4 drop-shadow-lg">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex gap-4 mt-2">
          {/* all mentors */}
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 w-60 h-20 rounded-sm flex items-center justify-center cursor-pointer drop-shadow ease-out duration-300 transition-all active:opacity-50 active:drop-shadow-none"
            onClick={() => setSortBy('all')}
          >
            <h2 className="text-xl text-light">
              {dummyMentors.length} Mentors
            </h2>
          </div>
          {/* filter for online mentors */}
          <div
            className="bg-gradient-to-r from-teal-400 to-green-500 w-60 h-20 rounded-sm flex items-center justify-center cursor-pointer drop-shadow ease-out duration-300 transition-all active:opacity-50 active:drop-shadow-none"
            onClick={() => setSortBy('on')}
          >
            <h2 className="text-xl text-light">
              {onlineMentors.length} Verified
            </h2>
          </div>
          {/* filter for offline mentors */}
          <div
            className="bg-gradient-to-r from-gray-400 to-gray-500 w-60 h-20 rounded-sm flex items-center justify-center cursor-pointer drop-shadow ease-out duration-300 transition-all active:opacity-50 active:drop-shadow-none"
            onClick={() => setSortBy('off')}
          >
            <h2 className="text-xl text-light">
              {offlineMentors.length} Unverified
            </h2>
          </div>
        </div>
        <div className="bg-light">
          <div className="flex justify-between bg-smoke-4 p-4">
            <h4 className="text-xl">Mentor Details</h4>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search bg-white h-full p-2 w-8 text-gray-400"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search mentor"
                className="outline-none"
                value={searchedBy}
                onChange={SetSearchFilter}
              />
            </div>
          </div>
          <ul className="grid grid-cols-6 border-b-slate-700 border-b p-2 font-semibold">
            <li className="col-span-2">Name</li>
            <li className="col-span-3">Email</li>
            <li className="col-span-1">Status</li>
          </ul>
          <div className="w-full h-96 overflow-y-scroll">
            {/* supposed to be datas from mongoDB. Need to be replace */}
            {(sortBy === 'all'
              ? dummyMentors
              : sortBy === 'on'
              ? onlineMentors
              : sortBy === 'off'
              ? offlineMentors
              : dummyMentors.filter((mentor) =>
                  mentor.name.toLowerCase().includes(searchedBy)
                )
            ).map((mentor, index) => (
              <MentorList
                name={mentor.name}
                email={mentor.email}
                status={mentor.status}
                key={mentor.name}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelMain;
