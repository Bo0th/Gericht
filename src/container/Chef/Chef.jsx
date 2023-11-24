import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img reverse' style={{margin:'0 0 1rem 0'}}>
      <img src={images.chef} alt="chef image" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Cooking is not just about creating a meal; it's a journey of passion, a symphony of flavors orchestrated with precision.</p>
        </div>
        <p className='p__opensans'>In my kitchen, I believe in the alchemy of ingredients, the poetry of presentation, and the transformative power of a well-crafted dish. Each creation tells a story, and every bite is a chapter in the book of culinary artistry. At Gericht, my commitment is simple yet profound: to infuse each plate with the essence of dedication, the spirit of innovation, and the love that makes every meal an unforgettable experience.</p>
      </div>
    

    <div className='app__chef-sign'>
      <p>Kevin Luo</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt="sign" />
    </div>

    </div>

  </div>
);

export default Chef;
