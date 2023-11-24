import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='image spoon' className='spoon__image'/>
        <p className='p__opensans'>At Gericht, we believe in the alchemy of flavors and the poetry of presentation. Our meticulously curated menu reflects a fusion of global influences, ensuring a diverse array of choices to suit every palate. We take pride in our commitment to sustainability, sourcing ingredients responsibly to deliver not just a meal but a conscientious dining experience.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife image" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='image spoon' className='spoon__image'/>
        <p className='p__opensans'>Founded in 1979, Gericht has a rich and storied history that echoes the passion and dedication of its visionary founders. What started as a culinary dream evolved into a gastronomic haven, earning a reputation for excellence that extends far beyond the borders of London.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
