export const getCartItems = () => (
  $.ajax({
    type: 'GET',
    url: '/api/cart_items',
  })
);

export const addCartItem = item => (
  $.ajax({
    type: 'POST',
    url: '/api/cart_items',
    data: { item },
  })
);
