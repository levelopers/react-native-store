import { connect } from 'react-redux'
import { getProductsByDepartmentAndCategory } from '../../../redux/action/productAction'
import { productsByDepartment, productsByDepartmentAndCategory } from '../../../redux/reducer/productReducer'
import { ListScreen } from './ListScreen'

const mapStoreToProps = state => ({
  loading: state.product.loading,
  productsByDepartmentAndCategory: (d, c) => productsByDepartmentAndCategory(state.product, d, c),
  productsByDepartment: (d) => productsByDepartment(state.product, d),
})
const mapDispatchToProps = dispatch => ({
  getProductsByDepartmentAndCategory: (d, c) => dispatch(getProductsByDepartmentAndCategory(d, c)),
})

export default connect(mapStoreToProps, mapDispatchToProps)(ListScreen)