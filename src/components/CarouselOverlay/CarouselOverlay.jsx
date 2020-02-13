import React from 'react';
import TransportHotel from '../../assets/transport-hotel.png';
import './CarouselOverlay.scss';

export const CarouselOverlay = () => {
  return (
    <div className='carousel-overlay'>
      <div className='background'></div>
      <img className='img' alt='Transport Hotel text' src={TransportHotel} />
    </div>
  );
}