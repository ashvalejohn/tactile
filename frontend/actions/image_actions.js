import getImages from '../util/image_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images,
});

export const fetchImages = () => dispatch => (
  getImages().then(images => dispatch(receiveImages(images)))
);
