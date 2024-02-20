import { ORDER_RESET, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAILURE } from '../constants/order-constants';

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

/** Reset order action. */
export const resetOrder = () => async (dispatch) => {
    /** Dispatch request. */
    dispatch({ type: ORDER_RESET });
};
