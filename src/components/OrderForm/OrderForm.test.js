import React from 'react'
import { shallow } from 'enzyme'
import { OrderForm, mapStateToProps, mapDispatchToProps } from './OrderForm'
import { addOrder } from '../../actions/index'

jest.mock('../../apiCalls.js')

describe('OrderForm', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<OrderForm />)
    })

    it.skip('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('Should be able to update state when handleNameChange() is called', () => {
        const mockEvent = {
            target: {
              name: 'name',
              value: 'Wonder Woman'
            }
          }
          wrapper.instance().handleNameChange(mockEvent);

          expect(wrapper.state('name')).toEqual(mockEvent.target.value);

    })

    // it('Should be to run handleSubmit(e) when button is clicked', () => {
    //     wrapper.instance().handleSubmit = jest.fn()

    //     wrapper.find('.submit--order__button').simulate('click')

    //     expect(wrapper.instance().handleStart).toHaveBeenCalled()

    //     // const mockEvent = {
    //     //   target: {
    //     //     name: 'name',
    //     //     value: 'Wonder Woman'
    //     //   }
    //     // }

    //   })
    

 
})

describe('mapDispatchToProps', () => { 
    it('calls dispatch with addOrder', () => {
        const mockDispatch = jest.fn()
        const mockaction = jest.fn()
        const wrapper = shallow(<OrderForm setPlayer={mockaction} />)
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
        const actionToDispatch = addOrder( 'ADD_ORDER', mockReduxState, mockNewOrder)
        
        const mappedProps = mapDispatchToProps(mockDispatch)

        mappedProps.addOrder('ADD_ORDER', mockReduxState, mockNewOrder)

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })


})