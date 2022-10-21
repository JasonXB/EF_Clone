/* Since the style of SM icons in the Social Media Links component did not match those in the Adobe XD, 
I pulled different ones temporarily from Bootstrap icons. However, can easily switch to those already 
found in the component if that is what's decided. :) 
*/

import hiba from '../../assets/cat.jpeg'
import { linkedInIcon } from '../mentorProfile/ProfileIcons';
import { twitterIcon } from '../mentorProfile/ProfileIcons';

export const dummyMentors = [
    {
      name: 'Hiba Badran',
      title: 'Founder of Empowered Futures',
      email: 'test1@mail.com',
      avatar: hiba,
      socialMediaIcons: [
        {svg: linkedInIcon, url: 'http://linkedin.com' },
        {svg: twitterIcon, url: 'http://twitter.com' }
      ], 
      location: 'Calgary, Canada',
      responseTime: 'Usually responds within 1 day',
      skills: ['Entrepeneurship', 'Management', 'Problem Solving'],
      percentBarSkills: [
        {name: 'Grow a Business', percentage: 90 }, 
        {name: 'Adobe XD', percentage: 20 },
        {name: 'Networking', percentage: 40 },
        {name: 'Mindset Coaching', percentage: 70 },
        {name: 'Figma', percentage: 100 },
      ],
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut voluptatibus, corrupti in placeat libero necessitatibus numquam architecto corporis? Quo nulla nisi aperiam maiores explicabo inventore ex quaerat voluptates dolor?',
      availability: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut voluptatibus, corrupti in placeat libero necessitatibus numquam architecto corporis? Quo nulla nisi aperiam maiores explicabo inventore ex quaerat voluptates dolor?',
      status: true,
    },
    {
      name: 'Jane Doe',
      title: 'Founder of Empowered Futures',
      email: 'test2@mail.com',
      avatar: hiba,
      socialMediaIcons: [
        {svg: linkedInIcon, url: 'http://linkedin.com' },
        {svg: twitterIcon, url: 'http://twitter.com' }
      ], 
      location: 'Calgary, Canada',
      responseTime: 'Usually responds within 1 day',
      skills: ['Entrepeneurship', 'Management', 'Problem Solving'],
      percentBarSkills: [
        {name: 'Grow a Business', percentage: 90 }, 
        {name: 'Adobe XD', percentage: 20 },
        {name: 'Networking', percentage: 40 },
        {name: 'Mindset Coaching', percentage: 70 },
        {name: 'Figma', percentage: 100 },
      ],
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut voluptatibus, corrupti in placeat libero necessitatibus numquam architecto corporis? Quo nulla nisi aperiam maiores explicabo inventore ex quaerat voluptates dolor?',
      availability: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut voluptatibus, corrupti in placeat libero necessitatibus numquam architecto corporis? Quo nulla nisi aperiam maiores explicabo inventore ex quaerat voluptates dolor?',
      status: true,
    },
    {
      name: 'John Doe',
      title: 'Founder of Empowered Futures',
      email: 'test3@mail.com',
      avatar: hiba,
      socialMediaIcons: [
        {svg: linkedInIcon, url: 'http://linkedin.com' },
        {svg: twitterIcon, url: 'http://twitter.com' }
      ], 
      location: 'Calgary, Canada',
      responseTime: 'Usually responds within 1 day',
      skills: ['Entrepeneurship', 'Management', 'Problem Solving'],
      percentBarSkills: [
        {name: 'Grow a Business', percentage: 90 }, 
        {name: 'Adobe XD', percentage: 20 },
        {name: 'Networking', percentage: 40 },
        {name: 'Mindset Coaching', percentage: 70 },
        {name: 'Figma', percentage: 100 },
      ],
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut voluptatibus, corrupti in placeat libero necessitatibus numquam architecto corporis? Quo nulla nisi aperiam maiores explicabo inventore ex quaerat voluptates dolor?',
      availability: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut voluptatibus, corrupti in placeat libero necessitatibus numquam architecto corporis? Quo nulla nisi aperiam maiores explicabo inventore ex quaerat voluptates dolor?',
      status: false,
    }
  ]