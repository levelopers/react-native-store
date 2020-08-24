import { connect } from 'react-redux'
import { getDepartments } from '../../../redux/action/departmentAction'
import { departmentByName } from '../../../redux/reducer/departmentReducer'
import CollectionTabScreen from './CollectionTabScreen'

const mapStoreToProps = state => ({
  loading: state.department.loading,
  departmentByName: (name) => departmentByName(state.department, name),
})
const mapDispatchToProps = dispatch => ({
  getDepartments: () => dispatch(getDepartments()),
})

export default connect(mapStoreToProps, mapDispatchToProps)(CollectionTabScreen)