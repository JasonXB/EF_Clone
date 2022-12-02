import FormItem from '../FormItem';
import Calendar from '../calendar/Calendar';
import TimeZonesDropdown from '../timezonesDropdown/TimeZonesDropdown';
import TimeSlots from '../timeSlots/TimeSlots';
import {
  CALENDAR_TYPE_CLASSES,
  TIMEZONES_DROPDOWN_TYPE_CLASSES,
  TIMESLOTS_TYPE_CLASSES,
} from '../../enum/calendar/calendar.enum';
import { ScheduleSectionProps } from '../../interface/book-meeting/book-with-mentor.interface';

const ScheduleSection = ({ needToChooseTime }: ScheduleSectionProps) => {
  return (
    <FormItem itemString={'1. Select Date And Time'}>
      <>
        {needToChooseTime && (
          <div
            className="rounded-lg py-5 px-6 my-6 text-base text-red-700 font-medium inline-flex items-center w-full"
            role="alert"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times-circle"
              className="w-4 h-4 mr-2 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
              ></path>
            </svg>
            <p>Please select the date and time for the meeting</p>
          </div>
        )}
        {/* style to separate the calendar and timeslot blocks in its own grids */}
        <div className="md:grid md:grid-cols-3">
          <div className="col-span-2">
            <Calendar calendarType={CALENDAR_TYPE_CLASSES.medium} />
          </div>

          {/* available time slots block */}
          <div className="lg:pt-1 mt-0 md:mt-2 lg:mt-2 md:pl-8 lg:pl-14">
            {/* -- AVAILABILITY HEADER -- */}
            <div className="flex flex-col items-center py-6 lg:py-10 border-t border-primary-1">
              <div className="flex mr-7">
                {/* -- clock icon -- */}
                <div className="px-2 text-primary-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                {/* -- */}
                <p className="font-bold">Available Time Slot</p>
              </div>
              {/* dropdown for timezone */}
              <TimeZonesDropdown
                timezonesDropdownType={TIMEZONES_DROPDOWN_TYPE_CLASSES.plain}
              />
              {/* -- */}
            </div>
            {/* -- */}
            {/* -- DISPLAY AVAILABILTIES -- */}
            <TimeSlots timeSlotsType={TIMESLOTS_TYPE_CLASSES.picker} />
            {/* -- */}
          </div>
        </div>
      </>
    </FormItem>
  );
};

export default ScheduleSection;
