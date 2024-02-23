import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAILURE,
    ORDER_CREATE_RESET,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAILURE,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAILURE,
} from '../constants/order-constants';

/** Order create reducer. */
export function orderCreateReducer(state = {}, action) {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: false };
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, order: action.payload };
        case ORDER_CREATE_FAILURE:
            return { loading: false, success: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return { loading: false, success: false };
        default:
            return state;
    }
}

/** Order details reducer. */
export function orderDetailsReducer(state = {}, action) {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, ...action.payload };
        case ORDER_DETAILS_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

/** Order list reducer. */
export function orderListReducer(state = {}, action) {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true };
        case ORDER_LIST_SUCCESS:
            return { loading: false, ...action.payload };
        case ORDER_LIST_FAILURE:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
