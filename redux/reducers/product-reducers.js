import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    PRODUCT_SEARCH_REQUEST,
    PRODUCT_SEARCH_SUCCESS,
    PRODUCT_SEARCH_FAILURE,
} from '../constants/product-constants';

/** Product list reducer. */
export function listProduct(state = {}, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, ...action.payload };
        case PRODUCT_LIST_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

/** Product list reducer. */
export function searchProduct(state = {}, action) {
    switch (action.type) {
        case PRODUCT_SEARCH_REQUEST:
            return { loading: true };
        case PRODUCT_SEARCH_SUCCESS:
            return { loading: false, ...action.payload };
        case PRODUCT_SEARCH_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
