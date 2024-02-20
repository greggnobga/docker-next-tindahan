import { ORDER, ORDER_RESET, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAILURE } from '../constants/order-constants';

/** Order list reducer. */
export function orderReducer(state = {}, action) {
    switch (action.type) {
        case ORDER:
            return { ...action.payload };
        case ORDER_RESET:
            return {};
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
