// Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Autoplay } from "swiper/modules";
import slide1 from './../../images/Logos clients-01.png'
import slide2 from './../../images/Logos clients-02.png'
import slide3 from './../../images/Logos clients-03.png'
import slide4 from './../../images/Logos clients-04.png'
import slide5 from './../../images/Logos clients-05.png'
import slide7 from './../../images/Logos clients-07.png'
import slide8 from './../../images/Logos clients-08.png'
import slide9 from './../../images/Logos clients-09.png'
const Slider = () => {
  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide7,
    slide8,
    slide9
  ];

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={'auto'}
      freeMode={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      loop={true}
      speed={500}
    className='trusted-by-slider'
      modules={[FreeMode, Autoplay]}
      >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider;