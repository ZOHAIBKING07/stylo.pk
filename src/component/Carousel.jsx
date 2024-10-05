import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';


import { Navigation } from 'swiper/modules';

const Carousel=()=> {
  return (
<div className='swiper'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://stylo.pk/cdn/shop/files/1920X600_1_b32267d3-f6c6-471b-9b5d-0736952bd17a.jpg?v=1726635209" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://stylo.pk/cdn/shop/files/1920x600_b465d4c9-4fae-4a38-94a9-b54038778690.jpg?v=1724936166" alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
}
export default Carousel;