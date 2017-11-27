import getItem from '../util/item_api_util';

export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const CLEAR_ITEM = 'CLEAR_ITEM';

const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item,
});

const clearItem = () => ({
  type: CLEAR_ITEM,
});

export const fetchItem = id => dispatch => (
  getItem(id).then(item => dispatch(receiveItem(item)))
);

export const clearItemInfo = () => dispatch => (
  dispatch(clearItem())
);
