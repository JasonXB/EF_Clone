import Link from 'next/link';
import { useState } from 'react';
import Layout from '../src/components/Layout';

export default function FindAMentor() {
  let [query, setQuery] = useState('');
  return (
    <Layout headTitle="Find a Mentor">
      <div className={`bg-[url("/assets/bg-gears.png")] bg-cover`}>
        <div className={`container mx-auto `}>
          <div className="flex flex-col h-[720px]">
            <div className="flex flex-row justify-center">
              <span className="text-primary-1 text-5xl font-semibold my-20">
                Search for the perfect mentor for you!
              </span>
            </div>
            <div className="flex flex-row justify-center space-x-4 max-h-[70px]">
              <div className="flex flex-row space-x-0 rounded-[23px] shadow-[0px_3px_6px_#00000030] border border-[#707070]">
                <input
                  type="text"
                  className="w-[755px] p-4 text-[28px] rounded-[23px] outline-none"
                  placeholder="Skills, Mentor name, or Industries"
                  onChange={(e) => setQuery(e.currentTarget.value)}
                />
                <div className="pr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="h-[70px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </div>
              <Link href={`mentor-list${query ? `?q=${query}` : ''}`}>
                <button className="bg-gradient-to-r from-secondary-1 to-[#EF4C3A] w-[222px] rounded-[30px] text-white text-[30px] font-semibold">
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
