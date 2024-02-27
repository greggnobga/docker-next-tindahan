import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAILURE,
    ORDER_CREATE_RESET,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAILURE,
    ORDER_LIST_REQUEST,
    ORDER_REFERENCE_SUCCESS,
    ORDER_REFERENCE_FAILURE,
    ORDER_REFERENCE_REQUEST,
    ORDER_REFERENCE_RESET,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAILURE,
} from '../constants/order-constants';

import { TOAST_MESSAGE } from '../constants/toast-constants';

import { CART_RESET } from '../constants/cart-constants';

/** Create order action. */
export const createOrder = (params) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: ORDER_CREATE_REQUEST });
        /** Make api request. */
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        /** Wait for the response. */
        const data = await response.json();
        if (data) {
            /** Dispatch success. */
            dispatch({
                type: ORDER_CREATE_SUCCESS,
                payload: data.order,
            });
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });
            dispatch({
                type: CART_RESET,
            });
            /** Remove state in local storage. */
            localStorage.removeItem('cartItems');
        }
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: ORDER_CREATE_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** Reset order action. */
export const resetOrder = () => async (dispatch) => {
    /** Dispatch request. */
    dispatch({ type: ORDER_CREATE_RESET });
};

/** List order action. */
export const detailsOrder = (order) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: ORDER_DETAILS_REQUEST });

        /** Make api request. */
        const response = await fetch(`/api/orders/${order}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        /** Wait for the response. */
        const data = await response.json();

        if (data) {
            /** Dispatch success. */
            dispatch({
                type: ORDER_DETAILS_SUCCESS,
                payload: { ...data },
            });

            dispatch({
                type: ORDER_REFERENCE_RESET,
            });
        }
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: ORDER_DETAILS_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** Update order to paid action. */
export const referenceOrder = (params) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: ORDER_REFERENCE_REQUEST });
        /** Make api request. */
        const response = await fetch(`/api/orders/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        /** Wait for the response. */
        const data = await response.json();
        if (data) {
            /** Dispatch success. */
            dispatch({
                type: ORDER_REFERENCE_SUCCESS,
                payload: { ...data },
            });
        }
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: ORDER_REFERENCE_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** List order action. */
export const listOrder = (pageNumber) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: ORDER_LIST_REQUEST });

        /** Make api request. */
        const response = await fetch(`/api/orders?page=${pageNumber || 1}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        /** Wait for the response. */
        const data = await response.json();

        if (data) {
            /** Dispatch success. */
            dispatch({
                type: ORDER_LIST_SUCCESS,
                payload: { ...data },
            });
        }
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: ORDER_LIST_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
