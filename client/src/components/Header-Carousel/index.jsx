import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.scss";
import CarouselImg1 from "../../images/sl1-967x725.jpg"
import CarouselImg2 from "../../images/sl7.jpg"
import CarouselImg3 from "../../images/sl4.jpg"
import { Navigation } from "swiper";

const Carousel = () => {
  return (
    <div className='carousel'>
      <Swiper navigation={true} loop={true}
       modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src={CarouselImg1} alt="" />
            <span className=' carousel-title'>Floral</span>
            <h2 className='main-txt'>Excellent bouquets for you</h2>
            </SwiperSlide>

        <SwiperSlide>
            <img src={CarouselImg2} alt="" />
            <span className=' carousel-title'>Fixed-Height Slider</span>
            <h2 className='main-txt'>Excellent bouquets for you</h2>
            </SwiperSlide>
        <SwiperSlide>
            <img src={CarouselImg3} alt="" />
            <span className=' carousel-title'>Floral</span>
            <h2 className='main-txt'>Excellent bouquets for you</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel