import { connect } from 'react-redux';
import { fetchImages } from '../../actions/image_actions';
import ImageIndex from './image_index';

const mapStateToProps = state => ({
  images: state.entities.images,
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(fetchImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndex);
