export interface MeetingData {
  mentorName: string;
  mentorPosition: string;
  date: string;
  time: string;
}

export interface ApplicationData {
  mentorName: string;
  status: 'viewed' | 'sent' | 'approved'; // status options which determine the color of the progress bar
}

export interface GradientBarProp {
  status: 'viewed' | 'sent' | 'approved'; // status options which determine the color of the progress bar
  progressPercentage: number; // how far along the progress part of the progress bar extends
}

export interface MockData {
  username: string;
  meetings: {
    mentorName: string;
    mentorPosition: string;
    date: string;
    time: string;
  }[];
  applications: {
    mentorName: string;
    status: 'viewed' | 'sent' | 'approved';
  }[];
}
