const getImageMaps = ({ imageId }) => (
  $.ajax({
    method: 'GET',
    url: `/api/images/${imageId}/image_maps`,
  })
);

export default getImageMaps;
