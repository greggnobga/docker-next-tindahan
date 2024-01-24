'use client';

/** Vendor. */
import { thunk } from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

/** Reducer. */
import { toastMessage } from './reducers/toast-reducers';
import { supportSend } from './reducers/support-reducers';
import { signupUser, loginUser } from './reducers/user-reducers';
import { listProduct } from './reducers/product-reducers';

/** Combine reducer. */
const reducer = combineReducers({
    toastMessage: toastMessage,
    supportSend: supportSend,
    signupUser: signupUser,
    loginUser: loginUser,
    listProduct: listProduct,
});

/** Define variables. */
let loginUserFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
    /** Get state from local storage. */
    loginUserFromStorage = localStorage.getItem('loginUser') ? JSON.parse(localStorage.getItem('loginUser')) : [];
}

/** Define initial state. */
const initialState = {
    loginUser: loginUserFromStorage,
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

/** Export. */
export default store;
