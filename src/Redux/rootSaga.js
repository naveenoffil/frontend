import {all} from 'redux-saga/effects'
import productSaga from "./Products/ProductsSaga";
import cartSaga from './Cart/CartSaga';

function* rootSaga() {
    yield all ([
        productSaga(),
        cartSaga(),
    ])

}

export default rootSaga;