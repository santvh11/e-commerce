import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Product } from '@/utils/types'
import { Container, Image, useTheme, Text, Spacer, Grid } from '@nextui-org/react'

interface Props {
    data: Product[]
    carouselSize?: number
    title: string
}

export const Banners = ({ data, carouselSize, title }: Props) => {
  const { theme } = useTheme()

  const items = data.slice(0, carouselSize).map(product =>
    <SwiperSlide key={product.id}>
      <Grid.Container css={{ bc: theme?.colors.gray100.value }}>
        <Grid>
          <Image
            src={product.images.at(0) || ''}
            alt='Picture of the product'
            objectFit='contain'
            css={{ h: '40vh' }}
          />
        </Grid>
        <Grid xs justify='center' direction='column' alignItems='center'>
          <Text
            h2 css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%'
            }}
            weight='bold'
          > OFFERS WEEK!
          </Text>
          <Text
            h2 css={{
              textGradient: '45deg, $purple600 -20%, $pink600 100%'
            }}
            weight='bold'
          > OFFERS WEEK!
          </Text>
          <Text
            h2 css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%'
            }}
            weight='bold'
          > OFFERS WEEK!
          </Text>
          <Text h2> OFFERS WEEK!</Text>
        </Grid>
      </Grid.Container>
      <Spacer y={3} />
    </SwiperSlide>
  )

  return (
    <Container
      fluid
    >
      <Container>
        <Text h3 css={{ mt: 20, pl: 0, pr: 0 }}>{title}</Text>
      </Container>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{
          '--swiper-pagination-color': theme?.colors.secondary.value,
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
