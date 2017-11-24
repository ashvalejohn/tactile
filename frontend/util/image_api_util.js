const getImages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/images',
  })
);

export default getImages;
