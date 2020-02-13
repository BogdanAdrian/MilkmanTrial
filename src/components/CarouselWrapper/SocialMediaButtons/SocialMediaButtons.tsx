import React from 'react';
import TwitterIcon from '../../../assets/twitter-icon.png';
import FacebookIcon from '../../../assets/facebook-icon.png';
import InstagramIcon from '../../../assets/instagram-icon.png';
import './SocialMediaButtons.scss';

enum SocialMedia {
  TWITTER,
  FACEBOOK,
  INSTAGRAM
};

export const SocialMediaButtons = () => {
  function onIconClick(socialMedia: SocialMedia) {
    switch(socialMedia) {
      case SocialMedia.TWITTER:
      case SocialMedia.FACEBOOK:
      case SocialMedia.INSTAGRAM:
        window.open('https://milkman.com.au/?fbclid=IwAR3ovqZQNUpN5XqQgJ0cLgqylrh-WqD5tSfWKXAVGS0qPrvVo6s9lhzKMXY', '_blank');
        break;
    }
  }

  return (
    <div className='social-media-buttons'>
        <img src={TwitterIcon} alt='Twitter icon' onClick={() => onIconClick(SocialMedia.TWITTER)}/>
        <img src={FacebookIcon} alt='Facebook icon' onClick={() => onIconClick(SocialMedia.FACEBOOK)}/>
        <img src={InstagramIcon} alt='Instagram icon' onClick={() => onIconClick(SocialMedia.INSTAGRAM)}/>
      </div>
  );
}