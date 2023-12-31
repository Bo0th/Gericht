import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './findus.css'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper-container-findus'>
      <div className='app__wrapper_info-findus'>
        <SubHeading title='Contact' />
        <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Gericht, Booth Park, Shoreditch, London, N22 8NP</p>
          <p className='p__cormorant' style={{color: '#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 12:00 - 00:00</p>
          <p className='p__opensans'>Sat - Sun: 12:00 - 02:00</p>

        </div>
        <button className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>
      </div>

      <div className='app__wrapper_image'>
        <img src={images.findus} alt="find us" />
      </div>
    </div>
  </div>
);

export default FindUs;
