import { useState } from 'react'
import dayjs from 'dayjs'

import { toast } from 'react-toastify'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Grid from '@mui/material/Grid2'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { useOrdersStore } from '@/store/orders/store.orders'

import { formatToUSD } from '@/utils/formatToUSD'

import DeleteDialog from '../DeleteDialog/DeleteDialog'

const OrderList = () => {
  const orders = useOrdersStore((state) => state.orders)
  const selectOrder = useOrdersStore((state) => state.selectOrder)
  const selectedOrder = useOrdersStore((state) => state.selectedOrder)
  const clearSelectedOrder = useOrdersStore((state) => state.clearSelectedOrder)
  const removeOrder = useOrdersStore((state) => state.removeOrder)

  const setCurrentAction = useOrdersStore((state) => state.setCurrentAction)
  const clearCurrentAction = useOrdersStore((state) => state.clearCurrentAction)

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  return (
    <>
      {orders.length === 0 ? (
        <Card className='m-2 p-4 rounded-lg max-w-sm mx-auto'>
          <Typography variant='h5' className='text-center'>
            You have no orders yet
          </Typography>
        </Card>
      ) : (
        <Grid container spacing={2}>
          {orders.map((order) => (
            <Grid size={6}>
              <Card key={order.orderId} className='relative m-2 p-2'>
                <CardHeader
                  title={`Order ID: ${order.orderId}`}
                  subheader={`Order Type: ${order.orderType.toUpperCase()}`}
                  titleTypographyProps={{ variant: 'body1' }}
                  subheaderTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                    className: `${
                      order.orderType === 'buy'
                        ? 'text-green-500'
                        : 'text-red-500'
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
            </Grid>
          ))}
          <DeleteDialog
            open={openDeleteDialog}
            onClose={() => {
              setOpenDeleteDialog(false)
              clearSelectedOrder()
              clearCurrentAction()
            }}
            onConfirm={() => {
              if (selectedOrder) {
                setOpenDeleteDialog(false)
                removeOrder(selectedOrder.orderId)
                toast.success(`Order ${selectedOrder.orderId} deleted`)
                clearCurrentAction()
              }
            }}
          />
        </Grid>
      )}
    </>
  )
}

export default OrderList
