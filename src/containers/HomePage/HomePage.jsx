import React from 'react';
import { CarouselWrapper } from '../../components/CarouselWrapper';
import { Toolbar } from '../../components/Toolbar';
import { ImageMenu } from '../../components/ImageMenu';
import { Events } from '../../components/Events';
import { Follow } from '../../components/Follow';
import { TradeMark } from '../../components/TradeMark';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='home-page'>
      <CarouselWrapper />
      <Toolbar />
      <ImageMenu />
      <Events />
      <Follow />
      <TradeMark />
    </div>
  );
}

export default HomePage;