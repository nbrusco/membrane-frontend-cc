import { IOrder } from '@/interfaces/IOrder'

export interface IOrdersStore {
  orders: IOrder[]
  selectOrders: () => IOrder[]
  addOrder: (order: IOrder) => void
  removeOrder: (orderId: string) => void
  updateOrder: (orderId: string, newOrder: IOrder) => void
}
