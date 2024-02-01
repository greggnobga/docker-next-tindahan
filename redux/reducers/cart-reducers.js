import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_FAILURE } from '../constants/cart-constants';

/** Add cart item. */
export function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            /** Asign payload to variable. */
            const item = action.payload;

            /** Find product in the state. */
            const exist = state.cartItems.find((x) => x.product === item.product);

            /** Conditional block. */
            if (exist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => (x.product === item.product ? item : x)),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }
        case CART_FAILURE:
            return { error: action.payload };

        default:
            return state;
    }
}
