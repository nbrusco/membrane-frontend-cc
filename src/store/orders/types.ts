import { IOrder } from '@/interfaces/IOrder'

export interface IOrdersStore {
  orders: IOrder[]
  selectedOrder?: IOrder | null
  selectOrder: (orderId: string) => void
  clearSelectedOrder: () => void
  addOrder: (order: IOrder) => void
  removeOrder: (orderId: string) => void
  updateOrder: (orderId: string, newOrder: IOrder) => void
}
