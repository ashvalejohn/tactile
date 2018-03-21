import { fetchSearchResults, RECEIVE_SEARCH_TERM } from '../util/search_api_util';
import { RECEIVE_IMAGES } from './image_actions';

const receiveSearchedImages = results => ({
  type: RECEIVE_IMAGES,
  images: results,
});

const receiveSearchTerm = results => ({
  type: RECEIVE_SEARCH_TERM,
  term: results.term,
});

const searchImages = term => (dispatch) => {
  dispatch(receiveSearchTerm(term));
  fetchSearchResults(term)
    .then(images => dispatch(receiveSearchedImages(images)));
};

export default searchImages;
