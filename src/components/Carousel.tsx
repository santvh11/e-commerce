import { Item } from './Item'
import { Product } from '@/utils/types'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Container, Spacer, Text, useTheme } from '@nextui-org/react'

interface Props {
    data: Product[]
    carouselSize?: number
    title: string
}

export const Carousel = ({ data, carouselSize, title }: Props) => {
  const { theme } = useTheme()

  const items = data.slice(0, carouselSize).map(product =>
    <SwiperSlide key={product.id}>
      <Item data={product} />
      <Spacer y={4} />
    </SwiperSlide>
  )

  return (
    <Container css={{ mt: 20 }}>
      <Text h3>{title}</Text>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          660: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          1000: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 640px
          1500: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
        style={{
          '--swiper-pagination-color': theme?.colors.primary.value,
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '13px',
          '--swiper-pagination-bullet-horizontal-gap': '6px'
        }}
      >
        {items}
      </Swiper>
    </Container>
  )
}
