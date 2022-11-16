import { ReactNode } from 'react';

export enum CALENDAR_TYPE_CLASSES {
  medium = 'medium', //type of calendar which uses Dateslot component mainly used in mentee/meeting/[mentor-id]
  large = 'large', //type of calendar with uses DateBracket component mainly used in mentor/mentorship-availability
}

export enum TIMESLOTS_TYPE_CLASSES {
  picker = 'picker',
  list = 'list',
}

export interface Schedule {
  daily: Availability[],
  weekly: Availability[],
  monthly: Availability[],
  specific: Availability[],
}

//used in book-meeting/[mentorId]  
export interface Availability {
    startDatetime: string,
    endDatetime: string,
}

export interface Mentor {
    mentor_id: number,
    firstName: string, 
    lastName: string, 
    position: string, 
    company: string, 
    imgUrl: string, 
    meeting_availability: Schedule
}

export interface MeetingProps {
  timeSlotsType: TIMESLOTS_TYPE_CLASSES,
  meeting: Availability
}
export interface TimeSlotSetterProps {
  meeting: Availability
}


//used in timeslots and Calendar component
export interface MeetingAvailabilityProps {
    calendarType: CALENDAR_TYPE_CLASSES
}

//used in DateSlot component
export interface DateBoxProps {
    day: Date,
    dayIndex: number
}

//used in Timezone component
export interface TimezoneProps {
    zone: ReactNode,
    setDropdownToggle: Function
}

//used in Timezone component
export interface TimeSlotsProps {
  timeSlotsType: TIMESLOTS_TYPE_CLASSES,
  day?: Date //day prop is optional and is only used for TIMESLOTS_TYPE_CLASSES.list to accomodate DateBracket in Calendar
}