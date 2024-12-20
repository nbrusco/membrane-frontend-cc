import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IOrdersStore } from './types'

export const useOrdersStore = create<IOrdersStore>()(
  persist(
    (set, get) => {
      return {
        orders: [],
        selectedOrder: null,
        currentAction: null,

        selectOrder: (orderId) => {
          const { orders } = get()
          set({
            selectedOrder: orders.find((order) => order.orderId === orderId)
          })
        },

        clearSelectedOrder: () => {
          set({ selectedOrder: null })
        },

        setCurrentAction: (action) => {
          set({ currentAction: action })
        },

        clearCurrentAction: () => {
          set({ currentAction: null })
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
      partialize: (state) => ({
        orders: state.orders
      }),
      name: 'orders'
    }
  )
)
