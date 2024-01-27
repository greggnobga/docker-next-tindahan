'use client';

/** Vendor. */
import { thunk } from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

/** Reducer. */
import { toastMessage } from './reducers/toast-reducers';
import { supportSend } from './reducers/support-reducers';
import { signupUser, loginUser } from './reducers/user-reducers';
import { listProduct, searchProduct, flashProduct, justProduct, hotProduct, ourProduct, recommendProduct } from './reducers/product-reducers';

/** Combine reducer. */
const reducer = combineReducers({
    toastMessage: toastMessage,
    supportSend: supportSend,
    signupUser: signupUser,
    loginUser: loginUser,
    listProduct: listProduct,
    searchProduct: searchProduct,
    flashProduct: flashProduct,
    justProduct: justProduct,
    hotProduct: hotProduct,
    ourProduct: ourProduct,
    recommendProduct: recommendProduct,
});

/** Define variables. */
let loginUserFromStorage;
let flashProductFromStorage;
let justProductFromStorage;
let hotProductFromStorage;
let ourProductFromStorage;
let recommendProductFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
    /** Get state from local storage. */
    loginUserFromStorage = localStorage.getItem('loginUser') ? JSON.parse(localStorage.getItem('loginUser')) : [];
    flashProductFromStorage = localStorage.getItem('flashProduct') ? JSON.parse(localStorage.getItem('flashProduct')) : [];
    justProductFromStorage = localStorage.getItem('justProduct') ? JSON.parse(localStorage.getItem('justProduct')) : [];
    hotProductFromStorage = localStorage.getItem('hotProduct') ? JSON.parse(localStorage.getItem('hotProduct')) : [];
    ourProductFromStorage = localStorage.getItem('ourProduct') ? JSON.parse(localStorage.getItem('ourProduct')) : [];
    recommendProductFromStorage = localStorage.getItem('recommendProduct') ? JSON.parse(localStorage.getItem('recommendProduct')) : [];
}

/** Define initial state. */
const initialState = {
    loginUser: loginUserFromStorage,
    flashProduct: flashProductFromStorage,
    justProduct: justProductFromStorage,
    hotProduct: hotProductFromStorage,
    ourProduct: ourProductFromStorage,
    recommendProduct: recommendProductFromStorage,
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

/** Export. */
export default store;
