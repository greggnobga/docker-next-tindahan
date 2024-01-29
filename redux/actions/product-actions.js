import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    PRODUCT_SEARCH_REQUEST,
    PRODUCT_SEARCH_SUCCESS,
    PRODUCT_SEARCH_FAILURE,
    PRODUCT_FLASH_REQUEST,
    PRODUCT_FLASH_SUCCESS,
    PRODUCT_FLASH_FAILURE,
    PRODUCT_JUST_REQUEST,
    PRODUCT_JUST_SUCCESS,
    PRODUCT_JUST_FAILURE,
    PRODUCT_HOT_REQUEST,
    PRODUCT_HOT_SUCCESS,
    PRODUCT_HOT_FAILURE,
    PRODUCT_OUR_REQUEST,
    PRODUCT_OUR_SUCCESS,
    PRODUCT_OUR_FAILURE,
    PRODUCT_RECOMMENDED_REQUEST,
    PRODUCT_RECOMMENDED_SUCCESS,
    PRODUCT_RECOMMENDED_FAILURE,
} from '../constants/product-constants';

/** Product list action.*/
export const listProduct = (pageNumber) => async (dispatch, getState) => {
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
export const searchProduct = (keyword, pageNumber) => async (dispatch, getState) => {
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

/** Product flash action. */
export const flashProduct = () => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: PRODUCT_FLASH_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/product/deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deals: 'Flash Sale' }),
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: PRODUCT_FLASH_SUCCESS, payload: { ...data } });

        /** Save access token to local storage. */
        localStorage.setItem('productFlash', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: PRODUCT_FLASH_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** Product just for you action. */
export const justProduct = () => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: PRODUCT_JUST_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/product/deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deals: 'Just For You' }),
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: PRODUCT_JUST_SUCCESS, payload: { ...data } });

        /** Save access token to local storage. */
        localStorage.setItem('productJust', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: PRODUCT_JUST_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** Product hot deals action. */
export const hotProduct = () => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: PRODUCT_HOT_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/product/deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deals: 'Hot Deals' }),
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: PRODUCT_HOT_SUCCESS, payload: { ...data } });

        /** Save access token to local storage. */
        localStorage.setItem('productHot', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: PRODUCT_HOT_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** Product our picks action. */
export const ourProduct = () => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: PRODUCT_OUR_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/product/deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deals: 'Our Picks' }),
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: PRODUCT_OUR_SUCCESS, payload: { ...data } });

        /** Save access token to local storage. */
        localStorage.setItem('productOur', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: PRODUCT_OUR_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

/** Product recommendation action. */
export const recommendedProduct = () => async (dispatch, getState) => {
    /** Initiate try catch block. */
    try {
        /** Dispatch request. */
        dispatch({ type: PRODUCT_RECOMMENDED_REQUEST });

        /** Make api request. */
        const response = await fetch('/api/product/deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deals: 'Recommendation' }),
        });

        /** Wait for the response. */
        const data = await response.json();

        /** Dispatch success. */
        dispatch({ type: PRODUCT_RECOMMENDED_SUCCESS, payload: { ...data } });

        /** Save access token to local storage. */
        localStorage.setItem('productRecommended', JSON.stringify(data));
    } catch (error) {
        /** Dispatch failure. */
        dispatch({
            type: PRODUCT_RECOMMENDED_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
