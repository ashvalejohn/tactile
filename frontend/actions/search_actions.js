import fetchSearchResults from '../util/search_api_util';
import { RECEIVE_IMAGES } from './image_actions';

const receiveSearch = results => ({
  type: RECEIVE_IMAGES,
  images: results,
});

const searchImages = term => dispatch => (
  fetchSearchResults(term).then(images => dispatch(receiveSearch(images)))
);

export default searchImages;
