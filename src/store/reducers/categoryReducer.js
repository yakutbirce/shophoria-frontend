
import axiosInstance from "../../services/axiosInstance";

// Action Types
const SET_CATEGORIES = "SET_CATEGORIES";

// Initial State
const initialState = {
  categories: [],
};

// Reducer
export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

// Action Creator
export const setCategories = (cats) => ({
  type: SET_CATEGORIES,
  payload: cats,
});

// Thunk Action Creator
export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("/categories");
    dispatch(setCategories(data));
  } catch (err) {
    console.error("Error fetching categories:", err);
  }
};
