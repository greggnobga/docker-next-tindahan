/** Constant. */
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
} from '../constants/user-constants';

import { TOAST_MESSAGE } from '../constants/toast-constants';

import { CART_RESET } from '../constants/cart-constants';

export const loginUser = (params) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: USER_LOGIN_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        /** Wait for the response. */
        const data = await response.json();

        if (data && data.status <= 300) {
            /** Dispatch success. */
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { ...data },
            });

            /** Dispatch toast. */
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });

            /** Save access token to local storage. */
            localStorage.setItem('userLogin', JSON.stringify(data));
        } else {
            /** Dispatch toast. */
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });
        }
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const logoutUser = (params) => async (dispatch) => {
    /** Make api request. */
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });

    /** Wait for the response. */
    const data = await response.json();

    /** Remove state in local storage. */
    localStorage.removeItem('userLogin');
    localStorage.removeItem('productFlash');
    localStorage.removeItem('productJust');
    localStorage.removeItem('productHot');
    localStorage.removeItem('productOur');
    localStorage.removeItem('productRecommended');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');

    /** Dispatch request. */
    dispatch({ type: USER_LOGIN_REQUEST });
    dispatch({ type: CART_RESET });

    /** Dispatch message reset. */
    dispatch({ type: TOAST_MESSAGE, payload: { message: data.message, status: data.status } });
};

export const signupUser = (params) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: USER_SIGNUP_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        /** Wait for the response. */
        const data = await response.json();

        if (data && data.status <= 300) {
            /** Dispatch success. */
            dispatch({
                type: USER_SIGNUP_SUCCESS,
                payload: { ...data },
            });

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { ...data },
            });

            /** Dispatch toast. */
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });

            /** Save access token to local storage. */
            localStorage.setItem('userLogin', JSON.stringify(data));
        } else {
            /** Dispatch toast. */
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });
        }
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: USER_SIGNUP_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const updateUser = (params) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: USER_UPDATE_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/users/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        /** Wait for the response. */
        const data = await response.json();

        if (data && data.status <= 300) {
            /** Dispatch success. */
            dispatch({
                type: USER_UPDATE_SUCCESS,
                payload: { ...data },
            });

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { ...data },
            });

            /** Dispatch toast. */
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });

            /** Save access token to local storage. */
            localStorage.setItem('userLogin', JSON.stringify(data));
        } else {
            /** Dispatch toast. */
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });
        }
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: USER_UPDATE_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
