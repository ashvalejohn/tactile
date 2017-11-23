import { connect } from 'react-redux';
import PhotoRoll from './photo_roll';

const mapStateToProps = (state) => {
  console.log(state);
  return { images: state.photoRoll };
};

export default connect(mapStateToProps, null)(PhotoRoll);
