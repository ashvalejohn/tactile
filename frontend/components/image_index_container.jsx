import { connect } from 'react-redux';
import { photoRoll } from '../actions/image_actions';
import ImageIndex from './image_index';

const mapStateToProps = (state) => {
  console.log(state);
  return { images: state.photoRoll };
};

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(photoRoll),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndex);
