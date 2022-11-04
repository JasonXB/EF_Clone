import { useContext, ReactNode } from 'react';
import { TimezoneProps } from '../../interface/book-meeting/book-with-mentor.interface'
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';

const Timezone = ({ zone, setDropdownToggle }: TimezoneProps) => {
  const { setSelectedTimezone } = useContext(TimezoneContext);

  const selectTimezone = () => {
    setSelectedTimezone(zone);
    setDropdownToggle(false);
  };

  return (
    <div className="border-b border-gray hover:bg-gray-200">
      <button className="text-left font-medium w-full" onClick={selectTimezone}>
        <p>{zone}</p>
      </button>
    </div>
  );
};

export default Timezone;
