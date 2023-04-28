import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/Carousel.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Product } from '@/utils/types';
import Image from 'next/image';

interface Props {
    data: Product[]
    carouselSize?: number
}

export const Carousel = ({ data, carouselSize }: Props) => {
    const items = data.slice(0, carouselSize).map(product =>
        <SwiperSlide key={product.id}>
            <Image className={styles.itemContainer}
                src={product.images.at(0) || ""}
                alt="Picture of the product"
                width={500}
                height={500}
            />
        </SwiperSlide>
    );

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {items}
        </Swiper>
    );
}
