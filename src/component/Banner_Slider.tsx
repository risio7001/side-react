import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Banner_Slider = () => {

    return<>

        <Swiper 
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                autoplay={false}
                loop={true}
                className="mySwiper rounded-2xl"
                >
            <SwiperSlide>
                <div className="h-[200px] w-full bg-red-100 "></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[200px] w-full bg-blue-100 "></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[200px] w-full bg-slate-100 "></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[200px] w-full bg-green-100 "></div>
            </SwiperSlide>
        </Swiper>
    
    </>
}

export default Banner_Slider