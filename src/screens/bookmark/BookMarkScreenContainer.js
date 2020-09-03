import { connect } from 'react-redux'
import { getProductsByDepartmentAndCategory } from '../../redux/action/productAction'
import { productsByDepartment } from '../../redux/reducer/productReducer'
import BookMarkScreen from './BookMarkScreen'

const mapStoreToProps = state => ({
  loading: state.product.loading,
  productsByDepartment: (d) => productsByDepartment(state.product, d),
})
const mapDispatchToProps = dispatch => ({
  getProductsByDepartmentAndCategory: (d, c) => dispatch(getProductsByDepartmentAndCategory(d, c)),
})

export default connect(mapStoreToProps, mapDispatchToProps)(BookMarkScreen)