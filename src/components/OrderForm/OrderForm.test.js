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
          wrapper.instance().this.setState({id: 1})
          wrapper.instance().handleNameChange(mockEvent);

          expect(wrapper.state('name')).toEqual(mockEvent.target.value);

    })

    // it('Should be able to update state when handleIngredientChange() is called', () => {
    //     const mockEvent = {
    //         target: {
    //           name: 'name',
    //           value: 'Wonder Woman'
    //         }
    //       }

    //       wrapper.instance().handleNameChange(mockEvent);

    //       expect(wrapper.state('name')).toEqual(mockEvent.target.value);

    // })
})