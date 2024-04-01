import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { items } from "../dummy/itemsData";
import ListLayout from "./ListLayout";

const Swiper_1 = () => {

    const data = items;

    const SlideItems = ({ data }: any) => {

        const { id, title, content, views } = data;

        return <>
            <div className="border-2 p-4 border-slate-400 rounded-3xl">
                {id}<br />
                {title}<br />
                {content}<br />
                {views}
            </div>
        </>
    }

    return <>
        <ListLayout>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                autoplay={true}
                loop={true}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
            >
                {
                    data.sort((a, b) => b.views - a.views).map((el, index) => {
                        if (index < 5) {
                            return <SwiperSlide key={index}>
                                <SlideItems data={el} />
                            </SwiperSlide>
                        }
                    })
                }
            </Swiper>
        </ListLayout>
    </>

}

export default Swiper_1