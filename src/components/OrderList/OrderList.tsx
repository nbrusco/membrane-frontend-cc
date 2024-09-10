import { useState } from 'react'

import { toast } from 'react-toastify'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'

import { useOrdersStore } from '@/store/orders/store.orders'

import OrderCard from '../OrderCard/OrderCard'
import DeleteDialog from '../DeleteDialog/DeleteDialog'

const OrderList = () => {
  const orders = useOrdersStore((state) => state.orders)
  const selectedOrder = useOrdersStore((state) => state.selectedOrder)
  const clearSelectedOrder = useOrdersStore((state) => state.clearSelectedOrder)
  const removeOrder = useOrdersStore((state) => state.removeOrder)
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
              <OrderCard
                order={order}
                setOpenDeleteDialog={setOpenDeleteDialog}
              />
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
