import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    PRODUCT_SEARCH_REQUEST,
    PRODUCT_SEARCH_SUCCESS,
    PRODUCT_SEARCH_FAILURE,
} from '../constants/product-constants';

/** Product list action.*/
export const listProduct = (pageNumber) => async (dispatch) => {
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

/** Product search action. */
export const searchProduct = (keyword, pageNumber) => async (dispatch) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: PRODUCT_SEARCH_REQUEST });
        /** Make api request. */
        const response = await fetch(`/api/search?term=${keyword}&page=${pageNumber || 1}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: PRODUCT_SEARCH_SUCCESS, payload: { ...data } });
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: PRODUCT_SEARCH_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
