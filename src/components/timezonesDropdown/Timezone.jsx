import { useContext } from 'react';

import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

const Timezone = ({ zone, setDropdownToggle }) => {
  const { setSelectedTimezone } = useContext(TimezoneContext);

  const selectTimezone = () => {
    setSelectedTimezone(zone);
    setDropdownToggle(false);
  };

  return (
    <div className=" border-b border-gray hover:bg-gray-200">
      <button className="text-left font-medium" onClick={selectTimezone}>
        <p>{zone}</p>
      </button>
    </div>
  );
};

export default Timezone;
