export const RECEIVE_SEARCH_TERM = 'RECEIVE_SEARCH_TERM';

export const fetchSearchResults = search => (
  $.ajax({
    method: 'POST',
    url: '/api/items/search',
    data: { search },
  })
);