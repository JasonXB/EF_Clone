//this component provides a dropdown for the timezones and uses a TimeZone context
import { useContext } from 'react';
import Timezone from './Timezone';
import { v4 as uuidv4 } from 'uuid';

import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

const TimeZonesDropdown = () => {
  const { timezones } = useContext(TimezoneContext);

  console.log(timezones);

  //how to support all IANA

  return (
    <div className="relative group w-50">
      {/* default dropdown */}
      <div className="flex items-center cursor-pointer group-hover:border-grey-light rounded-t-lg py-1 px-2">
        <p className="font-medium">Eastern Time</p>
        {/* dropdown icon */}
        <div className="text-primary-1 pl-2">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
        {/* -- */}
      </div>
      {/* -- */}
      {/* dropdown options */}
      <div
        className={`items-center absolute max-h-96 border rounded-lg p-1 p-2 invisible group-hover:visible w-full bg-white overflow-y-scroll`}
      >
        {timezones.map((zone) => {
          return <Timezone key={uuidv4()} zone={zone} />;
        })}
      </div>
      {/* -- */}
    </div>
  );
};

export default TimeZonesDropdown;
