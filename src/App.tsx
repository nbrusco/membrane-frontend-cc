import OrderForm from './components/OrderForm/OrderForm'
import OrderList from './components/OrderList/OrderList'

import { Typography, Container } from '@mui/material'

import { useOrdersStore } from './store/orders/store.orders'

function App() {
  const selectedOrder = useOrdersStore((state) => state.selectedOrder)

  return (
    <main>
      <Typography variant='h2' textAlign='center' m={3}>
        Cryptocurrency OTC - Rather Labs
      </Typography>
      <Container maxWidth='sm'>
        <Typography variant='h4' textAlign='center' m={3}>
          Order Form
        </Typography>
        <Typography variant='subtitle1' textAlign='center' my={3}>
          {selectedOrder?.orderId
            ? `Editing order ${selectedOrder.orderId}`
            : 'New order'}
        </Typography>
        <OrderForm />
      </Container>
      <Container maxWidth='sm'>
        <Typography variant='h4' textAlign='center' m={3}>
          Order List
        </Typography>
        <OrderList />
      </Container>
    </main>
  )
}

export default App
