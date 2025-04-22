

import axiosInstance from "../../services/axiosInstance"; 

// Action Types
const SET_USER = "SET_USER";
const SET_ROLES = "SET_ROLES";
const SET_THEME = "SET_THEME";
const SET_LANGUAGE = "SET_LANGUAGE";
const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";


// Initial State
const initialState = {
  user: null,
  roles: [],
  theme: "light",
  language: "en",
  addressList: [],
creditCards: [],

};

// Reducer
const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS_LIST:
  return { ...state, addressList: action.payload };
case SET_CREDIT_CARDS:
  return { ...state, creditCards: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default clientReducer;

// Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });
export const setAddressList = (list) => ({ type: SET_ADDRESS_LIST, payload: list });
export const setCreditCards = (cards) => ({ type: SET_CREDIT_CARDS, payload: cards });


// THUNK ACTION - async roller çek
export const getRoles = () => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get("/roles"); 
      dispatch(setRoles(response.data)); 
    } catch (error) {
      console.error("Roller alınamadı:", error.message);
    }
  };
};
