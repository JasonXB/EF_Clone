import type { NextPage } from 'next';
import Layout from '../../src/components/Layout';
import React, { useEffect, useState } from 'react';
import MentorListEntry from '../../src/components/adminPanel/mentor-list-entry';
import { placeholderDataForRequest as dummyMentors } from '../../src/tempData/temp-data-mentor';

import { MentorStatus } from '../../src/enum/MentorStatus.enum';
import useAuthStatusCheck from '../../src/hooks/useAuthStatusCheck';
import Spinner from '../../src/components/loadingVisuals/spinner';
import Router from 'next/router';

interface MentorType {
  name: string;
  position: string;
  avatar: string;
  age: string;
  email: string;
  status: string;
  date: string;
  goalOfMeeting: string;
}

//! check if the user is authenticated as an admin (req'd to view this page)
const AdminPanelDashboard: NextPage = ({}) => {
  const [sortBy, setSortBy] = useState<string>('all');
  const [searchedBy, setSearchedBy] = useState<string>('');

  // sort by search engine
  const SetSearchFilter = (e: any) => {
    setSortBy('apply');
    setSearchedBy(e.target.value);
  };

  // should set useEffect to fetch data(mentor information) from mongoDB when rendered page
  const [verifiedMentors, setVerifiedMentors] = useState<MentorType[]>(
    [] as MentorType[]
  );
  const [pendingMentors, setPendingMentors] = useState<MentorType[]>(
    [] as MentorType[]
  );
  const [declinedMentors, setDeclinedMentors] = useState<MentorType[]>(
    [] as MentorType[]
  );

  useEffect(() => {
    UpdateStatusList();
  }, []);

  const UpdateStatusList = () => {
    setVerifiedMentors(
      dummyMentors.filter((mentor) => mentor.status === MentorStatus.Verified)
    );
    setPendingMentors(
      dummyMentors.filter((mentor) => mentor.status === MentorStatus.Pending)
    );
    setDeclinedMentors(
      dummyMentors.filter((mentor) => mentor.status === MentorStatus.Declined)
    );
  };

  //! This component is left unprotected deliberately
  // Add protection later (need this component visible for presentation on Nov 3rd)
  return (
    <Layout headTitle="Admin Panel" background="none">
      <div className="relative flex items-center justify-center w-full h-screen">
        <div className="absolute top-0 left-0 z-0 w-full bg-hue-400 h-60"></div>
        <div className="relative z-50 w-5/6 p-4 m-auto rounded-md bg-light md:w-2/3 h-5/6 drop-shadow-lg">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="w-full overflow-scroll">
            <div className="flex gap-1 mt-2 w-max md:gap-4">
              {/* all mentors */}
              <div
                className="flex items-center justify-center h-16 transition-all duration-300 ease-out rounded-sm cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 w-28 md:w-44 md:h-20 drop-shadow active:opacity-50 active:drop-shadow-none"
                onClick={() => setSortBy('all')}
              >
                <h2 className="text-lg md:text-xl text-light">
                  {dummyMentors.length} Mentors
                </h2>
              </div>
              {/* filter for verified mentors */}
              <div
                className="flex items-center justify-center h-16 transition-all duration-300 ease-out rounded-sm cursor-pointer bg-gradient-to-r from-teal-400 to-green-500 w-28 md:w-44 md:h-20 drop-shadow active:opacity-50 active:drop-shadow-none"
                onClick={() => setSortBy('ok')}
              >
                <h2 className="text-lg lg:text-xl text-light">
                  {verifiedMentors.length} Verified
                </h2>
              </div>
              {/* filter for pending mentors */}
              <div
                className="flex items-center justify-center h-16 transition-all duration-300 ease-out rounded-sm cursor-pointer bg-gradient-to-r from-fuchsia-400 to-pink-600 w-28 md:w-44 md:h-20 drop-shadow active:opacity-50 active:drop-shadow-none"
                onClick={() => setSortBy('pending')}
              >
                <h2 className="text-lg md:text-xl text-light">
                  {pendingMentors.length} Pending
                </h2>
              </div>
              {/* filter for declined mentors */}
              <div
                className="flex items-center justify-center h-16 transition-all duration-300 ease-out rounded-sm cursor-pointer bg-gradient-to-r from-gray-400 to-gray-500 w-28 md:w-44 md:h-20 drop-shadow active:opacity-50 active:drop-shadow-none"
                onClick={() => setSortBy('no')}
              >
                <h2 className="text-lg md:text-xl text-light">
                  {declinedMentors.length} Declined
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-light">
            <div className="flex items-center justify-between p-4 bg-hue-400">
              <h4 className="text-lg md:text-xl">Mentor Details</h4>
              <div className="flex h-8 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-8 h-full p-2 text-gray-400 bg-white bi bi-search"
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
            <div className="w-full overflow-auto">
              <ul className="grid w-screen grid-cols-6 p-2 font-semibold border-b sm:w-full border-b-slate-700">
                <li className="col-span-2">Name</li>
                <li className="col-span-3">Email</li>
                <li className="col-span-1">Status</li>
              </ul>
              <div id="applicantList" className="h-80 xl:h-96">
                {/* supposed to be datas from mongoDB. Need to be replace */}
                {(sortBy === 'all'
                  ? dummyMentors
                  : sortBy === 'ok'
                  ? verifiedMentors
                  : sortBy === 'pending'
                  ? pendingMentors
                  : sortBy === 'no'
                  ? declinedMentors
                  : dummyMentors.filter((mentor) =>
                      mentor.name
                        .toLowerCase()
                        .includes(searchedBy.toLowerCase())
                    )
                ).map((mentor, index) => (
                  <MentorListEntry
                    name={mentor.name}
                    email={mentor.email}
                    status={mentor.status}
                    key={`${mentor.name}-${index}`}
                    index={index}
                    UpdateStatusList={UpdateStatusList}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPanelDashboard;
