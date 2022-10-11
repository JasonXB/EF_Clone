import React, { FC } from 'react';
import Image from 'next/image';

import RedditImg from '../../assets/icons8-reddit-50.png';
import LinkedInImg from '../../assets/icons8-linkedin-circled-50.png';
import TwitterImg from '../../assets/icons8-twitter-50.png';
import FacebookImg from '../../assets/icons8-facebook-50.png';
import { SocialMedia } from '../../enum/SocialMedia.enum';

interface LinkTypes {
  //   domain: 'Reddit' | 'LinkedIn' | 'Twitter' | 'Facebook';
  domain: `${SocialMedia}`; // https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum/64966647#64966647
  // note for reviewer: it's arguable this is too complicated of a path. Line 12 could be used instead.
}

const SocialMediaLink: FC<LinkTypes> = ({ domain }: LinkTypes) => {
  function selectImageOfType(domain: string) {
    let type;
    switch (domain) {
      case SocialMedia.reddit:
        type = RedditImg;
        break;
      case SocialMedia.linkedIn:
        type = LinkedInImg;
        break;
      case SocialMedia.twitter:
        type = TwitterImg;
        break;
      case SocialMedia.facebook:
        type = FacebookImg;
        break;
      default:
        throw new Error('Must select social media link domain');
    }
    return type;
  }

  return (
    <div className="h-12 w-12 ml-2">
      <button>
        {/* // NOTE: the images I used are unlicensed, provided by Icons8. If they are to be in production, we must buy them */}
        <Image src={selectImageOfType(domain)} />
      </button>
    </div>
  );
};

export default SocialMediaLink;
