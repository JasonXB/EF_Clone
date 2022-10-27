import { createContext, useEffect, useState, useContext } from 'react';
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
if (typeof Intl.supportedValuesOf !== 'undefined') {
  listOfIANA = Intl.supportedValuesOf('timeZone');
}

/*
  a set object of timezones not sorted 
    - e.g Pacific Standard Time 
*/
const listOfTimezones = new Set(
  listOfIANA.map((IANA) => {
    let timezone = getTimezoneOfIANA(IANA, 'long');

    //if the timezone is only GMT+11:00 which is not descriptive, add the IANA to label it
    if (timezone.includes('GMT')) {
      let IANAsplit = IANA.split('/'); //['Pacific', 'Bougainville']
      let adjustedTimezone = IANAsplit[1] + ' ' + IANAsplit[0] + ' ' + timezone; //Bougainville Pacific GMT+11:00

      timezone = adjustedTimezone;
    }

    return timezone;
  })
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
  let timezone = getTimezoneOfIANA(IANA, 'long');
  let keyPair = { IANA: IANA, timezone: timezone };

  //if the timezone is only GMT+11:00 which is not descriptive, add the IANA to label it
  if (timezone.includes('GMT')) {
    let IANAsplit = IANA.split('/'); //['Pacific', 'Bougainville']
    let adjustedTimezone = IANAsplit[1] + ' ' + IANAsplit[0] + ' ' + timezone; //Bougainville Pacific GMT+11:00

    keyPair = { IANA: IANA, timezone: adjustedTimezone };
  }

  return keyPair;
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
const getIANACounterpart = async (timezone) => {
  const keyPairIANAResult = await listOfkeyPairUnique.find(
    (keyPairIANA) => keyPairIANA.timezone === timezone
  );
  const IANAResult = keyPairIANAResult && keyPairIANAResult.IANA;
  return IANAResult;
};

//----------------------------------------------------------------------------

export const TimezoneContext = createContext({
  timezones: [],
  selectedTimezone: '',
  setSelectedTimezone: () => {},
  selectedTimeSlot: new Date(),
  setSelectedTimeSlot: () => {},
  IANACounterpart: '',
  setIANACounterpart: () => {},
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
  const [IANACounterpart, setIANACounterpart] = useState(
    getIANACounterpart(selectedTimezone)
  );

  useEffect(() => {
    getIANACounterpart(selectedTimezone).then((IANACounterpart) =>
      setIANACounterpart(IANACounterpart)
    );
  }, [selectedTimezone]);

  const value = {
    timezones,
    selectedTimezone,
    setSelectedTimezone,
    selectedTimeSlot,
    setSelectedTimeSlot,
    IANACounterpart,
  };

  return (
    <TimezoneContext.Provider value={value}>
      {children}
    </TimezoneContext.Provider>
  );
};
