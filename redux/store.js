'use client';

/** Vendor. */
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';

/** Reducer. */
import { cartReducer } from './reducers/cart-reducers';
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
import { orderCreateReducer, orderDetailsReducer, orderReferenceReducer, orderListReducer } from './reducers/order-reducers';

/** Combine reducer. */
const reducer = combineReducers({
    cart: cartReducer,
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
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderReference: orderReferenceReducer,
    orderList: orderListReducer,
});

/** Define variables. */
let cartItemsFromStorage;
let userLoginFromStorage;
let productFlashFromStorage;
let productJustFromStorage;
let productHotFromStorage;
let productOurFromStorage;
let productRecommendedFromStorage;
let shippingAddressFromStorage;
let paymentMethodFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
    /** Get state from local storage. */
    cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    userLoginFromStorage = localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : {};
    productFlashFromStorage = localStorage.getItem('productFlash') ? JSON.parse(localStorage.getItem('productFlash')) : {};
    productJustFromStorage = localStorage.getItem('productJust') ? JSON.parse(localStorage.getItem('productJust')) : {};
    productHotFromStorage = localStorage.getItem('productHot') ? JSON.parse(localStorage.getItem('productHot')) : {};
    productOurFromStorage = localStorage.getItem('productOur') ? JSON.parse(localStorage.getItem('productOur')) : {};
    productRecommendedFromStorage = localStorage.getItem('productRecommended') ? JSON.parse(localStorage.getItem('productRecommended')) : {};
    shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};
    paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : {};
}

/** Define initial state. */
const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage, paymentMethod: paymentMethodFromStorage },
    userLogin: userLoginFromStorage,
    productFlash: productFlashFromStorage,
    productJust: productJustFromStorage,
    productHot: productHotFromStorage,
    productOur: productOurFromStorage,
    productRecommended: productRecommendedFromStorage,
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

/** Export. */
export default store;
