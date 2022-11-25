import { createContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { formatInTimeZone, format, utcToZonedTime, zonedTimeToUtc  } from 'date-fns-tz';
import { customIntl, DatePart, KeyPairIANA, Children, SelectedTimeSlot } from '../../src/interface/book-meeting/timezone-context.interface'

/*
  AREAS OF IMPROVEMENT IN THE FEATURES: 
  - fixing typescript any
*/

//helper functions and variables to get the timezones-------------------------------------

const getTimezoneGMTOfIANA = (IANA: string) => {

  //(GMT-07:00) 
  const GMT = formatInTimeZone(new Date(), IANA, '(OOOO)')
  //Mountain Standard Time
  const timezone = formatInTimeZone(new Date(), IANA, 'zzzz');

  return { GMT, timezone };
};

//checkpoint to work on GMT

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
const listOfCompleteTimezones = new Set(
  listOfIANA.map((IANA: string) => {
    let { GMT, timezone } = getTimezoneGMTOfIANA(IANA);

    //if the timezone is only GMT+11:00 which is not descriptive, add the IANA to label it
    if (timezone.includes('GMT')) {
      let IANAsplit = IANA.split('/'); //['Pacific', 'Bougainville']
      let adjustedTimezone = IANAsplit[1] + ' ' + IANAsplit[0] + ' Time' //Bougainville Pacific Time

      timezone = adjustedTimezone;
    }

    return GMT + ' ' + timezone;
  })
);

/*
 returns the timezones with GMTSortingKey
  {GMTSortingKey: 0, timezone: '(GMT+00:00) Greenwich Mean Time'}
  {GMTSortingKey: 3, timezone: '(GMT+03:00) East Africa Time'}
  {GMTSortingKey: 1, timezone: '(GMT+01:00) Central European Standard Time'}
*/
const getSortableTimezones = () => {
  let timezoneArray: string[] = Array.from(listOfCompleteTimezones) as string[]
  return timezoneArray.map((completeTimezone) => {
    let timezoneParts = completeTimezone.split(" ")
    let GMT = timezoneParts[0] // "(GMT+12:00)"
    timezoneParts.shift()
    let GMTIndex = GMT.search("T") + 1;
    let colonIndex = GMT.search(":");
    //an integer gotten from GMT such as +12 where GMT is "(GMT+12:00)"
    let GMTSortingKey = parseInt(GMT.slice(GMTIndex, colonIndex))
    return {GMTSortingKey, completeTimezone}
  })
}

//sorted array according to the GMTSortingKey
const sortedGMTTimezonesPair = getSortableTimezones().sort(
  (a, b)=>{ return a.GMTSortingKey - b.GMTSortingKey })

const sortedListOfCompleteTimezone = sortedGMTTimezonesPair.map((GMTTimezonePair)=>{
  return GMTTimezonePair.completeTimezone
})

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
    {type: 'timeZoneName', value: 'Pacific Standard Time'} 
  ]
*/

const currentDateInParts = new Intl.DateTimeFormat('default', {
  timeZoneName: 'long',
}).formatToParts(new Date());


/*
 timezonePart is an object with type timeZoneName from the array currentDateInParts
  - e.g {type: 'timeZoneName', value: 'Pacific Standard Time'} 
*/
const timezonePart = currentDateInParts.find(
  (datePart: DatePart) => datePart.type === 'timeZoneName'
);

const initialGMT = "(" + format(new Date(), 'OOOO') + ")";


//helper variables to convert timzones----------------------------------------

/*
  an array of keypair IANA with their timezone counterparts
    e.g.  [
            {IANA: 'Atlantic/St_Helena', completeTimezone: "(GMT+00:00) Greenwich Mean Time"}, 
            {IANA: 'Indian/Mayotte', completeTimezone: "(GMT+03:00) East Africa Time"}
          ]
*/
const listOfKeyPairIANA = listOfIANA.map((IANA: string) => {
  let { GMT, timezone } = getTimezoneGMTOfIANA(IANA);
  let keyPair = { IANA: IANA, completeTimezone: GMT + ' ' + timezone };

  //if the timezone is only GMT+11:00 which is not descriptive, add the IANA to label it
  if (timezone.includes('GMT')) {
    let IANAsplit = IANA.split('/'); //['Pacific', 'Bougainville']
    let adjustedTimezone = IANAsplit[1] + ' ' + IANAsplit[0] + ' Time'; //Bougainville Pacific Time

    keyPair = { IANA: IANA, completeTimezone: GMT + ' ' + adjustedTimezone };
  }

  return keyPair;
});




/*array of keyPair arrays 
  [
      ['Greenwich Mean Time', {IANA: "Africa/Abidjan", completeTimezone: "(GMT+00:00) Greenwich Mean Time"}],
      ['East Africa Time', {IANA: "Africa/Addis_Ababa", completeTimezone: "(GMT+03:00) East Africa Time"}]
  ]
*/
const IANAKeyPairMapItem = listOfKeyPairIANA.map((keyPairIANA: KeyPairIANA) => [keyPairIANA['completeTimezone'], keyPairIANA]);

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
const getIANACounterpart = async (completeTimezone: string) => {
  const keyPairIANAResult = await listOfkeyPairUnique.find(
    (keyPairIANA) => keyPairIANA.completeTimezone === completeTimezone
  );
  const IANAResult = keyPairIANAResult && keyPairIANAResult.IANA;
  return IANAResult;
};


//----------------------------------------------------------------------------

export const TimezoneContext = createContext({
  timezones: [] as string[],
  selectedTimezone: '',
  setSelectedTimezone: (() => { }) as Dispatch<any>,
  hasSelectedATime: false,
  setSelectedTimeSlot: (() => { }) as Dispatch<SetStateAction<SelectedTimeSlot>>,
  selectedTimeSlot: {} as SelectedTimeSlot,
  IANACounterpart: {} as Promise<string>,
  setIANACounterpart: (() => { }) as Dispatch<SetStateAction<Promise<any>>>
});


export const TimezoneProvider = ({ children }: Children) => {
  //a sorted array of timezones e.g [Pacific Daylight Time, Central Standard Time...] which is used to populate the dropdown menu options
  const timezones = sortedListOfCompleteTimezone;
  /*
    the variable used to store the selected timezone in the dropdown menu
    the initial value is the currentTimezone according to the locale of the user 
      e.g 'Eastern Daylight Time'
  */
  const [selectedTimezone, setSelectedTimezone] = useState(initialGMT + ' ' + timezonePart.value);

  //refers to the timeslot that the user picked
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({ startDatetime: '', endDatetime: '' } as SelectedTimeSlot);
  //checks if the user has selected a time
  const hasSelectedATime = JSON.stringify(selectedTimeSlot) !== `{"startDatetime":"","endDatetime":""}`

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
    hasSelectedATime,
    IANACounterpart,
    setIANACounterpart
  };

  return (
    <TimezoneContext.Provider value={value}>
      {children}
    </TimezoneContext.Provider>
  );
};
