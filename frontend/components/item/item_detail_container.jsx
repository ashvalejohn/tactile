import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchItem, clearItemInfo } from '../../actions/item_actions';
import { addItemToCart, clearErrors } from '../../actions/cart_item_actions';
import ItemDetail from './item_detail';

const mapStateToProps = state => ({
  item: state.entities.item,
  errors: state.errors.cartErrors,
});

const mapDispatchToProps = dispatch => ({
  fetchItem: id => dispatch(fetchItem(id)),
  clearItem: () => dispatch(clearItemInfo()),
  addItemToCart: item => dispatch(addItemToCart(item)),
  clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetail));
