
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Deadpool from "../assest/deadpool.jpg";
import Fast from "../assest/fastX.jpg"
import Endgame from "../assest/download.jpg"
import "../style.css"

const SliderImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000
  };

  return (

   < div className='slider-image'>
   

    <Slider {...settings}>
      
      <div>
                 <img width="100%" height="400px" src={Fast} alt="fast x" />      
      </div>

      <div>
                <img  width="100%" height="400px" src={Deadpool} alt="deadpool" />
      </div>

      
      <div>
                <img width="100%" height="400px" src={Endgame} alt="endgame" />
      </div>

    </Slider>
    </div>
  );
};

export default SliderImage;



