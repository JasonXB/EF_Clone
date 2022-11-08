import { ReactNode } from 'react';

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
    meeting_availability: {
        specific: Availability[]
    }
  }

export interface MeetingProps {
    meeting: Availability
  }


//used in timeslots and Calendar component
export interface MeetingAvailabilityProps {
    meeting_availability: {
      specific: Availability[]
    }
}

//used in DateSlot component
export interface DateSlotProps {
    day: Date,
    dayIndex: number,
    availabilities: Availability[]
  }

  //used in Timezone component
export  interface TimezoneProps {
    zone: ReactNode,
    setDropdownToggle: Function
  }