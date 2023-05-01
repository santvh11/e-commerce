import { Item } from '../item/Item'
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
        slidesPerView={4}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
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
