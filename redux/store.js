'use client';

/** Vendor. */
import { thunk } from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

/** Reducer. */
import { userAuth } from './reducers/user-reducers';
import { toastMessage } from './reducers/toast-reducers';

/** Combine reducer. */
const reducer = combineReducers({
    userAuth: userAuth,
    toastMessage: toastMessage,
});

/** Define variables. */
let userAuthFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
    /** Get state from local storage. */
    userAuthFromStorage = localStorage.getItem('userAuth') ? JSON.parse(localStorage.getItem('userAuth')) : {};
}

/** Define initial state. */
const initialState = {
    userAuth: userAuthFromStorage,
    toastMessage: {},
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

/** Export. */
export default store;
