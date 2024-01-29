/** Constant. */
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from '../constants/user-constants';

import { TOAST_MESSAGE } from '../constants/toast-constants';

export const loginUser = (params) => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: USER_LOGIN_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/login', {
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

export const logoutUser = (params) => async (dispatch, getState) => {
    /** Make api request. */
    const response = await fetch('/api/logout', {
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

    /** Dispatch request. */
    dispatch({ type: USER_LOGIN_REQUEST });

    /** Dispatch message reset. */
    dispatch({ type: TOAST_MESSAGE, payload: { message: data.message, status: data.status } });
};

export const signupUser = (params) => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: USER_SIGNUP_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/signup', {
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
