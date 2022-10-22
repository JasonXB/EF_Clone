export interface MeetingData {
  mentorName: string;
  mentorPosition: string;
  date: string;
  time: string;
}

export interface ApplicationData {
  mentorName: string;
  status: 'viewed' | 'sent' | 'approved';
}

export interface GradientBarProp {
  status: 'viewed' | 'sent' | 'approved';
  pixelHeight: number;
  progressPercentage: number;
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
