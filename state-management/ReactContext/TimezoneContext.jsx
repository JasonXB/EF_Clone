import { createContext, useState } from 'react';

import { startOfToday } from 'date-fns';

export const TimezoneContext = createContext({
  IANA: [],
});

export const TimezoneProvider = ({ children }) => {
  let IANA = [];
  try {
    IANA = Intl.supportedValuesOf('timeZone');
  } catch (err) {
    console.log(err.toString());
  }

  const value = {
    IANA,
  };

  return (
    <TimezoneContext.Provider value={value}>
      {children}
    </TimezoneContext.Provider>
  );
};
