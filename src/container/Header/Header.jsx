import React from 'react';
import images from '../../constants/images';

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info' style={{paddingRight: '1rem'}}>
      <SubHeading title='Chase a new flavour' />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Embark on a gastronomic journey like no other at Gericht, where fine dining transcends mere meals to become a symphony of senses. Immerse yourself in an ambience of refined elegance, where every detail is meticulously curated to elevate your dining experience. </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_image'>
      <img src={images.welcome} alt='header img'style={{width:'100%'}} />
    </div>
  </div>
);

export default Header;
