import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_FAILURE, CART_RESET, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from '../constants/cart-constants';

/** Add cart item. */
export function cartReducer(state = { cartItems: [], shippingAddress: {}, paymentMethod: {} }, action) {
    switch (action.type) {
        /** Add cart item. */
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

        /** Remove cart item. */
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload.product),
            };

        /** Save shipping address. */
        case CART_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };

        /** Save payment address. */
        case CART_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };

        /** Cart failure. */
        case CART_FAILURE:
            return { error: action.payload };

        /** Cart reset. */
        case CART_RESET: {
            return { ...state, cartItems: [], itemsPrice: null, shippingPrice: null, taxPrice: null, totalPrice: null };
        }

        /** Default return. */
        default:
            return state;
    }
}
