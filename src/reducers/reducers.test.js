import { orders } from './orders';

describe('order reducer', () => {
    it('should return the initial state', () => {
      const expected = []
      const result = orders(undefined, [])
      expect(result).toEqual(expected)
    })

    it('should set the Redux state with the array recived from fetch', () => {
        const mockOrders = [{
            id: 1,
            name: 'Quinne',
            ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
          },
          {
            id: 2,
          name: 'Rose',
          ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
        }]

        const mockAction = {
            type: 'SET_ORDERS',
            orders: mockOrders
        }

        const expected = mockOrders

        const result = orders([], mockAction)

        expect(result).toEqual(expected)
    })

    it('should update the Redux state with the new order', () => {
        const mockReduxState = [{
            id: 1,
            name: 'Quinne',
            ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
          },
          {
            id: 2,
          name: 'Rose',
          ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
        }]

        const mockNewOrder =  {
            id: 3,
          name: 'Travis',
          ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
        }

        const mockAction = {
            type: 'ADD_ORDER',
            allOrders: mockReduxState,
            order: mockNewOrder
        }

        const expected = [...mockReduxState, mockNewOrder]

        const result = orders([], mockAction)

        expect(result).toEqual(expected)
    })
})
    