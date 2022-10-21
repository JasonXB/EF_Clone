/* Since the style of SM icons in the Social Media Links component did not match those in the Adobe XD, 
I pulled different ones temporarily from Bootstrap icons. However, can easily switch to those already 
found in the component if that is what's decided. :) 
*/

import hiba from '../../assets/hiba.png'
import { linkedInIcon } from './ProfileIcons';
import { twitterIcon } from './ProfileIcons';

export const dummySimilarMentorProfiles = [
    {
      name: 'Hiba Badran',
      title: 'Founder of Empowered Futures',
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
      availability: 'Every day after 1 pm',
    },

    {
      name: 'Matt Engerer',
      title: 'Makes some of the website pages',
      avatar: hiba,
      socialMediaIcons: [
        {svg: linkedInIcon, url: 'http://linkedin.com' },
        {svg: twitterIcon, url: 'http://twitter.com' }
      ], 
      location: 'Toronto, Canada',
      responseTime: 'Usually responds within 1 day',
      skills: ['Computer', 'Management', 'Problem Solving'],
      percentBarSkills: [
        {name: 'React', percentage: 100 }, 
        {name: 'JS', percentage: 100 },
        {name: 'Networking', percentage: 20 },
        {name: 'Sitting', percentage: 90 },
        {name: 'Walking', percentage: 80 },
      ],
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut voluptatibus, corrupti in placeat libero necessitatibus numquam architecto corporis? Quo nulla nisi aperiam maiores explicabo inventore ex quaerat voluptates dolor?',
      availability: 'Weekends after 11 pm',
    },

    {
      name: 'Jason Bustamante',
      title: 'Coder',
      avatar: hiba,
      socialMediaIcons: [
        {svg: linkedInIcon, url: 'http://linkedin.com' },
        {svg: twitterIcon, url: 'http://twitter.com' }
      ], 
      location: 'Toronto, Canada',
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
      availability: 'Weekends after 7 pm',
    }
  ]