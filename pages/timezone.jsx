import { formatInTimeZone } from 'date-fns-tz';

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

//a sorted array of timezones
const sortedListOfTimezones = Array.from(listOfTimezones).sort();

const timezone = () => {
  console.log(sortedListOfTimezones);

  return <div>timezone</div>;
};

export default timezone;
