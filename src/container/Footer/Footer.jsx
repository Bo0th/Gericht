import React from 'react';
import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding app__bg'>
    {/* <FooterOverlay /> */}
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headText'>Contact Us</h1>
        <p className='p__opensans'>Gericht, Booth Park, Shoreditch, London, N22 8NP</p>
        <p className='p__opensans'>02203 396 485</p>
        <p className='p__opensans'>Gericht@realmail.co.uk</p>

      </div>
      
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" className='spoon__image' style={{marginTop: '15px'}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headText'>Working Hours</h1>
        <p className='p__opensans'>Mon - Fri: 12:00 - 00:00</p>
        <p className='p__opensans'>Sat - Sun: 12:00 - 02:00</p>
      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
