// Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Autoplay } from "swiper/modules";

const Slider = () => {
  const images = [
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/0b909ff8-645b-47a2-8c36-c16d47f60dd9/Logos+clients-01.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/ce6c5a47-6d01-4025-b86f-c63ad3789f9a/Logos+clients-02.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/d7c35961-1f07-44b9-9808-f9763dce921d/Logos+clients-03.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/d1ed4e07-d893-44d1-8205-18f7bfea4887/Logos+clients-04.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/a0e72bae-0f93-4d64-8111-e9f7987a12c9/Logos+clients-05.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/a887ad99-b373-4adb-8248-dec24fe8cd92/Logos+clients-07.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/07c717ba-40de-4d81-88b5-f09da29fa57a/Logos+clients-08.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/96d72447-ee2e-47b1-bac8-dd2bf1ac492f/Logos+clients-09.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/0802fad3-9061-4a3e-b19f-ba0a046a16e5/bite-logo.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/731a0bd6-b433-4869-afe0-0248969d10a1/ottopizza-logo.png',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/f48b5517-b6a4-47f7-a504-23f43fa7d0b3/ritta+logo.jpg',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/e561ba2b-652e-4b5c-bb61-7e62f32949d7/mash-logo.jpg',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/b90714f5-5acb-4f13-94e2-58a4880ae0c2/GROeD-logo.jpg',
    'https://images.squarespace-cdn.com/content/v1/66a3877ca98bb105dd520f3b/37da54d1-60f9-4c7c-b791-cdc81a66794b/CHGP_Logo.jpg',
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