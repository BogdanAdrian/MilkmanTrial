import React from 'react';
import SaxophoneGuy from '../../assets/saxophone-guy.png';
import LiveMusic2 from '../../assets/live-music2.jpg';
import LiveMusic3 from '../../assets/live-music3.jpg';
import PeepsClapping from '../../assets/peeps-clapping.png';
import Events2 from '../../assets/events2.png';
import Events3 from '../../assets/events3.jpg';
import Live from '../../assets/live.png';
import Music from '../../assets/music.png';
import EventsImg from '../../assets/events.png';
import { Event } from './Event';
import './Events.scss';

const EVENTS = [{
  mainImgSources: [
    SaxophoneGuy,
    LiveMusic2,
    LiveMusic3
  ],
  secondaryMainImgSrc: Live,
  secondarySecondImgSrc: Music,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elementum augue. Maecenas arcu quam, placerat eget rhoncus ac, ornare ac purus. Cras condimentum, lectus nec sagittis cursus.',
  actionColor: '#99400f',
  actionTxt1: 'VIEW',
  actionTxt2: 'GIG GUIDE',
}, {
  mainImgSources: [ PeepsClapping, Events2, Events3 ],
  secondaryMainImgSrc: EventsImg,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elementum augue. Maecenas arcu quam, placerat eget rhoncus ac, ornare ac purus. Cras condimentum, lectus nec sagittis cursus.',
  actionColor: '#415729',
  actionTxt2: 'WHAT\'S ON'
}]

export const Events = () => {
  return (
    <div className='events'>
      {
        EVENTS.map((event: any, index: number) => (
          <Event
            key={index}
            mainImgSources={event.mainImgSources}
            secondaryMainImgSrc={event.secondaryMainImgSrc}
            secondarySecondImgSrc={event.secondarySecondImgSrc}
            description={event.description}
            actionColor={event.actionColor}
            actionTxt1={event.actionTxt1}
            actionTxt2={event.actionTxt2}
          />
        ))
      }
    </div>
  );
}