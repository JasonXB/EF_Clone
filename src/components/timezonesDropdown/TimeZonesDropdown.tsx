//this component provides a dropdown for the timezones and uses a TimeZone context
import { useContext, useState } from 'react';
import Timezone from './Timezone';
import { v4 as uuidv4 } from 'uuid';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

const TimeZonesDropdown = () => {
  const { timezones, selectedTimezone } = useContext(TimezoneContext);
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const toggle = () => {
    setDropdownToggle(!dropdownToggle);
  };

  return (
    <div className="dropdown relative group w-50">
      {/* default dropdown */}
      <button
        className="flex items-center cursor-pointer group-hover:border-grey-light rounded-t-lg py-1 px-2"
        onClick={toggle}
      >
        <p className="font-medium">{selectedTimezone}</p>
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
      </button>
      {/* -- */}
      {/* dropdown options */}
      {dropdownToggle && (
        <div
          className={`absolute max-h-96 border rounded-lg p-1 p-2 w-full bg-white overflow-y-scroll scrollBar`}
        >
          {timezones.map((zone) => {
            return (
              <Timezone
                key={uuidv4()}
                zone={zone}
                setDropdownToggle={setDropdownToggle}
              />
            );
          })}
        </div>
      )}
      {/* -- */}
    </div>
  );
};

export default TimeZonesDropdown;
