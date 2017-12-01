import { connect } from 'react-redux';

import searchImages from '../../actions/search_actions';
import Search from './search';

const mapDispatchToProps = dispatch => ({
  search: term => dispatch(searchImages(term)),
});

export default connect(null, mapDispatchToProps)(Search);
