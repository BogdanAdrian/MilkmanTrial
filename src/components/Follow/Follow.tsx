import React from 'react';
import Follow1 from '../../assets/follow1.jpg';
import Follow2 from '../../assets/follow2.jpg';
import Follow3 from '../../assets/follow3.jpg';
import Follow4 from '../../assets/follow4.jpeg';
import Follow5 from '../../assets/follow5.jpg';
import Follow6 from '../../assets/follow6.jpg';
import Follow7 from '../../assets/follow7.jpeg';
import Follow8 from '../../assets/follow8.jpg';
import Follow9 from '../../assets/follow9.jpeg';
import Follow10 from '../../assets/follow10.jpg';
import './Follow.scss';

const IMAGES = [
  Follow1, Follow2, Follow3, Follow4, Follow5, Follow6, Follow7, Follow8, Follow9, Follow10
];

export const Follow = () => {
  return (
    <div className='follow-container'>
      <div className='follow-text'>
        <span>FOLLOW</span>
      </div>
      <div className='images-container'>
        {
          IMAGES.map((src: string, index: number) => (
            <div className='image-container' key={index}>
              <img alt='food or beverage' className='follow-image' src={src}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}