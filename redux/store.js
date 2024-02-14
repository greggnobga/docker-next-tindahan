'use client';

/** Vendor. */
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';

/** Reducer. */
import { toastReducer } from './reducers/toast-reducers';
import { supportSendReducer } from './reducers/support-reducers';
import { userSignupReducer, userLoginReducer, userUpdateReducer } from './reducers/user-reducers';
import {
    productListReducer,
    productSearchReducer,
    productFlashReducer,
    productJustReducer,
    productHotReducer,
    productOurReducer,
    productRecommendedReducer,
} from './reducers/product-reducers';
import { cartReducer } from './reducers/cart-reducers';

/** Combine reducer. */
const reducer = combineReducers({
    toast: toastReducer,
    supportSend: supportSendReducer,
    userSignup: userSignupReducer,
    userLogin: userLoginReducer,
    userUpdate: userUpdateReducer,
    productList: productListReducer,
    productSearch: productSearchReducer,
    productFlash: productFlashReducer,
    productJust: productJustReducer,
    productHot: productHotReducer,
    productOur: productOurReducer,
    productRecommended: productRecommendedReducer,
    cart: cartReducer,
});

/** Define variables. */
let userLoginFromStorage;
let productFlashFromStorage;
let productJustFromStorage;
let productHotFromStorage;
let productOurFromStorage;
let productRecommendedFromStorage;
let cartItemsFromStorage;
let shippingAddressFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
    /** Get state from local storage. */
    userLoginFromStorage = localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : {};
    productFlashFromStorage = localStorage.getItem('productFlash') ? JSON.parse(localStorage.getItem('productFlash')) : {};
    productJustFromStorage = localStorage.getItem('productJust') ? JSON.parse(localStorage.getItem('productJust')) : {};
    productHotFromStorage = localStorage.getItem('productHot') ? JSON.parse(localStorage.getItem('productHot')) : {};
    productOurFromStorage = localStorage.getItem('productOur') ? JSON.parse(localStorage.getItem('productOur')) : {};
    productRecommendedFromStorage = localStorage.getItem('productRecommended') ? JSON.parse(localStorage.getItem('productRecommended')) : {};
    cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};
}

/** Define initial state. */
const initialState = {
    userLogin: userLoginFromStorage,
    productFlash: productFlashFromStorage,
    productJust: productJustFromStorage,
    productHot: productHotFromStorage,
    productOur: productOurFromStorage,
    productRecommended: productRecommendedFromStorage,
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

/** Export. */
export default store;
