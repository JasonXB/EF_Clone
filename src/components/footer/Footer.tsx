import EfLogo from '../EfLogo';
import { FooterColumnProps } from './footer-column-props.interface';
import SocialMediaLink from '../socialMediaLinks/social-media-link';
import { SocialMedia } from '../../enum/SocialMedia.enum';

// solution to 'Hydration error' bug I was getting.
import dynamic from 'next/dynamic';
const FooterLink = dynamic(() => import('./FooterLink'), { ssr: false });

const footerLinks: FooterColumnProps[] = [
  {
    links: [
      // { text: 'Get Involved', url: './get-involved' },
      { text: 'About Us', url: './about-us' },
      { text: 'Contact', url: './contact' },
      { text: 'Login', url: './auth/login' },
    ],
  },
  {
    links: [
      { text: 'Become A Mentor', url: './become-a-mentor' },
      { text: 'Become A Mentee', url: './auth/signup' },
      {
        text: 'Support Our Work',
        url: 'https://www.zeffy.com/en-CA/donation-form/c59ee94e-8014-48ab-98a7-bdf1f64a99a7',
      },
      // { text: 'Suggest A Program', url: './suggest-a-program' },
    ],
  },
];

const socialMediaLinks: FooterColumnProps = {
  links: [
    {
      text: 'Facebook',
      url: 'https://www.facebook.com/empoweredfuturesyyc/',
      icon: (
        <SocialMediaLink
          className="w-6 h-6 ml-2"
          domain={SocialMedia.facebook}
        />
      ),
    },
    {
      text: 'Instagram',
      url: 'https://www.instagram.com/empowered_futures/?hl=en',
      icon: (
        <SocialMediaLink
          className="w-6 h-6 ml-2"
          domain={SocialMedia.instagram}
        />
      ),
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/company/empowered-futures/',
      icon: (
        <SocialMediaLink
          className="w-6 h-6 ml-2"
          domain={SocialMedia.linkedIn}
        />
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="relative z-20 text-sm text-center bg-hue-700 text-light">
      {/* This column and the social media column have been changed from grid to flex */}
      <div className="flex flex-col pt-16 text-center lg:flex-row">
        {/* Empowered Futures logo */}
        <div className="flex justify-center w-full lg:w-1/4">
          <div className="flex justify-center mb-5 lg:mb-0 lg:mt-10 max-w-[337px] min-w-[337px] lg:ml-16 lg:mr-24">
            <EfLogo className="" alt="Empowered Futures Logo" />
          </div>
        </div>
        {/* The two columns in the middle (non-social media links) have remained a grid. */}
        <div className="grid w-full grid-cols-1 my-auto mb-5 mr-5 sm:gap-8 lg:w-2/4 ss:grid-cols-2">
          {footerLinks.map((column, i) => {
            return (
              <div key={i} className="w-full mb-5">
                {/* Map over column links to avoid repeating classes (thanks, Jason) */}
                {column.links?.map((link, i) => {
                  return (
                    <div key={i}>
                      {/* If link has url, render FooterLink */}
                      {link.url && (
                        <FooterLink
                          key={i}
                          text={link.text}
                          url={link.url}
                          icon={link.icon}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Social Media column now flex */}
        <div className="flex flex-col mb-2 lg:mb-6">
          <div className="mb-2 font-bold lg:mb-6">
            Follow Us on Social Media
          </div>
          <div className="flex flex-row justify-center lg:flex-col">
            {socialMediaLinks?.links?.map((link, i) => {
              return (
                <FooterLink
                  key={i}
                  text={link.text}
                  url={link.url}
                  icon={link.icon}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 pb-4 text-center text-hue-400 ss:pt-0 ">
        <span>Empowered Futures Copyright 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
