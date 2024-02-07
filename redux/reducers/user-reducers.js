import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
} from '../constants/user-constants';

/** Login reducer. */
export function userLoginReducer(state = {}, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, ...action.payload };
        case USER_LOGIN_FAILURE:
            return { loading: false, error: action.payload, logged: false };
        default:
            return state;
    }
}

/** Signup reducer. */
export function userSignupReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true };
        case USER_SIGNUP_SUCCESS:
            return { loading: false, ...action.payload };
        case USER_SIGNUP_FAILURE:
            return { loading: false, error: action.payload, logged: false };
        default:
            return state;
    }
}

/** Update reducer. */
export function userUpdateReducer(state = {}, action) {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };
        case USER_UPDATE_SUCCESS:
            return { loading: false, ...action.payload };
        case USER_UPDATE_FAILURE:
            return { loading: false, error: action.payload, logged: false };
        default:
            return state;
    }
}
