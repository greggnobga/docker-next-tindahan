import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_FAILURE, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from '../constants/cart-constants';

import { TOAST_MESSAGE } from '../constants/toast-constants';

/** Add cart action.*/
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

        /** Dispatch action. */
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

/** Remove cart action.*/
export const removeCart = (product) => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch action. */
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: { product },
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

/** Save shipping address action.*/
export const saveShippingAddress = (data) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch action. */
        dispatch({
            type: CART_SAVE_SHIPPING_ADDRESS,
            payload: data,
        });

        /** Store in local storage. */
        localStorage.setItem('shippingAddress', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: CART_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** Save payment method action.*/
export const savePaymentMethod = (data) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch action. */
        dispatch({
            type: CART_SAVE_PAYMENT_METHOD,
            payload: data,
        });

        /** Store in local storage. */
        localStorage.setItem('paymentMethod', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: CART_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** Add cart action.*/
export const placeOrder = (params) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Get product details. */
        const details = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        /** Wait for the response. */
        const data = await details.json();

        /** Dispatch toast. */
        dispatch({
            type: TOAST_MESSAGE,
            payload: { message: data.message, status: data.status },
        });
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: CART_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
