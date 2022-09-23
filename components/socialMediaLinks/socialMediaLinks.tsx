import React, { FC } from 'react';
import Image from 'next/image';
// import {from 'next';

import RedditImg from '../../assets/icons8-reddit-100.png';
import LinkedInImg from '../../assets/icons8-linkedin-circled-100.png';
import TwitterImg from '../../assets/icons8-twitter-100.png';
import FacebookImg from '../../assets/icons8-facebook-100.png';
import { SocialMedia } from '../../enum/SocialMedia.enum';

interface LinkTypes {
  domain: 'Reddit' | 'LinkedIn' | 'Twitter' | 'Facebook';
}

const SocialMediaLink: FC<LinkTypes> = ({ domain }: LinkTypes) => {
  function selectImageOfType(domain: SocialMedia) {
    console.log();
    let type;
    switch (domain) {
      //   case 'Reddit':
      case SocialMedia.reddit:
        type = RedditImg;
        break;
      case SocialMedia.linkedIn:
        //   case 'LinkedIn':
        type = LinkedInImg;
        break;
      case SocialMedia.twitter:
        type = TwitterImg;
        break;
      case SocialMedia.facebook:
        type = FacebookImg;
        break;
      default:
        // Todo: what if default?
        throw new Error('Must select social media link domain');
    }
    return type;
  }

  return (
    <div>
      <div>
        <button>
          {/* // NOTE: the images I used are unlicensed, provided by Icons8. If they are to be in production, we must buy them */}
          <Image src={selectImageOfType(domain)} />
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLink;
