import { Layout } from '@/components/Layout'
import { Collapse, Container, Grid, Text } from '@nextui-org/react'

export default function Help () {
  return (
    <Layout>
      <Grid.Container gap={2}>
        <Grid>
          <Container display='flex' justify='center'>
            <Text h2>FAQ</Text>
          </Container>
          <Collapse.Group splitted>
            <Collapse title='What is your return policy?'>
              <Text>
                Our return policy is 30 days from the date of purchase. If you are not satisfied with your purchase, you can return it for a full refund. Please note that the item must be in its original condition and packaging. If you have any questions about our return policy, please contact our customer support team.
              </Text>
            </Collapse>
            <Collapse title='How long does it take for my order to arrive?'>
              <Text>
                Orders typically take 3-5 business days to arrive. However, delivery times may vary depending on your location and shipping method. We offer a variety of shipping options to meet your needs, including standard shipping, expedited shipping, and overnight shipping. If you have any questions about your order status or delivery time, please contact our customer support team.
              </Text>
            </Collapse>
            <Collapse title='What payment methods do you accept?'>
              <Text>
                We accept Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay. If you have any questions about payment methods or need assistance with placing an order, please contact our customer support team.
              </Text>
            </Collapse>
            <Collapse title='How do I contact customer support?'>
              <Text>
                You can contact customer support by emailing support@example.com or by calling 1-800-555-5555. Our customer support team is available 24/7 to assist you with any questions or concerns you may have. If you prefer to chat with us online, you can also visit our website and click on the chat icon in the bottom right corner.
              </Text>
            </Collapse>
          </Collapse.Group>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}
