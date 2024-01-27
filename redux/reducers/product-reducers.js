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
    PRODUCT_RECOMMEND_REQUEST,
    PRODUCT_RECOMMEND_SUCCESS,
    PRODUCT_RECOMMEND_FAILURE,
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

/** Product search reducer. */
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

/** Product flash reducer. */
export function flashProduct(state = {}, action) {
    switch (action.type) {
        case PRODUCT_FLASH_REQUEST:
            return { loading: true };
        case PRODUCT_FLASH_SUCCESS:
            return { loading: false, ...action.payload };
        case PRODUCT_FLASH_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

/** Product just for you reducer. */
export function justProduct(state = {}, action) {
    switch (action.type) {
        case PRODUCT_JUST_REQUEST:
            return { loading: true };
        case PRODUCT_JUST_SUCCESS:
            return { loading: false, ...action.payload };
        case PRODUCT_JUST_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

/** Product hot deals reducer. */
export function hotProduct(state = {}, action) {
    switch (action.type) {
        case PRODUCT_HOT_REQUEST:
            return { loading: true };
        case PRODUCT_HOT_SUCCESS:
            return { loading: false, ...action.payload };
        case PRODUCT_HOT_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

/** Product our picks reducer. */
export function ourProduct(state = {}, action) {
    switch (action.type) {
        case PRODUCT_OUR_REQUEST:
            return { loading: true };
        case PRODUCT_OUR_SUCCESS:
            return { loading: false, ...action.payload };
        case PRODUCT_OUR_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

/** Product recommendation reducer. */
export function recommendProduct(state = {}, action) {
    switch (action.type) {
        case PRODUCT_RECOMMEND_REQUEST:
            return { loading: true };
        case PRODUCT_RECOMMEND_SUCCESS:
            return { loading: false, ...action.payload };
        case PRODUCT_RECOMMEND_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
