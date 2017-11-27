import getItem from '../util/item_api_util';

export const RECEIVE_ITEM = 'RECEIVE_ITEM';

const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item,
});

export const fetchItem = id => dispatch => (
  getItem(id).then(item => dispatch(receiveItem(item)))
);
