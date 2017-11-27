import { connect } from 'react-redux';
import { fetchItem } from '../../actions/item_actions';
import ItemDetail from './item_detail';

const mapStateToProps = state => ({
  item: state.entities.item,
});

const mapDispatchToProps = dispatch => ({
  fetchItem: id => dispatch(fetchItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
