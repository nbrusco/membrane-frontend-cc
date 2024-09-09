import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IOrdersStore } from './types'

export const useOrdersStore = create<IOrdersStore>()(
  persist(
    (set, get) => {
      return {
        orders: [],
        selectedOrder: null,

        selectOrder: (orderId) => {
          const { orders } = get()
          set({
            selectedOrder: orders.find((order) => order.orderId === orderId)
          })
        },

        clearSelectedOrder: () => {
          set({ selectedOrder: undefined });
        },

        addOrder: (order) => {
          const { orders } = get()
          set({ orders: [...orders, order] })
        },

        removeOrder: (orderId) => {
          const { orders } = get()
          set({
            orders: orders.filter((order) => order.orderId !== orderId)
          })
        },

        updateOrder: (orderId, newOrder) => {
          const { orders } = get()
          set({
            orders: orders.map((order) =>
              order.orderId === orderId ? newOrder : order
            )
          })
        }
      }
    },
    {
      name: 'orders-storage'
    }
  )
)
