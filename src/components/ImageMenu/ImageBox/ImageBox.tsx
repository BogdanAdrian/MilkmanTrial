import React from 'react';
import './ImageBox.scss';
// import BookImg from '../../../assets/'

type Props = {
  imageUrl: string,
  overlayColor: string,
  categoryUrl: string,
  imageAlt: string,
};

export const ImageBox: React.FC<Props> = ({ imageUrl, overlayColor, categoryUrl, imageAlt }) => {
  return (
    <div className='image-box'>
      <div className='overlay' style={{ backgroundColor: overlayColor }}></div>
      <div className='book'>
        <span className='book-word'>BOOK</span>
        <span className='vertical-line'></span>
      </div>
      <img className='category' alt='live music text' src={categoryUrl}/>
      <img className='main-img' src={imageUrl} alt={imageAlt}/>
    </div>
  );
}