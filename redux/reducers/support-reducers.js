import { SUPPORT_REQUEST, SUPPORT_SUCCESS, SUPPORT_FAILURE } from '../constants/support-constants';

/** Login reducer. */
export function supportSend(state = {}, action) {
    switch (action.type) {
        case SUPPORT_REQUEST:
            return {};
        case SUPPORT_SUCCESS:
            return { ...action.payload };
        case SUPPORT_FAILURE:
            return { error: action.payload };
        default:
            return state;
    }
}
