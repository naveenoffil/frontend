import { put, takeEvery } from "redux-saga/effects";
import { ADD_TO_CART_REQUEST, GET_CART_PRODUCT_REQUEST } from "./CartActionTypes";
import axios from "axios";
import { addToCartError, addToCartResponse } from "./CartAction";


function* addToCartRequestSaga ({data}) {
    try {
        const res = yield axios.post("https://663df21be1913c476795fa95.mockapi.io/cart",data)
        yield put(addToCartResponse(res.data));
    } catch (err) {
        yield put(addToCartError(err));
    }
}

function* getCartProductsRequestSaga() {
    
}


function* cartSaga(){
    yield takeEvery(ADD_TO_CART_REQUEST, addToCartRequestSaga)
    yield takeEvery(GET_CART_PRODUCT_REQUEST, getCartProductsRequestSaga)
}

export default cartSaga;