export interface MeetingData {
  mentorName: string;
  mentorPosition: string;
  date: string;
  time: string;
}

export interface ApplicationData {
  mentorName: string;
  status: 'Viewed' | 'Sent' | 'Approved'; // status options which determine the color of the progress bar
}

export interface GradientBarProp {
  status: 'Viewed' | 'Sent' | 'Approved'; // status options which determine the color of the progress bar
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
    status: 'Viewed' | 'Sent' | 'Approved';
  }[];
  similarMentors: {
    mentorName: string;
    location: string;
    mentorPosition: string;
    bubbleTag1: string;
    bubbleTag2: string;
    image: string;
  }[];
}
