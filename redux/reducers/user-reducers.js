import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from '../constants/user-constants';

/** Login reducer. */
export function loginUser(state = {}, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { logged: false };
        case USER_LOGIN_SUCCESS:
            return { ...action.payload };
        case USER_LOGIN_FAILURE:
            return { error: action.payload, logged: false };
        default:
            return state;
    }
}

/** Signup reducer. */
export function signupUser(state = {}, action) {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { logged: false };
        case USER_SIGNUP_SUCCESS:
            return { ...action.payload };
        case USER_SIGNUP_FAILURE:
            return { error: action.payload, logged: false };
        default:
            return state;
    }
}