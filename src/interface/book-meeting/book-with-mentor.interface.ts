import { ReactNode } from 'react';

export enum CALENDAR_TYPE_CLASSES {
  medium = 'medium', //type of calendar which uses Dateslot component mainly used in mentee/meeting/[mentor-id]
  large = 'large', //type of calendar with uses DateBracket component mainly used in mentor/mentorship-availability
}

export enum TIMESLOTS_TYPE_CLASSES {
  picker = 'picker',
  list = 'list',
}

export enum TIMEZONESDROPDOWN_TYPE_CLASSES {
  plain = 'plain',
  bold = 'bold',
}

export interface DayStrings {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Schedule {
  daily: Availability[];
  weekly: Availability[];
  monthly: Availability[];
  specific: Availability[];
}

export interface Availability {
    startDatetime: string;
    endDatetime: string;
}

export interface TentativeTime {
  startDatetime: string;
  endDatetime: string;
  isNull: boolean;
}

export interface Mentor {
    mentor_id: string;
    firstName: string; 
    lastName: string; 
    position: string; 
    company: string; 
    imgUrl: string; 
    meeting_availability: Schedule
}

export interface MeetingProps {
  timeSlotsType: TIMESLOTS_TYPE_CLASSES;
  meeting: Availability
}
export interface TimeSlotSetterProps {
  meeting: TentativeTime;
  index: number
}
export interface TimeTextFieldProps {
  time: string;
  isTimeNull?: boolean
}
export interface TimeZonesDropdownProps {
  timezonesDropdownType: TIMEZONESDROPDOWN_TYPE_CLASSES
}


//used in timeslots and Calendar component
export interface MeetingAvailabilityProps {
    calendarType: CALENDAR_TYPE_CLASSES
}

//used in DateSlot component
export interface DateBoxProps {
    day: Date;
    dayIndex: number
}

//used in Timezone component
export interface TimezoneProps {
    zone: ReactNode;
    setDropdownToggle: Function
}

//used in Timezone component
export interface TimeSlotsProps {
  timeSlotsType: TIMESLOTS_TYPE_CLASSES;
  day?: Date //day prop is optional and is only used for TIMESLOTS_TYPE_CLASSES.list to accomodate DateBracket in Calendar
}

export interface ScheduleSectionProps {
  needToChooseTime: boolean; 
}

export interface ReviewMeetingInfoSectionProps {
  fullName: string; 
  timeReview: string; 
  hasSelectedATime: boolean;
}