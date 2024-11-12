import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Product = () => {
  return (
    <>
    <div style={{margin:'30px 0'}}>
    <h2 style={{textAlign:'center', marginBottom:'20px'}}>Recommended For You</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
       768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      >
        <SwiperSlide> 
                 <div className="item 1">
                             <div className="pic"><img src="https://stylo.pk/cdn/shop/products/KD047009_3.jpg?v=1720443410&width=360"/></div>
                             <div className="category">Casual</div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide> 
                 <div className="item 2">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR516501_3_360x.jpg?v=1704800196"/></div>
                             <div className="category">Casual</div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 3">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR516005_3_360x.jpg?v=1697435475"/></div>
                             <div className="category">Formal</div>
                             <div className="description">Maroon Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 4">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR515418_3_360x.jpg?v=1698732840"/></div>
                             <div className="category">Formal</div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 5">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR515911_3_360x.jpg?v=1698732854"/></div>
                             <div className="category">Formal</div>
                             <div className="description">Sky Blue Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 6">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR524690_3_360x.jpg?v=1703248874"/></div>
                             <div className="category">Formal</div>
                             <div className="description">Coffee Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 7">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR810790_3_360x.jpg?v=1701146378"/></div>
                             <div className="category">Formal</div>
                             <div className="description">Black Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 8">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR515441_3_360x.jpg?v=1699252362"/></div>
                             <div className="category">Formal</div>
                             <div className="description">Blue Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 9">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR515301_3_360x.jpg?v=1688648133"/></div>
                             <div className="category">Formal</div>
                             <div className="description">Black Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 10">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR516018_3_360x.jpg?v=1698732862"/></div>
                             <div className="category">Formal</div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 2,960.00</div>
                 </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}

export default Product