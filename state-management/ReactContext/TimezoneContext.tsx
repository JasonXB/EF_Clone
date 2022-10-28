import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction  } from 'react';
import { formatInTimeZone } from 'date-fns-tz';

//helper functions and variables to get the timezones-------------------------------------

const getTimezoneOfIANA = (IANA: string, option: string) => {
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

interface Option {
  timeZoneName: string
}
interface customIntl {
  supportedValuesOf: Function,
  DateTimeFormat: new (local: string, option: Option) => {
    formatToParts: Function
  }
}
declare const Intl: customIntl;
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
  listOfIANA.map((IANA: string) => {
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

interface DatePart {
  type: string,
  value: string
}
/*
 timezonePart is an object with type timeZoneName from the array currentDateInParts
  - e.g {type: 'timeZoneName', value: 'PDT'} 
*/
const timezonePart = currentDateInParts.find(
  (datePart: DatePart) => datePart.type === 'timeZoneName'
);

//helper variables to convert timzones----------------------------------------

/*
  an array of keypair IANA with their timezone counterparts
    e.g.  [
            {IANA: 'Atlantic/St_Helena', timezone: 'Greenwich Mean Time'}, 
            {IANA: 'Indian/Mayotte', timezone: 'East Africa Time'}
          ]
*/
const listOfKeyPairIANA = listOfIANA.map((IANA: string) => {
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


interface KeyPairIANA {
  IANA: string,
  timezone: string
}
/*array of keyPair arrays 
  [
      ['Greenwich Mean Time', {IANA: "Africa/Abidjan", timezone: "Greenwich Mean Time"}],
      ['East Africa Time', {IANA: "Africa/Addis_Ababa", timezone: "East Africa Time"}]
  ]
*/
const IANAKeyPairMapItem = listOfKeyPairIANA.map((keyPairIANA: KeyPairIANA) => [keyPairIANA['timezone'], keyPairIANA]);

// IANAKeyPairMapItem converted to Map object so that we can iterate through it to make a unique array
const IANAKeyPairMap = new Map(IANAKeyPairMapItem);

//helper function that takes in a Map and returns an array of unique IANA keypair values 
const getMapItemValues = () => {
  const mapIterator = IANAKeyPairMap.values();
  const uniqueArray = [];
  for (let i = 0; i < IANAKeyPairMap.size; i++) {
    uniqueArray.push(mapIterator.next().value);
  }
  return uniqueArray;
};

const listOfkeyPairUnique = getMapItemValues();


//helper function that takes in the argument such as 'Pacific Daylight Timezone' and return the object
const getIANACounterpart = async (timezone: string) => {
  const keyPairIANAResult = await listOfkeyPairUnique.find(
    (keyPairIANA) => keyPairIANA.timezone === timezone
  );
  const IANAResult = keyPairIANAResult && keyPairIANAResult.IANA;
  return IANAResult;
};

interface SelectedTimeSlot {
  startDatetime: Date,
  endDatetime: Date,
}
//----------------------------------------------------------------------------

export const TimezoneContext = createContext({
  timezones: [] as string[],
  selectedTimezone: '',
  setSelectedTimezone: (() => {}) as Dispatch<any>,
  selectedTimeSlot: { } as any, //must fix but on interface as SelectedTimeSlot
  setSelectedTimeSlot: (() => {}) as Dispatch<SetStateAction<{}>>,
  IANACounterpart: {} as Promise<string>,
  setIANACounterpart: (() => {}) as Dispatch<SetStateAction<Promise<any>>>
});

interface Children {
  children: ReactNode
}


export const TimezoneProvider = ({ children }: Children) => {
  //a sorted array of timezones e.g [Pacific Daylight Time, Central Standard Time...] which is used to populate the dropdown menu options
  const timezones = Array.from(listOfTimezones).sort() as string[];
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
    setIANACounterpart
  };

  return (
    <TimezoneContext.Provider value={value}>
      {children}
    </TimezoneContext.Provider>
  );
};
