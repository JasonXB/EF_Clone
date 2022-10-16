import UpcomingMeetingCard from './upcoming-meetings-card';

import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

import { placeholderDataForMeetings } from './tempData';

const DisplayUpcomingAvailabilityContainer = () => {
  const toggleClasses = (isSelected: boolean) => {
    const classes = {
      selected: 'bg-primary-5 text-primary-1 rounded-2xl ',
      unselected: 'text-black',
    };
    return `${
      isSelected ? classes.selected : classes.unselected
    } py-2 px-10 w-1/2 `;
  };

  return (
    <div className="mt-16">
      <Tab.Group>
        <Tab.List className=" border-[1px] border-smoke-1 rounded-2xl w-11/12 ss:w-1/2  mx-auto flex">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={toggleClasses(selected)}>
                Upcoming Meetings
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={toggleClasses(selected)}>Availability</button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {/* Upcoming meeting/availability   toggle */}
            <div className="space-y-4">
              {/* logic to check if there are any upcoming meetings */}
              {placeholderDataForMeetings.length === 0 ? (
                <div className="w-1/2 mx-auto mt-[10%]">
                  <p className="font-bold text-center text-smoke-2">
                    Sorry no upcoming meetings! <br /> Check back later.
                  </p>
                </div>
              ) : (
                placeholderDataForMeetings.map((each, i) => (
                  <UpcomingMeetingCard
                    key={i}
                    props={each}
                    upcomingMeetingAmount={placeholderDataForMeetings.length}
                  />
                ))
              )}
            </div>
          </Tab.Panel>
          <Tab.Panel className="h-[30vw]">
            <h4 className="mt-[15%] text-smoke-4 text-center">
              Calendar coming soon
            </h4>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default DisplayUpcomingAvailabilityContainer;
