import axiosInstance from "../../services/axiosInstance";

// Action Types
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
const SET_TOTAL = "SET_TOTAL";
const SET_FETCH_STATE = "SET_FETCH_STATE";
const SET_LIMIT = "SET_LIMIT";
const SET_OFFSET = "SET_OFFSET";
const SET_FILTER = "SET_FILTER";

// Initial State
const initialState = {
  categories: [],
  productList: [],
  total: 0,
  fetchState: "NOT_FETCHED",
  limit: 25,
  offset: 0,
  filter: "",
  sort: "",
};

// Reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_PRODUCT_LIST:
      console.log("SET_PRODUCT_LIST reducer'a gelen ürünler:", action.payload);
      return { ...state, productList: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
      case "SET_SORT":
  return { ...state, sort: action.payload };

    default:
      return state;
  }
};

export default productReducer;

// Action Creators
export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (products) => ({ type: SET_PRODUCT_LIST, payload: products });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (state) => ({ type: SET_FETCH_STATE, payload: state });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setSort = (sort) => ({ type: "SET_SORT", payload: sort });


// Thunk: Kategorileri çek
export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("/categories");
    dispatch(setCategories(data));
  } catch (error) {
    console.error("Could not fetch categories:", error);
  }
};

// Thunk: Ürünleri çek
export const fetchProducts = ({ categoryId, sort, filter, limit, offset } = {}) => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  
  try {
    const params = new URLSearchParams();
    if (categoryId) params.append("category", categoryId);
    if (sort) params.append("sort", sort);
    if (filter) params.append("filter", filter);
    if (limit) params.append("limit", limit);
    if (offset) params.append("offset", offset);

    const queryString = params.toString();
    const endpoint = queryString ? `/products?${queryString}` : "/products";

    const { data } = await axiosInstance.get(endpoint);
    dispatch(setProductList(data.products));
    dispatch(setTotal(data.total));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
    console.error("Could not fetch products:", error);
  }
};








