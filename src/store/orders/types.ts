import { IOrder } from '@/interfaces/IOrder'

export interface IOrdersStore {
  orders: IOrder[]
  selectedOrder?: IOrder | null
  currentAction?: string | null
  selectOrder: (orderId: string) => void
  clearSelectedOrder: () => void
  setCurrentAction: (action: string) => void
  clearCurrentAction: () => void
  addOrder: (order: IOrder) => void
  removeOrder: (orderId: string) => void
  updateOrder: (orderId: string, newOrder: IOrder) => void
}
