export const receiveImage = image => (
  $.ajax({
    method: 'GET',
    url: 'api/images',
    data: { image },
  })
);
