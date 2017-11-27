import { connect } from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = state => ({
  item: state.entitied.item,
});

export default connect(mapStateToProps, null)(ItemDetail);
