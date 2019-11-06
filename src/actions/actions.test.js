import { setOrders, addOrder } from './index'

describe('action creators', () => {
    it('setOrders should return the correct array', () => {
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

        const expected = ({
            type: 'SET_ORDERS',
            orders: mockOrders
        })

        const results = setOrders(mockOrders)

        expect(results).toEqual(expected)
    })

    it('addOrder should be able to add an order to the existing orders', () => {
        const mockState = [{
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

        const expected = ({
            type: 'ADD_ORDER',
            allOrders: mockState,
            order: mockNewOrder
        })

        const results = addOrder(mockState, mockNewOrder)

        expect(results).toEqual(expected)
    })
})