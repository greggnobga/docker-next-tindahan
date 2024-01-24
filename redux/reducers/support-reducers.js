import { SUPPORT_REQUEST, SUPPORT_SUCCESS, SUPPORT_FAILURE } from '../constants/support-constants';

/** Login reducer. */
export function supportSend(state = {}, action) {
    switch (action.type) {
        case SUPPORT_REQUEST:
            return { loading: true };
        case SUPPORT_SUCCESS:
            return { loading: false, ...action.payload };
        case SUPPORT_FAILURE:
            return { laoding: false, error: action.payload };
        default:
            return state;
    }
}
