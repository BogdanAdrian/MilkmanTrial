import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselWrapper.scss';
import { CarouselOverlay } from '../CarouselOverlay';
import Melbourne1 from '../../assets/melbourne.png';
import Melbourne2 from '../../assets/melbourne1.jpg';
import Melbourne3 from '../../assets/melbourne2.jpg';
import { SocialMediaButtons } from './SocialMediaButtons';

export const CarouselWrapper = () => {
  return (
    <div className='carousel-wrapper'>
      <SocialMediaButtons />
      <CarouselOverlay />
      <Carousel
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        swipeable={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={500}
      >
        <img src={Melbourne1} alt='People hanging at a table having Melboure"s skyline in background'/>
        <img src={Melbourne2} alt='Melbourne skyline'/>
        <img src={Melbourne3} alt='Melbourne skyline'/>
      </Carousel>
    </div>
  );
}