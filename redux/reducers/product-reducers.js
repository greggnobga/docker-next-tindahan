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

/** Product list reducer. */
export function productListReducer(state = {}, action) {
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
export function productSearchReducer(state = {}, action) {
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
export function productFlashReducer(state = {}, action) {
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
export function productJustReducer(state = {}, action) {
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
export function productHotReducer(state = {}, action) {
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
export function productOurReducer(state = {}, action) {
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
export function productRecommendedReducer(state = {}, action) {
    switch (action.type) {
        case PRODUCT_RECOMMENDED_REQUEST:
            return { loading: true };
        case PRODUCT_RECOMMENDED_SUCCESS:
            return { loading: false, ...action.payload };
        case PRODUCT_RECOMMENDED_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
