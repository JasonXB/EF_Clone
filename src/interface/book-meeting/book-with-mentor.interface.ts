import { ReactNode } from 'react';

import {
  CALENDAR_TYPE_CLASSES, 
  TIMESLOTS_TYPE_CLASSES, 
  TIMEZONES_DROPDOWN_TYPE_CLASSES, 
  TENTATIVE_MEETINGS_TYPE_CLASSES
} from '../../enum/calendar/calendar.enum'

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
  isUpdated?: boolean;
  isNull?: boolean;
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
  meetingType: TENTATIVE_MEETINGS_TYPE_CLASSES
  index: number
}
export interface TimeTextFieldProps {
  meeting: TentativeTime;
  meetingType: TENTATIVE_MEETINGS_TYPE_CLASSES
  whichTime: string;
  index: number
}
export interface TimeZonesDropdownProps {
  timezonesDropdownType: TIMEZONES_DROPDOWN_TYPE_CLASSES
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