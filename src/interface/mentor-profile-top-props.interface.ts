export interface MentorProfileTopProps {
    name: string;
    title: string;
    avatar: any;
    socialMediaIcons: Array<{
      svg: any;
      url: string
    }>
    location: string;
    responseTime: string;
  }