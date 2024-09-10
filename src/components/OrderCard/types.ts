import { IOrder } from '@/interfaces/IOrder'

export interface OrderCardProps {
  order: IOrder
  setOpenDeleteDialog: (open: boolean) => void
}
