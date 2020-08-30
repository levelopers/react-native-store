import { connect } from 'react-redux'
import { search } from '../../redux/action/productAction'
import SearchScreen from './SearchScreen'

const mapStoreToProps = state => ({
  loading: state.product.loading,
  search_result: state.product.search_result,
})
const mapDispatchToProps = dispatch => ({
  search: (t) => dispatch(search(t)),
})

export default connect(mapStoreToProps, mapDispatchToProps)(SearchScreen)