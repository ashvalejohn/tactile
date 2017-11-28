const getCartItems = () => (
  $.ajax({
    type: 'GET',
    url: '/api/cart_items',
  })
);

export default getCartItems;
