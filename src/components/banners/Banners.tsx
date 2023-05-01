import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Product } from '@/utils/types'
import NextImage from 'next/image'
import { Container, Image, useTheme, Text, Card } from '@nextui-org/react'

interface Props {
    data: Product[]
    carouselSize?: number
    title: string
}

export const Banners = ({ data, carouselSize, title }: Props) => {
  const { theme } = useTheme()

  const items = data.slice(0, carouselSize).map(product =>
    <SwiperSlide key={product.id}>
      <Container css={{ bc: theme?.colors.primary.value }}>
        <Image
          src={product.images.at(0) || ''}
          alt='Picture of the product'
          width={500}
          height={500}
        />
      </Container>
    </SwiperSlide>
  )

  return (
    <>
      <Container>
        <Text h3 css={{ mt: 20, pl: 0, pr: 0 }}>{title}</Text>
      </Container>

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
    </>
  )
}
