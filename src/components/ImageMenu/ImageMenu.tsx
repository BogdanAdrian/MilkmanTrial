import React from 'react';
import { ImageBox } from './ImageBox';
import Desert from '../../assets/desert.png';
import Drink from '../../assets/drink.png';
import Salad from '../../assets/salad-centered.png';
import TaxiKitchen from '../../assets/taxi-kitchen.png';
import PublicBar from '../../assets/public-bar.png';
import TransitBar from '../../assets/transit-bar.png';
import './ImageMenu.scss';

const IMAGES = [{
  src: Desert,
  overlayColor: '#EBAE7D',
  categoryUrl: TaxiKitchen,
  imageAlt: 'Taxi Kitchen text',
}, {
  src: Drink,
  overlayColor: '#415729',
  categoryUrl: PublicBar,
  imageAlt: 'Public Bar text',
}, {
  src: Salad,
  overlayColor: '#f05b4f',
  categoryUrl: TransitBar,
  imageAlt: 'Transit bar text',
}];

export const ImageMenu = () => {
  return (
    <div className='image-menu'>
      {
        IMAGES.map((imgConfig: any, index: number) => (
          <ImageBox
            key={index}
            imageUrl={imgConfig.src}
            overlayColor={imgConfig.overlayColor}
            categoryUrl={imgConfig.categoryUrl}
            imageAlt={imgConfig.imageAlt}
          />
        ))
      }
    </div>
  );
}