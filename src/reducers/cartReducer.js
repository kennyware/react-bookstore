import { ADD_TO_CART, GET_CART_ITEMS } from '../types';

const initialState = {
    cart: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case ADD_TO_CART:
    const newCart = state.cart;
    newCart.push(action.item);
    return {
        ...state,
        cart: newCart
    }

  case GET_CART_ITEMS:
    return {
      ...state,
      cart: action.items
    }

  default:
    return state
  }
}
