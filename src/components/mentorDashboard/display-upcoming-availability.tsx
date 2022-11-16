import UpcomingMeetingCard from './upcoming-meetings-card';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import Meeting from '../../interface/meeting.interface';

interface UpcomingAvailabilityContainerProps {
  meetings: Meeting[];
}

function UpcomingAvailabilityContainer({
  meetings,
}: UpcomingAvailabilityContainerProps) {
  const toggleClasses = (isSelected: boolean) => {
    const classes = {
      selected: 'bg-secondary-1 text-primary-1 rounded-2xl ',
      unselected: 'text-black',
    };
    return `${
      isSelected ? classes.selected : classes.unselected
    } py-2 px-10 w-1/2 `;
  };

  return (
    <div className="mt-16 max-w-[1400px] mx-auto">
      <Tab.Group>
        <Tab.List className=" border-[1px] border-hue-700 rounded-2xl w-11/12 ss:w-1/2  mx-auto flex min-w-[340px]">
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
              {meetings.length === 0 ? (
                <div className="w-1/2 mx-auto mt-[10%]">
                  <p className="font-bold text-center text-hue-700">
                    Sorry no upcoming meetings! <br /> Check back later.
                  </p>
                </div>
              ) : (
                meetings.map((meeting, i) => (
                  <UpcomingMeetingCard key={i} meeting={meeting} />
                ))
              )}
            </div>
          </Tab.Panel>
          <Tab.Panel className="h-[30vw]">
            <h4 className="mt-[15%] text-hue-400 text-center">
              Calendar coming soon
            </h4>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default UpcomingAvailabilityContainer;
