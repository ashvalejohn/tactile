export const getImages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/images',
  })
);

