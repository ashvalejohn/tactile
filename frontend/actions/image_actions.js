import * as APIUtil from '../util/image_api_util';

export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image,
});

export const showPhotoRoll = image => dispatch => (
  APIUtil.receiveImage(image).then(photoRoll => dispatch(receiveImage(photoRoll)))
);
