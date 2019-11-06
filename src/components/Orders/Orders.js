import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders } from '../../actions';
import { getOrders } from '../../apiCalls';

export class Orders extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }


  orders = () => {
    return this.props.orders.map(order => {
      return (
        <div key={order.id} className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map((ingredient, i) => {
              return <li key={i} >{ingredient}</li>
            })}
          </ul>
        </div>
      )
    });
  }

    render() {
      return (
        <section>
          { this.props.orders.length ? this.orders() : <p>No orders yet!</p> }
        </section>
      )
    }
}


export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);