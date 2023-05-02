import { Col, Container, Grid, Image, Row, Text, useTheme } from '@nextui-org/react'
import { Isotipo } from './svgs/Isotipo'
import Link from 'next/link'

export const Footer = () => {
  const { theme } = useTheme()
  return (
    <Grid.Container css={{ h: '10vw', bc: theme?.colors.accents1.value, mt: 50 }}>
      <Grid xs justify='center' alignItems='center'>
        <Isotipo size={100} />
      </Grid>
      <Grid xs justify='center' alignItems='center'>
        <Text
          h2 css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%'
          }}
          weight='bold'
        >
          Made by Santiago Vanegas
        </Text>
      </Grid>
      <Grid xs justify='center' alignItems='center'>
        <Grid>
          <Text h5>
            Contact me!
          </Text>
          <Row>
            <Link href='https://www.linkedin.com/in/santvh/'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                objectFit='contain' width={30}
              />
            </Link>

            <Link href='https://github.com/santvh11'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                objectFit='contain' width={30}
              />
            </Link>

            <Link href='https://www.instagram.com/santvanegas17/'>
              <Image
                src='https://static.vecteezy.com/system/resources/previews/017/743/718/non_2x/instagram-icon-logo-free-png.png'
                objectFit='contain' width={30}
              />
            </Link>

          </Row>
        </Grid>
      </Grid>
    </Grid.Container>
  )
}
