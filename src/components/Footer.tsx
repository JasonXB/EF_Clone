import EfLogo from './EfLogo';
import { FooterColumnProps } from '../interface/footer-column-props.interface';
import SocialMediaLink from './socialMediaLinks/social-media-link';
import { SocialMedia } from '../enum/SocialMedia.enum';

// solution to 'Hydration error' bug I was getting.
import dynamic from 'next/dynamic';
const FooterLink = dynamic(() => import('./FooterLink'), { ssr: false });

const footerLinks: FooterColumnProps[] = [
  {
    links: [
      { text: 'Get Involved', url: './get-involved' },
      { text: 'About Us', url: './about-us' },
      { text: 'Contact', url: './contact' },
      { text: 'Login', url: './login' },
    ],
  },
  {
    links: [
      { text: 'Become A Mentor', url: './become-a-mentor' },
      { text: 'Become A Mentee', url: './become-a-mentee' },
      { text: 'Support Our Work', url: './support-our-work' },
      { text: 'Suggest A Program', url: './suggest-a-program' },
    ],
  },
  {
    links: [
      { text: 'Follow Us On Social Media' },
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
  },
];

const Footer = () => {
  return (
    <footer className="text-center bg-gray-100 lg:text-left">
      <div className="pt-16 text-center md:text-left">
        <div className="grid grid-cols-1 gap-2 lg:gap-8 lg:grid-cols-4">
          {/* Empowered Futures logo */}
          <div className="flex justify-center w-full">
            <EfLogo
              className="w-44 lg:w-52 lg:mt-10"
              alt="Empowered Futures Logo"
            />
          </div>
          {footerLinks.map((column, i) => {
            return (
              <div key={i}>
                {/* Map over column links to avoid repeating classes (thanks, Jason) */}
                {column.links?.map((link, i) => {
                  return (
                    <div key={i}>
                      {/* If link has no url, render heading (just 'Follow us on social media')*/}
                      {!link.url && (
                        <p className="flex justify-center mb-2 lg:justify-start lg:mb-6">
                          {link.text}
                        </p>
                      )}
                      {/* If link has url, render FooterLink */}
                      {link.url && (
                        <FooterLink
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
      </div>
      {/* Copyright */}
      <div className="p-6 text-center text-gray-600">
        <span>Empowered Futures Copyright 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
