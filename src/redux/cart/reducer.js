import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './actions';
import { addItemToCart } from './utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};

export default reducer;