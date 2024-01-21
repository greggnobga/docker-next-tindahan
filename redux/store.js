'use client';

/** Vendor. */
import { thunk } from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

/** Reducer. */
import { loginUser, signupUser } from './reducers/user-reducers';
import { toastMessage } from './reducers/toast-reducers';

/** Combine reducer. */
const reducer = combineReducers({
    loginUser: loginUser,
    signupUser: signupUser,
    toastMessage: toastMessage,
});

/** Define variables. */
let loginUserFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
    /** Get state from local storage. */
    loginUserFromStorage = localStorage.getItem('loginUser') ? JSON.parse(localStorage.getItem('loginUser')) : {};
}

/** Define initial state. */
const initialState = {
    loginUser: loginUserFromStorage,
    signupUser: {},
    toastMessage: {},
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

/** Export. */
export default store;
