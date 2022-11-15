import { formatInTimeZone } from 'date-fns-tz';

const test = () => {
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

  let listOfIANA = [];
  if (typeof Intl.supportedValuesOf !== 'undefined') {
    listOfIANA = Intl.supportedValuesOf('timeZone');
  }
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

  /*array of keyPair arrays 
    [
        ['Greenwich Mean Time', {IANA: "Africa/Abidjan", timezone: "Greenwich Mean Time"}],
        ['East Africa Time', {IANA: "Africa/Addis_Ababa", timezone: "East Africa Time"}]
    ]
  */
  const IANAKeyPairMapItem = listOfKeyPairIANA.map((item) => [
    item['timezone'],
    item,
  ]);

  // IANAKeyPairMapItem converted to Map object so that we can iterate through it to make a unique array
  const IANAKeyPairMap = new Map(IANAKeyPairMapItem);

  // //array of unique IANA keyPair
  // const listOfkeyPairUnique = [];
  // //iterate through the IANAKeyPairMap to get the value of each map item and store it in the listOfkeyPairUnique array
  // for (const keyPairValue of IANAKeyPairMapIterator) {
  //   listOfkeyPairUnique.push(keyPairValue);
  // }

  const getMapItemValues = () => {
    const mapIterator = IANAKeyPairMap.values();
    const uniqueArray = [];

    for (let i = 0; i < IANAKeyPairMap.size; i++) {
      uniqueArray.push(mapIterator.next().value);
    }

    return uniqueArray;
  };

  const listOfkeyPairUnique = getMapItemValues();

  const listOfTimezones = new Set(
    listOfIANA.map((IANA) => {
      let timezone = getTimezoneOfIANA(IANA, 'long');

      //if the timezone is only GMT+11:00 which is not descriptive, add the IANA to label it
      if (timezone.includes('GMT')) {
        let IANAsplit = IANA.split('/'); //['Pacific', 'Bougainville']
        let adjustedTimezone =
          IANAsplit[1] + ' ' + IANAsplit[0] + ' ' + timezone; //Bougainville Pacific GMT+11:00

        timezone = adjustedTimezone;
      }

      return timezone;
    })
  );

  console.log(Array.from(listOfTimezones).sort());

  return <div>test page</div>;
};

export default test;
