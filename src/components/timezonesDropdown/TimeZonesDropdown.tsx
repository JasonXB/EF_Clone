//this component provides a dropdown for the timezones and uses a TimeZone context
import { useContext, useEffect, useState, useRef, MouseEvent } from 'react';
import Timezone from './Timezone';
import { v4 as uuidv4 } from 'uuid';
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';
import { TIMEZONES_DROPDOWN_TYPE_CLASSES } from '../../enum/calendar/calendar.enum';
import { TimeZonesDropdownProps } from '../../interface/book-meeting/book-with-mentor.interface';


/*
  AREAS OF IMPROVEMENT IN THE FEATURES: 
  - implement search bar for user experience
*/

const TimeZonesDropdown = ( { timezonesDropdownType }: TimeZonesDropdownProps) => {
  const { timezones, selectedTimezone } = useContext(TimezoneContext);
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const toggle = () => {
    setDropdownToggle(!dropdownToggle);
  };

  //handle to close the dropdown if we are clicking outside
  //>>not sure how to fix the typescript error
  let menuRef: any = useRef()
  useEffect(()=>{
    let handler = (event: MouseEvent): any => {
      if(!menuRef.current.contains(event.target)){
        setDropdownToggle(false)
      }
    }
    document.addEventListener("mousedown", handler as any);
    return () => {
      document.removeEventListener("mousedown", handler as any)
    }
  })

  let timezoneTextStyle;

  if(timezonesDropdownType == TIMEZONES_DROPDOWN_TYPE_CLASSES.plain){
    timezoneTextStyle = "font-medium"
  } else if(timezonesDropdownType == TIMEZONES_DROPDOWN_TYPE_CLASSES.bold){
    timezoneTextStyle = "text-base xl:text-xl font-bold text-blue-900"
  } 

  return (
    <div className="dropdown relative group" ref={menuRef}>
      {/* default dropdown */}
      <button
        className="flex items-center cursor-pointer group-hover:border-grey-light rounded-t-lg py-1 px-2 w-full"
        onClick={toggle}
      >
        <p className={timezoneTextStyle}>{selectedTimezone}</p>
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
