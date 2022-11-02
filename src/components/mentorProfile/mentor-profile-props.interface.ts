export interface MentorProfileProps {
    id: number;
    name: string;
    title: string;
    avatar: any;
    socialMediaIcons: Array<{
      svg: any;
      url: string
    }>
    location: string;
    skills: Array<string>;
    about: string;
    responseTime: string;


  }