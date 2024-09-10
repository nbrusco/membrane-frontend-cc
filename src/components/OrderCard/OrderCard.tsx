import dayjs from 'dayjs'

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Container,
  Tooltip,
  IconButton
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { useOrdersStore } from '@/store/orders/store.orders'

import { formatToUSD } from '@/utils/formatToUSD'

import { OrderCardProps } from './types'

const OrderCard: React.FC<OrderCardProps> = ({
  order,
  setOpenDeleteDialog
}) => {
  const selectOrder = useOrdersStore((state) => state.selectOrder)
  const setCurrentAction = useOrdersStore((state) => state.setCurrentAction)

  return (
    <Card key={order.orderId} className='relative m-2 p-2'>
      <CardHeader
        title={`Order ID: ${order.orderId}`}
        subheader={`Order Type: ${order.orderType.toUpperCase()}`}
        titleTypographyProps={{ variant: 'body1' }}
        subheaderTypographyProps={{
          variant: 'subtitle1',
          color: 'textSecondary',
          className: `${
            order.orderType === 'buy' ? 'text-green-500' : 'text-red-500'
          }`
        }}
      />
      <CardContent className='px-0 py-1'>
        <Container>
          <div className='flex flex-wrap gap-y-4'>
            <div className='w-1/2 flex flex-col'>
              <Typography variant='body1' color='textSecondary'>
                Cryptocurrency:
              </Typography>
              <Typography variant='body1'>
                {order.cryptocurrency.toUpperCase()}
              </Typography>
            </div>
            <div className='w-1/2 flex flex-col'>
              <Typography variant='body1' color='textSecondary'>
                Amount:
              </Typography>
              <Typography variant='body1'>{order.amount}</Typography>
            </div>
            <div className='w-1/2 flex flex-col'>
              <Typography variant='body1' color='textSecondary'>
                Order price in USD:
              </Typography>
              <Typography variant='body1'>
                {formatToUSD(order.price)}
              </Typography>
            </div>
            <div className='w-1/2 flex flex-col'>
              <Typography variant='body1' color='textSecondary'>
                Expiration Date:
              </Typography>
              <Typography variant='body1'>
                {dayjs(order.expirationDate).format('MMMM DD, YYYY')}
              </Typography>
            </div>
          </div>
          <div className='absolute top-4 right-3 flex justify-end'>
            <Tooltip title='Edit Order'>
              <IconButton
                onClick={() => {
                  selectOrder(order.orderId)
                  setCurrentAction('edit')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Delete Order'>
              <IconButton
                onClick={() => {
                  selectOrder(order.orderId)
                  setCurrentAction('delete')
                  setOpenDeleteDialog(true)
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Container>
      </CardContent>
    </Card>
  )
}

export default OrderCard
