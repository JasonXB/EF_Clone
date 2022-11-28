import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import Button from '../../src/components/buttons/reusable-buttons';
import Layout from '../../src/components/Layout';

export default function FindAMentor() {
  let [query, setQuery] = useState('');
  return (
    <Layout headTitle="Find a Mentor">
      <div>
        <div className={`container mx-auto `}>
          <div className="flex flex-col h-[720px]">
            <div className="flex flex-row justify-center">
              <span className="my-20 text-5xl font-semibold text-primary-1">
                Search for the perfect mentor for you!
              </span>
            </div>
            <div className="flex flex-row justify-center space-x-4 max-h-[70px]">
              <div className="flex flex-row space-x-0 rounded-[23px] shadow-branded-1 border border-hue-700">
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

              <Button
                variant="primary"
                clickHandler={() =>
                  Router.push(
                    `/find-a-mentor/search${query ? `?q=${query}` : ''}`
                  )
                }
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
