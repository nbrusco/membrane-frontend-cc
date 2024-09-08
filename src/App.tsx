import OrderForm from './components/OrderForm/OrderForm'

import { Typography, Container } from '@mui/material'

function App() {
  return (
    <main>
      <Typography variant='h2' textAlign='center' m={3}>
        Cryptocurrency OTC Exchange - Rather Labs
      </Typography>
      <Container maxWidth='xs'>
        <Typography variant='h4' textAlign='center' m={3}>
          Order Form
        </Typography>
        <OrderForm />
      </Container>
      <Container maxWidth='sm'>
        <Typography variant='h4' textAlign='center' m={3}>
          Order List
        </Typography>
      </Container>
    </main>
  )
}

export default App
