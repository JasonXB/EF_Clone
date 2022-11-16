import { ReactNode } from 'react';

export enum CALENDAR_TYPE_CLASSES {
  medium = 'medium',
  large = 'large',
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
export  interface TimezoneProps {
    zone: ReactNode,
    setDropdownToggle: Function
  }