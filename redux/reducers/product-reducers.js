import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../constants/product-constants';

/** Product list reducer. */
export function listProduct(state = {}, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: false };
        case PRODUCT_LIST_SUCCESS:
            return { loading: true, ...action.payload };
        case PRODUCT_LIST_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
