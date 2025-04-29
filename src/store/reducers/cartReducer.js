// Action Types
const SET_CART = "SET_CART";
const SET_PAYMENT = "SET_PAYMENT";
const SET_ADDRESS = "SET_ADDRESS";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_CART_COUNT = "UPDATE_CART_COUNT";
const REMOVE_PRODUCT_COMPLETELY = "REMOVE_PRODUCT_COMPLETELY"; 
const TOGGLE_PRODUCT_SELECTION = "TOGGLE_PRODUCT_SELECTION";


// Initial State
const initialState = {
  cart: [],
  payment: {},
  address: {},
};

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case REMOVE_FROM_CART: {
      const updatedCart = state.cart.reduce((acc, item) => {
        if (item.product.id === action.payload.id) {
          if (item.count > 1) {
            acc.push({ ...item, count: item.count - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      return { ...state, cart: updatedCart };
    }
    case UPDATE_CART_COUNT: {
      const { productId, delta } = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === productId) {
          const newCount = item.count + delta;
          if (newCount >= 1) {
            return { ...item, count: newCount };
          }
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }
    case REMOVE_PRODUCT_COMPLETELY: {
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload.id
      );
      return { ...state, cart: updatedCart };
    }
    case TOGGLE_PRODUCT_SELECTION: {
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === action.payload) {
          return {
            ...item,
            selected: item.selected === undefined ? false : !item.selected,
          };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }
    
    default:
      return state;
  }
};

export default cartReducer;

// Action Creators
export const setCart = (cart) => ({ type: SET_CART, payload: cart });
export const setPayment = (payment) => ({ type: SET_PAYMENT, payload: payment });
export const setAddress = (address) => ({ type: SET_ADDRESS, payload: address });
export const removeFromCart = (product) => ({ type: REMOVE_FROM_CART, payload: product });
export const updateCartCount = (productId, delta) => ({
  type: UPDATE_CART_COUNT,
  payload: { productId, delta },
});
export const removeProductCompletely = (product) => ({
  type: REMOVE_PRODUCT_COMPLETELY,
  payload: product,
});
export const toggleProductSelection = (productId) => ({
  type: TOGGLE_PRODUCT_SELECTION,
  payload: productId,
});

