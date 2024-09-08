import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IOrdersStore } from './types'

export const useOrdersStore = create<IOrdersStore>()(
  persist(
    (set, get) => {
      return {
        orders: [],

        selectOrders: () => get().orders,

        addOrder: (order) => {
          set((state) => ({
            orders: [...state.orders, order]
          }))
        },

        removeOrder: (orderId) => {
          set((state) => ({
            orders: state.orders.filter((order) => order.orderId !== orderId)
          }))
        },

        updateOrder: (orderId, newOrder) => {
          set((state) => ({
            orders: state.orders.map((order) =>
              order.orderId === orderId ? newOrder : order
            )
          }))
        }
      }
    },
    {
      name: 'orders-storage'
    }
  )
)
