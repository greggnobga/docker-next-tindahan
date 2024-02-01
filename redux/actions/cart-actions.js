import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_FAILURE } from '../constants/cart-constants';

/** Product list action.*/
export const addCart = (slug, quantity) => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Get product details. */
        const details = await fetch(`/api/product/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        /** Wait for the response. */
        const data = await details.json();

        /** Dispatch success. */
        dispatch({
            type: CART_ADD_ITEM,
            payload: { product: data._id, name: data.name, slug: data.slug, image: data.image, price: data.price, discount: data.discount, stockcount: data.stockcount, quantity },
        });

        /** Store in local storage. */
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: CART_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};