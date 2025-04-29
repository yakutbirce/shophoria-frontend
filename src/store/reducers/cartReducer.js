// Action Types
const SET_CART = "SET_CART";
const SET_PAYMENT = "SET_PAYMENT";
const SET_ADDRESS = "SET_ADDRESS";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";


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
