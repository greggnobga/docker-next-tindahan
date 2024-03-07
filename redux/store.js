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
import { productListReducer, productSearchReducer } from './reducers/product-reducers';
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
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderReference: orderReferenceReducer,
    orderList: orderListReducer,
});

/** Define variables. */
let cartItemsFromStorage;
let userLoginFromStorage;
let shippingAddressFromStorage;
let paymentMethodFromStorage;

/** Only run when window is set. */
if (typeof window !== 'undefined') {
    /** Get state from local storage. */
    cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    userLoginFromStorage = localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : {};
    shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};
    paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : {};
}

/** Define initial state. */
const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage, paymentMethod: paymentMethodFromStorage },
    userLogin: userLoginFromStorage,
};

/** Middleware. */
const middleware = [thunk];

/** Store. */
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

/** Export. */
export default store;
