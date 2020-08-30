import {
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCTS_BY_CATEGORY_BEGIN,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS,
  GET_PRODUCTS_BY_CATEGORY_FAIL,
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  APPLY_FILTERS_BEGIN,
  APPLY_FILTERS_SUCCESS,
  APPLY_FILTERS_FAIL,
  GET_PRODUCTS_BY_DEPARTMENT_AND_CATEGORY_BEGIN,
  GET_PRODUCTS_BY_DEPARTMENT_AND_CATEGORY_SUCCESS,
  GET_PRODUCTS_BY_DEPARTMENT_AND_CATEGORY_FAIL,
  GET_NEW_PRODUCTS_BY_DEPARTMENT_BEGIN,
  GET_NEW_PRODUCTS_BY_DEPARTMENT_SUCCESS,
  GET_NEW_PRODUCTS_BY_DEPARTMENT_FAIL,
} from '../action/productAction'

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  search_result: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data.products
      }
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case GET_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.data.product
      }
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case GET_PRODUCTS_BY_CATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data.products
      }
    case GET_PRODUCTS_BY_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case GET_PRODUCTS_BY_DEPARTMENT_AND_CATEGORY_BEGIN:
      return beginState(state)
    case GET_PRODUCTS_BY_DEPARTMENT_AND_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        products: mergeProducts(state.products, action.payload.data.products)
      }
    case GET_PRODUCTS_BY_DEPARTMENT_AND_CATEGORY_FAIL:
      return errorState(state, action)
    case GET_NEW_PRODUCTS_BY_DEPARTMENT_BEGIN:
      return beginState(state)
    case GET_NEW_PRODUCTS_BY_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: mergeProducts(state.products, action.payload.data.products)
      }
    case GET_NEW_PRODUCTS_BY_DEPARTMENT_FAIL:
      return errorState(state, action)
    case SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        search_result: action.payload.data.products
      }
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case APPLY_FILTERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case APPLY_FILTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data.products
      }
    case APPLY_FILTERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}

function mergeProducts(products, newProducts) {
  return [...newProducts, ...products].reduce((result, product) => {
    if (result.findIndex(p => p._id === product._id) < 0) {
      result.push(product);
    }
    return result;
  }, [])
}

function errorState(state, action) {
  return {
    ...state,
    loading: false,
    error: action.payload.error.response.data
  }
}
function beginState(state) {
  return {
    ...state,
    loading: true,
    error: null
  }
}
export function productsByDepartmentAndCategory(state, department, category) {
  return state.products.filter(p => p.department === department && p.category === category)
}
export function productsByDepartment(state, department) {
  return state.products.filter(p => p.department === department)
}
export function newProductsByDepartment(state, department) {
  return state.products.filter(p => p.department === department)
    .sort(function (p1, p2) { return p2.date - p1.date; })
}