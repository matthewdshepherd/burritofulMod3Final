export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const addOrder = (allOrders, order) => ({
  type: 'ADD_ORDER',
  allOrders,
  order
});
