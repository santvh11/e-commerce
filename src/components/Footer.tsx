import { Container, Text, useTheme } from '@nextui-org/react'

export const Footer = () => {
  const { theme } = useTheme()
  return (
    <Container fluid css={{ h: '10vw', bc: theme?.colors.accents1.value, mt: 50 }}>
      <Text>Help</Text>
    </Container>
  )
}
