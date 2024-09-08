export interface IOrder {
  orderId: string
  expirationDate: Date
  price: number
  amount: number
  cryptocurrency: string
  orderType: string
}
