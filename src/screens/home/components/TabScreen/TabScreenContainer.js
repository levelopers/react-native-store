import { connect } from 'react-redux'
import { getNewProductsByDepartment } from '../../../../redux/action/productAction'
import { newProductsByDepartment } from '../../../../redux/reducer/productReducer'
import TabScreen from './TabScreen'

const mapStoreToProps = state => ({
  products: (d) => newProductsByDepartment(state.product, d),
  loading: state.product.loading
})
const mapDispatchToProps = dispatch => ({
  getNewProductsByDepartment: (d, c) => dispatch(getNewProductsByDepartment(d)),
})

export default connect(mapStoreToProps, mapDispatchToProps)(TabScreen)