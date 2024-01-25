import { SUPPORT_REQUEST, SUPPORT_SUCCESS, SUPPORT_FAILURE } from '../constants/support-constants';

import { TOAST_MESSAGE } from '../constants/toast-constants';

export const sendSupport = (params) => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: SUPPORT_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/support', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
            cache: 'no-store',
        });

        /** Wait for the response. */
        const data = await response.json();

        if (data && data.status <= 300) {
            /** Dispatch success. */
            dispatch({
                type: SUPPORT_SUCCESS,
                payload: { ...data },
            });

            /** Dispatch toast. */
            dispatch({
                type: TOAST_MESSAGE,
                payload: { message: data.message, status: data.status },
            });
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
            type: SUPPORT_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
