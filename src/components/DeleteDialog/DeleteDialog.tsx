import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { useOrdersStore } from '@/store/orders/store.orders'

import { DeleteDialogProps } from './types'

const DeleteDialog = ({ open, onClose, onConfirm }: DeleteDialogProps) => {
  const selectedOrder = useOrdersStore((state) => state.selectedOrder)

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Order deletion'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            This action will delete the order with ID:
          </DialogContentText>
          <DialogContentText>
            {selectedOrder && selectedOrder.orderId}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='error'>
            Cancel
          </Button>
          <Button onClick={onConfirm} autoFocus color='success'>
            Confirm deletion
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteDialog
