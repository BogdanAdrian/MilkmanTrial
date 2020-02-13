import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Event.scss';

type Props = {
  mainImgSources: string[],
  secondaryMainImgSrc: string,
  secondarySecondImgSrc: string,
  description: string,
  actionColor: string,
  actionTxt1: string,
  actionTxt2: string,
};

export const Event: React.FC<Props> = ({ mainImgSources, secondaryMainImgSrc, secondarySecondImgSrc, description, actionColor, actionTxt1, actionTxt2 }) => {
  return (
    <div className='event'>
      <Carousel
        showArrows={false}
        showIndicators={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        swipeable={false}
        autoPlay={true}
        interval={4000}
        transitionTime={500}
      >
        {
          mainImgSources.map((imgSrc: string, index: number) => (
            <img src={imgSrc} alt={index < 3 ? 'live music event' : 'people socializing event'} key={index} />
          ))
        }
      </Carousel>
      <div className='details'>
        <div className='overlay'></div>
        <div className='secondary-imgs-container'>
          <img className='secondary-img' alt='live text' src={secondaryMainImgSrc}/>
          {
            secondarySecondImgSrc && <img alt='music text' className='secondary-img' src={secondarySecondImgSrc}/>
          }
        </div>
        <div className='description'>
          <p>{description}</p>
          <div className='action' style={{ color: actionColor }}>
            { actionTxt1 && <span className='action-txt1'>{actionTxt1}</span>}
              <span className='action-txt2'>{actionTxt2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}