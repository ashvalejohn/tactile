const getItem = id => (
  $.ajax({
    type: 'GET',
    url: `/api/items/${id}`,
  })
);

export default getItem;
