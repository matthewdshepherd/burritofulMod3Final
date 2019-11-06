export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const addOrderPost = newOrder => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  return fetch('http://localhost:3001/api/v1/orders', options)
    .then(response => {
      if (!response.ok) {
        throw Error('Error posting the new idea');
      }
      return response.json()
    })
    .catch(error => {
      throw Error(error.message)
    })
};
