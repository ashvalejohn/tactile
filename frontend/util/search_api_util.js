const fetchSearchResults = search => (
  $.ajax({
    method: 'POST',
    url: '/api/items/search',
    data: { search },
  })
);

export default fetchSearchResults;
