import React from 'react';
import { shallow } from 'enzyme';
import { Orders, mapStateToProps, mapDispatchToProps } from './Orders';
import { setOrders } from '../../actions/index';
import { getOrders } from '../../apiCalls';

jest.mock('../../apiCalls.js')

describe('Orders', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Orders />)
        beforeEach(() => {
            getOrders.mockImplementation(() => Promise.resolve([{
                id: 1,
                name: 'Quinne',
                ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
              },
              {
                id: 2,
              name: 'Rose',
              ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']
            }]))
          })
    })

    it.skip('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should retrieve orders after mounting', () => {
        expect(getOrders).toHaveBeenCalled()
      })

})