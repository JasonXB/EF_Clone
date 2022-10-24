import { createContext, useEffect, useState } from 'react';

import { formatInTimeZone } from 'date-fns-tz';

//helper functions and variables to get the timezones-------------------------------------

const getTimezoneOfIANA = (IANA, option) => {
  //timezone may be 'long' or 'short' as a string
  let selectedOption = 'z';

  if (option === 'short') {
    selectedOption = 'z';
  } else if (option === 'long') {
    selectedOption = 'zzzz';
  }

  const timeZone = formatInTimeZone(new Date(), IANA, selectedOption);

  return timeZone;
};

/* 
  array of IANA with each IANA as strings
  e.g 'Africa/Abidjan'
*/
let listOfIANA = [];
try {
  listOfIANA = Intl.supportedValuesOf('timeZone');
} catch (err) {
  console.log(err.toString());
}

/*
    a set object of timezones not sorted 
      - e.g Pacific Standard Time 
    */
const listOfTimezones = new Set(
  listOfIANA.map((IANA) => getTimezoneOfIANA(IANA, 'long'))
);

//helper variables to get the currentTimezone-------------------------------------

/*
  currentDateInParts returns an array that splites the date into parts indicated below
  [
    {type: 'month', value: '10'}
    {type: 'literal', value: '/'}
    {type: 'day', value: '22'}
    {type: 'literal', value: '/'}
    {type: 'year', value: '2022'}
    {type: 'literal', value: ', '}
    {type: 'timeZoneName', value: 'PDT'} 
  ]
*/

const currentDateInParts = new Intl.DateTimeFormat('default', {
  timeZoneName: 'long',
}).formatToParts(new Date());

/*
 timezonePart is an object with type timeZoneName from the array currentDateInParts
  - e.g {type: 'timeZoneName', value: 'PDT'} 
*/
const timezonePart = currentDateInParts.find(
  (datePart) => datePart.type === 'timeZoneName'
);

//helper variables to convert timzones----------------------------------------

/*
  an array of keypair IANA with their timezone counterparts
    e.g.  [
            {IANA: 'Atlantic/St_Helena', timezone: 'Greenwich Mean Time'}, 
            {IANA: 'Indian/Mayotte', timezone: 'East Africa Time'}
          ]
*/
const listOfKeyPairIANA = listOfIANA.map((IANA) => {
  return { IANA: IANA, timezone: getTimezoneOfIANA(IANA, 'long') };
});

/*
  the unique version of listOfKeyPairIANA (unique according to timezone)
*/
const listOfkeyPairUnique = [
  ...new Map(
    listOfKeyPairIANA.map((item) => [item['timezone'], item])
  ).values(),
];

//helper function that takes in the argument such as 'Pacific Daylight Timezone' and return the object

const getIANACounterpart = (timezone) => {
  const keyPairIANAResult = listOfkeyPairUnique.find(
    (keyPairIANA) => keyPairIANA.timezone === timezone
  );

  let IANAResult = '';
  try {
    IANAResult = keyPairIANAResult.IANA;
  } catch (err) {
    console.log(err.toString());
  }

  return IANAResult;
};

//----------------------------------------------------------------------------

export const TimezoneContext = createContext({
  timezones: [],
  selectedTimezone: '',
  setSelectedTimezone: () => {},
  selectedTimeSlot: new Date(),
  setSelectedTimeSlot: () => {},
  zonedTimeSlot: '',
  setZonedTimeSlot: () => {},
});

export const TimezoneProvider = ({ children }) => {
  //a sorted array of timezones e.g [Pacific Daylight Time, Central Standard Time...] which is used to populate the dropdown menu options
  const timezones = Array.from(listOfTimezones).sort();
  /*
    the variable used to store the selected timezone in the dropdown menu
    the initial value is the currentTimezone according to the locale of the user 
      e.g 'Eastern Daylight Time'
  */
  const [selectedTimezone, setSelectedTimezone] = useState(timezonePart.value);
  //refers to the timeslot that the user picked
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({});

  //variable used in 'utcToZonedTime' from date-fns-tz to convert to a specific timezone
  let IANACounterpart = getIANACounterpart(selectedTimezone);
  useEffect(() => {
    IANACounterpart = getIANACounterpart(selectedTimezone);
  }, [selectedTimezone]);

  //variable used to hold the timeSlots that have been converted to a particular time zone
  const [zonedTimeSlots, setZonedTimeSlots] = useState({});

  const value = {
    timezones,
    selectedTimezone,
    setSelectedTimezone,
    selectedTimeSlot,
    setSelectedTimeSlot,
    zonedTimeSlots,
    setZonedTimeSlots,
    IANACounterpart,
  };

  return (
    <TimezoneContext.Provider value={value}>
      {children}
    </TimezoneContext.Provider>
  );
};
