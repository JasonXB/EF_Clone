import { ReactNode } from 'react';

//used in book-meeting/[mentorId]  
export interface Availability {
    startDatetime: Date | string,
    endDatetime: Date | string,
  }


export interface Mentor {
    mentor_id: number,
    name: string, 
    position: string, 
    company: string, 
    imgUrl: string, 
    meeting_availability: {
        specific: Availability[]
    }
  }

//used in timeslot component
export interface ZonedAvailability {
  startDatetime: Date,
  endDatetime: Date,
}
export interface MeetingProps {
    meeting: ZonedAvailability
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