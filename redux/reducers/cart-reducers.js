import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cart-constants';

/** Add cart item. */
export function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            /** Asign payload to variable. */
            const item = action.payload;

            /** Find product in the state. */
            const exit = state.cartItems.find((x) => x._id === item._id);

            /** Conditional block. */
            if (exist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => (x._id === item._id ? item : x)),
                };
            } else {
                return { ...state, cartItems: [...state, item] };
            }

        default:
            return state;
    }
}
