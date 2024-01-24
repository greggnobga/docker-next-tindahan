import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../constants/product-constants';

/** Product list. */
export const productList = (pageNumber) => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: PRODUCT_LIST_REQUEST });

        /** Make api request. */
        const response = await fetch(`/api/product?page=${pageNumber || 1}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: { ...data } });
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: PRODUCT_LIST_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
