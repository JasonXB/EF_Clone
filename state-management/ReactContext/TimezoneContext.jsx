import { createContext, useState } from 'react';

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

//helper variable get the currentTimezone-------------------------------------

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

export const TimezoneContext = createContext({
  timezones: [],
  currentTimezone: '',
  selectedTimezone: '',
  setSelectedTimezone: () => {},
});

//----------------------------------------------------------------

export const TimezoneProvider = ({ children }) => {
  //a sorted array of timezones
  const timezones = Array.from(listOfTimezones).sort();
  const [selectedTimezone, setSelectedTimezone] = useState(timezonePart.value);

  const value = {
    timezones,
    selectedTimezone,
    setSelectedTimezone,
  };

  return (
    <TimezoneContext.Provider value={value}>
      {children}
    </TimezoneContext.Provider>
  );
};
