import getImageMaps from '../util/image_map_api_util';

export const RECEIVE_IMAGE_MAPS = 'RECEIVE_IMAGE_MAPS';

const receiveImageMaps = imageMaps => ({
  type: RECEIVE_IMAGE_MAPS,
  imageMaps,
});

export const fetchImageMaps = imageId => dispatch => (
  getImageMaps(imageId).then(imageMaps => dispatch(receiveImageMaps(imageMaps)))
);
