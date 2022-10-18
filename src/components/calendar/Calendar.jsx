// import { Menu, Transition } from '@headlessui/react';
// import { DotsVerticalIcon } from '@heroicons/react/outline';

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';
import { Fragment, useState } from 'react';

import DateSlot from './DateSlot';

import TimeSlot from '../TimeSlot';

// const meetings = [
//   {
//     id: 1,
//     name: 'Leslie Alexander',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-10-11T13:00',
//     endDatetime: '2022-10-11T14:30',
//   },
//   {
//     id: 2,
//     name: 'Michael Foster',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-10-20T09:00',
//     endDatetime: '2022-10-20T11:30',
//   },
//   {
//     id: 3,
//     name: 'Dries Vincent',
//     imageUrl:
//       'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-10-20T17:00',
//     endDatetime: '2022-10-20T18:30',
//   },
//   {
//     id: 4,
//     name: 'Leslie Alexander',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-10-09T13:00',
//     endDatetime: '2022-10-09T14:30',
//   },
//   {
//     id: 5,
//     name: 'Michael Foster',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     startDatetime: '2022-10-13T14:00',
//     endDatetime: '2022-10-13T14:30',
//   },
// ];

export default function Calendar({ meetingAvailability }) {
  let today = startOfToday(); //Mon Oct 17 2022 00:00:00 GMT-0700 (Pacific Daylight Time)
  let [selectedDay, setSelectedDay] = useState(today); //must be in Calendar Context
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy')); //Oct-2022
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date()); //Sat Oct 01 2022 00:00:00 GMT-0700 (Pacific Daylight Time)

  //get the days of the current month selected
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  //find if there are meetings on the selected date by comparing the date selected and the date in the json data
  const selectedDayMeetings = (meetingAvailability) =>
    meetingAvailability.filter((meeting) =>
      isSameDay(parseISO(meeting.startDatetime), selectedDay)
    );

  console.log(meetingAvailability);

  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              {/* -- LEFT ARROW -- */}
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              {/* -- */}
              {/* -- CALENDAR MONTH -- */}
              <h4 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h4>
              {/* -- */}

              {/* -- RIGHT ARROW -- */}
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              {/* -- */}
            </div>
            {/* -- DAYS -- */}
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            {/* -- */}
            {/* -- DATE SLOTS -- */}
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <DateSlot
                  key={day}
                  day={day}
                  dayIndex={dayIdx}
                  meetings={meetingAvailability.specific}
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                  firstDayCurrentMonth={firstDayCurrentMonth}
                />
              ))}
            </div>
            {/* -- */}
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            {/* -- AVAILABILITY HEADER -- */}
            <h2 className="font-semibold text-gray-900">
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
            </h2>
            {/* -- */}
            {/* -- DISPLAY AVAILABILTIES -- */}
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings(meetingAvailability.specific).length > 0 ? (
                selectedDayMeetings(meetingAvailability.specific).map(
                  (meeting) => <TimeSlot meeting={meeting} key={meeting.id} />
                )
              ) : (
                <p>Disable the date</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
